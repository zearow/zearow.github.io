export default defineEventHandler(async (event) => {
  const posts = await queryCollection(event, 'blog').order('date', 'DESC').all()

  const siteUrl = 'https://zearow.com'
  const feedTitle = 'zearøw Blog'
  const feedDescription = 'Insights on digital transformation, process optimization, and custom software development.'

  const items = posts.map(post => `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteUrl}${post.path}/</link>
      <guid>${siteUrl}${post.path}/</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      ${post.badge ? `<category>${post.badge}</category>` : ''}
    </item>`).join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${feedTitle}</title>
    <link>${siteUrl}/blog/</link>
    <description>${feedDescription}</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/blog/rss.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`

  setResponseHeader(event, 'content-type', 'application/xml')
  return xml
})
