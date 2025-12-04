import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import RetainingWallCalculator from '../components/RetainingWallCalculator'

export default function ConcreteRetainingWallCalculator() {
  const seoData = {
    title: "Concrete Retaining Wall Calculator 2024 | Free Instant Estimates",
    description: "Calculate concrete retaining wall costs instantly. Include poured concrete, concrete blocks, and reinforcement options. Get professional estimates.",
    keywords: ["concrete retaining wall calculator", "poured concrete calculator", "concrete wall cost estimator", "reinforced concrete calculator", "concrete block calculator"]
  }

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords.join(', ')} />
        <link rel="canonical" href="https://wallestimate.com/concrete-retaining-wall-calculator" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="breadcrumb py-4">
            <a href="/">Home</a>
            <span className="breadcrumb-separator">›</span>
            <a href="/calculator">Calculators</a>
            <span className="breadcrumb-separator">›</span>
            <span>Concrete Calculator</span>
          </nav>

          {/* Hero Section */}
          <section className="py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">
                Concrete Retaining Wall Calculator
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Professional concrete retaining wall cost calculator. Get instant estimates for
                poured concrete, concrete blocks, and reinforced walls. Include all materials and labor.
              </p>
              <div className="flex justify-center gap-4 text-sm">
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                  ⚡ Instant Results
                </span>
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
                  🏗️ Professional Grade
                </span>
                <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full">
                  📊 Detailed Breakdown
                </span>
              </div>
            </div>

            {/* AdSense顶部横幅 */}
            <div className="ads-container mb-8 max-w-728 mx-auto">
              <span>Advertisement</span>
            </div>

            {/* Enhanced Concrete Calculator */}
            <div className="max-w-5xl mx-auto mb-12">
              <div className="bg-white rounded-lg shadow-xl p-8">
                <h2 className="text-2xl font-bold text-center mb-8">
                  Calculate Your Concrete Wall Cost
                </h2>

                <RetainingWallCalculator
                  preselectedMaterial="concrete"
                  showAdvanced={true}
                  title="Concrete Retaining Wall Cost Calculator"
                />

                {/* Concrete Specific Options */}
                <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Concrete Options</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Concrete Type</label>
                      <select className="w-full px-4 py-2 rounded-lg text-gray-800">
                        <option>Standard 3000 PSI</option>
                        <option>High Strength 4000 PSI (+$5/sq ft)</option>
                        <option>Air-Entrained for Cold (+$3/sq ft)</option>
                        <option>Water-Resistant (+$4/sq ft)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Reinforcement</label>
                      <select className="w-full px-4 py-2 rounded-lg text-gray-800">
                        <option>No Reinforcement (walls under 3ft)</option>
                        <option>Rebar Standard (+$8/sq ft)</option>
                        <option>Rebar Heavy (+$12/sq ft)</option>
                        <option>Fiber Mesh (+$5/sq ft)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Concrete Volume Calculator */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Concrete Volume Calculator
            </h2>

            <div className="max-w-4xl mx-auto">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <p className="text-gray-700">
                  Use this calculator to determine how much concrete you'll need for your project.
                  Concrete is sold by cubic yard - 1 cubic yard = 27 cubic feet.
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-100 rounded-lg">
                  <label className="block text-sm font-medium mb-2">Length (feet)</label>
                  <input type="number" className="w-full px-3 py-2 rounded text-gray-800" placeholder="50" />
                </div>
                <div className="text-center p-4 bg-gray-100 rounded-lg">
                  <label className="block text-sm font-medium mb-2">Height (feet)</label>
                  <input type="number" className="w-full px-3 py-2 rounded text-gray-800" placeholder="4" />
                </div>
                <div className="text-center p-4 bg-gray-100 rounded-lg">
                  <label className="block text-sm font-medium mb-2">Thickness (feet)</label>
                  <input type="number" className="w-full px-3 py-2 rounded text-gray-800" placeholder="0.5" />
                </div>
                <div className="text-center p-4 bg-gray-100 rounded-lg">
                  <label className="block text-sm font-medium mb-2">Total Volume</label>
                  <div className="text-xl font-bold text-primary-600">37.0</div>
                  <div className="text-sm text-gray-600">cubic feet</div>
                  <div className="text-lg font-semibold text-blue-600">1.37</div>
                  <div className="text-sm text-gray-600">cubic yards</div>
                </div>
              </div>

              <button className="w-full cta-button" onClick={() => alert('Calculator would update here')}>
                Calculate Concrete Volume
              </button>

              {/* AdSense计算器下方广告 */}
              <div className="ads-container mt-8 max-w-728 mx-auto">
                <span>Advertisement</span>
              </div>
            </div>
          </section>

          {/* Concrete Types Guide */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Types of Concrete Retaining Walls
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="price-card">
                <h3 className="font-semibold mb-4 text-xl">Poured Concrete</h3>
                <div className="text-2xl font-bold text-primary-600 mb-3">$45-$60/sq ft</div>
                <ul className="text-sm text-gray-600 space-y-2 mb-4">
                  <li>• Monolithic construction</li>
                  <li>• No weak points</li>
                  <li>• Custom shapes possible</li>
                  <li>• Requires formwork</li>
                </ul>
                <Link href="/cost/poured-concrete-retaining-wall-cost" className="text-blue-600 hover:underline">
                  Learn More →
                </Link>
              </div>

              <div className="price-card">
                <h3 className="font-semibold mb-4 text-xl">Concrete Blocks</h3>
                <div className="text-2xl font-bold text-primary-600 mb-3">$35-$50/sq ft</div>
                <ul className="text-sm text-gray-600 space-y-2 mb-4">
                  <li>• CMU or decorative blocks</li>
                  <li>• Faster installation</li>
                  <li>• DIY friendly</li>
                  <li>• Mortar required</li>
                </ul>
                <Link href="/cost/concrete-block-retaining-wall-cost" className="text-blue-600 hover:underline">
                  Learn More →
                </Link>
              </div>

              <div className="price-card">
                <h3 className="font-semibold mb-4 text-xl">Segmental Systems</h3>
                <div className="text-2xl font-bold text-primary-600 mb-3">$50-$65/sq ft</div>
                <ul className="text-sm text-gray-600 space-y-2 mb-4">
                  <li>• Interlocking blocks</li>
                  <li>• No mortar needed</li>
                  <li>• Built-in drainage</li>
                  <li>• Curved designs easy</li>
                </ul>
                <Link href="/cost/segmental-retaining-wall-cost" className="text-blue-600 hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>
          </section>

          {/* Reinforcement Requirements */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Reinforcement Requirements
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full max-w-4xl mx-auto">
                <thead>
                  <tr>
                    <th>Wall Height</th>
                    <th>Rebar Size</th>
                    <th>Spacing</th>
                    <th>Additional Requirements</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Up to 3 ft</td>
                    <td>Not required</td>
                    <td>-</td>
                    <td>Control joints every 6 ft</td>
                  </tr>
                  <tr>
                    <td>3-5 ft</td>
                    <td>#4 (1/2")</td>
                    <td>24" vertical</td>
                    <td>Horizontal bars every 2 ft</td>
                  </tr>
                  <tr>
                    <td>5-8 ft</td>
                    <td>#5 (5/8")</td>
                    <td>18" vertical</td>
                    <td>Footings with rebar mat</td>
                  </tr>
                  <tr>
                    <td>8+ ft</td>
                    <td>#6 (3/4")</td>
                    <td>12" vertical</td>
                    <td>Engineering required</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Concrete Mix Requirements */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Concrete Mix Requirements
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold mb-4">By Climate</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span>Mild Climate</span>
                    <span className="font-semibold">3000 PSI</span>
                  </li>
                  <li className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span>Cold Climate</span>
                    <span className="font-semibold">3500 PSI, Air-Entrained</span>
                  </li>
                  <li className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span>Seismic Area</span>
                    <span className="font-semibold">4000 PSI</span>
                  </li>
                  <li className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span>Marine Environment</span>
                    <span className="font-semibold">4500 PSI, Sulfate Resistant</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Additives</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span>Water Reducer</span>
                    <span className="text-green-600">+ Strength</span>
                  </li>
                  <li className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span>Accelerator</span>
                    <span className="text-green-600">Faster Cure</span>
                  </li>
                  <li className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span>Plasticizer</span>
                    <span className="text-green-600">Better Workability</span>
                  </li>
                  <li className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span>Waterproofing</span>
                    <span className="text-green-600">Water Resistance</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Curing and Finish Time */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Curing Timeline
            </h2>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold mr-4">
                    Day 1
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Initial Set</h4>
                    <p className="text-gray-600">Form removal can begin, careful handling required</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold mr-4">
                    Day 7
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">70% Strength</h4>
                    <p className="text-gray-600">Light backfilling can begin with caution</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold mr-4">
                    Day 28
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Full Strength</h4>
                    <p className="text-gray-600">Complete backfill, design load achieved</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500">
                <p className="text-gray-700">
                  <strong>Note:</strong> Curing times vary with temperature and humidity.
                  Cold weather can double curing times. Keep concrete moist for first 7 days
                  for optimal strength.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Concrete Calculator FAQ
            </h2>

            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  How much concrete do I need for a retaining wall?
                </h3>
                <p className="text-gray-700">
                  Calculate using: Length × Height × Thickness = Volume in cubic feet.
                  Divide by 27 to get cubic yards. Add 10% extra for waste and variations.
                  Example: 50ft × 4ft × 0.5ft = 100 cubic feet = 3.7 cubic yards (order 4).
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  Does a concrete retaining wall need rebar?
                </h3>
                <p className="text-gray-700">
                  Yes, walls over 3 feet tall require reinforcement. Use #4 rebar
                  spaced 24 inches for 3-5 foot walls, larger walls need #5 or #6 rebar
                  with closer spacing as per engineering requirements.
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  What thickness should a concrete retaining wall be?
                </h3>
                <p className="text-gray-700">
                  Minimum 6 inches for walls up to 3 feet. Add 1 inch thickness for each
                  additional foot of height. 4-foot walls should be 8 inches thick,
                  6-foot walls should be 10-12 inches thick.
                </p>
              </div>
            </div>
          </section>

          {/* Related Calculators */}
          <section className="py-12 bg-white rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Related Calculators
            </h2>

            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <Link href="/retaining-wall-block-calculator" className="price-card block text-center">
                <h3 className="font-semibold mb-2">Block Calculator</h3>
                <p className="text-sm text-gray-600">Calculate block walls</p>
              </Link>

              <Link href="/cost/retaining-wall-cost-per-square-foot" className="price-card block text-center">
                <h3 className="font-semibold mb-2">Cost per Sq Ft</h3>
                <p className="text-sm text-gray-600">Detailed pricing</p>
              </Link>

              <Link href="/retaining-wall-cost-per-linear-foot" className="price-card block text-center">
                <h3 className="font-semibold mb-2">Cost per Linear Ft</h3>
                <p className="text-sm text-gray-600">Length-based pricing</p>
              </Link>

              <Link href="/calculator" className="price-card block text-center">
                <h3 className="font-semibold mb-2">Full Calculator</h3>
                <p className="text-sm text-gray-600">All materials</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}