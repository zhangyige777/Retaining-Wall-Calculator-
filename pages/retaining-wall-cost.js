import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import RetainingWallCalculator from '../components/RetainingWallCalculator'
import { statesData, materials } from '../data/states-data'

export default function RetainingWallCost() {
  // SEO优化 - 主关键词
  const seoData = {
    title: "Retaining Wall Cost Guide 2024 | Complete Pricing Calculator",
    description: "Calculate retaining wall costs with our free calculator. Compare prices for all materials and states. Average costs range from $15-$75 per square foot with complete breakdown.",
    keywords: ["retaining wall cost", "cost of retaining wall", "retaining wall prices", "how much does a retaining wall cost", "retaining wall installation cost", "retaining wall labor cost"]
  }

  // 美国平均价格数据
  const nationalAverages = {
    overall: { min: 15, max: 75, avg: 45 },
    concrete: { min: 45, max: 60, avg: 52 },
    stone: { min: 55, max: 75, avg: 65 },
    timber: { min: 20, max: 35, avg: 27 },
    block: { min: 35, max: 50, avg: 42 }
  }

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords.join(', ')} />
        <link rel="canonical" href="https://wallestimate.com/retaining-wall-cost" />

        {/* Open Graph */}
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://wallestimate.com/retaining-wall-cost" />

        {/* Schema标记 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Retaining Wall Cost Guide 2024",
            "description": "Complete guide to retaining wall costs in the United States with material comparisons and pricing calculator.",
            "author": {
              "@type": "Organization",
              "name": "WallEstimate Pro"
            },
            "publisher": {
              "@type": "Organization",
              "name": "WallEstimate Pro",
              "logo": {
                "@type": "ImageObject",
                "url": "https://wallestimate.com/logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://wallestimate.com/retaining-wall-cost"
            }
          })
        }} />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="breadcrumb py-4">
            <a href="/">Home</a>
            <span className="breadcrumb-separator">›</span>
            <span>Retaining Wall Cost</span>
          </nav>

          {/* Hero Section */}
          <section className="py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">
                Complete Retaining Wall Cost Guide 2024
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Everything you need to know about retaining wall costs in the United States.
                Calculate prices, compare materials, and find local contractors.
              </p>
              <div className="flex justify-center gap-4 text-sm">
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                  📊 Updated for 2024
                </span>
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
                  💰 Average: $45/sq ft
                </span>
                <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full">
                  🏗️ 50 States Covered
                </span>
              </div>
            </div>

            {/* AdSense顶部横幅 - 关键位置 */}
            <div className="ads-container mb-8 max-w-728 mx-auto">
              <span>Advertisement</span>
            </div>

            {/* Main Calculator - 立即转化 */}
            <div className="max-w-5xl mx-auto mb-12">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-center mb-6">
                  Calculate Your Retaining Wall Cost Instantly
                </h2>
                <RetainingWallCalculator showAdvanced={true} />
              </div>
            </div>
          </section>

          {/* Quick Price Overview */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Retaining Wall Costs at a Glance
            </h2>

            <div className="grid md:grid-cols-5 gap-4 max-w-6xl mx-auto mb-8">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600 mb-2">National Average</div>
                <div className="text-2xl font-bold text-primary-600">$45</div>
                <div className="text-sm text-gray-500">per sq ft</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600 mb-2">Low End</div>
                <div className="text-2xl font-bold text-green-600">$15</div>
                <div className="text-sm text-gray-500">per sq ft</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600 mb-2">High End</div>
                <div className="text-2xl font-bold text-red-600">$75</div>
                <div className="text-sm text-gray-500">per sq ft</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600 mb-2">Labor Portion</div>
                <div className="text-2xl font-bold text-blue-600">45%</div>
                <div className="text-sm text-gray-500">of total</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600 mb-2">Project Duration</div>
                <div className="text-2xl font-bold text-purple-600">3-7</div>
                <div className="text-sm text-gray-500">days</div>
              </div>
            </div>

            {/* AdSense横幅 */}
            <div className="ads-container max-w-728 mx-auto">
              <span>Advertisement</span>
            </div>
          </section>

          {/* Material Cost Comparison */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Retaining Wall Costs by Material Type
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full max-w-6xl mx-auto">
                <thead>
                  <tr>
                    <th>Material Type</th>
                    <th>Cost per sq ft</th>
                    <th>Lifespan</th>
                    <th>Maintenance</th>
                    <th>Best Use Case</th>
                    <th>Learn More</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(materials).map(([slug, material]) => (
                    <tr key={slug} className="hover:bg-gray-50">
                      <td className="font-semibold">{material.name}</td>
                      <td className="text-xl font-bold text-primary-600">
                        ${material.basePrice}-${Math.round(material.basePrice * 1.3)}
                      </td>
                      <td>{material.lifespan}</td>
                      <td>
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          material.maintenance === 'Low' ? 'bg-green-100 text-green-700' :
                          material.maintenance === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                          material.maintenance === 'High' ? 'bg-orange-100 text-orange-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {material.maintenance}
                        </span>
                      </td>
                      <td className="text-sm text-gray-600">{material.description}</td>
                      <td>
                        <Link href={`/cost/${slug}-retaining-wall-cost`}
                              className="text-blue-600 hover:underline font-medium">
                          View Details →
                        </Link>
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

          {/* Project Size Costs */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Average Costs by Project Size
            </h2>

            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="price-card">
                <h3 className="font-semibold mb-3">Small Wall</h3>
                <p className="text-sm text-gray-600 mb-3">25ft × 3ft = 75 sq ft</p>
                <div className="text-2xl font-bold text-primary-600 mb-3">
                  $1,125 - $5,625
                </div>
                <p className="text-sm text-gray-600">
                  Perfect for garden beds and small slopes
                </p>
              </div>

              <div className="price-card">
                <h3 className="font-semibold mb-3">Medium Wall</h3>
                <p className="text-sm text-gray-600 mb-3">50ft × 4ft = 200 sq ft</p>
                <div className="text-2xl font-bold text-primary-600 mb-3">
                  $3,000 - $15,000
                </div>
                <p className="text-sm text-gray-600">
                  Most common residential size
                </p>
              </div>

              <div className="price-card">
                <h3 className="font-semibold mb-3">Large Wall</h3>
                <p className="text-sm text-gray-600 mb-3">100ft × 6ft = 600 sq ft</p>
                <div className="text-2xl font-bold text-primary-600 mb-3">
                  $9,000 - $45,000
                </div>
                <p className="text-sm text-gray-600">
                  Commercial and large properties
                </p>
              </div>

              <div className="price-card">
                <h3 className="font-semibold mb-3">Extra Large</h3>
                <p className="text-sm text-gray-600 mb-3">200ft × 8ft = 1,600 sq ft</p>
                <div className="text-2xl font-bold text-primary-600 mb-3">
                  $24,000 - $120,000
                </div>
                <p className="text-sm text-gray-600">
                  Major commercial projects
                </p>
              </div>
            </div>
          </section>

          {/* Cost Factors Breakdown */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              What Affects Retaining Wall Costs?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary-700">
                  Material Factors (40% of cost)
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <div>
                      <strong>Material Quality:</strong> Premium materials cost 30-50% more
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <div>
                      <strong>Reinforcement:</strong> Steel rebar adds $5-10 per sq ft
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <div>
                      <strong>Finishing:</strong> Stamped or colored concrete adds 20-40%
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <div>
                      <strong>Accessibility:</strong> Difficult site access adds 15-25%
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary-700">
                  Labor Factors (45% of cost)
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <div>
                      <strong>Location:</strong> Urban areas cost 25-50% more
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <div>
                      <strong>Complexity:</strong> Curved walls cost 30% more
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <div>
                      <strong>Excavation:</strong> Rocky soil adds $20-40 per hour
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <div>
                      <strong>Season:</strong> Peak season costs 10-20% more
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* State Costs Overview */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Retaining Wall Costs by State
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Most Expensive States */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-red-600">
                  Most Expensive States
                </h3>
                <ul className="space-y-2">
                  <li>California: 45% above average</li>
                  <li>New York: 32% above average</li>
                  <li>Massachusetts: 28% above average</li>
                  <li>Washington: 15% above average</li>
                  <li>Oregon: 12% above average</li>
                </ul>
              </div>

              {/* Average States */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-600">
                  Near Average States
                </h3>
                <ul className="space-y-2">
                  <li>Illinois: 18% above average</li>
                  <li>Colorado: 5% above average</li>
                  <li>Florida: 2% above average</li>
                  <li>Georgia: At average</li>
                  <li>Virginia: At average</li>
                </ul>
              </div>

              {/* Most Affordable States */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-green-600">
                  Most Affordable States
                </h3>
                <ul className="space-y-2">
                  <li>Texas: 8% below average</li>
                  <li>Ohio: 5% below average</li>
                  <li>Michigan: 2% below average</li>
                  <li>Alabama: 10% below average</li>
                  <li>Mississippi: 12% below average</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link href="/states" className="cta-button">
                View Complete State Guide
              </Link>
            </div>

            {/* AdSense州级表格下方广告 */}
            <div className="ads-container mt-8 max-w-728 mx-auto">
              <span>Advertisement</span>
            </div>
          </section>

          {/* Additional Costs */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Additional Costs to Consider
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="price-card">
                <h3 className="font-semibold mb-4 text-orange-600">Required Costs</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Permits: $100-$2,500</li>
                  <li>• Engineering: $500-$5,000</li>
                  <li>• Drainage: $10-$25/ft</li>
                  <li>• Soil Testing: $500-$2,000</li>
                  <li>• Inspections: $300-$1,000</li>
                </ul>
              </div>

              <div className="price-card">
                <h3 className="font-semibold mb-4 text-blue-600">Optional Add-ons</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Landscape Design: $500-$5,000</li>
                  <li>• Lighting System: $1,000-$4,000</li>
                  <li>• Irrigation: $500-$2,500</li>
                  <li>• Decorative Caps: $15-$30/ft</li>
                  <li>• Privacy Features: $1,000-$8,000</li>
                </ul>
              </div>

              <div className="price-card">
                <h3 className="font-semibold mb-4 text-purple-600">Hidden Costs</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Unexpected Rock: $500-$5,000</li>
                  <li>• Water Issues: $1,000-$10,000</li>
                  <li>• Utility Relocation: $500-$5,000</li>
                  <li>• Property Access: $200-$2,000</li>
                  <li>• Debris Removal: $300-$1,500</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ Section - 重要SEO内容 */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  How much does a retaining wall cost in 2024?
                </h3>
                <p className="text-gray-700">
                  The average cost of a retaining wall in 2024 ranges from $15 to $75 per square foot,
                  with most homeowners spending around $45 per square foot. A typical 50-foot by 4-foot
                  wall costs between $3,000 and $15,000, including materials and professional installation.
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  What is the cheapest type of retaining wall?
                </h3>
                <p className="text-gray-700">
                  Pressure-treated timber is the most affordable option at $20-$35 per square foot.
                  However, concrete blocks at $35-$50 per square foot offer better long-term value
                  with a lifespan of 30-50 years compared to timber's 15-20 years.
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  Do I need a permit for a retaining wall?
                </h3>
                <p className="text-gray-700">
                  Most jurisdictions require permits for retaining walls over 3-4 feet tall.
                  Permit costs typically range from $100 to $2,500 depending on your location and
                  wall complexity. Always check with your local building department before starting.
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  How long does a retaining wall last?
                </h3>
                <p className="text-gray-700">
                  Lifespan varies significantly by material: timber walls last 15-20 years,
                  concrete and concrete block walls last 30-50 years, while natural stone walls
                  can last 100+ years with proper drainage and maintenance.
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  Can I build a retaining wall myself?
                </h3>
                <p className="text-gray-700">
                  DIY is possible for walls under 3 feet tall using materials like timber,
                  concrete blocks, or segmental systems. However, walls over 3 feet typically
                  require engineering, permits, and professional installation for safety and code compliance.
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  When is the best time to build a retaining wall?
                </h3>
                <p className="text-gray-700">
                  Spring and fall are ideal for retaining wall construction due to moderate temperatures
                  and stable soil conditions. Summer installation may cost 10-15% more due to heat
                  considerations, while winter can be difficult in northern regions due to frozen ground.
                </p>
              </div>

              {/* AdSense FAQ下方广告 - 高转化位置 */}
              <div className="ads-container">
                <span>Advertisement</span>
              </div>
            </div>
          </section>

          {/* Related Tools - 内链优化 */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Related Cost Calculators
            </h2>

            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Link href="/concrete-retaining-wall-calculator" className="price-card block">
                <h3 className="text-lg font-semibold mb-2">Concrete Wall Calculator</h3>
                <p className="text-gray-600 text-sm mb-3">Calculate costs specifically for concrete walls</p>
                <span className="text-blue-600">Calculate →</span>
              </Link>

              <Link href="/retaining-wall-cost-per-foot" className="price-card block">
                <h3 className="text-lg font-semibold mb-2">Cost Per Foot Guide</h3>
                <p className="text-gray-600 text-sm mb-3">View detailed costs per linear foot</p>
                <span className="text-blue-600">View Guide →</span>
              </Link>

              <Link href="/cost/cost-to-build-retaining-wall" className="price-card block">
                <h3 className="text-lg font-semibold mb-2">Build Cost Estimator</h3>
                <p className="text-gray-600 text-sm mb-3">Complete building cost breakdown</p>
                <span className="text-blue-600">Estimate →</span>
              </Link>

              <Link href="/retaining-wall-installation-cost" className="price-card block">
                <h3 className="text-lg font-semibold mb-2">Installation Cost Guide</h3>
                <p className="text-gray-600 text-sm mb-3">Labor costs by state and region</p>
                <span className="text-blue-600">View Costs →</span>
              </Link>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8">
                Use our calculator to get instant estimates and find qualified contractors in your area.
              </p>
              <div className="flex justify-center gap-4">
                <Link href="/calculator" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Use Calculator
                </Link>
                <Link href="/states" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition">
                  Find Local Costs
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}