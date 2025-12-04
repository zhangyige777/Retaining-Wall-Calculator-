import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import RetainingWallCalculator from '../../components/RetainingWallCalculator'

export default function WashingtonRetainingWallCost() {
  const seoData = {
    title: "Washington Retaining Wall Cost 2024 | WA Pricing Guide",
    description: "Calculate retaining wall costs in Washington state. Include rain protection, rot resistance for Pacific Northwest climate. Local pricing for Seattle, Spokane, Tacoma.",
    keywords: ["washington retaining wall cost", "wa retaining wall prices", "seattle retaining wall cost", "pacific northwest retaining wall", "waterproof retaining wall washington"]
  }

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords.join(', ')} />
        <link rel="canonical" href="https://wallestimate.com/washington/retaining-wall-cost" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="breadcrumb py-4">
            <a href="/">Home</a>
            <span className="breadcrumb-separator">›</span>
            <a href="/states">States</a>
            <span className="breadcrumb-separator">›</span>
            <span>Washington</span>
          </nav>

          {/* Hero Section */}
          <section className="py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">
                Washington Retaining Wall Cost Guide 2024
              </h1>
              <p className="text-xl text-gray-600">
                Complete pricing guide for Washington state. Special requirements for
                heavy rainfall, rot resistance, and steep slopes common in the Pacific Northwest.
                Costs are 15% above national average.
              </p>
            </div>

            {/* Calculator */}
            <div className="max-w-4xl mx-auto mb-12">
              <RetainingWallCalculator
                location="washington"
                title="Washington Retaining Wall Cost Calculator"
              />
            </div>
          </section>

          {/* WA Specific Costs */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Washington Retaining Wall Costs (15% Above National Average)
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
                    <td>Pressure-Treated Wood</td>
                    <td>$25-$40</td>
                    <td>Ground contact .60 CCA</td>
                  </tr>
                  <tr>
                    <td>Basalt/Boulder</td>
                    <td>$80-$120</td>
                    <td>WA Native stone</td>
                  </tr>
                  <tr>
                    <td>Concrete</td>
                    <td>$55-$75</td>
                    <td>Waterproof additives</td>
                  </tr>
                  <tr>
                    <td>Segmental Blocks</td>
                    <td>$60-$80</td>
                    <td>Drainage integrated</td>
                  </tr>
                </table>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">WA Additional Costs</h3>
                <table>
                  <tr>
                    <th>Requirement</th>
                    <th>Cost</th>
                    <th>Description</th>
                  </tr>
                  <tr>
                    <td>Waterproofing</td>
                    <td>$8-$15/ft</td>
                    <td>Essential in WA</td>
                  </tr>
                  <tr>
                    <td>Drainage System</td>
                    <td>$20-$30/ft</td>
                    <td>Heavy-duty required</td>
                  </tr>
                  <tr>
                    <td>Permit Fees</td>
                    <td>$300-$1,200</td>
                    <td>Varies by county</td>
                  </tr>
                  <tr>
                    <td>Geotech Report</td>
                    <td>$1,500-$4,000</td>
                    <td>Slope areas</td>
                  </tr>
                </table>
              </div>
            </div>
          </section>

          {/* Pacific Northwest Requirements */}
          <section className="py-12 bg-blue-50 rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Pacific Northwest Special Requirements
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  Rain Protection
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• 40+ inches annual rainfall</li>
                  <li>• Waterproof membrane required</li>
                  <li>• Extra drainage layers</li>
                  <li>• Sloped top for runoff</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  Rot Resistance
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Heartwood preferred</li>
                  <li>• Above-grade protection</li>
                  <li>• Proper ventilation gaps</li>
                  <li>• Regular maintenance needed</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  Steep Slopes
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Engineering required >4ft</li>
                  <li>• Terraced solutions common</li>
                  <li>• Soil stabilization key</li>
                  <li>• Erosion control needed</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Major Cities */}
          <section className="py-12">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Costs in Major WA Cities
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="price-card">
                <h3 className="text-lg font-semibold">Seattle</h3>
                <p className="text-2xl font-bold text-primary-600 mb-2">
                  $65-$95
                </p>
                <p className="text-gray-600 mb-4">per square foot</p>
                <Link href="/washington/seattle/retaining-wall-cost"
                      className="text-blue-600 hover:underline">
                  View Seattle Costs →
                </Link>
              </div>

              <div className="price-card">
                <h3 className="text-lg font-semibold">Spokane</h3>
                <p className="text-2xl font-bold text-primary-600 mb-2">
                  $50-$75
                </p>
                <p className="text-gray-600 mb-4">per square foot</p>
                <Link href="/washington/spokane/retaining-wall-cost"
                      className="text-blue-600 hover:underline">
                  View Spokane Costs →
                </Link>
              </div>

              <div className="price-card">
                <h3 className="text-lg font-semibold">Tacoma</h3>
                <p className="text-2xl font-bold text-primary-600 mb-2">
                  $55-$80
                </p>
                <p className="text-gray-600 mb-4">per square foot</p>
                <Link href="/washington/tacoma/retaining-wall-cost"
                      className="text-blue-600 hover:underline">
                  View Tacoma Costs →
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}