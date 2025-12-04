import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import RetainingWallCalculator from '../../components/RetainingWallCalculator'

export default function PennsylvaniaRetainingWallCost() {
  const seoData = {
    title: "Pennsylvania Retaining Wall Cost 2024 | PA Complete Pricing Guide",
    description: "Calculate retaining wall costs in Pennsylvania. Limestone soil considerations, freeze/thaw cycles, and local pricing for Philadelphia, Pittsburgh, Allentown.",
    keywords: ["pennsylvania retaining wall cost", "pa retaining wall prices", "philadelphia retaining wall cost", "pittsburgh retaining wall cost", "limestone soil retaining wall"]
  }

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords.join(', ')} />
        <link rel="canonical" href="https://wallestimate.com/pennsylvania/retaining-wall-cost" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="breadcrumb py-4">
            <a href="/">Home</a>
            <span className="breadcrumb-separator">›</span>
            <a href="/states">States</a>
            <span className="breadcrumb-separator">›</span>
            <span>Pennsylvania</span>
          </nav>

          {/* Hero Section */}
          <section className="py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">
                Pennsylvania Retaining Wall Cost Guide 2024
              </h1>
              <p className="text-xl text-gray-600">
                Complete pricing guide for PA retaining walls. Special considerations for
                limestone soil, freeze/thaw cycles, and historical district requirements.
                Costs are 8% above national average.
              </p>
            </div>

            {/* Calculator */}
            <div className="max-w-4xl mx-auto mb-12">
              <RetainingWallCalculator
                location="pennsylvania"
                title="Pennsylvania Retaining Wall Cost Calculator"
              />
            </div>
          </section>

          {/* PA Specific Costs */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Pennsylvania Retaining Wall Costs (8% Above National Average)
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Material Costs</h3>
                <table>
                  <tr>
                    <th>Material</th>
                    <th>Cost per sq ft</th>
                    <th>PA Considerations</th>
                  </tr>
                  <tr>
                    <td>Limestone</td>
                    <td>$45-$65</td>
                    <td>PA Native stone</td>
                  </tr>
                  <tr>
                    <td>Concrete</td>
                    <td>$50-$70</td>
                    <td>Freeze/thaw resistant mix</td>
                  </tr>
                  <tr>
                    <td>Fieldstone</td>
                    <td>$55-$80</td>
                    <td>Local sourcing available</td>
                  </tr>
                  <tr>
                    <td>Treated Timber</td>
                    <td>$25-$40</td>
                    <td>Ground contact required</td>
                  </tr>
                </table>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">PA Additional Costs</h3>
                <table>
                  <tr>
                    <th>Requirement</th>
                    <th>Cost</th>
                    <th>Description</th>
                  </tr>
                  <tr>
                    <td>Limestone Testing</td>
                    <td>$400-$1,200</td>
                    <td>Karst topography areas</td>
                  </tr>
                  <tr>
                    <td>Frost Protection</td>
                    <td>$8-$15/ft</td>
                    <td>36 inch depth required</td>
                  </tr>
                  <tr>
                    <td>Historical Review</td>
                    <td>$500-$3,000</td>
                    <td>Historical districts</td>
                  </tr>
                  <tr>
                    <td>DEP Permit</td>
                    <td>$200-$800</td>
                    <td>Watershed areas</td>
                  </tr>
                </table>
              </div>
            </div>
          </section>

          {/* PA Special Requirements */}
          <section className="py-12 bg-orange-50 rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Pennsylvania Special Considerations
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4 text-orange-700">
                  Limestone Geology
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Karst topography common</li>
                  <li>• Sinkhole risk in areas</li>
                  <li>• Rock drilling often needed</li>
                  <li>• Soil stability testing required</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4 text-orange-700">
                  Freeze/Thaw Cycles
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• 20-35 cycles annually</li>
                  <li>• Air-entrained concrete required</li>
                  <li>• Proper drainage critical</li>
                  <li>• Flexible joints needed</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4 text-orange-700">
                  Historical Areas
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• PHMC review required</li>
                  <li>• Material restrictions</li>
                  <li>• Design approval needed</li>
                  <li>• Additional permit fees</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Major Cities */}
          <section className="py-12">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Costs in Major PA Cities
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="price-card">
                <h3 className="text-lg font-semibold">Philadelphia</h3>
                <p className="text-2xl font-bold text-primary-600 mb-2">
                  $55-$85
                </p>
                <p className="text-gray-600 mb-4">per square foot</p>
                <Link href="/pennsylvania/philadelphia/retaining-wall-cost"
                      className="text-blue-600 hover:underline">
                  View Philly Costs →
                </Link>
              </div>

              <div className="price-card">
                <h3 className="text-lg font-semibold">Pittsburgh</h3>
                <p className="text-2xl font-bold text-primary-600 mb-2">
                  $48-$72
                </p>
                <p className="text-gray-600 mb-4">per square foot</p>
                <Link href="/pennsylvania/pittsburgh/retaining-wall-cost"
                      className="text-blue-600 hover:underline">
                  View Pittsburgh Costs →
                </Link>
              </div>

              <div className="price-card">
                <h3 className="text-lg font-semibold">Allentown</h3>
                <p className="text-2xl font-bold text-primary-600 mb-2">
                  $45-$68
                </p>
                <p className="text-gray-600 mb-4">per square foot</p>
                <Link href="/pennsylvania/allentown/retaining-wall-cost"
                      className="text-blue-600 hover:underline">
                  View Allentown Costs →
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}