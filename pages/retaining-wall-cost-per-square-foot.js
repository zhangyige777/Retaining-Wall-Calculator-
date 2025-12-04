import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import RetainingWallCalculator from '../components/RetainingWallCalculator'
import { materials } from '../data/states-data'

export default function RetainingWallCostPerSquareFoot() {
  const seoData = {
    title: "Retaining Wall Cost Per Square Foot 2024 | Complete Price Guide",
    description: "Detailed retaining wall costs per square foot. Compare all materials by location. Free calculator to estimate your project cost accurately.",
    keywords: ["retaining wall cost per square foot", "retaining wall cost per sq ft", "cost of retaining wall per square foot", "average retaining wall cost per square foot", "retaining wall square foot price"]
  }

  // 创建一个更详细的价格表格数据
  const materialCosts = [
    { name: "Pressure Treated Timber", min: 20, max: 35, avg: 27, icon: "🪵" },
    { name: "Railroad Ties", min: 18, max: 30, avg: 24, icon: "🚂" },
    { name: "Concrete Blocks", min: 35, max: 50, avg: 42, icon: "🧱" },
    { name: "Poured Concrete", min: 45, max: 60, avg: 52, icon: "⬛" },
    { name: "Segmental Blocks", min: 50, max: 65, avg: 57, icon: "🔲" },
    { name: "Natural Stone", min: 55, max: 75, avg: 65, icon: "🪨" },
    { name: "Fieldstone", min: 60, max: 85, avg: 72, icon: "🏔️" },
    { name: "Boulders", min: 70, max: 110, avg: 85, icon: "🗿" },
    { name: "Corten Steel", min: 80, max: 120, avg: 95, icon: "🛡️" },
    { name: "Precast Concrete", min: 70, max: 95, avg: 82, icon: "📦" }
  ]

  // 各州价格倍数
  const stateMultipliers = [
    { state: "California", multiplier: 1.45, color: "text-red-600" },
    { state: "New York", multiplier: 1.32, color: "text-red-600" },
    { state: "Massachusetts", multiplier: 1.28, color: "text-red-600" },
    { state: "Washington", multiplier: 1.15, color: "text-orange-600" },
    { state: "Oregon", multiplier: 1.12, color: "text-orange-600" },
    { state: "Illinois", multiplier: 1.18, color: "text-orange-600" },
    { state: "Colorado", multiplier: 1.05, color: "text-yellow-600" },
    { state: "Florida", multiplier: 1.02, color: "text-yellow-600" },
    { state: "Texas", multiplier: 0.92, color: "text-green-600" },
    { state: "Ohio", multiplier: 0.95, color: "text-green-600" },
    { state: "Alabama", multiplier: 0.90, color: "text-green-600" }
  ]

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords.join(', ')} />
        <link rel="canonical" href="https://wallestimate.com/retaining-wall-cost-per-square-foot" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="breadcrumb py-4">
            <a href="/">Home</a>
            <span className="breadcrumb-separator">›</span>
            <span>Cost Per Square Foot</span>
          </nav>

          {/* Hero Section */}
          <section className="py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">
                Retaining Wall Cost Per Square Foot 2024
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Complete guide to retaining wall costs per square foot. Compare prices
                by material type and location. Calculate your project cost instantly.
              </p>
              <div className="flex justify-center gap-4 text-sm">
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                  📊 Updated Daily
                </span>
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
                  💰 National Avg: $45/sq ft
                </span>
                <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full">
                  📍 50 States Covered
                </span>
              </div>
            </div>

            {/* AdSense顶部横幅 */}
            <div className="ads-container mb-8 max-w-728 mx-auto">
              <span>Advertisement</span>
            </div>

            {/* Calculator */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-center mb-6">
                  Cost Per Square Foot Calculator
                </h2>
                <RetainingWallCalculator
                  showAdvanced={true}
                  title="Calculate Cost Per Square Foot"
                />
              </div>
            </div>
          </section>

          {/* Main Cost Table */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Retaining Wall Cost Per Square Foot by Material
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full max-w-6xl mx-auto">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-4 text-left">Material</th>
                    <th className="p-4 text-center">Low End</th>
                    <th className="p-4 text-center">Average</th>
                    <th className="p-4 text-center">High End</th>
                    <th className="p-4 text-center">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {materialCosts.map((material, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition">
                      <td className="p-4">
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">{material.icon}</span>
                          <span className="font-semibold">{material.name}</span>
                        </div>
                      </td>
                      <td className="p-4 text-center font-bold text-green-600">
                        ${material.min}
                      </td>
                      <td className="p-4 text-center">
                        <div className="text-xl font-bold text-primary-600">
                          ${material.avg}
                        </div>
                        <div className="text-sm text-gray-500">per sq ft</div>
                      </td>
                      <td className="p-4 text-center font-bold text-red-600">
                        ${material.max}
                      </td>
                      <td className="p-4 text-center text-sm">
                        {idx < 2 ? "Budget projects" :
                         idx < 4 ? "Most applications" :
                         idx < 7 ? "Premium look" : "High-end"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* AdSense表格下方广告 - 高转化位置 */}
            <div className="ads-container mt-8 max-w-728 mx-auto">
              <span>Advertisement</span>
            </div>
          </section>

          {/* State Cost Variations */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              State-by-State Cost Variations
            </h2>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 max-w-4xl mx-auto">
              <p className="text-gray-700">
                <strong>Did you know?</strong> Retaining wall costs vary significantly by state.
                California costs 45% more than the national average, while Texas costs 8% less.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-red-600">Most Expensive States</h3>
                <div className="space-y-3">
                  {stateMultipliers.filter(s => s.multiplier > 1.1).map((state, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                      <span className="font-medium">{state.state}</span>
                      <span className={`font-bold ${state.color}`}>
                        {state.multiplier > 1.3 ? `+${Math.round((state.multiplier - 1) * 100)}%` :
                         state.multiplier > 1.1 ? `+${Math.round((state.multiplier - 1) * 100)}%` :
                         `+${Math.round((state.multiplier - 1) * 100)}%`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-600">Most Affordable States</h3>
                <div className="space-y-3">
                  {stateMultipliers.filter(s => s.multiplier < 1).map((state, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                      <span className="font-medium">{state.state}</span>
                      <span className={`font-bold ${state.color}`}>
                        -${Math.round((1 - state.multiplier) * 100)}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link href="/states" className="cta-button">
                View All State Pricing
              </Link>
            </div>
          </section>

          {/* Project Size Calculator */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Cost by Project Size
            </h2>

            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="price-card text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">XS</span>
                </div>
                <h3 className="font-semibold mb-2">Small Garden Wall</h3>
                <div className="text-sm text-gray-600 mb-2">25 ft × 3 ft</div>
                <div className="text-lg font-bold text-primary-600 mb-1">75 sq ft</div>
                <div className="text-xl font-bold text-gray-800 mb-1">$1,125-$5,625</div>
                <div className="text-sm text-gray-500">Total Cost</div>
              </div>

              <div className="price-card text-center">
                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">S</span>
                </div>
                <h3 className="font-semibold mb-2">Residential Wall</h3>
                <div className="text-sm text-gray-600 mb-2">50 ft × 4 ft</div>
                <div className="text-lg font-bold text-primary-600 mb-1">200 sq ft</div>
                <div className="text-xl font-bold text-gray-800 mb-1">$3,000-$15,000</div>
                <div className="text-sm text-gray-500">Total Cost</div>
              </div>

              <div className="price-card text-center">
                <div className="bg-yellow-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-yellow-600">M</span>
                </div>
                <h3 className="font-semibold mb-2">Large Property</h3>
                <div className="text-sm text-gray-600 mb-2">100 ft × 6 ft</div>
                <div className="text-lg font-bold text-primary-600 mb-1">600 sq ft</div>
                <div className="text-xl font-bold text-gray-800 mb-1">$9,000-$45,000</div>
                <div className="text-sm text-gray-500">Total Cost</div>
              </div>

              <div className="price-card text-center">
                <div className="bg-red-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">L</span>
                </div>
                <h3 className="font-semibold mb-2">Commercial Project</h3>
                <div className="text-sm text-gray-600 mb-2">200 ft × 8 ft</div>
                <div className="text-lg font-bold text-primary-600 mb-1">1,600 sq ft</div>
                <div className="text-xl font-bold text-gray-800 mb-1">$24,000-$120,000</div>
                <div className="text-sm text-gray-500">Total Cost</div>
              </div>
            </div>
          </section>

          {/* Height Cost Multiplier */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Cost Multiplier by Wall Height
            </h2>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-green-50 to-yellow-50 to-red-50 p-6 rounded-lg">
                <div className="grid grid-cols-5 gap-4 text-center">
                  <div>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Up to 3ft</h4>
                      <div className="text-2xl font-bold text-green-600">1.0x</div>
                      <div className="text-sm text-gray-600">Base Rate</div>
                    </div>
                  </div>
                  <div>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold mb-2">3-5ft</h4>
                      <div className="text-2xl font-bold text-yellow-600">1.3x</div>
                      <div className="text-sm text-gray-600">+30%</div>
                    </div>
                  </div>
                  <div>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold mb-2">5-8ft</h4>
                      <div className="text-2xl font-bold text-orange-600">1.7x</div>
                      <div className="text-sm text-gray-600">+70%</div>
                    </div>
                  </div>
                  <div>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold mb-2">8-12ft</h4>
                      <div className="text-2xl font-bold text-red-600">2.2x</div>
                      <div className="text-sm text-gray-600">+120%</div>
                    </div>
                  </div>
                  <div>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold mb-2">12ft+</h4>
                      <div className="text-2xl font-bold text-purple-600">3.0x</div>
                      <div className="text-sm text-gray-600">+200%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Reference Chart */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Quick Reference Price Chart
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full max-w-5xl mx-auto text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3">Material</th>
                    <th className="p-3">100 sq ft</th>
                    <th className="p-3">200 sq ft</th>
                    <th className="p-3">500 sq ft</th>
                    <th className="p-3">1000 sq ft</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 font-semibold">Timber</td>
                    <td className="p-3">$2,000-$3,500</td>
                    <td className="p-3">$4,000-$7,000</td>
                    <td className="p-3">$10,000-$17,500</td>
                    <td className="p-3">$20,000-$35,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 font-semibold">Concrete Blocks</td>
                    <td className="p-3">$3,500-$5,000</td>
                    <td className="p-3">$7,000-$10,000</td>
                    <td className="p-3">$17,500-$25,000</td>
                    <td className="p-3">$35,000-$50,000</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Poured Concrete</td>
                    <td className="p-3">$4,500-$6,000</td>
                    <td className="p-3">$9,000-$12,000</td>
                    <td className="p-3">$22,500-$30,000</td>
                    <td className="p-3">$45,000-$60,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 font-semibold">Natural Stone</td>
                    <td className="p-3">$5,500-$7,500</td>
                    <td className="p-3">$11,000-$15,000</td>
                    <td className="p-3">$27,500-$37,500</td>
                    <td className="p-3">$55,000-$75,000</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Boulders</td>
                    <td className="p-3">$7,000-$11,000</td>
                    <td className="p-3">$14,000-$22,000</td>
                    <td className="p-3">$35,000-$55,000</td>
                    <td className="p-3">$70,000-$110,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-center text-sm text-gray-600 mt-6">
              *Prices are for labor and materials only. Additional costs for permits, excavation, and drainage may apply.
            </p>
          </section>

          {/* FAQ */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Cost Per Square Foot FAQ
            </h2>

            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  What is the average cost per square foot for a retaining wall?
                </h3>
                <p className="text-gray-700">
                  The average cost is $45 per square foot nationally. However, this varies from $20 per square foot for basic timber walls to $120 per square foot for premium boulder installations.
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  How do you calculate retaining wall cost per square foot?
                </h3>
                <p className="text-gray-700">
                  Multiply the wall length by its height to get square footage. Then multiply by the material cost per square foot ($20-$120). Add 45% for labor costs. Example: 50ft × 4ft = 200 sq ft × $45 = $9,000 + $4,050 labor = $13,050 total.
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  Why does retaining wall cost vary so much per square foot?
                </h3>
                <p className="text-gray-700">
                  Costs vary due to: material choice (timber vs stone), wall height (taller needs reinforcement), site accessibility, soil conditions, local labor rates, and additional requirements like drainage, permits, and engineering.
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  Is a higher cost per square foot always better?
                </h3>
                <p className="text-gray-700">
                  Not necessarily. Higher cost usually means premium materials (natural stone) or complex engineering requirements. For basic garden walls, timber or concrete blocks at $25-$50 per square foot provide excellent value.
                </p>
              </div>

              {/* AdSense FAQ下方广告 */}
              <div className="ads-container">
                <span>Advertisement</span>
              </div>
            </div>
          </section>

          {/* Related Tools */}
          <section className="py-12 bg-white rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Related Cost Tools
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Link href="/retaining-wall-cost-per-linear-foot" className="price-card block text-center">
                <h3 className="font-semibold mb-2">Cost Per Linear Foot</h3>
                <p className="text-sm text-gray-600">Calculate by wall length</p>
              </Link>

              <Link href="/calculator" className="price-card block text-center">
                <h3 className="font-semibold mb-2">Full Calculator</h3>
                <p className="text-sm text-gray-600">Complete project estimator</p>
              </Link>

              <Link href="/retaining-wall-cost" className="price-card block text-center">
                <h3 className="font-semibold mb-2">Complete Cost Guide</h3>
                <p className="text-sm text-gray-600">All cost factors explained</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}