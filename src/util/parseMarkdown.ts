import { unified } from 'unified';
import remarkParse from 'remark-parse';
import React from 'react';
import remarkReact from 'remark-react';

export default function parseMarkdown(markdown: string) {
  return unified()
    .use(remarkParse)
    .use(remarkReact as any, { createElement: React.createElement })
    .processSync(markdown).result as React.ReactNode;
}
