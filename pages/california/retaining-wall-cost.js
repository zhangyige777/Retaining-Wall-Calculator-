import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import RetainingWallCalculator from '../../components/RetainingWallCalculator'

export default function CaliforniaRetainingWallCost() {
  const seoData = {
    title: "California Retaining Wall Cost 2024 | Complete Pricing Guide",
    description: "Calculate retaining wall costs in California. Get instant estimates for seismic requirements, drainage systems, and high labor costs. Local pricing for all cities.",
    keywords: ["california retaining wall cost", "retaining wall california", "seismic retaining wall cost", "earthquake retaining wall california", "ca retaining wall prices"]
  }

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords.join(', ')} />
        <link rel="canonical" href="https://wallestimate.com/california/retaining-wall-cost" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="breadcrumb py-4">
            <a href="/">Home</a>
            <span className="breadcrumb-separator">›</span>
            <a href="/states">States</a>
            <span className="breadcrumb-separator">›</span>
            <span>California</span>
          </nav>

          {/* Hero Section */}
          <section className="py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">
                California Retaining Wall Cost Guide 2024
              </h1>
              <p className="text-xl text-gray-600">
                Complete pricing guide for retaining walls in California.
                Calculate costs including seismic requirements, drainage systems,
                and the state's highest labor rates.
              </p>
            </div>

            {/* AdSense横幅 */}
            <div className="ads-container mb-8">
              <span>Advertisement</span>
            </div>

            {/* Calculator */}
            <div className="max-w-4xl mx-auto mb-12">
              <RetainingWallCalculator
                location="california"
                title="California Retaining Wall Cost Calculator"
              />
            </div>
          </section>

          {/* California Specific Costs */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              California Retaining Wall Costs (45% Higher Than National Average)
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">By Material Type</h3>
                <table>
                  <tr>
                    <th>Material</th>
                    <th>Cost per sq ft</th>
                    <th>Special Requirements</th>
                  </tr>
                  <tr>
                    <td>Seismic Concrete</td>
                    <td>$65-$90</td>
                    <td>Steel reinforcement required</td>
                  </tr>
                  <tr>
                    <td>Natural Stone</td>
                    <td>$80-$110</td>
                    <td>Engineered foundation</td>
                  </tr>
                  <tr>
                    <td>Timber (Treated)</td>
                    <td>$30-$45</td>
                    <td>Pressure-treated grade</td>
                  </tr>
                  <tr>
                    <td>Segmental Blocks</td>
                    <td>$75-$95</td>
                    <td>Geo-grid reinforcement</td>
                  </tr>
                </table>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">California Additional Costs</h3>
                <table>
                  <tr>
                    <th>Requirement</th>
                    <th>Cost</th>
                    <th>Description</th>
                  </tr>
                  <tr>
                    <td>Seismic Engineering</td>
                    <td>$2,000-$8,000</td>
                    <td>Required for walls > 3ft</td>
                  </tr>
                  <tr>
                    <td>Permit Fees</td>
                    <td>$500-$2,500</td>
                    <td>Varies by county</td>
                  </tr>
                  <tr>
                    <td>Drainage System</td>
                    <td>$15-$25/ft</td>
                    <td>Mandatory in CA</td>
                  </tr>
                  <tr>
                    <td>Inspection Fees</td>
                    <td>$300-$800</td>
                    <td>Multiple inspections</td>
                  </tr>
                </table>
              </div>
            </div>

            {/* AdSense表格后广告 */}
            <div className="ads-container mt-8">
              <span>Advertisement</span>
            </div>
          </section>

          {/* Major Cities */}
          <section className="py-12">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Costs in Major California Cities
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="price-card">
                <h3 className="text-lg font-semibold">Los Angeles</h3>
                <p className="text-2xl font-bold text-primary-600 mb-2">
                  $85-$125
                </p>
                <p className="text-gray-600 mb-4">per square foot</p>
                <Link href="/california/los-angeles/retaining-wall-cost"
                      className="text-blue-600 hover:underline">
                  View LA Costs →
                </Link>
              </div>

              <div className="price-card">
                <h3 className="text-lg font-semibold">San Francisco</h3>
                <p className="text-2xl font-bold text-primary-600 mb-2">
                  $95-$145
                </p>
                <p className="text-gray-600 mb-4">per square foot</p>
                <Link href="/california/san-francisco/retaining-wall-cost"
                      className="text-blue-600 hover:underline">
                  View SF Costs →
                </Link>
              </div>

              <div className="price-card">
                <h3 className="text-lg font-semibold">San Diego</h3>
                <p className="text-2xl font-bold text-primary-600 mb-2">
                  $75-$115
                </p>
                <p className="text-gray-600 mb-4">per square foot</p>
                <Link href="/california/san-diego/retaining-wall-cost"
                      className="text-blue-600 hover:underline">
                  View San Diego Costs →
                </Link>
              </div>

              <div className="price-card">
                <h3 className="text-lg font-semibold">Sacramento</h3>
                <p className="text-2xl font-bold text-primary-600 mb-2">
                  $65-$95
                </p>
                <p className="text-gray-600 mb-4">per square foot</p>
                <Link href="/california/sacramento/retaining-wall-cost"
                      className="text-blue-600 hover:underline">
                  View Sacramento Costs →
                </Link>
              </div>

              <div className="price-card">
                <h3 className="text-lg font-semibold">San Jose</h3>
                <p className="text-2xl font-bold text-primary-600 mb-2">
                  $90-$135
                </p>
                <p className="text-gray-600 mb-4">per square foot</p>
                <Link href="/california/san-jose/retaining-wall-cost"
                      className="text-blue-600 hover:underline">
                  View San Jose Costs →
                </Link>
              </div>

              <div className="price-card">
                <h3 className="text-lg font-semibold">Fresno</h3>
                <p className="text-2xl font-bold text-primary-600 mb-2">
                  $55-$85
                </p>
                <p className="text-gray-600 mb-4">per square foot</p>
                <Link href="/california/fresno/retaining-wall-cost"
                      className="text-blue-600 hover:underline">
                  View Fresno Costs →
                </Link>
              </div>
            </div>
          </section>

          {/* California Requirements */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-6">
              California Retaining Wall Requirements
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary-700">
                  Seismic Requirements
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>Engineering design required for walls over 3 feet</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>Steel reinforcement mandatory in seismic zones</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>Foundation depth minimum 2 feet below grade</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>Soil testing required for slopes over 2:1</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary-700">
                  Drainage Requirements
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>Weep holes every 6-8 feet required</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>French drain system behind wall</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>Gravel backfill minimum 12 inches</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>Waterproof membrane for areas with high water table</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-12">
            <h2 className="text-3xl font-bold mb-8 text-center">
              California Retaining Wall FAQ
            </h2>

            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  What's the average cost of a retaining wall in California?
                </h3>
                <p className="text-gray-700">
                  California's retaining wall costs average $65-$125 per square foot,
                  45% higher than the national average due to seismic requirements,
                  high labor costs, and strict building codes.
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  Do I need a permit for a retaining wall in California?
                </h3>
                <p className="text-gray-700">
                  Yes, California requires permits for any retaining wall over 3 feet tall.
                  The process includes engineering review, soil testing, and multiple
                  inspections. Permit costs range from $500-$2,500 depending on the county.
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  What are the seismic requirements for retaining walls in California?
                </h3>
                <p className="text-gray-700">
                  California requires engineered design for walls over 3 feet, including
                  steel reinforcement, proper foundation depth, soil analysis, and
                  compliance with local seismic zone requirements.
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  How long does it take to get a retaining wall permit in California?
                </h3>
                <p className="text-gray-700">
                  Permit processing typically takes 2-6 weeks in California,
                  depending on the county and project complexity. Seismic areas
                  may require additional review time.
                </p>
              </div>
            </div>
          </section>

          {/* Related Pages */}
          <section className="py-12 bg-white rounded-lg">
            <h2 className="text-2xl font-bold mb-6">
              Related California Pages
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/california/retaining-wall-repair-cost" className="price-card block hover:bg-gray-50">
                <h3 className="text-lg font-semibold mb-2">California Retaining Wall Repair Cost</h3>
                <p className="text-gray-600">Costs for repairing damaged retaining walls in California</p>
              </Link>

              <Link href="/california/concrete-retaining-wall-cost" className="price-card block hover:bg-gray-50">
                <h3 className="text-lg font-semibold mb-2">California Concrete Retaining Wall Cost</h3>
                <p className="text-gray-600">Pricing for concrete walls with seismic reinforcement</p>
              </Link>

              <Link href="/california/retaining-wall-calculator" className="price-card block hover:bg-gray-50">
                <h3 className="text-lg font-semibold mb-2">California Retaining Wall Calculator</h3>
                <p className="text-gray-600">Calculate costs including California-specific requirements</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}