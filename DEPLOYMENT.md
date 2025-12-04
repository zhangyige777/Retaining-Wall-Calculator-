# 部署指南 - WallEstimate Pro

## 部署前检查清单

### 1. 必须配置的项目
- [ ] 替换 AdSense Publisher ID（在 `_app.js` 中）
- [ ] 配置 Google Analytics ID（在 `_app.js` 中）
- [ ] 更新域名（在各页面中）
- [ ] 设置 favicon.ico
- [ ] 配置 robots.txt

### 2. 需要生成的页面总数

#### 核心页面（已生成）
- [x] 首页 (`index.js`)
- [x] 主计算器 (`calculator.js`)
- [x] 主成本指南 (`retaining-wall-cost.js`)

#### 州级页面（需生成50个）
- [x] California (`california/retaining-wall-cost.js`)
- [x] New York (`new-york/retaining-wall-cost.js`)
- [ ] 剩余48个州

#### 材料页面（已生成部分）
- [x] 混凝土 (`cost/concrete-retaining-wall-cost.js`)
- [ ] 其他7种材料类型

#### 城市页面（需生成200+个）
每个主要城市需要：
- 成本页面
- 计算器页面

#### 特殊页面
- [ ] 维修成本页面（Tier 2州）
- [ ] 每平方英尺成本页面
- [ ] 安装成本页面

## AdSense广告位布局

### 1. 自动广告
已在 `_app.js` 中配置全局自动广告

### 2. 手动广告位（已预留）
1. **首页顶部横幅** - 728x90
2. **计算器结果下方** - 336x280/300x250
3. **内容段落间** - 自适应
4. **表格下方** - 728x90
5. **FAQ之间** - 336x280
6. **侧边栏** - 160x600/300x250

## SEO优化实施

### 1. Schema标记
- ✅ SoftwareApplication（计算器）
- ✅ FAQPage（FAQ页面）
- ✅ Article（指南页面）
- ✅ LocalBusiness（州级页面）

### 2. 内链策略
- 50个州之间的相互链接
- 州-城市层级链接
- 材料类型交叉链接
- 相关工具推荐

### 3. 关键词密度
- 主关键词密度：2-3%
- LSI关键词自然分布
- 长尾关键词在FAQ中

## 部署步骤

### 1. 构建网站
```bash
npm install
npm run build
```

### 2. 检查输出
确认 `out/` 文件夹包含所有生成的页面

### 3. 上传到托管平台

#### Vercel（推荐）
```bash
npm install -g vercel
vercel --prod
```

#### Netlify
1. 拖拽 `out/` 文件夹到 Netlify
2. 设置重定向规则

#### AWS S3 + CloudFront
1. 上传 `out/` 到 S3 bucket
2. 配置 CloudFront distribution
3. 设置缓存策略

## 部署后任务

### 1. Google Search Console
- 添加所有版本（www, non-www, http, https）
- 提交 sitemap.xml
- 监控索引状态

### 2. 创建 sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <lastmod>2024-12-04</lastmod>
    <priority>1.0</priority>
  </url>
  <!-- 添加所有页面 -->
</urlset>
```

### 3. 设置 robots.txt
```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

### 4. 提交到索引
- Google URL Inspection Tool
- Bing Webmaster Tools
- 其他搜索引擎

## 性能优化

### 1. 图片优化
- 使用 WebP 格式
- 实现懒加载
- 设置响应式图片

### 2. 代码优化
- Next.js 自动代码分割
- 关键CSS内联
- 延迟加载非关键JS

### 3. CDN配置
- 静态资源CDN
- 地理位置分布
- 缓存策略

## 监控指标

### 1. 核心网络指标（Core Web Vitals）
- LCP < 2.5s
- FID < 100ms
- CLS < 0.1

### 2. SEO指标
- 索引页面数
- 关键词排名
- 有机流量增长
- 点击率（CTR）

### 3. 收益指标
- AdSense RPM
- 页面收益
- 用户参与度
- 转化率

## 常见问题解决

### 1. 页面未索引
- 检查 robots.txt
- 提交到索引
- 确认 noindex 标签

### 2. AdSense未显示
- 检查 Publisher ID
- 等待24-48小时
- 确认合规政策

### 3. 加载速度慢
- 启用 Gzip 压缩
- 优化图片
- 使用 CDN

## 长期维护

### 每月任务
- [ ] 更新价格数据
- [ ] 检查错误报告
- [ ] 分析排名变化
- [ ] 优化低效页面

### 每季度任务
- [ ] 审核内容质量
- [ ] 更新建筑规范
- [ ] 扩展关键词覆盖
- [ ] A/B测试广告位置

### 每年任务
- [ ] 全面SEO审计
- [ ] 技术栈更新
- [ ] 功能扩展规划
- [ ] 收益分析报告

---

## 快速部署命令

```bash
# 克隆或下载项目
# 配置必要参数（AdSense ID, GA ID等）

# 安装依赖
npm install

# 构建生产版本
npm run build

# 本地预览（可选）
npm run start

# 部署（选择一个）
# Vercel:
vercel --prod

# Netlify:
# 上传 out/ 文件夹到 Netlify
```

部署成功后，您的网站将在几分钟内上线。记得提交到搜索引擎并配置分析工具！