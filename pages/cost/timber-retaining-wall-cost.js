import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import RetainingWallCalculator from '../../components/RetainingWallCalculator'

export default function TimberRetainingWallCost() {
  const seoData = {
    title: "Timber Retaining Wall Cost 2024 | Wood & Railroad Tie Prices",
    description: "Calculate timber retaining wall costs. Compare pressure-treated wood, railroad ties, and redwood options. Most affordable retaining wall material with complete pricing guide.",
    keywords: ["timber retaining wall cost", "wood retaining wall cost", "railroad tie retaining wall cost", "pressure treated retaining wall", "redwood retaining wall price"]
  }

  const timberTypes = {
    pressure: {
      name: "Pressure-Treated Wood",
      costRange: "$20-$35",
      basePrice: 27,
      lifespan: "15-20 years",
      features: ["Chemically treated", "Resistant to rot", "Most affordable", "Easy to work with"],
      bestFor: "Budget projects, garden walls"
    },
    railroad: {
      name: "Railroad Ties",
      costRange: "$18-$30",
      basePrice: 24,
      lifespan: "10-15 years",
      features: ["Reclaimed material", "Rustic look", "Very durable", "Heavy duty"],
      bestFor: "Rural properties, decorative walls"
    },
    redwood: {
      name: "Redwood",
      costRange: "$40-$60",
      basePrice: 50,
      lifespan: "20-30 years",
      features: ["Natural rot resistance", "Beautiful grain", "Eco-friendly", "Premium choice"],
      bestFor: "High-end landscaping, visible areas"
    },
    cedar: {
      name: "Cedar",
      costRange: "$35-$50",
      basePrice: 42,
      lifespan: "18-25 years",
      features: ["Natural rot resistance", "Aromatic", "Lightweight", "No chemicals"],
      bestFor: "Organic gardens, eco-conscious"
    }
  }

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords.join(', ')} />
        <link rel="canonical" href="https://wallestimate.com/cost/timber-retaining-wall-cost" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="breadcrumb py-4">
            <a href="/">Home</a>
            <span className="breadcrumb-separator">›</span>
            <a href="/retaining-wall-cost">Costs</a>
            <span className="breadcrumb-separator">›</span>
            <span>Timber</span>
          </nav>

          {/* Hero Section */}
          <section className="py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">
                Timber Retaining Wall Cost Guide 2024
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Complete guide to wood retaining walls. The most affordable option
                for landscape projects. Compare pressure-treated, railroad ties,
                redwood, and cedar. Calculate your project cost instantly.
              </p>
              <div className="flex justify-center gap-4 text-sm">
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
                  💰 Most Affordable
                </span>
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                  🌿 Eco-Friendly Options
                </span>
                <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full">
                  ⚡ Fast Installation
                </span>
              </div>
            </div>

            {/* Note about AdSense */}
            <div className="max-w-4xl mx-auto mb-8 p-6 bg-blue-50 border-l-4 border-blue-500">
              <h3 className="font-semibold mb-2">💡 First Website Tip</h3>
              <p className="text-gray-700">
                This page is optimized for AdSense. Once your site has content and traffic,
                apply for Google AdSense to monetize these pages. Timber wall keywords have
                good CPC values due to contractor competition.
              </p>
            </div>

            {/* AdSense顶部横幅 */}
            <div className="ads-container mb-8 max-w-728 mx-auto">
              <span>Advertisement</span>
            </div>

            {/* Timber Calculator */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-center mb-6">
                  Timber Retaining Wall Calculator
                </h2>
                <RetainingWallCalculator
                  preselectedMaterial="timber"
                  showAdvanced={true}
                  title="Calculate Wood Wall Cost"
                />
              </div>
            </div>
          </section>

          {/* Timber Types Comparison */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Types of Timber Retaining Walls
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {Object.entries(timberTypes).map(([key, type]) => (
                <div key={key} className="border rounded-lg p-6 hover:shadow-lg transition">
                  <h3 className="text-xl font-semibold mb-3">{type.name}</h3>
                  <div className="text-2xl font-bold text-primary-600 mb-2">
                    {type.costRange} per sq ft
                  </div>
                  <div className="text-sm text-gray-600 mb-4">
                    Lifespan: {type.lifespan}
                  </div>
                  <ul className="space-y-2 mb-4">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-sm text-gray-600 mb-3">
                    <strong>Best for:</strong> {type.bestFor}
                  </div>
                  <Link href={`/timber-${key}-retaining-wall-calculator`}
                        className="text-blue-600 hover:underline font-medium">
                    Calculate {type.name} Costs →
                  </Link>
                </div>
              ))}
            </div>

            {/* AdSense表格下方广告 */}
            <div className="ads-container mt-8 max-w-728 mx-auto">
              <span>Advertisement</span>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Timber Wall FAQ
            </h2>

            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  How much does a timber retaining wall cost?
                </h3>
                <p className="text-gray-700">
                  Timber retaining walls cost $18-$60 per square foot. Pressure-treated wood averages $27/sq ft,
                  making it the most affordable option. Railroad ties cost $24/sq ft, while premium redwood can cost $50/sq ft.
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  How long does a timber retaining wall last?
                </h3>
                <p className="text-gray-700">
                  With proper treatment and installation, timber walls last 15-25 years. Pressure-treated wood: 15-20 years,
                  railroad ties: 10-15 years, redwood and cedar: 20-30 years. Proper drainage can extend lifespan by 5-10 years.
                </p>
              </div>

              {/* AdSense FAQ下方广告 */}
              <div className="ads-container">
                <span>Advertisement</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}