import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import RetainingWallCalculator from '../../components/RetainingWallCalculator'

export default function OregonRetainingWallCost() {
  const seoData = {
    title: "Oregon Retaining Wall Cost 2024 | OR Complete Pricing Guide",
    description: "Calculate retaining wall costs in Oregon. Heavy rainfall, rot resistant materials, and environmental permit requirements. Local pricing for Portland, Eugene, Salem.",
    keywords: ["oregon retaining wall cost", "or retaining wall prices", "portland retaining wall cost", "oregon retaining wall permits", "rain drainage retaining wall oregon"]
  }

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords.join(', ')} />
        <link rel="canonical" href="https://wallestimate.com/oregon/retaining-wall-cost" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="breadcrumb py-4">
            <a href="/">Home</a>
            <span className="breadcrumb-separator">›</span>
            <a href="/states">States</a>
            <span className="breadcrumb-separator">›</span>
            <span>Oregon</span>
          </nav>

          {/* Hero Section */}
          <section className="py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">
                Oregon Retaining Wall Cost Guide 2024
              </h1>
              <p className="text-xl text-gray-600">
                Complete pricing guide for Oregon retaining walls. Special requirements for
                heavy rainfall (40+ inches annually), forest fire regulations, and
                environmental permits. Costs are 12% above national average.
              </p>
            </div>

            {/* Calculator */}
            <div className="max-w-4xl mx-auto mb-12">
              <RetainingWallCalculator
                location="oregon"
                title="Oregon Retaining Wall Cost Calculator"
              />
            </div>
          </section>

          {/* OR Specific Costs */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Oregon Retaining Wall Costs (12% Above National Average)
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
                    <td>$22-$38</td>
                    <td>.60 CCA mandatory</td>
                  </tr>
                  <tr>
                    <td>Basalt</td>
                    <td>$65-$95</td>
                    <td>OR native stone</td>
                  </tr>
                  <tr>
                    <td>Concrete</td>
                    <td>$50-$70</td>
                    <td>Waterproofing required</td>
                  </tr>
                  <tr>
                    <td>Natural Stone</td>
                    <td>$60-$85</td>
                    <td>Local sourcing preferred</td>
                  </tr>
                </table>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">OR Additional Costs</h3>
                <table>
                  <tr>
                    <th>Requirement</th>
                    <th>Cost</th>
                    <th>Description</th>
                  </tr>
                  <tr>
                    <td>DEQ Stormwater Permit</td>
                    <td>$250-$1,500</td>
                    <td>Mandatory for >1000 sq ft</td>
                  </tr>
                  <tr>
                    <td>Water Management</td>
                    <td>$25-$35/ft</td>
                    <td>Heavy duty drainage</td>
                  </tr>
                  <tr>
                    <td>Erosion Control</td>
                    <td>$3,000-$8,000</td>
                    <td>Required during construction</td>
                  </tr>
                  <tr>
                    <td>Tree Protection</td>
                    <td>$500-$3,000</td>
                    <td>If trees affected</td>
                  </tr>
                </table>
              </div>
            </div>
          </section>

          {/* Oregon Environmental Requirements */}
          <section className="py-12 bg-green-50 rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Oregon Environmental Requirements
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4 text-green-700">
                  Rain Management
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• 40+ inches annual rainfall</li>
                  <li>• DEQ stormwater permits</li>
                  <li>• Bioswales often required</li>
                  <li>• Rain garden integration</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4 text-green-700">
                  Fire Regulations
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Defensible space required</li>
                  <li>• Fire-resistant materials</li>
                  <li>• ODF regulations apply</li>
                  <li>• Seasonal restrictions</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4 text-green-700">
                  Environmental Impact
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Habitat assessment</li>
                    <li>• Wetland delineation</li>
                    <li>• Fish habitat protection</li>
                    <li>• Native plant restoration</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Major Cities */}
          <section className="py-12">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Costs in Major OR Cities
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="price-card">
                <h3 className="text-lg font-semibold">Portland</h3>
                <p className="text-2xl font-bold text-primary-600 mb-2">
                  $58-$88
                </p>
                <p className="text-gray-600 mb-4">per square foot</p>
                <Link href="/oregon/portland/retaining-wall-cost"
                      className="text-blue-600 hover:underline">
                  View Portland Costs →
                </Link>
              </div>

              <div className="price-card">
                <h3 className="text-lg font-semibold">Eugene</h3>
                <p className="text-2xl font-bold text-primary-600 mb-2">
                  $50-$75
                </p>
                <p className="text-gray-600 mb-4">per square foot</p>
                <Link href="/oregon/eugene/retaining-wall-cost"
                      className="text-blue-600 hover:underline">
                  View Eugene Costs →
                </Link>
              </div>

              <div className="price-card">
                <h3 className="text-lg font-semibold">Salem</h3>
                <p className="text-2xl font-bold text-primary-600 mb-2">
                  $48-$72
                </p>
                <p className="text-gray-600 mb-4">per square foot</p>
                <Link href="/oregon/salem/retaining-wall-cost"
                      className="text-blue-600 hover:underline">
                  View Salem Costs →
                </Link>
              </div>

              <div className="price-card">
                <h3 className="text-lg font-semibold">Gresham</h3>
                <p className="text-2xl font-bold text-primary-600 mb-2">
                  $52-78
                </p>
                <p className="text-gray-600 mb-4">per square foot</p>
                <Link href="/oregon/gresham/retaining-wall-cost"
                      className="text-blue-600 hover:underline">
                  View Gresham Costs →
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}