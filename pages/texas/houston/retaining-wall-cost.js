import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import RetainingWallCalculator from '../../../components/RetainingWallCalculator'

export default function HoustonRetainingWallCost() {
  const seoData = {
    title: "Houston Retaining Wall Cost 2024 | TX Complete Pricing Guide",
    description: "Calculate retaining wall costs in Houston. Expansive clay soil considerations, Houston permits, and local pricing for all areas.",
    keywords: ["houston retaining wall cost", "houston tx retaining wall prices", "retaining wall houston", "expansive soil retaining wall houston", "houston retaining wall permit"]
  }

  const houstonAreas = [
    { name: "The Woodlands", costMultiplier: 1.05, notes: "Premium residential" },
    { name: "Sugar Land", costMultiplier: 1.03, notes: "Suburban rates" },
    { name: "Katy", costMultiplier: 0.98, notes: "Competitive market" },
    { name: "Cypress", costMultiplier: 0.95, notes: "Growing area" },
    { name: "Pearland", costMultiplier: 0.93, notes: "Lower costs" },
    { name: "Kingwood", costMultiplier: 1.0, notes: "Average rates" }
  ]

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords.join(', ')} />
        <link rel="canonical" href="https://wallestimate.com/texas/houston/retaining-wall-cost" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="breadcrumb py-4">
            <a href="/">Home</a>
            <span className="breadcrumb-separator">›</span>
            <a href="/texas/retaining-wall-cost">Texas</a>
            <span className="breadcrumb-separator">›</span>
            <span>Houston</span>
          </nav>

          {/* Hero Section */}
          <section className="py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">
                Houston Retaining Wall Cost 2024
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Complete Houston retaining wall cost guide. Special considerations for
                expansive clay soils, Houston flood zones, and local contractor pricing.
                Houston costs are below national average.
              </p>
              <div className="flex justify-center gap-4 mt-6">
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
                  💰 Below Average Costs
                </span>
                <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full">
                  🏗️ Expansive Clay Soil
                </span>
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                  🌧️ Flood Zone Rules
                </span>
              </div>
            </div>

            {/* Calculator */}
            <div className="max-w-4xl mx-auto mb-12">
              <RetainingWallCalculator
                location="texas"
                title="Houston Retaining Wall Calculator"
              />
            </div>
          </section>

          {/* Houston Specific Costs */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Houston Retaining Wall Costs
            </h2>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8 max-w-4xl mx-auto">
              <h3 className="font-semibold mb-3">💡 Houston Advantage</h3>
              <p className="text-gray-700">
                Houston's retaining wall costs are 8% below national average due to
                competitive contractor market and lower labor costs. However, special
                considerations for clay soil may add to base costs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="price-card">
                <h3 className="font-semibold mb-4 text-lg">Base Costs</h3>
                <div className="text-2xl font-bold text-primary-600 mb-2">$38-$58</div>
                <p className="text-gray-600 mb-3">per square foot</p>
                <ul className="text-sm space-y-1">
                  <li>• Competitive market</li>
                  <li>• Lower labor rates</li>
                  <li>• Good material access</li>
                </ul>
              </div>

              <div className="price-card">
                <h3 className="font-semibold mb-4 text-lg">Clay Soil Adders</h3>
                <div className="text-2xl font-bold text-orange-600 mb-2">+$8-$15</div>
                <p className="text-gray-600 mb-3">per square foot</p>
                <ul className="text-sm space-y-1">
                  <li>• Deep foundations needed</li>
                  <li>• Moisture barriers</li>
                  <li>• Reinforced footings</li>
                </ul>
              </div>

              <div className="price-card">
                <h3 className="font-semibold mb-4 text-lg">Total Range</h3>
                <div className="text-2xl font-bold text-green-600 mb-2">$40-$65</div>
                <p className="text-gray-600 mb-3">per square foot</p>
                <ul className="text-sm space-y-1">
                  <li>• With clay protection</li>
                  <li>• Typical Houston wall</li>
                  <li>• All materials included</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Houston Area Costs */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Costs by Houston Area
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {houstonAreas.map((area, idx) => (
                <div key={idx} className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                  <div>
                    <h4 className="font-semibold">{area.name}</h4>
                    <p className="text-sm text-gray-600">{area.notes}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-primary-600">
                      ${Math.round(45 * area.costMultiplier)}-${Math.round(60 * area.costMultiplier)}
                    </div>
                    <p className="text-xs text-gray-500">per sq ft</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Houston Clay Soil Issues */}
          <section className="py-12 bg-orange-50 rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Houston Clay Soil Challenges
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4 text-orange-700">
                  Expansive Clay
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Expands 7-12% when wet</li>
                  <li>• Can exert 15,000 PSI pressure</li>
                  <li>• Seasonal movement 3-6 inches</li>
                  <li>• Damage to foundations common</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4 text-orange-700">
                  Required Solutions
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Moisture barriers mandatory</li>
                  <li>• Deep footings 24-36 inches</li>
                  <li>• Bell-bottom piers often needed</li>
                  <li>• Proper drainage critical</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4 text-orange-700">
                  Cost Impact
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• +$8-$15 per sq ft</li>
                  <li>• Engineering required</li>
                  <li>• Specialized contractors</li>
                  <li>• Long-term savings</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Flood Zone Requirements */}
          <section className="py-12 bg-blue-50 rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Houston Flood Zone Requirements
            </h2>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  Houston Floodplain Management
                </h3>
                <p className="text-gray-700 mb-4">
                  Houston's flat terrain and heavy rainfall require special considerations:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Flood Zone Requirements</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Certificate of elevation</li>
                      <li>• Freeboard requirements</li>
                      <li>• Flood-resistant materials</li>
                      <li>• Engineered drainage</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Additional Costs</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Flood permit: $500-$2,000</li>
                      <li>• Survey required</li>
                      <li>• Raised foundations</li>
                      <li>• Pump systems</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-4">
                <p className="text-red-700">
                  <strong>Important:</strong> Always check Houston flood maps before building.
                  Requirements vary significantly by location within Houston metro area.
                </p>
              </div>
            </div>
          </section>

          {/* Houston Permit Process */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Houston Permit Process
            </h2>

            <div className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold">
                  1
                </div>
                <h4 className="font-semibold mb-2">COH Permit</h4>
                <p className="text-sm text-gray-600">City of Houston permitting</p>
              </div>

              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold">
                  2
                </div>
                <h4 className="font-semibold mb-2">Harris County</h4>
                <p className="text-sm text-gray-600">Unincorporated areas</p>
              </div>

              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold">
                  3
                </div>
                <h4 className="font-semibold mb-2">MUD Districts</h4>
                <p className="text-sm text-gray-600">Municipal utility districts</p>
              </div>

              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold">
                  4
                </div>
                <h4 className="font-semibold mb-2">HOA Approval</h4>
                <p className="text-sm text-gray-600">Most subdivisions</p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-yellow-50 rounded-lg max-w-4xl mx-auto">
              <p className="text-gray-700 text-center">
                <strong>Timeline:</strong> 2-4 weeks for most permits. Complex projects may take 6-8 weeks.
              </p>
            </div>
          </section>

          {/* Seasonal Considerations */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Houston Building Seasons
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-600">
                  Best Times to Build
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <div>
                      <strong>Spring (March-May)</strong>
                      <p className="text-sm text-gray-600">Mild temperatures, dry soil</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <div>
                      <strong>Fall (October-November)</strong>
                      <p className="text-sm text-gray-600">Cooler weather, less rain</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-red-600">
                  Challenging Times
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">✗</span>
                    <div>
                      <strong>Summer (June-August)</strong>
                      <p className="text-sm text-gray-600">Extreme heat, limited work hours</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">✗</span>
                    <div>
                      <strong>Winter (Dec-Feb)</strong>
                      <p className="text-sm text-gray-600">Rain season, soil saturation</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Local Resources */}
          <section className="py-12 bg-white rounded-lg">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Houston Resources
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="price-card text-center">
                <h3 className="font-semibold mb-3">City Resources</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• COH Permit Center</li>
                  <li>• Houston Public Works</li>
                  <li>• Harris County Engineering</li>
                </ul>
              </div>

              <div className="price-card text-center">
                <h3 className="font-semibold mb-3">Soil Testing</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• TxDOT Geotech Lab</li>
                  <li>• Private testing firms</li>
                  <li>• University of Houston</li>
                </ul>
              </div>

              <div className="price-card text-center">
                <h3 className="font-semibold mb-3">Contractor Groups</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Greater Houston Builders</li>
                  <li>• Houston Contractors Association</li>
                  <li>• BBB Houston</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}