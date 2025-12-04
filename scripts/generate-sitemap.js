const fs = require('fs')
const path = require('path')

// 静态页面列表
const staticPages = [
  '',
  '/calculator',
  '/retaining-wall-cost',
  '/concrete-retaining-wall-calculator',
  '/cost-to-build-retaining-wall',
  '/how-much-does-a-retaining-wall-cost',
  '/retaining-wall-cost-per-square-foot',
  '/retaining-wall-installation-cost',
]

// 州页面
const states = [
  'california',
  'new-york',
  'texas',
  'washington',
  'oregon',
  'pennsylvania',
]

// 城市页面
const cities = [
  { state: 'california', city: 'los-angeles' },
  { state: 'new-york', city: 'new-york-city' },
  { state: 'texas', city: 'houston' },
]

// 成本类型页面
const costTypes = [
  'concrete',
  'stone',
  'timber',
]

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.pages.dev'

const generateSitemap = () => {
  const sitemap = []

  // 添加静态页面
  staticPages.forEach(page => {
    sitemap.push({
      url: `${baseUrl}${page}`,
      lastmod: new Date().toISOString(),
      priority: page === '' ? '1.0' : '0.8'
    })
  })

  // 添加州页面
  states.forEach(state => {
    sitemap.push({
      url: `${baseUrl}/${state}/retaining-wall-cost`,
      lastmod: new Date().toISOString(),
      priority: '0.8'
    })

    // 添加纽约州的维修页面
    if (state === 'new-york') {
      sitemap.push({
        url: `${baseUrl}/${state}/retaining-wall-repair-cost`,
        lastmod: new Date().toISOString(),
        priority: '0.8'
      })
    }
  })

  // 添加城市页面
  cities.forEach(({ state, city }) => {
    sitemap.push({
      url: `${baseUrl}/${state}/${city}/retaining-wall-cost`,
      lastmod: new Date().toISOString(),
      priority: '0.7'
    })
  })

  // 添加成本类型页面
  costTypes.forEach(type => {
    sitemap.push({
      url: `${baseUrl}/cost/${type}-retaining-wall-cost`,
      lastmod: new Date().toISOString(),
      priority: '0.7'
    })
  })

  // 生成XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemap.map(page => `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <priority>${page.priority}</priority>
  </url>`).join('')}
</urlset>`

  // 写入文件
  fs.writeFileSync('public/sitemap.xml', xml)
  console.log('Sitemap generated successfully!')
}

generateSitemap()