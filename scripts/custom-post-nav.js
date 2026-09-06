'use strict';

const fs = require('fs');
const path = require('path');

hexo.extend.generator.register('post', function(locals) {
  const indexPath = path.join(this.source_dir, 'index.md');
  const orderedSlugs = [];

  if (fs.existsSync(indexPath)) {
    const indexMd = fs.readFileSync(indexPath, 'utf-8');
    const regex = /{%\s*post_link\s+([^\s]+)/g;
    let m;
    while ((m = regex.exec(indexMd)) !== null) {
      orderedSlugs.push(m[1].toLowerCase());
    }
  }

  function getRank(slug) {
    if (!slug) return 9999;
    const s = slug.toLowerCase();
    const idx = orderedSlugs.indexOf(s);
    return idx !== -1 ? idx : 9999;
  }

  const posts = locals.posts.toArray();
  if (orderedSlugs.length > 0) {
    // Sort in reverse order of rank:
    // posts[i - 1] (prev in array) has higher rank -> Next chapter in tutorial
    // posts[i + 1] (next in array) has lower rank -> Prev chapter in tutorial
    posts.sort((a, b) => getRank(b.slug) - getRank(a.slug));
  } else {
    posts.sort((a, b) => b.date - a.date);
  }

  const { length } = posts;

  return posts.map((post, i) => {
    const { path, layout } = post;

    if (!layout || layout === 'false') {
      return {
        path,
        data: post.content
      };
    }

    if (i) post.prev = posts[i - 1];
    else post.prev = null;

    if (i < length - 1) post.next = posts[i + 1];
    else post.next = null;

    const layouts = ['post', 'page', 'index'];
    if (layout !== 'post') layouts.unshift(layout);

    post.__post = true;

    return {
      path,
      layout: layouts,
      data: post
    };
  });
});
