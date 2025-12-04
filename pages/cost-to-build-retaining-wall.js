import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import RetainingWallCalculator from '../components/RetainingWallCalculator'

export default function CostToBuildRetainingWall() {
  const seoData = {
    title: "Cost to Build a Retaining Wall 2024 | Complete Construction Pricing",
    description: "Calculate total cost to build a retaining wall. Complete breakdown of materials, labor, permits, and equipment costs. Free calculator with local pricing.",
    keywords: ["cost to build retaining wall", "how much to build a retaining wall", "retaining wall construction cost", "retaining wall build cost", "cost to install a retaining wall"]
  }

  const costBreakdown = {
    materials: { percentage: 40, examples: ["Concrete/Stone", "Reinforcement", "Drainage", "Backfill"] },
    labor: { percentage: 45, examples: ["Excavation", "Installation", "Finishing", "Cleanup"] },
    equipment: { percentage: 10, examples: ["Excavator", "Compactor", "Concrete Mixer", "Tools"] },
    other: { percentage: 5, examples: ["Permits", "Inspections", "Site Prep", "Disposal"] }
  }

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords.join(', ')} />
        <link rel="canonical" href="https://wallestimate.com/cost-to-build-retaining-wall" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="breadcrumb py-4">
            <a href="/">Home</a>
            <span className="breadcrumb-separator">›</span>
            <span>Cost to Build</span>
          </nav>

          {/* Hero Section */}
          <section className="py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">
                Cost to Build a Retaining Wall 2024
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Complete guide to retaining wall construction costs. Every expense
                covered from materials to final inspection. Get accurate estimates
                for your project.
              </p>
              <div className="flex justify-center gap-4 text-sm">
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                  📊 Complete Breakdown
                </span>
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
                  💰 Labor 45% of Cost
                </span>
                <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full">
                  🏗️ All Materials Covered
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
                  Calculate Your Building Cost
                </h2>
                <RetainingWallCalculator
                  showAdvanced={true}
                  title="Total Building Cost Calculator"
                />
              </div>
            </div>
          </section>

          {/* Cost Breakdown Visual */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Where Your Money Goes - Cost Breakdown
            </h2>

            <div className="max-w-4xl mx-auto">
              {/* Pie chart visualization using CSS */}
              <div className="relative w-80 h-80 mx-auto mb-8">
                <div className="absolute inset-0 rounded-full"
                     style={{
                       background: `conic-gradient(#3b82f6 0% ${costBreakdown.materials.percentage * 3.6}deg,
                                          #10b981 ${costBreakdown.materials.percentage * 3.6}deg ${(costBreakdown.materials.percentage + costBreakdown.labor.percentage) * 3.6}deg,
                                          #f59e0b ${(costBreakdown.materials.percentage + costBreakdown.labor.percentage) * 3.6}deg ${(costBreakdown.materials.percentage + costBreakdown.labor.percentage + costBreakdown.equipment.percentage) * 3.6}deg,
                                          #ef4444 ${(costBreakdown.materials.percentage + costBreakdown.labor.percentage + costBreakdown.equipment.percentage) * 3.6}deg 360deg)`
                     }}>
                </div>
                <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold">100%</div>
                    <div className="text-gray-600">Total Cost</div>
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-500 rounded mr-3"></div>
                    <span className="font-semibold">Materials (40%)</span>
                  </div>
                  <div className="ml-7 text-sm text-gray-600">
                    {costBreakdown.materials.examples.join(", ")}
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-green-500 rounded mr-3"></div>
                    <span className="font-semibold">Labor (45%)</span>
                  </div>
                  <div className="ml-7 text-sm text-gray-600">
                    {costBreakdown.labor.examples.join(", ")}
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-yellow-500 rounded mr-3"></div>
                    <span className="font-semibold">Equipment (10%)</span>
                  </div>
                  <div className="ml-7 text-sm text-gray-600">
                    {costBreakdown.equipment.examples.join(", ")}
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-red-500 rounded mr-3"></div>
                    <span className="font-semibold">Other (5%)</span>
                  </div>
                  <div className="ml-7 text-sm text-gray-600">
                    {costBreakdown.other.examples.join(", ")}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Material Costs Detail */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Material Costs Detailed
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full max-w-5xl mx-auto">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 text-left">Material</th>
                    <th className="p-3 text-center">Unit</th>
                    <th className="p-3 text-center">Cost Range</th>
                    <th className="p-3 text-center">Typical Amount</th>
                    <th className="p-3 text-center">Total Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 font-semibold">Concrete</td>
                    <td className="p-3 text-center">Per cubic yard</td>
                    <td className="p-3 text-center">$120-$180</td>
                    <td className="p-3 text-center">3-8 yards</td>
                    <td className="p-3 text-center">$360-$1,440</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 font-semibold">Rebar</td>
                    <td className="p-3 text-center">Per pound</td>
                    <td className="p-3 text-center">$1.50-$2.50</td>
                    <td className="p-3 text-center">200-500 lbs</td>
                    <td className="p-3 text-center">$300-$1,250</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Concrete Blocks</td>
                    <td className="p-3 text-center">Each</td>
                    <td className="p-3 text-center">$3-$8</td>
                    <td className="p-3 text-center">100-400 units</td>
                    <td className="p-3 text-center">$300-$3,200</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 font-semibold">Natural Stone</td>
                    <td className="p-3 text-center">Per ton</td>
                    <td className="p-3 text-center">$80-$200</td>
                    <td className="p-3 text-center">5-20 tons</td>
                    <td className="p-3 text-center">$400-$4,000</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Gravel</td>
                    <td className="p-3 text-center">Per ton</td>
                    <td className="p-3 text-center">$25-$50</td>
                    <td className="p-3 text-center">10-30 tons</td>
                    <td className="p-3 text-center">$250-$1,500</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 font-semibold">Drainage Pipe</td>
                    <td className="p-3 text-center">Per foot</td>
                    <td className="p-3 text-center">$5-$15</td>
                    <td className="p-3 text-center">50-200 ft</td>
                    <td className="p-3 text-center">$250-$3,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* AdSense材料表格下方广告 */}
            <div className="ads-container mt-8 max-w-728 mx-auto">
              <span>Advertisement</span>
            </div>
          </section>

          {/* Labor Costs */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Labor Costs by Task
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="price-card">
                <h3 className="font-semibold mb-4 text-lg">Excavation</h3>
                <div className="text-xl font-bold text-primary-600 mb-2">$50-$100/hr</div>
                <ul className="space-y-2 text-sm">
                  <li>• Machine operator: $85-$120</li>
                  <li>• Manual digging: $40-$60</li>
                  <li>• Hauling debris: $45-$75</li>
                  <li>• Typical time: 1-3 days</li>
                </ul>
              </div>

              <div className="price-card">
                <h3 className="font-semibold mb-4 text-lg">Installation</h3>
                <div className="text-xl font-bold text-primary-600 mb-2">$60-$120/hr</div>
                <ul className="space-y-2 text-sm">
                  <li>• Mason: $75-$150</li>
                  <li>• Laborer: $40-$65</li>
                  <li>• Foreman: $90-$140</li>
                  <li>• Typical time: 2-5 days</li>
                </ul>
              </div>

              <div className="price-card">
                <h3 className="font-semibold mb-4 text-lg">Finishing</h3>
                <div className="text-xl font-bold text-primary-600 mb-2">$50-$90/hr</div>
                <ul className="space-y-2 text-sm">
                  <li>• Curing: $50-$70</li>
                  <li>• Sealing: $60-$90</li>
                  <li>• Cleanup: $40-$60</li>
                  <li>• Typical time: 1-2 days</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Hidden Costs */}
          <section className="py-12 bg-yellow-50 rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Hidden Costs to Consider
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-yellow-700">
                  Before Construction
                </h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>Survey & Grading</span>
                    <span className="font-semibold">$500-$2,500</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Soil Testing</span>
                    <span className="font-semibold">$300-$1,500</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Utility Location</span>
                    <span className="font-semibold">Free-$500</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Engineering Plans</span>
                    <span className="font-semibold">$500-$5,000</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-yellow-700">
                  During Construction
                </h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>Rock Removal</span>
                    <span className="font-semibold">$500-$5,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Water Management</span>
                    <span className="font-semibold">$300-$2,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Special Equipment</span>
                    <span className="font-semibold">$500-$3,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Unexpected Delays</span>
                    <span className="font-semibold">$200-$1,000/day</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Project Size Examples */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Complete Project Examples
            </h2>

            <div className="space-y-6 max-w-4xl mx-auto">
              {/* Small Project */}
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Small Garden Wall</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-600 mb-2">Dimensions: 25ft × 3ft = 75 sq ft</p>
                    <p className="text-gray-600 mb-2">Material: Pressure-Treated Timber</p>
                    <p className="text-gray-600">Location: Backyard garden</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary-600">$2,100 - $4,500</div>
                    <div className="text-sm text-gray-500">Total Project Cost</div>
                  </div>
                </div>
              </div>

              {/* Medium Project */}
              <div className="border rounded-lg p-6 bg-blue-50">
                <h3 className="text-xl font-semibold mb-3">Medium Residential Wall</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-600 mb-2">Dimensions: 50ft × 4ft = 200 sq ft</p>
                    <p className="text-gray-600 mb-2">Material: Concrete Blocks</p>
                    <p className="text-gray-600">Location: Front yard slope</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary-600">$7,200 - $15,000</div>
                    <div className="text-sm text-gray-500">Total Project Cost</div>
                  </div>
                </div>
              </div>

              {/* Large Project */}
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Large Commercial Wall</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-600 mb-2">Dimensions: 100ft × 6ft = 600 sq ft</p>
                    <p className="text-gray-600 mb-2">Material: Poured Concrete</p>
                    <p className="text-gray-600">Location: Commercial property</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary-600">$27,000 - $60,000</div>
                    <div className="text-sm text-gray-500">Total Project Cost</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Building Cost FAQ
            </h2>

            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  How much does it cost to build a retaining wall?
                </h3>
                <p className="text-gray-700">
                  The complete cost to build a retaining wall ranges from $15-$75 per square foot.
                  A typical residential project (50ft × 4ft) costs $7,200-$15,000 including
                  all materials, labor, permits, and equipment. Material choice is the biggest
                  cost factor after labor.
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  Can I save money by building a retaining wall myself?
                </h3>
                <p className="text-gray-700">
                  DIY can save 40-50% on labor costs, but only recommended for walls under 3 feet.
                  You'll need equipment rental ($200-$800/day), materials, and permits. Consider
                  mistakes can cost more to fix than professional installation.
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  What permits are needed to build a retaining wall?
                </h3>
                <p className="text-gray-700">
                  Most jurisdictions require permits for walls over 3-4 feet tall. Permit costs
                  range $100-$2,500. You'll need: site plan, engineering calculations (for tall walls),
                  drainage plan, and possibly geological survey in some areas.
                </p>
              </div>

              {/* AdSense FAQ下方广告 */}
              <div className="ads-container">
                <span>Advertisement</span>
              </div>
            </div>
          </section>

          {/* Related Pages */}
          <section className="py-12 bg-white rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Related Cost Guides
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Link href="/retaining-wall-installation-cost" className="price-card block text-center">
                <h3 className="font-semibold mb-2">Installation Cost</h3>
                <p className="text-sm text-gray-600">Labor costs breakdown</p>
              </Link>

              <Link href="/retaining-wall-calculator" className="price-card block text-center">
                <h3 className="font-semibold mb-2">Cost Calculator</h3>
                <p className="text-sm text-gray-600">Get instant estimates</p>
              </Link>

              <Link href="/retaining-wall-cost" className="price-card block text-center">
                <h3 className="font-semibold mb-2">Complete Cost Guide</h3>
                <p className="text-sm text-gray-600">All cost factors</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}