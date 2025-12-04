import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import RetainingWallCalculator from '../../../components/RetainingWallCalculator'

export default function NewYorkCityRetainingWallCost() {
  const seoData = {
    title: "NYC Retaining Wall Cost 2024 | New York City Complete Pricing",
    description: "Calculate retaining wall costs in New York City. NYC DOB permits, freeze/thaw requirements, and Manhattan, Brooklyn, Queens pricing. Complete guide.",
    keywords: ["nyc retaining wall cost", "new york city retaining wall prices", "manhattan retaining wall cost", "brooklyn retaining wall", "nyc retaining wall permit"]
  }

  const nycBoroughs = [
    {
      name: "Manhattan",
      costMultiplier: 1.5,
      notes: "Highest costs, limited access",
      permitFee: "$2,000-$5,000"
    },
    {
      name: "Brooklyn",
      costMultiplier: 1.3,
      notes: "High demand, varied terrain",
      permitFee: "$1,500-$3,500"
    },
    {
      name: "Queens",
      costMultiplier: 1.25,
      notes: "Suburban rates, large properties",
      permitFee: "$1,200-$3,000"
    },
    {
      name: "Bronx",
      costMultiplier: 1.2,
      notes: "Hilly areas, mixed rates",
      permitFee: "$1,000-$2,500"
    },
    {
      name: "Staten Island",
      costMultiplier: 1.15,
      notes: "Most affordable borough",
      permitFee: "$800-$2,000"
    }
  ]

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords.join(', ')} />
        <link rel="canonical" href="https://wallestimate.com/new-york/new-york-city/retaining-wall-cost" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="breadcrumb py-4">
            <a href="/">Home</a>
            <span className="breadcrumb-separator">›</span>
            <a href="/new-york/retaining-wall-cost">New York</a>
            <span className="breadcrumb-separator">›</span>
            <span>New York City</span>
          </nav>

          {/* Hero Section */}
          <section className="py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">
                NYC Retaining Wall Cost 2024
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Complete New York City retaining wall cost guide. NYC DOB permits,
                extreme freeze/thaw considerations, and borough-specific pricing.
                NYC has the nation's most complex permitting process.
              </p>
              <div className="flex justify-center gap-4 mt-6">
                <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full">
                  🏙️ Highest US Costs
                </span>
                <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full">
                  📋 Complex Permits
                </span>
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                  🥶 Freeze/Thaw Critical
                </span>
              </div>
            </div>

            {/* Calculator */}
            <div className="max-w-4xl mx-auto mb-12">
              <RetainingWallCalculator
                location="new-york"
                title="NYC Retaining Wall Calculator"
              />
            </div>
          </section>

          {/* NYC Costs Overview */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              NYC Retaining Wall Costs Overview
            </h2>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8 max-w-4xl mx-auto">
              <h3 className="font-semibold mb-3">⚠️ NYC Premium</h3>
              <p className="text-gray-700">
                NYC has 32-50% higher costs than national average. This is due to:
                extreme labor costs, complex permitting, strict building codes, and
                challenging site conditions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="price-card">
                <h3 className="font-semibold mb-4 text-lg">Manhattan</h3>
                <div className="text-3xl font-bold text-red-600 mb-2">$90-$140</div>
                <p className="text-gray-600 mb-3">per square foot</p>
                <ul className="text-sm space-y-1">
                  <li>• Premium labor rates</li>
                  <li>• Limited site access</li>
                  <li>• Specialized equipment</li>
                  <li>• Premium material rates</li>
                </ul>
              </div>

              <div className="price-card">
                <h3 className="font-semibold mb-4 text-lg">Outer Boroughs</h3>
                <div className="text-3xl font-bold text-orange-600 mb-2">$65-$100</div>
                <p className="text-gray-600 mb-3">per square foot</p>
                <ul className="text-sm space-y-1">
                  <li>• More reasonable rates</li>
                  <li>• Better site access</li>
                  <li>• Local contractors</li>
                  <li>• Standard materials</li>
                </ul>
              </div>

              <div className="price-card">
                <h3 className="font-semibold mb-4 text-lg">NYC Average</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">$70-$110</div>
                <p className="text-gray-600 mb-3">per square foot</p>
                <ul className="text-sm space-y-1">
                  <li>• All boroughs</li>
                  <li>• Standard requirements</li>
                  <li>• Typical projects</li>
                  <li>• Complete installation</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Borough Pricing */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Costs by NYC Borough
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full max-w-5xl mx-auto">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-4 text-left">Borough</th>
                    <th className="p-4 text-center">Cost Range</th>
                    <th className="p-4 text-center">Permit Fee</th>
                    <th className="p-4 text-left">Key Factors</th>
                  </tr>
                </thead>
                <tbody>
                  {nycBoroughs.map((borough, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : ''}>
                      <td className="p-4 font-semibold">{borough.name}</td>
                      <td className="p-4 text-center font-bold text-primary-600">
                        ${Math.round(45 * borough.costMultiplier)}-${Math.round(60 * borough.costMultiplier)}
                      </td>
                      <td className="p-4 text-center">{borough.permitFee}</td>
                      <td className="p-4 text-sm">{borough.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* NYC DOB Permits */}
          <section className="py-12 bg-blue-50 rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              NYC DOB Permit Process
            </h2>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  Department of Buildings Requirements
                </h3>
                <p className="text-gray-700 mb-4">
                  NYC has the most complex retaining wall permitting in the US:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">When Permit Required</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Any wall over 3 feet tall</li>
                      <li>• Walls supporting structures</li>
                      <li>• Near property lines</li>
                      <li>• In flood zones</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Required Documents</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Professional Engineer plans</li>
                      <li>• Survey showing wall location</li>
                      <li>• Soil analysis report</li>
                      <li>• Drainage plans</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center p-4 bg-white rounded-lg">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold mr-4">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Plan Development</h4>
                    <p className="text-gray-600">Hire PE, develop plans, prepare documents (2-4 weeks)</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-white rounded-lg">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold mr-4">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">DOB Plan Review</h4>
                    <p className="text-gray-600">Submit to DOB, wait for approval (4-8 weeks)</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-white rounded-lg">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold mr-4">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Permit Issuance</h4>
                    <p className="text-gray-600">Pay fees, receive permit, begin work (1 week)</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* NYC Freeze/Thaw */}
          <section className="py-12 bg-cyan-50 rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              NYC Freeze/Thaw Considerations
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-cyan-700">
                  Winter Challenges
                </h3>
                <ul className="space-y-2">
                  <li>• 30-40 freeze cycles per year</li>
                  <li>• Ice expansion creates 20,000 PSI pressure</li>
                  <li>• Heaving and settling common</li>
                  <li>• Frost line: 36 inches minimum</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-cyan-700">
                  Required Solutions
                </h3>
                <ul className="space-y-2">
                  <li>• Air-entrained concrete (6% air)</li>
                  <li>• Deep foundations below frost line</li>
                  <li>• Comprehensive drainage system</li>
                  <li>• Expansion joints every 20 feet</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Site Access Challenges */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              NYC Site Access Challenges
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="price-card">
                <h3 className="font-semibold mb-4 text-lg">Manhattan</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• No street parking for equipment</li>
                  <li>• Street closure permits needed</li>
                  <li>• Limited working hours</li>
                  <li>• Crane access only</li>
                  <li>• Material delivery restrictions</li>
                </ul>
                <p className="text-sm font-semibold mt-4 text-red-600">
                  +40% to project costs
                </p>
              </div>

              <div className="price-card">
                <h3 className="font-semibold mb-4 text-lg">Brooklyn/Queens</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Narrow streets</li>
                  <li>• Parking challenges</li>
                  <li>• Multi-story buildings</li>
                  <li>• Neighbor coordination</li>
                  <li>• Debris removal difficult</li>
                </ul>
                <p className="text-sm font-semibold mt-4 text-orange-600">
                  +25% to project costs
                </p>
              </div>

              <div className="price-card">
                <h3 className="font-semibold mb-4 text-lg">Bronx/Staten Island</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Better access generally</li>
                  <li>• Driveways available</li>
                  <li>• Street parking possible</li>
                  <li>• Lower building density</li>
                  <li>• Equipment easier to stage</li>
                </ul>
                <p className="text-sm font-semibold mt-4 text-green-600">
                  +15% to project costs
                </p>
              </div>
            </div>
          </section>

          {/* Project Examples */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Recent NYC Project Examples
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Manhattan Townhouse</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="text-sm text-gray-500">Dimensions</span>
                    <div className="font-medium">30ft × 15ft</div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Location</span>
                    <div className="font-medium">Upper East Side</div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Material</span>
                    <div className="font-medium">Limestone Clad</div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Total Cost</span>
                    <div className="font-medium text-primary-600">$135,000</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Included crane operations, street closure permits, and custom limestone cladding.
                  DOB approval took 6 weeks due to landmark district.
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Brooklyn Hillside</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="text-sm text-gray-500">Dimensions</span>
                    <div className="font-medium">75ft × 12ft</div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Location</span>
                    <div className="font-medium">Park Slope</div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Material</span>
                    <div className="font-medium">Segmental Blocks</div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Total Cost</div>
                    <div className="font-medium text-primary-600">$78,000</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Complex engineering required for steep slope. Included extensive drainage system
                  and geogrid reinforcement.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              NYC Retaining Wall FAQ
            </h2>

            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  How much does a retaining wall cost in NYC?
                </h3>
                <p className="text-gray-700">
                  NYC retaining walls cost $70-$110 per square foot on average.
                  Manhattan: $90-$140/sq ft, Outer Boroughs: $65-$100/sq ft.
                  A typical 50ft × 4ft wall costs $14,000-$22,000 including DOB permits,
                  engineering, and NYC labor rates.
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  Do I need a permit for a retaining wall in NYC?
                </h3>
                <p className="text-gray-700">
                  Yes, NYC requires permits for any retaining wall over 3 feet tall.
                  The process takes 6-10 weeks and requires professional engineering plans,
                  survey, and DOB approval. Permit costs range $800-$5,000 depending on borough.
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  Why are NYC retaining walls so expensive?
                </h3>
                <p className="text-gray-700">
                  NYC costs are high due to: extreme labor rates (unions common),
                  complex DOB permitting, difficult site access, strict building codes,
                  specialized equipment requirements, and engineer-driven design process.
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  What's the best material for NYC retaining walls?
                </h3>
                <p className="text-gray-700">
                  Concrete and segmental blocks are most common in NYC due to durability,
                    freeze/thaw resistance, and DOB approval ease. Natural stone is premium
                    but requires additional engineering. Timber is rarely used due to
                    building codes.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}