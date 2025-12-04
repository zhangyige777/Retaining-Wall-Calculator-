import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import RetainingWallCalculator from '../../components/RetainingWallCalculator'

export default function NewYorkRetainingWallCost() {
  const seoData = {
    title: "New York Retaining Wall Cost 2024 | NY Pricing Guide",
    description: "Calculate retaining wall costs in New York. Include freeze/thaw protection, NYC building codes, and high labor costs. Local pricing for all NY cities.",
    keywords: ["new york retaining wall cost", "ny retaining wall prices", "retaining wall new york city", "freeze thaw retaining wall", "retaining wall permits nyc"]
  }

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords.join(', ')} />
        <link rel="canonical" href="https://wallestimate.com/new-york/retaining-wall-cost" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="breadcrumb py-4">
            <a href="/">Home</a>
            <span className="breadcrumb-separator">›</span>
            <a href="/states">States</a>
            <span className="breadcrumb-separator">›</span>
            <span>New York</span>
          </nav>

          {/* Hero Section */}
          <section className="py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">
                New York Retaining Wall Cost Guide 2024
              </h1>
              <p className="text-xl text-gray-600">
                Complete pricing for retaining walls in New York state.
                Special requirements for freeze/thaw protection and NYC building codes.
                Costs are 32% above national average.
              </p>
            </div>

            {/* Calculator */}
            <div className="max-w-4xl mx-auto mb-12">
              <RetainingWallCalculator
                location="new-york"
                title="New York Retaining Wall Cost Calculator"
              />
            </div>
          </section>

          {/* NY Specific Costs */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              New York Retaining Wall Costs (32% Above National Average)
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
                    <td>Frost-Protected Concrete</td>
                    <td>$60-$85</td>
                    <td>Deep footings required</td>
                  </tr>
                  <tr>
                    <td>Bluestone</td>
                    <td>$75-$110</td>
                    <td>NY Native stone</td>
                  </tr>
                  <tr>
                    <td>Treated Timber</td>
                    <td>$30-$45</td>
                    <td>Ground contact grade</td>
                  </tr>
                  <tr>
                    <td>Brick</td>
                    <td>$65-$90</td>
                    <td>Popular in NYC</td>
                  </tr>
                </table>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">NY Additional Costs</h3>
                <table>
                  <tr>
                    <th>Requirement</th>
                    <th>Cost</th>
                    <th>Description</th>
                  </tr>
                  <tr>
                    <td>Frost Protection</td>
                    <td>$10-$20/ft</td>
                    <td>48 inch depth required</td>
                  </tr>
                  <tr>
                    <td>NYC Permit</td>
                    <td>$800-$2,500</td>
                    <td>Most complex in US</td>
                  </tr>
                  <tr>
                    <td>Engineering</td>
                    <td>$1,000-$6,000</td>
                    <td>Required for >3ft</td>
                  </tr>
                  <tr>
                    <td>DEP Approval</td>
                    <td>$300-$1,200</td>
                    <td>If affecting drainage</td>
                  </tr>
                </table>
              </div>
            </div>
          </section>

          {/* NYC Special Requirements */}
          <section className="py-12 bg-yellow-50 rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              NYC Special Requirements
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4 text-yellow-700">
                  Building Department
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Plan approval required</li>
                  <li>• Multiple inspections</li>
                  <li>• Licensed contractor only</li>
                  <li>• As-built drawings required</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4 text-yellow-700">
                  Environmental Protection
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• DEP permits needed</li>
                  <li>• Storm water management</li>
                  <li>• Tree protection required</li>
                  <li>• Noise restrictions apply</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4 text-yellow-700">
                  Special Zones
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Historic districts</li>
                  <li>• Flood zones requirements</li>
                  <li>• Landmark review</li>
                  <li>• Community board approval</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Major Cities */}
          <section className="py-12">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Costs in Major NY Cities
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="price-card">
                <h3 className="text-lg font-semibold">New York City</h3>
                <p className="text-2xl font-bold text-primary-600 mb-2">
                  $90-$140
                </p>
                <p className="text-gray-600 mb-4">per square foot</p>
                <Link href="/new-york/new-york-city/retaining-wall-cost"
                      className="text-blue-600 hover:underline">
                  View NYC Costs →
                </Link>
              </div>

              <div className="price-card">
                <h3 className="text-lg font-semibold">Buffalo</h3>
                <p className="text-2xl font-bold text-primary-600 mb-2">
                  $55-$85
                </p>
                <p className="text-gray-600 mb-4">per square foot</p>
                <Link href="/new-york/buffalo/retaining-wall-cost"
                      className="text-blue-600 hover:underline">
                  View Buffalo Costs →
                </Link>
              </div>

              <div className="price-card">
                <h3 className="text-lg font-semibold">Rochester</h3>
                <p className="text-2xl font-bold text-primary-600 mb-2">
                  $50-$80
                </p>
                <p className="text-gray-600 mb-4">per square foot</p>
                <Link href="/new-york/rochester/retaining-wall-cost"
                      className="text-blue-600 hover:underline">
                  View Rochester Costs →
                </Link>
              </div>
            </div>
          </section>

          {/* Repair Costs (Tier 2州的特殊内容) */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Retaining Wall Repair Costs in New York
            </h2>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <h3 className="text-xl font-semibold text-red-700 mb-3">
                High Repair Demand Due to Climate
              </h3>
              <p className="text-gray-700">
                New York's freeze/thaw cycles cause significant retaining wall damage.
                Common issues include: bulging walls, cracked foundations, failed drainage,
                and leaning structures. Repair costs range from $500-$2,500 per section.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Common Repairs</h4>
                <ul className="space-y-2">
                  <li>• Drainage repair: $1,000-$4,000</li>
                  <li>• Crack repair: $500-$2,000</li>
                  <li>• Wall rebuilding: $3,000-$12,000</li>
                  <li>• Foundation repair: $2,000-$8,000</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Prevention Tips</h4>
                <ul className="space-y-2">
                  <li>• Proper drainage installation</li>
                  <li>• Weep holes every 6 feet</li>
                  <li>• Flexible mortar joints</li>
                  <li>• Annual inspection required</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-6">
              <Link href="/new-york/retaining-wall-repair-cost" className="cta-button">
                View Complete Repair Guide
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}