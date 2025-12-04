import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import RetainingWallCalculator from '../../../components/RetainingWallCalculator'

export default function LosAngelesRetainingWallCost() {
  const seoData = {
    title: "Los Angeles Retaining Wall Cost 2024 | LA Pricing Guide",
    description: "Calculate retaining wall costs in Los Angeles. Seismic requirements, LA city permits, and local contractor pricing. Complete guide for LA homeowners.",
    keywords: ["los angeles retaining wall cost", "la retaining wall prices", "retaining wall los angeles", "seismic retaining wall los angeles", "la city retaining wall permit"]
  }

  const laNeighborhoods = [
    { name: "Beverly Hills", costMultiplier: 1.4, notes: "Premium rates, strict codes" },
    { name: "Santa Monica", costMultiplier: 1.35, notes: "Coastal requirements" },
    { name: "Pasadena", costMultiplier: 1.3, notes: "Historical areas" },
    { name: "Sherman Oaks", costMultiplier: 1.25, notes: "Hilly terrain" },
    { name: "Long Beach", costMultiplier: 1.2, notes: "Soil conditions" },
    { name: "San Fernando Valley", costMultiplier: 1.15, notes: "Suburban rates" }
  ]

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords.join(', ')} />
        <link rel="canonical" href="https://wallestimate.com/california/los-angeles/retaining-wall-cost" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="breadcrumb py-4">
            <a href="/">Home</a>
            <span className="breadcrumb-separator">›</span>
            <a href="/california/retaining-wall-cost">California</a>
            <span className="breadcrumb-separator">›</span>
            <span>Los Angeles</span>
          </nav>

          {/* Hero Section */}
          <section className="py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">
                Los Angeles Retaining Wall Cost 2024
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Complete LA retaining wall cost guide. Includes seismic requirements,
                LA city permits, and local contractor pricing. Los Angeles has
                the highest retaining wall costs in the nation.
              </p>
              <div className="flex justify-center gap-4 mt-6">
                <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full">
                  🔴 Highest US Costs
                </span>
                <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full">
                  🏗️ Seismic Requirements
                </span>
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                  📋 LA City Permits
                </span>
              </div>
            </div>

            {/* Calculator */}
            <div className="max-w-4xl mx-auto mb-12">
              <RetainingWallCalculator
                location="california"
                title="Los Angeles Retaining Wall Calculator"
              />
            </div>
          </section>

          {/* LA Specific Costs */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Los Angeles Retaining Wall Costs
            </h2>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8 max-w-4xl mx-auto">
              <h3 className="font-semibold mb-3">💡 LA Cost Premium</h3>
              <p className="text-gray-700">
                Los Angeles has 45% higher costs than national average due to seismic requirements,
                strict building codes, and high labor costs. Budget accordingly.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="price-card">
                <h3 className="font-semibold mb-4 text-lg">Material Costs</h3>
                <div className="text-2xl font-bold text-primary-600 mb-2">$65-$95</div>
                <p className="text-gray-600 mb-3">per square foot</p>
                <ul className="text-sm space-y-1">
                  <li>• Seismic concrete: +$15/sq ft</li>
                  <li>• Engineering reinforcement</li>
                  <li>• Premium material rates</li>
                </ul>
              </div>

              <div className="price-card">
                <h3 className="font-semibold mb-4 text-lg">Labor Costs</h3>
                <div className="text-2xl font-bold text-primary-600 mb-2">$80-$150</div>
                <p className="text-gray-600 mb-3">per hour</p>
                <ul className="text-sm space-y-1">
                  <li>• Licensed contractors only</li>
                  <li>• Union rates common</li>
                  <li>• Liability insurance high</li>
                </ul>
              </div>

              <div className="price-card">
                <h3 className="font-semibold mb-4 text-lg">Permit & Fees</h3>
                <div className="text-2xl font-bold text-primary-600 mb-2">$2,000-$8,000</div>
                <p className="text-gray-600 mb-3">total project</p>
                <ul className="text-sm space-y-1">
                  <li>• LADBS fees: $1,500-$5,000</li>
                  <li>• Engineering: $2,000-$10,000</li>
                  <li>• Inspection fees: $500-$2,000</li>
                </ul>
              </div>
            </div>
          </section>

          {/* LA Neighborhood Pricing */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Costs by LA Neighborhood
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {laNeighborhoods.map((hood, idx) => (
                <div key={idx} className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                  <div>
                    <h4 className="font-semibold">{hood.name}</h4>
                    <p className="text-sm text-gray-600">{hood.notes}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-primary-600">
                      {Math.round(45 * hood.costMultiplier)}-{Math.round(60 * hood.costMultiplier)}
                    </div>
                    <p className="text-xs text-gray-500">per sq ft</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* LA Seismic Requirements */}
          <section className="py-12 bg-red-50 rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              LA Seismic Requirements (Critical)
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4 text-red-700">
                  Engineering Required
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Walls over 3ft require CA licensed engineer</li>
                  <li>• Structural calculations</li>
                  <li>• Soil report needed</li>
                  <li>• Seismic zone D2 requirements</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4 text-red-700">
                  Reinforcement Standards
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• #5 rebar minimum 18" spacing</li>
                  <li>• Double rebar for >6ft walls</li>
                  <li>• Seismic hooks on all rebar</li>
                  <li>• Concrete: 3000 PSI min</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4 text-red-700">
                  Foundation Requirements
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Footings 24-48 inches deep</li>
                  <li>• Keyway for shear resistance</li>
                  <li>• Gravel base 12 inches</li>
                  <li>• Compaction testing required</li>
                </ul>
              </div>
            </div>
          </section>

          {/* LA Permit Process */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              LA City Permit Process
            </h2>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold mr-4">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Pre-Application</h4>
                    <p className="text-gray-600">Engage engineer, prepare plans, soil testing (1-2 weeks)</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold mr-4">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">LADBS Plan Check</h4>
                    <p className="text-gray-600">Submit to LA Department of Building Safety (2-6 weeks)</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold mr-4">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Permit Issuance</h4>
                    <p className="text-gray-600">Pay fees, receive permit (1 week)</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold mr-4">
                    4
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Inspections</h4>
                    <p className="text-gray-600">Foundation, formwork, reinforcement, final (4-6 inspections)</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Project Examples */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Recent LA Project Examples
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Beverly Hills Estate Wall</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="text-sm text-gray-500">Dimensions</span>
                    <div className="font-medium">80ft × 8ft</div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Material</span>
                    <div className="font-medium">Decorative Concrete</div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Total Cost</span>
                    <div className="font-medium text-primary-600">$96,000</div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Duration</span>
                    <div className="font-medium">3 weeks</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Included custom formwork, stamping, and premium finish. City permits took 4 weeks.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Sherman Oaks Hillside Wall</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="text-sm text-gray-500">Dimensions</span>
                    <div className="font-medium">120ft × 12ft</div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Material</span>
                    <div className="font-medium">Segmental Blocks</div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Total Cost</span>
                    <div className="font-medium text-primary-600">$168,000</div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Duration</span>
                    <div className="font-medium">6 weeks</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Complex engineering required due to slope. Included geogrid reinforcement and extensive drainage.
                </p>
              </div>
            </div>
          </section>

          {/* LA Contractors Guide */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Finding LA Contractors
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="price-card">
                <h3 className="font-semibold mb-4">License Check</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• CSLB # mandatory</li>
                  <li>• Class C-8 for concrete</li>
                  <li>• Insurance $1M minimum</li>
                  <li>• Worker's comp required</li>
                </ul>
              </div>

              <div className="price-card">
                <h3 className="font-semibold mb-4">Average Rates</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Foreman: $90-$140/hr</li>
                  <li>• Mason: $85-$120/hr</li>
                  <li>• Laborer: $45-$65/hr</li>
                  <li>• Engineer: $150-$250/hr</li>
                </ul>
              </div>

              <div className="price-card">
                <h3 className="font-semibold mb-4">Where to Find</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Angie's List Premium</li>
                  <li>• HomeAdvisor Pro</li>
                  <li>• Local HBA referrals</li>
                  <li>• Architect recommendations</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Los Angeles Retaining Wall FAQ
            </h2>

            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  How much does a retaining wall cost in Los Angeles?
                </h3>
                <p className="text-gray-700">
                  LA retaining walls cost $65-$95 per square foot, the highest in the nation.
                  A typical 50ft × 4ft wall costs $13,000-$19,000 including seismic requirements,
                  engineering, and LA city permits.
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  Do I need a permit for a retaining wall in Los Angeles?
                </h3>
                <p className="text-gray-700">
                  Yes, LA requires permits for any retaining wall over 3 feet tall.
                  The process involves LADBS review, engineering plans, and multiple inspections.
                  Permit fees range $1,500-$5,000 plus engineering costs.
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  How long does it take to get a retaining wall permit in LA?
                </h3>
                <p className="text-gray-700">
                  The LA permit process takes 4-8 weeks total: 1-2 weeks for engineering plans,
                  2-6 weeks for LADBS plan check, and 1 week for permit issuance.
                  Plan ahead and start early.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready for Your LA Retaining Wall Project?
              </h2>
              <p className="text-xl mb-8">
                Calculate your exact costs and connect with vetted LA contractors.
                Free estimates, seismic expertise included.
              </p>
              <div className="flex justify-center gap-4">
                <Link href="/calculator" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Calculate Cost
                </Link>
                <Link href="/california/los-angeles/retaining-wall-contractors" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
                  Find Contractors
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}