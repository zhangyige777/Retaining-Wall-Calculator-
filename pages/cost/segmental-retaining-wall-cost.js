import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import RetainingWallCalculator from '../../components/RetainingWallCalculator'

export default function SegmentalRetainingWallCost() {
  const seoData = {
    title: "Segmental Retaining Wall Cost 2024 | Block Wall Pricing Guide",
    description: "Complete cost guide for segmental retaining walls. Compare prices for different block systems, installation costs, and long-term maintenance. Free calculator.",
    keywords: ["segmental retaining wall cost", "segmental block wall price", "interlocking block retaining wall cost", "srw cost", "pavestone retaining wall cost"]
  }

  // Real examples and data
  const segmentalSystems = [
    {
      brand: "Standard Concrete Blocks",
      costPerSqFt: "$25-$45",
      description: "Basic gray concrete blocks",
      bestFor: "Budget projects, utility walls"
    },
    {
      brand: "Pavestone/Rockwood",
      costPerSqFt: "$40-$70",
      description: "Tumbled, textured blocks with multiple colors",
      bestFor: "Residential landscaping, decorative walls"
    },
    {
      brand: "Anchor Wall Systems",
      costPerSqFt: "$45-$80",
      description: "Premium systems with geogrid reinforcement",
      bestFor: "Large walls, commercial applications"
    },
    {
      brand: "Belgard Pavers",
      costPerSqFt: "$55-$90",
      description: "High-end decorative systems with natural look",
      bestFor: "Premium residential, architectural projects"
    },
    {
      brand: "Unilock",
      costPerSqFt: "$60-$100",
      description: "Premium textured systems with multiple patterns",
      bestFor: "Designer landscapes, custom applications"
    }
  ]

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords.join(', ')} />
        <link rel="canonical" href="https://wallestimate.com/cost/segmental-retaining-wall-cost" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="breadcrumb py-4">
            <a href="/">Home</a>
            <span className="breadcrumb-separator">›</span>
            <a href="/cost">Cost Guides</a>
            <span className="breadcrumb-separator">›</span>
            <span>Segmental Wall Cost</span>
          </nav>

          {/* Hero Section */}
          <section className="py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">
                Segmental Retaining Wall Cost Guide
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Complete pricing for interlocking block walls. Compare top brands,
                installation costs, and long-term value. Get instant quotes.
              </p>
              <div className="bg-green-100 text-green-700 inline-block px-6 py-3 rounded-lg">
                <span className="font-bold">Most Popular Choice:</span> $40-$70 per square foot
              </div>
            </div>

            {/* AdSense顶部横幅 */}
            <div className="ads-container mb-8 max-w-728 mx-auto">
              <span>Advertisement</span>
            </div>

            {/* Calculator */}
            <div className="max-w-4xl mx-auto mb-12">
              <RetainingWallCalculator
                location=""
                title="Calculate Your Segmental Wall Cost"
                defaultMaterial="segmental-blocks"
              />
            </div>
          </section>

          {/* Quick Price Overview */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Segmental Wall Cost Breakdown
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold mb-4">Material Costs</h3>
                <div className="space-y-3">
                  {segmentalSystems.map((system, idx) => (
                    <div key={idx} className="border-l-4 border-green-500 pl-4">
                      <div className="font-semibold">{system.brand}</div>
                      <div className="text-lg font-bold text-green-600">{system.costPerSqFt}</div>
                      <div className="text-sm text-gray-600">{system.description}</div>
                      <div className="text-xs text-gray-500 mt-1">Best for: {system.bestFor}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Additional Costs</h3>
                <table>
                  <tr>
                    <th>Component</th>
                    <th>Cost</th>
                    <th>Notes</th>
                  </tr>
                  <tr>
                    <td>Geogrid Reinforcement</td>
                    <td>$2-$6/sq ft</td>
                    <td>Walls over 3ft</td>
                  </tr>
                  <tr>
                    <td>Drainage System</td>
                    <td>$5-$10/ft</td>
                    <td>Perforated pipe + gravel</td>
                  </tr>
                  <tr>
                    <td>Foundation Prep</td>
                    <td>$8-$15/sq ft</td>
                    <td>Compacted base material</td>
                  </tr>
                  <tr>
                    <td>Cap Stones</td>
                    <td>$15-$30/ft</td>
                    <td>Top finish course</td>
                  </tr>
                  <tr>
                    <td>Installation Labor</td>
                    <td>$15-$35/sq ft</td>
                    <td>Professional installer</td>
                  </tr>
                </table>
              </div>
            </div>
          </section>

          {/* Project Examples */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Real Project Examples
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gray-200 p-6">
                  <div className="text-3xl font-bold text-center mb-2">$3,600</div>
                  <div className="text-center text-gray-600">Total Cost</div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold mb-3">Garden Border Wall</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Dimensions:</span>
                      <span>30ft × 2ft</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Material:</span>
                      <span>Standard Blocks</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Per sq ft:</span>
                      <span className="font-semibold">$60</span>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    Simple 2-foot high garden wall using basic concrete blocks.
                    No reinforcement needed.
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gray-200 p-6">
                  <div className="text-3xl font-bold text-center mb-2">$14,400</div>
                  <div className="text-center text-gray-600">Total Cost</div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold mb-3">Slope Stabilization</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Dimensions:</span>
                      <span>60ft × 4ft</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Material:</span>
                      <span>Pavestone System</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Per sq ft:</span>
                      <span className="font-semibold">$60</span>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    4-foot wall with geogrid reinforcement and full drainage system.
                    Includes cap stones and professional installation.
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gray-200 p-6">
                  <div className="text-3xl font-bold text-center mb-2">$28,000</div>
                  <div className="text-center text-gray-600">Total Cost</div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold mb-3">Terraced Garden</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Dimensions:</span>
                      <span>80ft × 6ft</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Material:</span>
                      <span>Anchor Wall System</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Per sq ft:</span>
                      <span className="font-semibold">$58</span>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    Two-level terraced wall with drainage, geogrid, and premium
                    textured blocks. Includes engineering plans.
                  </div>
                </div>
              </div>
            </div>

            {/* AdSense项目案例下方广告 */}
            <div className="ads-container mt-8 max-w-728 mx-auto">
              <span>Advertisement</span>
            </div>
          </section>

          {/* Benefits of Segmental Walls */}
          <section className="py-12 bg-blue-50 rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Why Choose Segmental Walls?
            </h2>

            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-3xl mb-4">🔗</div>
                <h3 className="font-semibold mb-3">Interlocking Design</h3>
                <p className="text-sm text-gray-700">
                  Engineered blocks lock together creating strong, stable walls without mortar
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="font-semibold mb-3">Fast Installation</h3>
                <p className="text-sm text-gray-700">
                  Modular construction allows 2-3x faster installation vs traditional methods
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-3xl mb-4">💧</div>
                <h3 className="font-semibold mb-3">Flexible Design</h3>
                <p className="text-sm text-gray-700">
                  Handles settling and soil movement without cracking
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-3xl mb-4">🎨</div>
                <h3 className="font-semibold mb-3">Aesthetic Options</h3>
                <p className="text-sm text-gray-700">
                  Multiple colors, textures, and patterns available
                </p>
              </div>
            </div>
          </section>

          {/* Installation Process */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Installation Process & Timeline
            </h2>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-xl font-bold">
                    1
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">Site Preparation (1 day)</h3>
                    <p className="text-gray-700">
                      Excavation to proper depth, utility locating, and removal of existing structures
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-xl font-bold">
                    2
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">Foundation Base (1-2 days)</h3>
                    <p className="text-gray-700">
                      Installing geotextile fabric, compacted gravel base, and setting initial course
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-xl font-bold">
                    3
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">Wall Construction (2-5 days)</h3>
                    <p className="text-gray-700">
                      Installing block courses, adding drainage, and placing geogrid reinforcement as needed
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-xl font-bold">
                    4
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">Finishing (1-2 days)</h3>
                    <p className="text-gray-700">
                      Installing cap stones, backfilling, and final grading of surrounding areas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Cost Comparison Table */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Cost Comparison: Segmental vs Other Materials
            </h2>

            <div className="overflow-x-auto max-w-6xl mx-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="p-3 text-left">Material</th>
                    <th className="p-3 text-center">Cost/sq ft</th>
                    <th className="p-3 text-center">Lifespan</th>
                    <th className="p-3 text-center">Maintenance</th>
                    <th className="p-3 text-left">Best Use Case</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-green-50">
                    <td className="p-3 font-semibold">Segmental Blocks</td>
                    <td className="p-3 text-center font-bold">$40-$70</td>
                    <td className="p-3 text-center">50-75 years</td>
                    <td className="p-3 text-center">Low</td>
                    <td className="p-3">All-purpose, DIY-friendly</td>
                  </tr>
                  <tr>
                    <td className="p-3">Poured Concrete</td>
                    <td className="p-3 text-center">$50-$90</td>
                    <td className="p-3 text-center">50+ years</td>
                    <td className="p-3 text-center">Low</td>
                    <td className="p-3">Curved walls, modern look</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3">Natural Stone</td>
                    <td className="p-3 text-center">$55-$100</td>
                    <td className="p-3 text-center">100+ years</td>
                    <td className="p-3 text-center">Minimal</td>
                    <td className="p-3">Premium appearance</td>
                  </tr>
                  <tr>
                    <td className="p-3">Pressure Timber</td>
                    <td className="p-3 text-center">$20-$40</td>
                    <td className="p-3 text-center">15-20 years</td>
                    <td className="p-3 text-center">High</td>
                    <td className="p-3">Budget, temporary walls</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold mb-3">
                  How high can a segmental wall go without engineering?
                </h3>
                <p className="text-gray-700">
                  Most segmental walls up to 3 feet tall don't require engineering. Walls 3-6 feet may need geogrid reinforcement and basic design. Over 6 feet typically requires stamped engineering plans and permits.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold mb-3">
                  Can I install a segmental wall myself?
                </h3>
                <p className="text-gray-700">
                  Yes! DIY is possible for walls under 3 feet. You'll need proper tools (compactor, saw, levels) and ability to handle heavy materials. DIY saves 30-50% but requires attention to proper base preparation and drainage.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold mb-3">
                  Do segmental walls need drainage?
                </h3>
                <p className="text-gray-700">
                  Absolutely. All segmental walls require proper drainage. This includes perforated drain pipe at the base, gravel backfill, and weep holes or drainage fabric. Poor drainage is the #1 cause of wall failure.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold mb-3">
                  How long do segmental walls last?
                </h3>
                <p className="text-gray-700">
                  Quality segmental walls last 50-75 years or more. The concrete blocks won't degrade, but proper installation and drainage are crucial for longevity. Most manufacturers offer lifetime warranties on residential use.
                </p>
              </div>

              {/* AdSense FAQ下方广告 */}
              <div className="ads-container mt-6">
                <span>Advertisement</span>
              </div>
            </div>
          </section>

          {/* Related Pages */}
          <section className="py-12 bg-gray-100 rounded-lg">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-6">
                Related Information
              </h2>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <Link href="/cost/block-retaining-wall-cost" className="price-card block text-center">
                  <h3 className="font-semibold mb-2">Block Wall Cost</h3>
                  <p className="text-sm text-gray-600">Compare all block types</p>
                </Link>
                <Link href="/retaining-wall-installation-cost" className="price-card block text-center">
                  <h3 className="font-semibold mb-2">Installation Costs</h3>
                  <p className="text-sm text-gray-600">Labor pricing breakdown</p>
                </Link>
                <Link href="/calculator" className="price-card block text-center">
                  <h3 className="font-semibold mb-2">Get Exact Quote</h3>
                  <p className="text-sm text-gray-600">Free calculator</p>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}