import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import RetainingWallCalculator from '../../components/RetainingWallCalculator'

export default function ConcreteRetainingWallCost() {
  const seoData = {
    title: "Concrete Retaining Wall Cost Calculator 2024 | Complete Pricing Guide",
    description: "Calculate concrete retaining wall costs instantly. Compare poured concrete vs concrete blocks. Get accurate estimates including materials, labor, and reinforcement.",
    keywords: ["concrete retaining wall cost", "poured concrete retaining wall cost", "concrete block retaining wall cost", "concrete wall calculator", "concrete retaining wall prices"]
  }

  // 混凝土价格数据
  const concreteTypes = {
    poured: {
      name: "Poured Concrete",
      costRange: "$45-$60",
      basePrice: 50,
      features: ["Monolithic construction", "No joints", "Custom shapes", "Highest strength"]
    },
    blocks: {
      name: "Concrete Blocks",
      costRange: "$35-$50",
      basePrice: 42,
      features: ["DIY friendly", "Fast installation", "Cost effective", "Versatile designs"]
    },
    segmental: {
      name: "Segmental Systems",
      costRange: "$50-$65",
      basePrice: 57,
      features: ["No mortar needed", "Engineered system", "Curved walls", "Attractive finish"]
    },
    precast: {
      name: "Precast Panels",
      costRange: "$70-$95",
      basePrice: 82,
      features: ["Factory quality", "Quick install", "Premium finish", "Large sizes"]
    }
  }

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords.join(', ')} />
        <link rel="canonical" href="https://wallestimate.com/cost/concrete-retaining-wall-cost" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="breadcrumb py-4">
            <a href="/">Home</a>
            <span className="breadcrumb-separator">›</span>
            <a href="/retaining-wall-cost">Costs</a>
            <span className="breadcrumb-separator">›</span>
            <span>Concrete</span>
          </nav>

          {/* Hero Section */}
          <section className="py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">
                Concrete Retaining Wall Cost Guide 2024
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Complete guide to concrete retaining wall costs. Compare poured concrete,
                concrete blocks, and segmental systems. Calculate your project cost instantly.
              </p>
              <div className="flex justify-center gap-4 text-sm">
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                  🏗️ Most Popular Material
                </span>
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
                  💪 50+ Year Lifespan
                </span>
                <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full">
                  📏 $45-$60 per sq ft
                </span>
              </div>
            </div>

            {/* AdSense顶部横幅 */}
            <div className="ads-container mb-8 max-w-728 mx-auto">
              <span>Advertisement</span>
            </div>

            {/* Concrete Calculator */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-center mb-6">
                  Concrete Retaining Wall Calculator
                </h2>
                <RetainingWallCalculator
                  preselectedMaterial="concrete"
                  showAdvanced={true}
                  title="Calculate Concrete Wall Cost"
                />
              </div>
            </div>
          </section>

          {/* Concrete Types Comparison */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Types of Concrete Retaining Walls
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {Object.entries(concreteTypes).map(([key, type]) => (
                <div key={key} className="border rounded-lg p-6 hover:shadow-lg transition">
                  <h3 className="text-xl font-semibold mb-3">{type.name}</h3>
                  <div className="text-2xl font-bold text-primary-600 mb-4">
                    {type.costRange} per sq ft
                  </div>
                  <ul className="space-y-2 mb-4">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/concrete-${key}-retaining-wall-calculator`}
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

          {/* Cost Breakdown */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Concrete Wall Cost Breakdown
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="price-card">
                <h3 className="font-semibold mb-4 text-gray-800">Materials (40%)</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Concrete</span>
                    <span>$120-$180 per yard</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Rebar (if needed)</span>
                    <span>$5-$10 per foot</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Formwork</span>
                    <span>$8-$15 per sq ft</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Drainage</span>
                    <span>$10-$20 per foot</span>
                  </div>
                </div>
              </div>

              <div className="price-card">
                <h3 className="font-semibold mb-4 text-gray-800">Labor (45%)</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Excavation</span>
                    <span>$50-$100 per hour</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Form work</span>
                    <span>$60-$120 per hour</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Concrete pour</span>
                    <span>$70-$140 per hour</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Finishing</span>
                    <span>$50-$90 per hour</span>
                  </div>
                </div>
              </div>

              <div className="price-card">
                <h3 className="font-semibold mb-4 text-gray-800">Additional (15%)</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Permits</span>
                    <span>$100-$500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Equipment rental</span>
                    <span>$200-$800 per day</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Site prep</span>
                    <span>$500-$2,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cleanup</span>
                    <span>$300-$800</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Wall Height Cost Multiplier */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Cost by Wall Height
            </h2>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 max-w-4xl mx-auto">
              <p className="text-gray-700">
                <strong>Note:</strong> Costs increase significantly with wall height due to
                additional engineering, thicker sections, more reinforcement, and deeper foundations.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="bg-gray-100 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Up to 3 ft</h4>
                  <p className="text-2xl font-bold text-primary-600 mb-2">1.0x</p>
                  <p className="text-sm text-gray-600">Base rate</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gray-100 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">4-6 ft</h4>
                  <p className="text-2xl font-bold text-primary-600 mb-2">1.3x</p>
                  <p className="text-sm text-gray-600">+30% cost</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gray-100 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">7-10 ft</h4>
                  <p className="text-2xl font-bold text-primary-600 mb-2">1.7x</p>
                  <p className="text-sm text-gray-600">+70% cost</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gray-100 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">10+ ft</h4>
                  <p className="text-2xl font-bold text-primary-600 mb-2">2.2x</p>
                  <p className="text-sm text-gray-600">+120% cost</p>
                </div>
              </div>
            </div>
          </section>

          {/* Regional Costs */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Concrete Wall Costs by Region
            </h2>

            <table className="w-full max-w-5xl mx-auto">
              <thead>
                <tr>
                  <th>Region</th>
                  <th>Cost per sq ft</th>
                  <th>Key Factors</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>West Coast</strong></td>
                  <td>$60-$85</td>
                  <td>Seismic requirements, high labor</td>
                </tr>
                <tr>
                  <td><strong>Northeast</strong></td>
                  <td>$55-$80</td>
                  <td>Frost protection, permits</td>
                </tr>
                <tr>
                  <td><strong>Southeast</strong></td>
                  <td>$40-$65</td>
                  <td>Hot weather curing needed</td>
                </tr>
                <tr>
                  <td><strong>Midwest</strong></td>
                  <td>$45-$70</td>
                  <td>Freeze/thaw cycles</td>
                </tr>
                <tr>
                  <td><strong>Southwest</strong></td>
                  <td>$50-$75</td>
                  <td>Extreme temperatures</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Design Options */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Design Options & Additional Costs
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="price-card">
                <h3 className="font-semibold mb-4">Basic Finish</h3>
                <div className="text-xl font-bold text-primary-600 mb-3">Included</div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Standard gray concrete</li>
                  <li>• Form line texture</li>
                  <li>• Standard top edge</li>
                </ul>
              </div>

              <div className="price-card">
                <h3 className="font-semibold mb-4">Stamped Concrete</h3>
                <div className="text-xl font-bold text-primary-600 mb-3">+$8-$15/sq ft</div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Stone, brick, wood patterns</li>
                  <li>• Color additives</li>
                  <li>• Textured surface</li>
                </ul>
              </div>

              <div className="price-card">
                <h3 className="font-semibold mb-4">Exposed Aggregate</h3>
                <div className="text-xl font-bold text-primary-600 mb-3">+$10-$20/sq ft</div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Decorative stone exposed</li>
                  <li>• Premium appearance</li>
                  <li>• Slip resistant</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Concrete Retaining Wall FAQ
            </h2>

            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  How much does a concrete retaining wall cost per square foot?
                </h3>
                <p className="text-gray-700">
                  Concrete retaining walls cost between $45-$60 per square foot for basic walls.
                  Poured concrete with reinforcement costs $60-$85 per square foot,
                  while decorative finishes can add $15-$30 per square foot.
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  How long do concrete retaining walls last?
                </h3>
                <p className="text-gray-700">
                  Properly built concrete retaining walls last 50+ years. With proper drainage
                  and maintenance, they can last over 100 years. The key to longevity is
                  proper water management behind the wall.
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  Do concrete retaining walls need rebar?
                </h3>
                <p className="text-gray-700">
                  Walls over 3 feet tall typically require steel reinforcement. Rebar provides
                    tensile strength and prevents cracking. The amount and placement of
                    rebar should be determined by a structural engineer.
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  What is the best type of concrete for retaining walls?
                </h3>
                <p className="text-gray-700">
                  Use 3,000-4,000 PSI concrete with proper reinforcement. In cold climates,
                  use air-entrained concrete (6% air) for freeze/thaw resistance.
                  Add waterproofing admixtures for wet conditions.
                </p>
              </div>
            </div>
          </section>

          {/* Related Links */}
          <section className="py-12 bg-white rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Related Calculators
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Link href="/concrete-retaining-wall-calculator" className="price-card block text-center">
                <h3 className="font-semibold mb-2">Concrete Calculator</h3>
                <p className="text-sm text-gray-600">Calculate concrete volume and costs</p>
              </Link>

              <Link href="/cost/retaining-wall-cost-per-square-foot" className="price-card block text-center">
                <h3 className="font-semibold mb-2">Cost Per Square Foot</h3>
                <p className="text-sm text-gray-600">View costs by square footage</p>
              </Link>

              <Link href="/calculator" className="price-card block text-center">
                <h3 className="font-semibold mb-2">Full Calculator</h3>
                <p className="text-sm text-gray-600">Compare all materials</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}