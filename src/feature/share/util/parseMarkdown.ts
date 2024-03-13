import { unified } from 'unified';
import remarkParse from 'remark-parse';
import React from 'react';
import remarkReact from 'remark-react';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

export function parseMarkdown(markdown: string) {
  return unified()
    .use(remarkParse)
    .use(remarkReact as any, { createElement: React.createElement })
    .processSync(markdown).result as React.ReactNode;
}
export function parseMarkdownPost(markdown: string) {
  return remark().use(remarkHtml).processSync(markdown).toString();
}
