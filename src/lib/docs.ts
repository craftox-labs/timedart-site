import { getCollection, type CollectionEntry } from "astro:content";

export type DocEntry = CollectionEntry<"docs">;

export type DocPage = {
  slug: string;
  title: string;
  group: string;
  order: number;
  summary?: string;
};

export type DocSection = {
  group: string;
  order: number; // minimum `order` among its pages — drives sidebar position
  pages: DocPage[];
};

function toPage(entry: DocEntry): DocPage {
  return {
    slug: entry.id,
    title: entry.data.title,
    group: entry.data.group,
    order: entry.data.order,
    summary: entry.data.summary,
  };
}

// Pages within a group: ordered by `order`, ties broken by `title`.
function byOrderThenTitle(a: DocPage, b: DocPage): number {
  return a.order - b.order || a.title.localeCompare(b.title);
}

/** All doc pages, flattened in the reading order used for prev/next. */
export async function getDocsReadingOrder(): Promise<DocPage[]> {
  return getDocsSections().then((sections) => sections.flatMap((s) => s.pages));
}

/** Pages grouped into sidebar sections, sections ordered by their minimum page `order`. */
export async function getDocsSections(): Promise<DocSection[]> {
  const pages = (await getCollection("docs")).map(toPage);

  const byGroup = new Map<string, DocPage[]>();
  for (const page of pages) {
    const group = byGroup.get(page.group) ?? [];
    group.push(page);
    byGroup.set(page.group, group);
  }

  const sections: DocSection[] = [...byGroup.entries()].map(([group, groupPages]) => {
    const sorted = [...groupPages].sort(byOrderThenTitle);
    return { group, order: Math.min(...sorted.map((p) => p.order)), pages: sorted };
  });

  return sections.sort((a, b) => a.order - b.order);
}

export type DocNeighbours = { prev: DocPage | null; next: DocPage | null };

export async function getDocNeighbours(slug: string): Promise<DocNeighbours> {
  const order = await getDocsReadingOrder();
  const index = order.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? order[index - 1] : null,
    next: index >= 0 && index < order.length - 1 ? order[index + 1] : null,
  };
}
