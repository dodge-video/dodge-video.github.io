// SPDX-License-Identifier: PolyForm-Noncommercial-1.0.0
// Required Notice: Copyright 2026 Ethan Witwer (https://dodge.video)

import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../../consts.ts';

export async function GET(context: { site?: URL }) {
  const posts = await getCollection('news', ({ data }) => !data.draft);
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site?.toString() ?? SITE.url,
    items: posts
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.date,
        description: post.data.description,
        link: `/news/${post.id}/`,
      })),
    customData: '<language>en</language>',
  });
}
