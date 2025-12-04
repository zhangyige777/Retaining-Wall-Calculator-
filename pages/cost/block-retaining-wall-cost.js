import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import RetainingWallCalculator from '../../components/RetainingWallCalculator'

export default function BlockRetainingWallCost() {
  const seoData = {
    title: "Block Retaining Wall Cost 2024 | CMU & Concrete Block Pricing",
    description: "Calculate block retaining wall costs. Compare CMU, interlocking, and decorative block systems. Free calculator with local pricing by state.",
    keywords: ["block retaining wall cost", "concrete block retaining wall cost", "cmu retaining wall cost", "cinder block wall cost", "retaining wall blocks calculator"]
  }

  const blockTypes = {
    cmu: {
      name: "CMU (Concrete Masonry Units)",
      costRange: "$35-$50",
      basePrice: 42,
      lifespan: "30-50 years",
      features: ["Standard 8x8x16 blocks", "Mortar required", "Most economical", "Reinforced with rebar"],
      bestFor: "Standard residential walls"
    },
    segmental: {
      name: "Interlocking Segmental Blocks",
      costRange: "$50-$65",
      basePrice: 57,
      lifespan: "50+ years",
      features: ["No mortar needed", "Engineered system", "Dry stack construction", "Curved designs possible"],
      bestFor: "DIY projects, curved walls"
    },
    decorative: {
      name: "Decorative Face Blocks",
      costRange: "$45-$70",
      basePrice: 57,
      lifespan: "40-60 years",
      features: ["Attractive finish", "Multiple colors/textures", "Split-face options", "Design versatility"],
      bestFor: "Visible walls, decorative projects"
    },
    large: {
      name: "Large Landscape Blocks",
      costRange: "$40-$60",
      basePrice: 50,
      lifespan: "50+ years",
      features: ["16x8x8 or larger", "Rapid installation", "No mortar", "Natural stone appearance"],
      bestFor: "Large-scale projects"
    }
  }

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords.join(', ')} />
        <link rel="canonical" href="https://wallestimate.com/cost/block-retaining-wall-cost" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="breadcrumb py-4">
            <a href="/">Home</a>
            <span className="breadcrumb-separator">›</span>
            <a href="/retaining-wall-cost">Costs</a>
            <span className="breadcrumb-separator">›</span>
            <span>Block Walls</span>
          </nav>

          {/* Hero Section */}
          <section className="py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">
                Block Retaining Wall Cost 2024
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Complete guide to concrete block retaining walls. Compare CMU blocks,
                interlocking systems, and decorative options. Calculate your project cost
                instantly with our free calculator.
              </p>
              <div className="flex justify-center gap-4 text-sm">
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                  🧱 Most Popular Choice
                </span>
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
                  💰 Cost-Effective
                </span>
                <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full">
                  ⚡ Quick Installation
                </span>
              </div>
            </div>

            {/* Calculator */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-center mb-6">
                  Block Wall Cost Calculator
                </h2>
                <RetainingWallCalculator
                  preselectedMaterial="block"
                  showAdvanced={true}
                  title="Calculate Block Wall Cost"
                />
              </div>
            </div>
          </section>

          {/* Block Types Comparison */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Types of Block Retaining Walls
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {Object.entries(blockTypes).map(([key, type]) => (
                <div key={key} className="border rounded-lg p-6 hover:shadow-lg transition">
                  <h3 className="text-xl font-semibold mb-3">{type.name}</h3>
                  <div className="text-2xl font-bold text-primary-600 mb-2">
                    {type.costRange} per sq ft
                  </div>
                  <div className="text-sm text-gray-600 mb-4">
                    Lifespan: {type.lifespan}
                  </div>
                  <ul className="space-y-2 mb-4">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-sm text-gray-600 mb-3">
                    <strong>Best for:</strong> {type.bestFor}
                  </div>
                  <Link href={`/${key}-retaining-wall-cost`}
                        className="text-blue-600 hover:underline font-medium">
                    Calculate {type.name} Costs →
                  </Link>
                </div>
              ))}
            </div>

            {/* AdSense表格下方广告 */}
            <div className="ads-container mt-8 max-w-728 mx-auto">
              <span>Advertisement</span>
            </div>
          </section>

          {/* Installation Costs by Block Type */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Installation Considerations
            </h2>

            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="price-card">
                <h3 className="font-semibold mb-4 text-lg">CMU Blocks</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Mortar mixing</li>
                  <li>• Rebar installation</li>
                  <li>• Clean mortar joints</li>
                  <li>• Skilled mason needed</li>
                  <li>• Curing time required</li>
                </ul>
              </div>

              <div className="price-card">
                <h3 className="font-semibold mb-4 text-lg">Segmental</h3>
                <ul className="space-y-2 text-sm">
                  <li>• No mortar needed</li>
                  <li>• Geogrid reinforcement</li>
                  <li>• Leveling critical</li>
                  <li>• DIY friendly</li>
                  <li>• Immediate completion</li>
                </ul>
              </div>

              <div className="price-card">
                <h3 className="font-semibold mb-4 text-lg">Decorative</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Pattern alignment</li>
                  <li>• Color consistency</li>
                  <li>• Cut blocks for curves</li>
                  <li>• Special caps</li>
                  <li>• Finishing touch</li>
                </ul>
              </div>

              <div className="price-card">
                <h3 className="font-semibold mb-4 text-lg">Large Blocks</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Equipment needed</li>
                  <li>• Heavy lifting</li>
                <li>• Machine placement</li>
                  <li>• Fewer blocks</li>
                  <li>• Rapid construction</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Block Wall Components */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Block Wall System Components
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold mb-4">Required Components</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-start">
                    <span className="font-medium">Concrete Blocks</span>
                    <span className="text-gray-600">$3-$8 each</span>
                  </li>
                  <li className="flex justify-between items-start">
                    <span className="font-medium">Mortar (CMU only)</span>
                    <span className="text-gray-600">$10-$20/bag</span>
                  </li>
                  <li className="flex justify-between items-start">
                    <span className="font-medium">Rebar Reinforcement</span>
                    <span className="text-gray-600">$1.50-$2.50/ft</span>
                  </li>
                  <li className="flex justify-between items-start">
                    <span className="font-medium">Geogrid (Segmental)</span>
                    <span className="text-gray-600">$0.50-$2/sq ft</span>
                  </li>
                  <li className="flex justify-between items-start">
                    <span className="font-medium">Caps/Coping</span>
                    <span className="text-gray-600">$10-$30/ft</span>
                  </li>
                  <li className="flex justify-between items-start">
                    <span className="font-medium">Drainage System</span>
                    <span className="text-gray-600">$5-$15/ft</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Optional Components</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-start">
                    <span className="font-medium">Weep Holes</span>
                    <span className="text-gray-600">$2-$5 each</span>
                  </li>
                  <li className="flex justify-between items-start">
                    <span className="font-medium">Filter Fabric</span>
                    <span className="text-gray-600">$2-$5/sq yd</span>
                  </li>
                  <li className="flex justify-between items-start">
                    <span className="font-medium">Waterproofing</span>
                    <span className="text-gray-600">$5-$15/sq ft</span>
                  </li>
                  <li className="flex justify-between items-start">
                    <span className="font-medium">Lighting</span>
                    <span className="text-gray-600">$100-$500 each</span>
                  </li>
                  <li className="flex justify-between items-start">
                    <span className="font-medium">Planters</span>
                    <span className="text-gray-600">$150-$500 each</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Design Options */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Popular Block Wall Designs
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="price-card text-center">
                <div className="bg-gray-200 rounded-lg h-32 mb-4 flex items-center justify-center">
                  <div className="text-4xl">⬛</div>
                </div>
                <h3 className="font-semibold mb-2">Standard Stacked</h3>
                <p className="text-sm text-gray-600 mb-3">Traditional straight or staggered pattern</p>
                <div className="text-sm font-bold text-primary-600">Most Economical</div>
              </div>

              <div className="price-card text-center">
                <div className="bg-gray-200 rounded-lg h-32 mb-4 flex items-center justify-center">
                  <div className="text-4xl">〰️</div>
                </div>
                <h3 className="font-semibold mb-2">Curved Design</h3>
                <p className="text-sm text-gray-600 mb-3">Sweeping curves, perfect for landscaping</p>
                <div className="text-sm font-bold text-primary-600">Segmental Blocks</div>
              </div>

              <div className="price-card text-center">
                <div className="bg-gray-200 rounded-lg h-32 mb-4 flex items-center justify-center">
                  <div className="text-4xl">🏛️</div>
                </div>
                <h3 className="font-semibold mb-2">Terraced</h3>
                <p className="text-sm text-gray-600 mb-3">Multiple levels for steep slopes</p>
                <div className="text-sm font-bold text-primary-600">Engineering Required</div>
              </div>
            </div>
          </section>

          {/* Size and Cost Calculator */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Cost by Wall Size
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full max-w-4xl mx-auto">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 text-left">Wall Size</th>
                    <th className="p-3 text-center">Blocks Needed</th>
                    <th className="p-3 text-center">Material Cost</th>
                    <th className="p-3 text-center">Labor Cost</th>
                    <th className="p-3 text-center">Total Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 font-semibold">20ft × 3ft</td>
                    <td className="p-3 text-center">135 blocks</td>
                    <td className="p-3 text-center">$540-$1,080</td>
                    <td className="p-3 text-center">$800-$1,200</td>
                    <td className="p-3 text-center font-bold">$1,340-$2,280</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 font-semibold">50ft × 4ft</td>
                    <td className="p-3 text-center">450 blocks</td>
                    <td className="p-3 text-center">$1,800-$3,600</td>
                    <td className="p-3 text-center">$2,500-$4,000</td>
                    <td className="p-3 text-center font-bold">$4,300-$7,600</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">100ft × 4ft</td>
                    <td className="p-3 text-center">900 blocks</td>
                    <td className="p-3 text-center">$3,600-$7,200</td>
                    <td className="p-3 text-center">$5,000-$8,000</td>
                    <td className="p-3 text-center font-bold">$8,600-$15,200</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 font-semibold">100ft × 6ft</td>
                    <td className="p-3 text-center">1,350 blocks</td>
                    <td className="p-3 text-center">$5,400-$10,800</td>
                    <td className="p-3 text-center">$7,500-$12,000</td>
                    <td className="p-3 text-center font-bold">$12,900-$22,800</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Regional Cost Differences */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Regional Cost Variations
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold mb-4">Block Prices by Region</h3>
                <div className="space-y-2">
                  <div className="flex justify-between p-2 bg-gray-50 rounded">
                    <span>Northeast</span>
                    <span className="font-bold">$8-$12 per block</span>
                  </div>
                  <div className="flex justify-between p-2 bg-gray-50 rounded">
                    <span>West Coast</span>
                    <span className="font-bold">$7-$11 per block</span>
                  </div>
                  <div className="flex justify-between p-2 bg-gray-50 rounded">
                    <span>Midwest</span>
                    <span className="font-bold">$4-$8 per block</span>
                  </div>
                  <div className="flex justify-between p-2 bg-gray-50 rounded">
                    <span>South</span>
                    <span className="font-bold">$3-$7 per block</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Labor Rates by Region</h3>
                <div className="space-y-2">
                  <div className="flex justify-between p-2 bg-gray-50 rounded">
                    <span>Urban Areas</span>
                    <span className="font-bold">$75-$150 per hour</span>
                  </div>
                  <div className="flex justify-between p-2 bg-gray-50 rounded">
                    <span>Suburban</span>
                    <span className="font-bold">$60-$100 per hour</span>
                  </div>
                  <div className="flex justify-between p-2 bg-gray-50 rounded">
                    <span>Rural</span>
                    <span className="font-bold">$50-$75 per hour</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Maintenance Requirements */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Maintenance Requirements
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold mb-4">Regular Maintenance</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <div>
                      <strong>Annual Inspection</strong>
                      <p className="text-sm text-gray-600">Check for cracks, drainage issues, bulging</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <div>
                      <strong>Clean Weep Holes</strong>
                      <p className="text-sm text-gray-600">Ensure proper drainage</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <div>
                      <strong>Remove Vegetation</strong>
                      <p className="text-sm text-gray-600">Prevent root damage</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <div>
                      <strong>Check Mortar Joints</strong>
                      <p className="text-sm text-gray-600">Repair cracks as needed</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Long-Term Care</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">ℹ️</span>
                    <div>
                      <strong>Waterproofing</strong>
                      <p className="text-sm text-gray-600">Seal every 5-7 years</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">ℹ️</span>
                    <div>
                      <strong>Repointing</strong>
                      <p className="text-sm text-gray-600">Every 20-25 years</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">ℹ️</span>
                    <div>
                      <strong>Cap Replacement</strong>
                      <p className="text-sm text-gray-600">Every 15-20 years</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">ℹ️</span>
                    <div>
                      <strong>Drainage System</strong>
                      <p className="text-sm text-gray-600">Clean every 2-3 years</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Block Retaining Wall FAQ
            </h2>

            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  How much does a block retaining wall cost per square foot?
                </h3>
                <p className="text-gray-700">
                  Block retaining walls cost $35-$65 per square foot. Standard CMU blocks: $35-$50/sq ft,
                  Segmental interlocking: $50-$65/sq ft. Total cost includes materials, labor, and basic drainage.
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  Do block retaining walls need mortar?
                </h3>
                <p className="text-gray-700">
                  Traditional CMU blocks require mortar between courses. However, modern interlocking
                  segmental blocks don't need mortar - they lock together and rely on friction and weight.
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  How deep should a block retaining wall foundation be?
                </h3>
                <p className="text-gray-700">
                  Foundations should be 6-12 inches below grade for walls under 4 feet tall.
                  For taller walls, depth should be 12-24 inches, depending on soil conditions and local codes.
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
              Related Cost Calculators
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Link href="/retaining-wall-block-calculator" className="price-card block text-center">
                <h3 className="font-semibold mb-2">Block Calculator</h3>
                <p className="text-sm text-gray-600">Calculate block requirements</p>
              </Link>

              <Link href="/cost/concrete-retaining-wall-cost" className="price-card block text-center">
                <h3 className="font-semibold mb-2">Concrete Costs</h3>
                <p className="text-sm text-gray-600">Compare with poured concrete</p>
              </Link>

              <Link href="/calculator" className="price-card block text-center">
                <h3 className="font-semibold mb-2">Full Calculator</h3>
                <p className="text-sm text-gray-600">Compare all materials</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}