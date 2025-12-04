import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import RetainingWallCalculator from '../../components/RetainingWallCalculator'

export default function TexasRetainingWallCost() {
  const seoData = {
    title: "Texas Retaining Wall Cost 2024 | TX Pricing Guide",
    description: "Calculate retaining wall costs in Texas. Include expansive clay soil considerations and hill country requirements. Local pricing for Houston, Dallas, Austin, San Antonio.",
    keywords: ["texas retaining wall cost", "tx retaining wall prices", "houston retaining wall cost", "hill country retaining wall", "expansive soil retaining wall texas"]
  }

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords.join(', ')} />
        <link rel="canonical" href="https://wallestimate.com/texas/retaining-wall-cost" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="breadcrumb py-4">
            <a href="/">Home</a>
            <span className="breadcrumb-separator">›</span>
            <a href="/states">States</a>
            <span className="breadcrumb-separator">›</span>
            <span>Texas</span>
          </nav>

          {/* Hero Section */}
          <section className="py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">
                Texas Retaining Wall Cost Guide 2024
              </h1>
              <p className="text-xl text-gray-600">
                Complete pricing guide for Texas retaining walls. Special considerations for
                expansive clay soils, hill country terrain, and extreme weather conditions.
                Costs are 8% below national average.
              </p>
            </div>

            {/* Calculator */}
            <div className="max-w-4xl mx-auto mb-12">
              <RetainingWallCalculator
                location="texas"
                title="Texas Retaining Wall Cost Calculator"
              />
            </div>
          </section>

          {/* TX Specific Costs */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Texas Retaining Wall Costs (8% Below National Average)
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Material Costs</h3>
                <table>
                  <tr>
                    <th>Material</th>
                    <th>Cost per sq ft</th>
                    <th>Special Requirements</th>
                  </tr>
                  <tr>
                    <td>Limestone</td>
                    <td>$45-$65</td>
                    <td>TX Native stone</td>
                  </tr>
                  <tr>
                    <td>Concrete</td>
                    <td>$40-$60</td>
                    <td>Expansion joints</td>
                  </tr>
                  <tr>
                    <td>Railroad Ties</td>
                    <td>$18-$28</td>
                    <td>Cedar treatment preferred</td>
                  </tr>
                  <tr>
                    <td>Segmental</td>
                    <td>$45-$65</td>
                    <td>Geogrid reinforcement</td>
                  </tr>
                </table>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">TX Additional Costs</h3>
                <table>
                  <tr>
                    <th>Requirement</th>
                    <th>Cost</th>
                    <th>Description</th>
                  </tr>
                  <tr>
                    <td>Soil Testing</td>
                    <td>$500-$2,000</td>
                    <td>Expansive clay analysis</td>
                  </tr>
                  <tr>
                    <td>Moisture Barriers</td>
                    <td>$8-$15/ft</td>
                    <td>Clay soil protection</td>
                  </tr>
                  <tr>
                    <td>Deep Footings</td>
                    <td>$20-$40/ft</td>
                    <td>36 inches minimum</td>
                  </tr>
                  <tr>
                    <td>Permit Fees</td>
                    <td>$100-$500</td>
                    <td>Varies by city</td>
                  </tr>
                </table>
              </div>
            </div>
          </section>

          {/* Texas Climate Considerations */}
          <section className="py-12 bg-orange-50 rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Texas Special Considerations
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4 text-orange-700">
                  Expansive Clay Soil
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Expands 7-10% when wet</li>
                  <li>• Can exert 15,000 PSI pressure</li>
                  <li>• Special footings required</li>
                  <li>• Moisture barriers essential</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4 text-orange-700">
                  Extreme Weather
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• 100°F+ summer temperatures</li>
                  <li>• Occasional hard freezes</li>
                  <li>• Heavy rain events</li>
                  <li>• High winds (coastal)</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4 text-orange-700">
                  Hill Country
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Limestone bedrock common</li>
                  <li>• Steep slopes prevalent</li>
                  <li>• Rock drilling often needed</li>
                  <li>• Erosion control critical</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Major Cities */}
          <section className="py-12">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Costs in Major TX Cities
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="price-card">
                <h3 className="text-lg font-semibold">Houston</h3>
                <p className="text-2xl font-bold text-primary-600 mb-2">
                  $40-$60
                </p>
                <p className="text-gray-600 mb-4">per square foot</p>
                <Link href="/texas/houston/retaining-wall-cost"
                      className="text-blue-600 hover:underline">
                  View Houston Costs →
                </Link>
              </div>

              <div className="price-card">
                <h3 className="text-lg font-semibold">Dallas</h3>
                <p className="text-2xl font-bold text-primary-600 mb-2">
                  $45-$65
                </p>
                <p className="text-gray-600 mb-4">per square foot</p>
                <Link href="/texas/dallas/retaining-wall-cost"
                      className="text-blue-600 hover:underline">
                  View Dallas Costs →
                </Link>
              </div>

              <div className="price-card">
                <h3 className="text-lg font-semibold">Austin</h3>
                <p className="text-2xl font-bold text-primary-600 mb-2">
                  $50-$70
                </p>
                <p className="text-gray-600 mb-4">per square foot</p>
                <Link href="/texas/austin/retaining-wall-cost"
                      className="text-blue-600 hover:underline">
                  View Austin Costs →
                </Link>
              </div>

              <div className="price-card">
                <h3 className="text-lg font-semibold">San Antonio</h3>
                <p className="text-2xl font-bold text-primary-600 mb-2">
                  $38-$58
                </p>
                <p className="text-gray-600 mb-4">per square foot</p>
                <Link href="/texas/san-antonio/retaining-wall-cost"
                      className="text-blue-600 hover:underline">
                  View San Antonio Costs →
                </Link>
              </div>

              <div className="price-card">
                <h3 className="text-lg font-semibold">Fort Worth</h3>
                <p className="text-2xl font-bold text-primary-600 mb-2">
                  $42-$62
                </p>
                <p className="text-gray-600 mb-4">per square foot</p>
                <Link href="/texas/fort-worth/retaining-wall-cost"
                      className="text-blue-600 hover:underline">
                  View Fort Worth Costs →
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}