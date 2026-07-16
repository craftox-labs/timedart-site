import { visit } from "unist-util-visit";

const KINDS = ["Note", "Tip", "Warning"];

// Docs contract: a blockquote whose first line begins with "**Note:**",
// "**Tip:**" or "**Warning:**" renders as a styled admonition — in both the
// Flutter app and here. We tag the blockquote with a data attribute so plain
// CSS can style it; the markdown itself stays untouched (still a blockquote).
export function remarkCallouts() {
  return (tree) => {
    visit(tree, "blockquote", (node) => {
      const firstParagraph = node.children[0];
      if (!firstParagraph || firstParagraph.type !== "paragraph") return;

      const firstChild = firstParagraph.children[0];
      if (!firstChild || firstChild.type !== "strong") return;

      const label = firstChild.children[0];
      if (!label || label.type !== "text") return;

      const kind = KINDS.find((k) => label.value.startsWith(`${k}:`));
      if (!kind) return;

      node.data ??= {};
      node.data.hProperties ??= {};
      node.data.hProperties["data-callout"] = kind.toLowerCase();
    });
  };
}
