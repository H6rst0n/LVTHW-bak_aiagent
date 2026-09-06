'use strict';

hexo.extend.filter.register('after_post_render', function(data) {
  if (!hexo.config.post_asset_folder || !data.path) return data;

  const root = hexo.config.root || '/';
  const postUrl = (root.endsWith('/') ? root : root + '/') + data.path.replace(/^\//, '');
  const slug = data.slug;

  ['excerpt', 'more', 'content'].forEach(function(key) {
    if (!data[key]) return;

    data[key] = data[key].replace(/<img\s+([^>]*?)src=["']([^"']+)["']([^>]*?)>/gi, function(match, prefix, src, suffix) {
      if (/^(https?:)?\/\//i.test(src) || src.startsWith('data:')) return match;

      src = src.replace(/%5C/gi, '/').replace(/\\/g, '/');
      if (src.startsWith(postUrl)) return match;

      let cleanSrc = src;
      if (cleanSrc.startsWith(root)) {
        cleanSrc = cleanSrc.substring(root.length);
      }
      cleanSrc = cleanSrc.replace(/^\//, '');
      if (slug && cleanSrc.startsWith(slug + '/')) {
        cleanSrc = cleanSrc.substring(slug.length + 1);
      }

      const finalUrl = (postUrl.endsWith('/') ? postUrl : postUrl + '/') + cleanSrc;
      return '<img ' + prefix + 'src="' + finalUrl + '"' + suffix + '>';
    });
  });

  return data;
});
