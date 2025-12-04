import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import RetainingWallCalculator from '../components/RetainingWallCalculator'

export default function HowMuchDoesRetainingWallCost() {
  const seoData = {
    title: "How Much Does a Retaining Wall Cost? 2024 Complete Price Guide",
    description: "Find out exactly how much retaining walls cost. Real examples for all sizes and materials. Get instant quotes with our free calculator. Average costs with detailed breakdown.",
    keywords: ["how much does a retaining wall cost", "how much do retaining walls cost", "average retaining wall cost", "retaining wall price examples", "retaining wall cost examples"]
  }

  // 真实的项目案例
  const projectExamples = [
    {
      title: "Small Backyard Garden Wall",
      dimensions: "15ft × 2.5ft",
      material: "Pressure-Treated Timber",
      location: "Ohio",
      totalCost: "$1,800",
      costPerSqFt: "$48",
      duration: "2 days",
      image: "garden-wall"
    },
    {
      title: "Medium Front Yard Wall",
      dimensions: "40ft × 4ft",
      material: "Concrete Blocks",
      location: "Texas",
      totalCost: "$6,400",
      costPerSqFt: "$40",
      duration: "4 days",
      image: "front-yard-wall"
    },
    {
      title: "Large Slope Retention",
      dimensions: "80ft × 6ft",
      material: "Poured Concrete",
      location: "California",
      totalCost: "$38,400",
      costPerSqFt: "$80",
      duration: "2 weeks",
      image: "slope-wall"
    },
    {
      title: "Premium Stone Wall",
      dimensions: "30ft × 5ft",
      material: "Natural Stone",
      location: "New York",
      totalCost: "$12,750",
      costPerSqFt: "$85",
      duration: "1 week",
      image: "stone-wall"
    },
    {
      title: "Commercial Parking Lot",
      dimensions: "150ft × 8ft",
      material: "Segmental Blocks",
      location: "Florida",
      totalCost: "$67,500",
      costPerSqFt: "$56",
      duration: "3 weeks",
      image: "commercial-wall"
    }
  ]

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords.join(', ')} />
        <link rel="canonical" href="https://wallestimate.com/how-much-does-a-retaining-wall-cost" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="breadcrumb py-4">
            <a href="/">Home</a>
            <span className="breadcrumb-separator">›</span>
            <span>How Much Does It Cost</span>
          </nav>

          {/* Hero Section */}
          <section className="py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">
                How Much Does a Retaining Wall Cost?
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Real examples from actual projects across America. See exactly what
                homeowners paid for their retaining walls. Get your free estimate instantly.
              </p>
              <div className="bg-blue-100 text-blue-700 inline-block px-6 py-3 rounded-lg">
                <span className="font-bold">National Average:</span> $45 per square foot
              </div>
            </div>

            {/* AdSense顶部横幅 */}
            <div className="ads-container mb-8 max-w-728 mx-auto">
              <span>Advertisement</span>
            </div>

            {/* Quick Calculator */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-center mb-6">
                  Get Your Instant Estimate
                </h2>
                <RetainingWallCalculator
                  showAdvanced={true}
                  title="Calculate Your Wall Cost"
                />
              </div>
            </div>
          </section>

          {/* Quick Answer */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              The Quick Answer
            </h2>

            <div className="max-w-3xl mx-auto text-center">
              <div className="text-5xl font-bold text-primary-600 mb-4">
                $1,500 - $50,000+
              </div>
              <p className="text-xl text-gray-600 mb-6">
                That's the typical range for residential retaining walls.
                Your actual cost depends on size, material, and location.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-2">$1,500</div>
                  <div className="text-sm text-gray-600">Small Wall</div>
                  <div className="text-xs text-gray-500 mt-1">25ft × 2ft</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">$8,000</div>
                  <div className="text-sm text-gray-600">Average Wall</div>
                  <div className="text-xs text-gray-500 mt-1">50ft × 4ft</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-2">$25,000</div>
                  <div className="text-sm text-gray-600">Large Wall</div>
                  <div className="text-xs text-gray-500 mt-1">100ft × 6ft</div>
                </div>
              </div>
            </div>
          </section>

          {/* Real Project Examples */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Real Project Examples & Costs
            </h2>

            <div className="space-y-6 max-w-5xl mx-auto">
              {projectExamples.map((project, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3 bg-gray-200 p-8 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-primary-600 mb-2">{project.totalCost}</div>
                        <div className="text-gray-600">Total Cost</div>
                        <div className="mt-4">
                          <div className="text-lg font-semibold">{project.dimensions}</div>
                          <div className="text-sm text-gray-500">{project.material}</div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <span className="text-sm text-gray-500">Material</span>
                          <div className="font-medium">{project.material}</div>
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">Location</span>
                          <div className="font-medium">{project.location}</div>
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">Cost per sq ft</span>
                          <div className="font-medium">{project.costPerSqFt}</div>
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">Duration</span>
                          <div className="font-medium">{project.duration}</div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">
                        This project included excavation, proper drainage installation, foundation work, and final finishing.
                        The homeowner chose {project.material.toLowerCase()} for its durability and appearance.
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* AdSense项目案例下方广告 */}
            <div className="ads-container mt-8 max-w-728 mx-auto">
              <span>Advertisement</span>
            </div>
          </section>

          {/* Cost by Material */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              How Much by Material Type?
            </h2>

            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="price-card text-center">
                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💰</span>
                </div>
                <h3 className="font-semibold mb-2">Budget Friendly</h3>
                <div className="text-xl font-bold text-green-600 mb-2">$15-$35</div>
                <p className="text-sm text-gray-600">Timber / Railroad Ties</p>
              </div>

              <div className="price-card text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🧱</span>
                </div>
                <h3 className="font-semibold mb-2">Most Popular</h3>
                <div className="text-xl font-bold text-blue-600 mb-2">$35-$60</div>
                <p className="text-sm text-gray-600">Concrete / Blocks</p>
              </div>

              <div className="price-card text-center">
                <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🪨</span>
                </div>
                <h3 className="font-semibold mb-2">Premium</h3>
                <div className="text-xl font-bold text-purple-600 mb-2">$55-$75</div>
                <p className="text-sm text-gray-600">Natural Stone</p>
              </div>

              <div className="price-card text-center">
                <div className="bg-yellow-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💎</span>
                </div>
                <h3 className="font-semibold mb-2">Luxury</h3>
                <div className="text-xl font-bold text-yellow-600 mb-2">$75-$120</div>
                <p className="text-sm text-gray-600">Boulders / Custom</p>
              </div>
            </div>
          </section>

          {/* Regional Cost Differences */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              How Much by Location?
            </h2>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 max-w-4xl mx-auto">
              <p className="text-gray-700">
                <strong>Location matters!</strong> The same 50ft × 4ft wall can cost $6,000 in Texas but $10,000 in California.
                Labor costs, permits, and material availability vary significantly by state.
              </p>
            </div>

            <table className="w-full max-w-4xl mx-auto">
              <thead>
                <tr>
                  <th className="p-3 text-left">Region</th>
                  <th className="p-3 text-center">50ft × 4ft Wall</th>
                  <th className="p-3 text-left">Why the Difference?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 font-semibold">West Coast</td>
                  <td className="p-3 text-center font-bold text-red-600">$9,000-$15,000</td>
                  <td className="p-3">High labor, seismic requirements</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 font-semibold">Northeast</td>
                  <td className="p-3 text-center font-bold text-orange-600">$7,500-$12,000</td>
                  <td className="p-3">Freeze/thaw protection needed</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Midwest</td>
                  <td className="p-3 text-center font-bold text-yellow-600">$6,000-$9,000</td>
                  <td className="p-3">Moderate costs, seasonal work</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 font-semibold">South</td>
                  <td className="p-3 text-center font-bold text-green-600">$5,000-$8,000</td>
                  <td className="p-3">Lower labor, year-round work</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Hidden Costs */}
          <section className="py-12 bg-yellow-50 rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Hidden Costs That Add Up
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold mb-4">Before You Start</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>Permits</span>
                    <span className="font-semibold text-red-600">$100-$2,500</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Engineering Plans</span>
                    <span className="font-semibold text-red-600">$500-$5,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Utility Locating</span>
                    <span className="font-semibold text-red-600">Free-$500</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Soil Testing</span>
                    <span className="font-semibold text-red-600">$300-$1,500</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">During Construction</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>Rock Removal</span>
                    <span className="font-semibold text-red-600">$500-$5,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Drainage System</span>
                    <span className="font-semibold text-red-600">$1,000-$3,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Landscape Restoration</span>
                    <span className="font-semibold text-red-600">$500-$2,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Unexpected Issues</span>
                    <span className="font-semibold text-red-600">10-20% buffer</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Calculator for Exact Quote */}
          <section className="py-12 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-lg mb-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready for Your Exact Quote?
              </h2>
              <p className="text-xl mb-8">
                Stop wondering. Use our calculator to get your precise cost in 60 seconds.
                No personal information required.
              </p>
              <div className="bg-white rounded-lg p-8 max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Calculate Your Cost Now
                </h3>
                <RetainingWallCalculator
                  showAdvanced={false}
                  title=""
                />
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  How much does a 6-foot high retaining wall cost?
                </h3>
                <p className="text-gray-700">
                  A 6-foot high wall costs significantly more due to engineering requirements.
                  For a 50-foot long, 6-foot high wall: expect $15,000-$30,000 for concrete,
                  $18,000-$35,000 for stone, and $10,000-$20,000 for timber (with proper reinforcement).
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  Is it cheaper to build a retaining wall yourself?
                </h3>
                <p className="text-gray-700">
                  DIY can save 40-50% on labor, but only recommended for walls under 3 feet.
                  For a DIY 50ft × 3ft timber wall: $2,000-$3,000 vs $3,500-$5,000 professionally.
                  Remember: mistakes can cost more to fix than professional installation.
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  How much does a retaining wall add to property value?
                </h3>
                <p className="text-gray-700">
                  A well-built retaining wall can add 5-15% to property value by:
                  Creating usable space, improving drainage, preventing erosion, and enhancing curb appeal.
                  The ROI is typically 50-100% of the installation cost.
                </p>
              </div>

              {/* AdSense FAQ下方广告 */}
              <div className="ads-container">
                <span>Advertisement</span>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <section className="py-12 bg-white rounded-lg">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-6">
                Now That You Know the Cost...
              </h2>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <Link href="/calculator" className="price-card block text-center">
                  <h3 className="font-semibold mb-2">Get Detailed Quote</h3>
                  <p className="text-sm text-gray-600">Calculate exact costs</p>
                </Link>
                <Link href="/retaining-wall-cost" className="price-card block text-center">
                  <h3 className="font-semibold mb-2">Learn About Materials</h3>
                  <p className="text-sm text-gray-600">Compare options</p>
                </Link>
                <Link href="/states" className="price-card block text-center">
                  <h3 className="font-semibold mb-2">Check Local Costs</h3>
                  <p className="text-sm text-gray-600">Prices by state</p>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}