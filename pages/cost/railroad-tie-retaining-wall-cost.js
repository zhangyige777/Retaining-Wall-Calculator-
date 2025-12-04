import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import RetainingWallCalculator from '../../components/RetainingWallCalculator'

export default function RailroadTieRetainingWallCost() {
  const seoData = {
    title: "Railroad Tie Retaining Wall Cost 2024 | Budget-Friendly Pricing",
    description: "Calculate railroad tie retaining wall costs. Complete pricing guide for reclaimed railroad ties, installation requirements, and local prices by state.",
    keywords: ["railroad tie retaining wall cost", "railroad tie retaining wall", "used railroad tie retaining wall", "crosstie retaining wall", "railway tie wall cost"]
  }

  const tieTypes = {
    used: {
      name: "Used Railroad Ties",
      costRange: "$18-$30",
      basePrice: 24,
      lifespan: "10-15 years",
      features: ["Reclaimed material", "Weathered appearance", "Heavy duty", "Budget-friendly"],
      availability: "Available through rail yards, salvage yards",
      treatment: "Creosote or CCA treated"
    },
    new: {
      name: "New Railroad Ties",
      costRange: "$25-$40",
      basePrice: 32,
      lifespan: "15-20 years",
      full_name: "Professional Grade",
      features: ["No creosote concerns", "Consistent dimensions", "Certified treated", "Premium price"],
      availability: "Landscape supply stores",
      treatment: "CCA or copper naphthenate"
    },
    "landscape-grade": {
      name: "Landscape Grade Ties",
      costRange: "$22-$35",
      basePrice: 28,
      lifespan: "12-18 years",
      full_name: "Landscaping Specific",
      features: {"Railroad tie retaining wall cost", "railroad tie retaining wall", "used railroad tie retaining wall", "crosstie retaining wall", "railway tie wall cost": "Landscaping specific sizes", "Surface finished", "Certified safe", "Round edges", "No splinters"}
    }
  }

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={content.join(', ')} />
        <link rel="canonical" href="https://wallestimate.com/cost/railroad-tie-retaining-wall-cost" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="breadcrumb py-4">
            <a href="/">Home</a>
            <span className="breadcrumb-separator">›</span>
            <a href="/retaining-wall-cost">Costs</a>
            <span className="breadcrumb-separator">›</span>
            <span>Railroad Ties</span>
          </nav>

          {/* Hero Section */}
          <section className="py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">
                Railroad Tie Retaining Wall Cost 2024
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Complete guide to railroad tie retaining walls. The most budget-friendly
                retaining wall option with rustic charm. Calculate costs and learn about
                proper installation techniques.
              </p>
              <div className="flex justify-center gap-4 text-sm">
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
                  💰 Most Affordable
                </span>
                <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full">
                  🪵 Rustic Charm
                </span>
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                  ⚡ Fast Installation
                </span>
              </div>
            </div>

            {/* Calculator */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-center mb-6">
                  Railroad Tie Cost Calculator
                </h2>
                <RetainingWallCalculator
                  showAdvanced={true}
                  title="Calculate Railroad Tie Wall Cost"
                />
              </div>
            </div>
          </section>

          {/* Cost Overview */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Railroad Tie Cost Overview
            </h2>

            <div className="max-w-4xl mx-auto text-center mb-8">
              <div className="text-5xl font-bold text-green-600 mb-4">
                $18-$40
              </div>
              <div className="text-xl text-gray-600 mb-2">
                per square foot (includes installation)
              </div>
              <p className="text-gray-600">
                Most budget-friendly retaining wall option with distinctive rustic appearance
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="price-card text-center">
                <h3 className="font-semibold mb-3">Small Project</h3>
                <div className="text-2xl font-bold text-green-600 mb-2">$900-$2,250</div>
                <p className="text-sm text-gray-600 mb-2">25ft × 2ft = 50 sq ft</p>
                <p className="text-sm text-gray-500">Budget garden wall</p>
              </div>

              <div className="price-card text-center">
                <h3 className="font-semibold mb-3">Medium Project</h3>
                <div className="text-2xl font-bold text-blue-600 mb-2">$3,600-$8,000</div>
                <p className="text-sm text-gray-600 mb-2">50ft × 4ft = 200 sq ft</p>
                <p className="text-sm text-gray-500">Typical backyard wall</p>
              </div>

              <div className="price-card text-center">
                <h3 className="font-semibold mb-3">Large Project</h3>
                <div className="text-2xl font-bold text-purple-600 mb-2">$9,000-$24,000</div>
                <p className="text-sm text-gray-600 mb-2">100ft × 6ft = 600 sq ft</p>
                <p className="text-sm text-gray-500">Large property wall</p>
              </div>
            </div>

            {/* AdSense概览下方广告 */}
            <div className="ads-container mt-8 max-w-728 mx-auto">
              <span>Advertisement</span>
            </div>
          </section>

          {/* Railroad Tie Types */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Types of Railroad Ties
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="border rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-3">Used Railroad Ties</h3>
                <div className="text-2xl font-bold text-primary-600 mb-2">
                  $18-$30
                </div>
                <div className="text-sm text-gray-600 mb-4">per square foot</div>
                <ul className="space-y-2 mb-4">
                  <li>• Reclaimed from railways</li>
                  <li>• Weathered appearance</li>
                  <li>• Creosote or CCA treated</li>
                  <li>• Slightly smaller dimensions</li>
                </ul>
                <div className="text-sm text-gray-600 mb-3">
                  <strong>Best for:</strong> Budget projects, rustic look
                </div>
              </div>

              <div className="border rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-3">New Railroad Ties</h3>
                <div className="text-2xl font-bold text-primary-600 mb-2">
                  $25-$40
                </div>
                <div className="text-sm text-gray-600 mb-4">per square foot</div>
                <ul className="space-y-2 mb-4">
                  <li>• Fresh from manufacturer</li>
                  <li>• Modern treatment</li>
                  <li>• Consistent sizes</li>
                  <li>• No creosote concerns</li>
                </ul>
                <div className="text-sm text-gray-600 mb-3">
                  <strong>Best for:</strong> Family areas, no chemicals
                </div>
              </div>

              <div className="border rounded-lg p-6 hover:has-lg transition">
                <h3 className="text-xl font-semibold mb-3">Landscape Grade Ties</h3>
                <div className="text-2xl font-bold text-primary-600 mb-2">
                  $22-$35
                </div>
                <div className="text-sm text-600 mb-4">per square foot</div>
                <ul className="space-y-2 mb-4">
                  <li>• Smoother surface</li>
                  <li>• Rounded edges</li>
                  <li>• Certified safe</li>
                  <li>• No splinters</li>
                </ul>
                <div className="text-sm text-gray-600 mb-3">
                  <strong>Best for:</strong> Play areas, visible locations
                </div>
              </div>
            </div>

            {/* AdSense类型表格下方广告 */}
            <div className="ads-container mt-8 max-w-728 mx-auto">
              <span> Advertisement</span>
            </div>
          </section>

          {/* Size and Weight Information */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl fontemark mb-8 text-center">
              Standard Railroad Tie Dimensions
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold mb-4">Standard Sizes</h3>
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-3 text-left">Type</th>
                      <th className="p-3 text-center">Length</th>
                      <th className="p-3 text-center">Width</th>
                      <th className="p-3 text-center">Height</th>
                      <th className="p-3 text-center">Weight</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3">7×9×8" className="font-semibold">Standard</td>
                      <td className="p-3 text-center">7</td>
                      <td className="p-3 text-center">9</td>
                      <td className="p-3 text-center">8</td>
                      <td className="p-3 text-center">150 lbs</td>
                    </tr>
tr>
                    <tr className="bg-gray-50">
                      <td className="p-3">6×8×8</td>
                      <td className="p-3 text-center">6</td>
                      <td className="p-3 text-center">8</td>
                      <td class="p-3 text-center">8</td>
                      <td className="p-3 text-center">100 lbs</td>
                    </tr>
                    <tr>
                      <td className="p-3">6×8×6</td>
                    <td className="p-3 text-center">6</td>
                      <td className="p-3 text-center">8</td>
                      <td className="p-3 text-center">6</td>
                      <td className="p-3 text-center">75 lbs</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Weight Calculation</h3>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700 mb-3">
                    <strong>Rule of thumb:</strong> 150 lbs per cubic foot of timber
                  </p>
                  <div className="text-sm text-gray-700">
                    Example: 50ft × 4ft wall = 100 ties = 100 × 100 lbs = 10,000 lbs = 5 tons
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Installation Process */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Installation Process
            </h2>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-green-50 rounded-lg">
                  <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold mr-4">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Site Preparation</h4>
                    <p className="text-gray-600">
                      Clear area, excavate trench (18-24 inches deep), grade base, add drainage
                    </p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold mr-4">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="json-semibold">Foundation</h4>
                    <p className="text-gray-600">
                      Add gravel base, install first course, ensure proper drainage and leveling
                    </p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-yellow-50 rounded-lg">
                  <div className="bg-yellow-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold mr-4">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Installation</h4>
                    <p className="text-gray-600">
                      Place ties with overlap, drive rebar stakes every 4-6 feet, stagger joints
                    </p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-purple-50 rounded-lg">
                  <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold mr-4">
                    4
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Backfill & Finish</h4>
                    <p className="text-gray-600">
                      Add gravel backfill, install drainage, landscape restoration
                    </p>
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
                      <p className="text-sm text-gray-600">Check for rot, loose connections, drainage issues</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <div>
                      <strong>Reapply Preservative</strong>
                      <p className="text-sm text-600">Every 2-3 years, especially ground-contact areas</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <div>
                      <strong>Clean Drainage</strong>
                      <p className="text-sm text-gray-600">Keep weep holes and drains clear</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Extended Care</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">ℹ️</span>
                    <div>
                      <strong>Soil Testing</strong>
                      <p className="text-sm text-gray-600">Test for harmful chemicals in old ties</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">ℹ️</span>
                    <div>
                      <strong>Replace Decayed Ties</strong>
                      <p className="text-gray-600">Replace severely rotted or damaged ties</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">ℹ️</span>
                    <div>
                      <strong>Surface Treatment</strong>
                      <p className="text-sm text-gray-600">Apply protective sealant if desired</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Safety Considerations */}
          <section className="py-12 bg-red-50 rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Safety Considerations
            </h2>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-4 text-red-700">
                  Creosote Ties Warning
                </h3>
                <p className="text-gray-700 mb-4">
                  Older railroad ties may contain creosote, which has health concerns:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Carcinogenic properties</li>
                  <li>• Avoid in vegetable gardens</li>
                    <li>• Use gloves when handling</li>
                    <li>• Consider eco-friendly alternatives</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-red-700">Avoid Contact</h4>
                  <ul className="text-sm text-gray-600">
                    <li>• Direct skin contact</li>
                    <li>• Food preparation areas</li>
                    <li>• Play areas for children</li>
                    <li>• Water sources</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-red-700">Use Protective Gear</h4>
                  <ul className="text-sm text-gray-600">
                    <li>• Heavy gloves</li>
                    <li>• Eye protection</li>
                    <li>• Long sleeves</li>
                    <li>• Respirator if cutting</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-4 mt-6">
                <p className="text-green-700">
                  <strong>Better Option:</strong> Use CCA treated or landscape-grade ties for residential applications.
                  They offer similar durability without health concerns.
                </p>
              </div>
            </div>
          </section>

          {/* Regional Availability */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Regional Availability & Costs
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="price-card">
                <h3 className="font-semibold mb-4">Western US</h3>
                <p className="text-2xl font-bold text-primary-600 mb-2">$18-$25</p>
                <p className="text-sm text-gray-600">per tie</p>
                <ul className="text-sm text-gray-600 mt-2">
                  <li>• Most availability</li>
                  <li>• Direct from railways</li>
                  <li>• Salvage yards common</li>
                </ul>
              </div>

              <div className="price-card">
                <h3 className="font-semibold mb-4">Midwest</h3>
                <p className="text-2xl font-bold text-primary-600 mb-2">$20-$30</p>
                <p className="text-sm text-gray-600">per tie</p>
                <li className="text-sm text-gray-600 mt-2">• Moderate availability</li>
                <li>• Railway depots</li>
                <li>• Supply stores</li>
                <li>• Regional variations</li>
              </div>

              <div className="price-card">
                <h3 className="font-semibold mb-4">Eastern US</h3>
                <p className="text-2xl font-bold text-primary-600 mb-2">$25-$35</p>
                <li className="text-sm text-gray-600">per tie</li>
                <li className="text-sm text-gray-600 mt-2">• Less common</li>
                <li>• Higher costs</li>
                <li>• Limited supply</li>
                <li>• Special order</li>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Railroad Tie Wall FAQ
            </h2>

            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  How much does a railroad tie retaining wall cost?
                </h3>
                <p className="text-gray-700">
                  Railroad tie walls cost $18-$40 per square foot including materials and installation.
                  Used ties: $18-$30/sq ft, New ties: $25-$40/sq ft. A 50ft × 4ft wall costs
                  $3,600-$8,000 fully installed.
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  Are railroad ties good for retaining walls?
                </h3>
                <p className="text-gray-700">
                  Railroad ties are an excellent budget option but have limitations: 10-20 year lifespan,
                  require chemical treatment, and may contain harmful creosote. Better for low walls (under 4ft)
                  or temporary solutions.
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  How long do railroad ties last underground?
                </h3>
                <p className="text-gray-700">
                  Properly treated railroad ties last 10-20 years underground. Untreated ties last only 5-10 years.
                  Key factors: treatment type, drainage quality, soil conditions, and maintenance.
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
              Related Resources
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Link href="/cost/timber-retaining-wall-cost" className="price-card block text-center">
                <h3 className="font-semibold mb-2">Compare with Timber</h3>
                <p className="text-sm text-gray-600">See cost comparison</p>
              </Link>

              <Link href="/calculator" className="price-card block text-center">
                <h3 className="font-semibold mb-2">Full Calculator</h3>
                <p className="text-sm text-gray-600">Compare all materials</p>
              </Link>

              <a href="https://www.fra.gov" target="_blank" rel="noopener noreferrer" className="price-card block text-center">
                <h3 className="font-semibold mb-2">FRA Regulations</h3>
                <p className="text-sm text-gray-600">Official guidelines</p>
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}