import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import RetainingWallCalculator from '../../components/RetainingWallCalculator'

export default function FloridaRetainingWallCost() {
  const seoData = {
    title: "Florida Retaining Wall Cost 2024 | FL Complete Pricing Guide",
    description: "Calculate retaining wall costs in Florida. Hurricane protection requirements, flood zone considerations, and local pricing for Miami, Orlando, Tampa.",
    keywords: ["florida retaining wall cost", "florida retaining wall prices", "miami retaining wall cost", "hurricane proof retaining wall florida", "flood zone retaining wall"]
  }

  const floridaRegions = [
    { name: "Miami-Dade", costMultiplier: 1.02, notes: "Wind-borne debris region" },
    { name: "South Florida", costMultiplier: 1.02, notes: "Hurricane zone" },
    { name: "Central Florida", costMultiplier: 1.0, notes: "Moderate costs" },
    { name: "North Florida", costMultiplier: 0.98, notes: "Below average" },
    { name: "Panhandle", costMultiplier: 0.95, notes: "Most affordable" }
  ]

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords.join(', ')} />
        <link rel="canonical" href="https://wallestimate.com/florida/retaining-wall-cost" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="breadcrumb py-4">
            <a href="/">Home</a>
            <span className="breadcrumb-separator">›</span>
            <a href="/states">States</a>
            <span className="breadcrumb-separator">›</span>
            <span>Florida</span>
          </nav>

          {/* Hero Section */}
          <section className="py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">
                Florida Retaining Wall Cost 2024
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Complete Florida retaining wall cost guide. Special requirements for
                hurricane protection, flood zones, and sandy soil conditions.
                Florida costs are 2% above national average.
              </p>
              <div className="flex justify-center gap-4 mt-6">
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                  🌀 Hurricane Zone
                </span>
                <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full">
                  🏖️ Flood Zones
                </span>
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
                  🏖️ Sandy Soil
                </span>
              </div>
            </div>

            {/* Calculator */}
            <div className="max-w-4xl mx-auto mb-12">
              <RetainingWallCalculator
                location="florida"
                title="Florida Retaining Wall Cost Calculator"
              />
            </div>
          </section>

          {/* FL Specific Costs */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Florida Retaining Wall Costs (2% Above National Average)
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="price-card">
                <h3 className="font-semibold mb-4 text-lg">Base Materials</h3>
                <div className="text-2xl font-bold text-primary-600 mb-2">$46-$61</div>
                <p className="text-gray-600 mb-3">per square foot</p>
                <ul className="text-sm space-y-1">
                  <li>• Standard concrete: $46/sq ft</li>
                  <li>• Concrete blocks: $42/sq ft</li>
                  <li>• Natural stone: $56/sq ft</li>
                  <li>• Timber: $20/sq ft</li>
                </ul>
              </div>

              <div className="price-card">
                <h3 className="font-semibold mb-4 text-lg">Florida Adders</h3>
                <div className="text-2xl font-bold text-orange-600 mb-2">+$8-$15</div>
                <p className="text-gray-600 mb-3">per square foot</p>
                <ul className="text-sm space-y-1">
                  <li>• Hurricane protection: +$5-10</li>
                  <li>• Flood zone requirements: +$3-5</li>
                  <li>• Sandy soil prep: +$0-3</li>
                  <li>• Water management: +$2-5</li>
                </ul>
              </div>

              <div className="price-card">
                <h3 className="font-semibold mb-4 text-lg">Total Range</h3>
                <div className="text-2xl font-bold text-green-600 mb-2">$48-$70</div>
                <p className="text-gray-600 mb-3">per square foot</p>
                <ul className="text-sm space-y-1">
                  <li>• Includes all FL requirements</li>
                  <li>• Regional variations apply</li>
                  <li>• Seasonal pricing changes</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Florida Regional Costs */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Costs by Florida Region
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {floridaRegions.map((region, idx) => (
                <div key={idx} className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                  <div>
                    <h4 className="font-semibold">{region.name}</h4>
                    <p className="text-sm text-gray-600">{region.notes}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-primary-600">
                      ${Math.round(45 * region.costMultiplier)}-${Math.round(60 * region.costMultiplier)}
                    </div>
                    <p className="text-xs text-gray-500">per sq ft</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Hurricane Protection Requirements */}
          <section className="py-12 bg-yellow-50 rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Florida Hurricane Protection Requirements
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4 text-yellow-700">
                  Miami-Dade Requirements
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Wind-borne debris region</li>
                  <li>• Enhanced building codes</li>
                  <li>• Wind load design 180 MPH</li>
                  <li>• Sealed joints required</li>
                  <li>• +$8-$15 per sq ft</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4 text-yellow-700">
                  Statewide Requirements
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Miami-Dade compliance</li>
                  <li>• Wind load minimum 140 MPH</li>
                  <li>• Continuous reinforcement</li>
                  <li>• Enhanced connections</li>
                  <li>• +$5-$10 per sq ft</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4 text-yellow-700">
                  Coastal Requirements
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Salt spray protection</li>
                  <li>• Corrosion-resistant</li>
                  <li>• Stainless reinforcement</li>
                  <li>• Special coatings</li>
                  <li>• +$3-$8 per sq ft</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Flood Zone Requirements */}
          <section className="py-12 bg-blue-50 rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Florida Flood Zone Requirements
            </h2>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  Florida Floodplain Management
                </h3>
                <p className="text-gray-700 mb-4">
                  Florida has extensive flood zones requiring special consideration:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">V-Zone Requirements</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Elevation certificate</li>
                      <li>• Lowest floor elevation</li>
                      <li>• Flood-resistant materials</li>
                      <li>• Engineered design</li>
                      <li>• Freeboard requirement</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">A-Zone Requirements</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Flood insurance required</li>
                      <li>• BFE + 1 foot minimum</li>
                      <li>• Dry floodproofing possible</li>
                      <li>• Breakaway walls</li>
                      <li>• Flood vents</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-4">
                <p className="text-red-700">
                  <strong>Important:</strong> Always check Florida flood maps before building.
                  Requirements can significantly impact design and costs.
                </p>
              </div>
            </div>
          </section>

          {/* Major Cities */}
          <section className="py-12">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Costs in Major FL Cities
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="price-card">
                <h3 className="text-lg font-semibold">Miami</h3>
                <p className="text-2xl font-bold text-primary-600 mb-2">
                  $60-$90
                </p>
                <p className="text-gray-600 mb-4">per square foot</p>
                <Link href="/florida/miami/retaining-wall-cost"
                      className="text-blue-600 hover:underline">
                  View Miami Costs →
                </Link>
              </div>

              <div className="price-card">
                <h3 className="text-lg font-semibold">Orlando</h3>
                <p className="text-2xl font-bold text-primary-600 mb-2">
                  $45-$65
                </p>
                <p className="text-gray-600 mb-4">per square foot</p>
                <Link href="/florida/orlando/retaining-wall-cost"
                      className="text-blue-600 hover:underline">
                  View Orlando Costs →
                </Link>
              </div>

              <div className="price-card">
                <h3 className="text-lg font-semibold">Tampa</h3>
                <p className="text-2xl font-bold text-primary-600 mb-2">
                  $48-$68
                </p>
                <p className="text-gray-600 mb-4">per square foot</p>
                <Link href="/florida/tampa/retaining-wall-cost"
                      className="text-blue-600 hover:underline">
                  View Tampa Costs →
                </Link>
              </div>

              <div className="price-card">
                <h3 className="text-lg font-semibold">Jacksonville</h3>
                <p className="text-2xl font-bold text-primary-600 mb-2">
                  $43-$63
                </p>
                <p className="text-gray-600 mb-4">per square foot</p>
                <Link href="/florida/jacksonville/retaining-wall-cost"
                      className="text-blue-600 hover:underline">
                  View Jax Costs →
                </Link>
              </div>
            </div>
          </section>

          {/* Sandy Soil Considerations */}
          <section className="py-12 bg-orange-50 rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Florida Sandy Soil Considerations
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-orange-700">
                  Challenges
                </h3>
                <ul className="space-y-2">
                  <li>• Poor load-bearing capacity</li>
                  <li>• Requires deep foundations</li>
                  <li>• Excessive settlement risk</li>
                  <li>• Erosion problems</li>
                  <li>• High water table in areas</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-orange-700">
                  Solutions
                </h3>
                <ul className="space-y-2">
                  <li>• Helical piles or piers</li>
                  <li>• Geotechnical engineering</li>
                  <li>• Soil improvement</li>
                  <li>• Weight distribution</li>
                  <li>• Proper drainage</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Seasonal Considerations */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Florida Building Seasons
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
                      <strong>Winter (Nov-Feb)</strong>
                      <p className="text-sm text-gray-600">Dry season, cooler weather</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <div>
                      <strong>Spring (Mar-Apr)</strong>
                      <p className="text-sm text-gray-600">Mild temperatures, before rain</p>
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
                      <strong>Summer (Jun-Oct)</strong>
                      <p className="text-sm text-gray-600">Rainy season, storms possible</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">✗</span>
                    <div>
                      <strong>Peak Hurricane Season</strong>
                      <p className="text-sm text-gray-600">Aug-Sep, no construction</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-4 bg-yellow-50 rounded-lg max-w-4xl mx-auto">
              <p className="text-gray-700 text-center">
                <strong>Note:</strong> Many Florida contractors offer seasonal discounts of 5-15% during winter months.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Florida Retaining Wall FAQ
            </h2>

            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  How much does a retaining wall cost in Florida?
                </h3>
                <p className="text-gray-700">
                  Florida retaining walls cost $48-$70 per square foot including hurricane protection,
                  flood zone considerations, and sandy soil preparation. A typical 50ft × 4ft wall costs
                  $9,600-$14,000 including Florida-specific requirements.
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  Do I need hurricane protection for my retaining wall in Florida?
                </h3>
                <p className="text-gray-700">
                  Yes, all Florida retaining walls must meet hurricane protection codes. Miami-Dade has the strictest
                  requirements (180 MPH wind load), while other areas require minimum 140 MPH. Non-compliant walls
                  will fail during hurricanes.
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  Can I build a retaining wall in a Florida flood zone?
                </h3>
                <p className="text-gray-700">
                  Yes, but it requires special design. V-Zones need elevated designs, A-Zones may use dry floodproofing
                  with breakaway walls. Always check local flood maps and consult with engineers familiar with
                  Florida flood zone requirements.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}