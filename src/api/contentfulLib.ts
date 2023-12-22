import { Entry } from 'contentful';
import {
  TypeYeolsBlogSkeleton,
  TypeYeolsWorksSkeleton,
} from '@/contentful/types';
import { parseContentfulContentImage } from '@/api/contentFulImage';
import { cache } from 'react';
import { client } from '@/api/contentFulApi';

type TBlogPostEntry = Entry<TypeYeolsBlogSkeleton, undefined, string>;
type TBlogWorkEntry = Entry<TypeYeolsWorksSkeleton, undefined, string>;

export type BlogPost = ReturnType<typeof parseContentfulBlogPost>;
export type BlogWork = ReturnType<typeof parseContentfulBlogWork>;
function parseContentfulBlogPost(blogPostEntry: TBlogPostEntry) {
  return {
    title: blogPostEntry.fields.title,
    slug: blogPostEntry.fields.slug,
    category: blogPostEntry.fields.category,
    thumbnail: parseContentfulContentImage(blogPostEntry.fields.thumbnail),
    createdAt: new Date(String(blogPostEntry.fields.createdAt)),
    description: blogPostEntry.fields.description,
    relatedPost: blogPostEntry.fields.relatedPost,
    content: blogPostEntry.fields.content,
    references: blogPostEntry.fields.references,
    tags: blogPostEntry.fields.tags,
    thumbnailLocal: blogPostEntry.fields.thumbnailLocal,
  };
}

function parseContentfulBlogWork(blogWorkEntry: TBlogWorkEntry) {
  return {
    slug: blogWorkEntry.fields.slug,
    title: blogWorkEntry.fields.title,
    deploymentUrl: blogWorkEntry.fields.deploymentUrl,
    stack: blogWorkEntry.fields.stack,
    startDate: new Date(String(blogWorkEntry.fields.startDate)),
    endDate: new Date(String(blogWorkEntry.fields.endDate)),
    focus: blogWorkEntry.fields.focus,
    github: blogWorkEntry.fields.github,
    projectImg:
      blogWorkEntry.fields.projectImg?.map((img) =>
        parseContentfulContentImage(img),
      ) || [],
    description: blogWorkEntry.fields.description,
  };
}

// blog search query 적용
export const fetchBlogPosts = cache(async function (searchParams?: {
  category?: string;
  search?: string;
}) {
  // filter 처리 할지 조건에 맞는 api 호출 할지 생각
  return await client.getEntries<TypeYeolsBlogSkeleton>({
    content_type: 'yeolsBlog',
    order: ['-sys.createdAt'],
  });
});

export const fetchHomeBlogPosts = cache(async function () {
  const response = await client.getEntries<TypeYeolsBlogSkeleton>({
    content_type: 'yeolsBlog',
    limit: 2,
    order: ['-sys.createdAt'],
  });

  return response.items.map(parseContentfulBlogPost);
});
