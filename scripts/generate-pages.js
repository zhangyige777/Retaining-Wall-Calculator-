const fs = require('fs');
const path = require('path');
const { statesData, materials, allStates } = require('../data/states-data');

// 页面模板生成器
class PageGenerator {
  constructor() {
    this.pagesDirectory = '../pages';
    this.totalPagesGenerated = 0;
  }

  // 生成州级页面
  generateStatePages() {
    console.log('开始生成所有州级页面...');

    Object.entries(statesData).forEach(([stateSlug, stateData]) => {
      // 生成主成本页面
      this.generateStateCostPage(stateSlug, stateData);

      // 生成计算器页面
      this.generateStateCalculatorPage(stateSlug, stateData);

      // 生成材料类型页面
      Object.keys(materials).forEach(materialSlug => {
        this.generateMaterialStatePage(stateSlug, materialSlug, stateData);
      });

      // 生成维修页面（Tier 2州）
      if (stateData.tier === 2) {
        this.generateRepairCostPage(stateSlug, stateData);
      }
    });

    console.log(`✅ 生成了 ${this.totalPagesGenerated} 个州级页面`);
  }

  // 生成城市级页面
  generateCityPages() {
    console.log('开始生成城市级页面...');

    Object.entries(statesData).forEach(([stateSlug, stateData]) => {
      stateData.majorCities.forEach(city => {
        const citySlug = city.name.toLowerCase().replace(/\s+/g, '-');

        // 城市成本页面
        this.generateCityCostPage(stateSlug, citySlug, city, stateData);

        // 城市计算器页面
        this.generateCityCalculatorPage(stateSlug, citySlug, city, stateData);

        this.totalPagesGenerated += 2;
      });
    });

    console.log(`✅ 生成了所有城市页面，总计 ${this.totalPagesGenerated} 个页面`);
  }

  // 生成州成本页面
  generateStateCostPage(stateSlug, stateData) {
    const pageContent = `import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import RetainingWallCalculator from '../../components/RetainingWallCalculator'

export default function ${this.toPascalCase(stateSlug)}RetainingWallCost() {
  const seoData = {
    title: "${stateData.name} Retaining Wall Cost 2024 | Complete Pricing Guide",
    description: "Calculate retaining wall costs in ${stateData.name}. Get instant estimates for materials, labor, and installation. Local pricing for all cities.",
    keywords: ["${stateData.name} retaining wall cost", "retaining wall ${stateData.name}", "cost of retaining wall in ${stateData.name}", "${stateData.abbreviation} retaining wall prices"]
  }

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords.join(', ')} />
        <link rel="canonical" href="https://wallestimate.com/${stateSlug}/retaining-wall-cost" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="breadcrumb py-4">
            <a href="/">Home</a>
            <span className="breadcrumb-separator">›</span>
            <a href="/states">States</a>
            <span className="breadcrumb-separator">›</span>
            <span>${stateData.name}</span>
          </nav>

          {/* Hero Section */}
          <section className="py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">
                ${stateData.name} Retaining Wall Cost Guide 2024
              </h1>
              <p className="text-xl text-gray-600">
                Complete pricing guide for retaining walls in ${stateData.name}.
                Calculate costs, compare materials, and find local contractors.
              </p>
            </div>

            {/* Calculator */}
            <div className="max-w-4xl mx-auto mb-12">
              <RetainingWallCalculator
                location="${stateSlug}"
                title="${stateData.name} Retaining Wall Cost Calculator"
              />
            </div>
          </section>

          {/* Cost Tables */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Average Retaining Wall Costs in ${stateData.name}
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">By Material Type</h3>
                <table>
                  <tr>
                    <th>Material</th>
                    <th>Cost per sq ft</th>
                  </tr>
                  ${this.generateMaterialRows(stateData.avgCostMultiplier)}
                </table>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">By Project Size</h3>
                <table>
                  <tr>
                    <th>Wall Size</th>
                    <th>Average Cost</th>
                  </tr>
                  <tr>
                    <td>Small (25ft × 3ft)</td>
                    <td>$${Math.round(25 * 3 * 45 * stateData.avgCostMultiplier)}-$${Math.round(25 * 3 * 60 * stateData.avgCostMultiplier)}</td>
                  </tr>
                  <tr>
                    <td>Medium (50ft × 4ft)</td>
                    <td>$${Math.round(50 * 4 * 45 * stateData.avgCostMultiplier)}-$${Math.round(50 * 4 * 60 * stateData.avgCostMultiplier)}</td>
                  </tr>
                  <tr>
                    <td>Large (100ft × 6ft)</td>
                    <td>$${Math.round(100 * 6 * 45 * stateData.avgCostMultiplier)}-$${Math.round(100 * 6 * 60 * stateData.avgCostMultiplier)}</td>
                  </tr>
                </table>
              </div>
            </div>
          </section>

          {/* Major Cities */}
          <section className="py-12">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Costs in Major Cities
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              ${stateData.majorCities.map(city => `
              <div className="price-card">
                <h3 className="text-lg font-semibold">${city.name}</h3>
                <p className="text-2xl font-bold text-primary-600 mb-2">
                  $${Math.round(45 * stateData.avgCostMultiplier)}-$${Math.round(60 * stateData.avgCostMultiplier)}
                </p>
                <p className="text-gray-600 mb-4">per square foot</p>
                <Link href="/${stateSlug}/${city.name.toLowerCase().replace(/\\s+/g, '-')}/retaining-wall-cost"
                      className="text-blue-600 hover:underline">
                  View ${city.name} Costs →
                </Link>
              </div>`).join('')}
            </div>
          </section>

          {/* Special Features */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-6">
              ${stateData.name} Specific Considerations
            </h2>
            <ul className="space-y-3">
              ${stateData.specialFeatures.map(feature => `
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>${feature}</span>
              </li>`).join('')}
            </ul>
          </section>

          {/* FAQ */}
          <section className="py-12">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  Do I need a permit for a retaining wall in ${stateData.name}?
                </h3>
                <p className="text-gray-700">
                  Yes, ${stateData.name} requires permits for retaining walls over 3 feet tall.
                  Permit costs range from $100-$500 depending on your local jurisdiction.
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  What's the average cost of a retaining wall in ${stateData.name}?
                </h3>
                <p className="text-gray-700">
                  The average cost in ${stateData.name} ranges from $${Math.round(45 * stateData.avgCostMultiplier)}
                  to $${Math.round(60 * stateData.avgCostMultiplier)} per square foot, including materials and labor.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}`;

    this.writeFile(`${this.pagesDirectory}/${stateSlug}/retaining-wall-cost.js`, pageContent);
    this.totalPagesGenerated++;
  }

  // 生成材料类型价格内容行
  generateMaterialRows(costMultiplier) {
    return Object.entries(materials).map(([slug, material]) => `
                  <tr>
                    <td>${material.name}</td>
                    <td>$${Math.round(material.basePrice * costMultiplier)}-$${Math.round(material.basePrice * 1.3 * costMultiplier)}</td>
                  </tr>`).join('');
  }

  // 工具方法：转换为Pascal Case
  toPascalCase(str) {
    return str.replace(/-./g, x => x[1].toUpperCase());
  }

  // 写入文件
  writeFile(filePath, content) {
    const fullPath = path.join(__dirname, filePath);
    const dir = path.dirname(fullPath);

    // 创建目录（如果不存在）
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(fullPath, content);
    console.log(`✓ 生成页面: ${filePath}`);
  }

  // 生成所有页面
  generateAllPages() {
    console.log('🚀 开始生成所有页面...\n');

    this.totalPagesGenerated = 0;

    // 生成州级页面
    this.generateStatePages();

    // 生成城市级页面
    this.generateCityPages();

    // 生成材料对比页面
    this.generateMaterialPages();

    // 生成计算器变体页面
    this.generateCalculatorPages();

    console.log(`\n✅ 完成！总共生成了 ${this.totalPagesGenerated} 个页面`);
    console.log('\n📁 页面结构:');
    console.log('├── / (首页)');
    console.log('├── /calculator (主计算器)');
    console.log('├── /[state]/retaining-wall-cost (州级成本页)');
    console.log('├── /[state]/calculator (州级计算器)');
    console.log('├── /[state]/[material]-retaining-wall-cost (材料州级页)');
    console.log('├── /[state]/[city]/retaining-wall-cost (城市成本页)');
    console.log('└── ... (其他页面)');
  }
}

// 运行生成器
if (require.main === module) {
  const generator = new PageGenerator();
  generator.generateAllPages();
}

module.exports = PageGenerator;