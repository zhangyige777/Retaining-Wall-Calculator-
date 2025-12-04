import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import RetainingWallCalculator from '../../components/RetainingWallCalculator'

export default function StoneRetainingWallCost() {
  const seoData = {
    title: "Stone Retaining Wall Cost 2024 | Natural Stone Pricing Guide",
    description: "Calculate stone retaining wall costs. Compare natural stone, fieldstone, limestone, and boulder walls. Free calculator with local pricing by state.",
    keywords: ["stone retaining wall cost", "natural stone retaining wall", "fieldstone wall cost", "boulder retaining wall price", "limestone retaining wall"]
  }

  // 石材类型数据
  const stoneTypes = {
    natural: {
      name: "Natural Fieldstone",
      costRange: "$55-$75",
      basePrice: 65,
      features: ["Natural appearance", "Durability 100+ years", "Local sourcing", "No maintenance"],
      bestFor: "Natural landscape projects"
    },
    limestone: {
      name: "Cut Limestone",
      costRange: "$65-$90",
      basePrice: 77,
      features: ["Uniform look", "Easy to build", "Classic appearance", "Widely available"],
      bestFor: "Formal gardens, traditional homes"
    },
    boulder: {
      name: "Large Boulders",
      costRange: "$70-$110",
      basePrice: 85,
      features: ["Dramatic effect", "No mortar needed", "Natural barrier", "Very durable"],
      bestFor: "Large scale projects, commercial"
    },
    flagstone: {
      name: "Flagstone",
      costRange: "$60-$85",
      basePrice: 72,
      features: ["Flat surfaces", "Stackable", "Multiple uses", "Attractive finish"],
      bestFor: "Terraced gardens, seating walls"
    }
  }

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords.join(', ')} />
        <link rel="canonical" href="https://wallestimate.com/cost/stone-retaining-wall-cost" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="breadcrumb py-4">
            <a href="/">Home</a>
            <span className="breadcrumb-separator">›</span>
            <a href="/retaining-wall-cost">Costs</a>
            <span className="breadcrumb-separator">›</span>
            <span>Stone</span>
          </nav>

          {/* Hero Section */}
          <section className="py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">
                Stone Retaining Wall Cost Guide 2024
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Complete guide to stone retaining wall costs. Natural stone offers unmatched beauty
                and durability. Compare different stone types and calculate your project cost.
              </p>
              <div className="flex justify-center gap-4 text-sm">
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
                  🏔️ 100+ Year Lifespan
                </span>
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                  🌿 Eco-Friendly
                </span>
                <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full">
                  💎 $55-$110 per sq ft
                </span>
              </div>
            </div>

            {/* AdSense顶部横幅 */}
            <div className="ads-container mb-8 max-w-728 mx-auto">
              <span>Advertisement</span>
            </div>

            {/* Stone Calculator */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-center mb-6">
                  Stone Retaining Wall Calculator
                </h2>
                <RetainingWallCalculator
                  preselectedMaterial="stone"
                  showAdvanced={true}
                  title="Calculate Stone Wall Cost"
                />
              </div>
            </div>
          </section>

          {/* Stone Types Comparison */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Types of Stone Retaining Walls
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {Object.entries(stoneTypes).map(([key, type]) => (
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
                  <div className="text-sm text-gray-600 mb-3">
                    <strong>Best for:</strong> {type.bestFor}
                  </div>
                  <Link href={`/stone-${key}-retaining-wall-calculator`}
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

          {/* Cost Factors */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Factors Affecting Stone Wall Costs
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="price-card">
                <h3 className="font-semibold mb-4 text-gray-800">Stone Type (40%)</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Local fieldstone</span>
                    <span>$50-$70/ton</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Quarried limestone</span>
                    <span>$80-$120/ton</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Decorative boulders</span>
                    <span>$150-$300/ton</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Flagstone</span>
                    <span>$100-$200/ton</span>
                  </div>
                </div>
              </div>

              <div className="price-card">
                <h3 className="font-semibold mb-4 text-gray-800">Labor (50%)</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Stone mason</span>
                    <span>$75-$150/hr</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Laborer</span>
                    <span>$40-$65/hr</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Equipment operator</span>
                    <span>$85-$120/hr</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Supervisor</span>
                    <span>$100-$180/hr</span>
                  </div>
                </div>
              </div>

              <div className="price-card">
                <h3 className="font-semibold mb-4 text-gray-800">Additional (10%)</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Gravel base</span>
                    <span>$25-$40/ton</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Filter fabric</span>
                    <span>$2-$5/sq ft</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Drainage pipe</span>
                    <span>$5-$10/ft</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Soil backfill</span>
                    <span>$15-$30/ton</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Stone Wall by Height -->
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Stone Wall Costs by Height
            </h2>

            <table className="w-full max-w-5xl mx-auto">
              <thead>
                <tr>
                  <th>Wall Height</th>
                  <th>Base Width</th>
                  <th>Cost per sq ft</th>
                  <th>Special Considerations</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Up to 2 ft</td>
                  <td>18 inches</td>
                  <td>$55-$75</td>
                  <td>No permit needed in most areas</td>
                </tr>
                <tr>
                  <td>3-4 ft</td>
                  <td>24-30 inches</td>
                  <td>$65-$85</td>
                  <td>Permit may be required</td>
                </tr>
                <tr>
                  <td>5-6 ft</td>
                  <td>36 inches</td>
                  <td>$75-$95</td>
                  <td>Engineering required</td>
                </tr>
                <tr>
                  <td>7-8 ft</td>
                  <td>42-48 inches</td>
                  <td>$85-$110</td>
                  <td>Reinforcement needed</td>
                </tr>
              </tbody>
            </table>
          </section>

          <!-- Regional Stone Availability -->
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Regional Stone Types & Costs
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold mb-4">Northeast</h3>
                <ul className="space-y-2">
                  <li>• Fieldstone: $60-$80/sq ft</li>
                  <li>• Granite: $70-$100/sq ft</li>
                  <li>• Bluestone: $65-$95/sq ft</li>
                  <li>• Slate: $75-$105/sq ft</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Southwest</h3>
                <ul className="space-y-2">
                  <li>• Limestone: $55-$75/sq ft</li>
                  <li>• Sandstone: $60-$80/sq ft</li>
                  <li>• River rock: $70-$90/sq ft</li>
                  <li>• Desert boulders: $80-$120/sq ft</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Midwest</h3>
                <ul className="space-y-2">
                  <li>• Limestone: $50-$70/sq ft</li>
                  <li>• Fieldstone: $55-$75/sq ft</li>
                  <li>• Dolomite: $60-$80/sq ft</li>
                  <li>• Glacial boulders: $65-$95/sq ft</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">West Coast</h3>
                <ul className="space-y-2">
                  <li>• Basalt: $70-$100/sq ft</li>
                  <li>• Granite: $75-$110/sq ft</li>
                  <li>• River rock: $65-$90/sq ft</li>
                  <li>• Sierra stone: $80-$120/sq ft</li>
                </ul>
              </div>
            </div>
          </section>

          <!-- Installation Methods -->
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Stone Installation Methods
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="price-card">
                <h3 className="font-semibold mb-4">Dry Stack</h3>
                <div className="text-xl font-bold text-primary-600 mb-3">$55-$75/sq ft</div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• No mortar required</li>
                  <li>• Natural drainage</li>
                  <li>• Flexible movement</li>
                  <li>• Traditional look</li>
                </ul>
              </div>

              <div className="price-card">
                <h3 className="font-semibold mb-4">Mortared</h3>
                <div className="text-xl font-bold text-primary-600 mb-3">$70-$95/sq ft</div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Mortar joints</li>
                  <li>• Very stable</li>
                  <li>• Professional finish</li>
                  <li>• Higher walls possible</li>
                </ul>
              </div>

              <div className="price-card">
                <h3 className="font-semibold mb-4">Gabion Style</h3>
                <div className="text-xl font-bold text-primary-600 mb-3">$60-$85/sq ft</div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Wire cages filled</li>
                  <li>• Fast installation</li>
                  <li>• Excellent drainage</li>
                  <li>• Industrial look</li>
                </ul>
              </div>
            </div>
          </section>

          <!-- FAQ -->
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Stone Retaining Wall FAQ
            </h2>

            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  How much does a stone retaining wall cost per foot?
                </h3>
                <p className="text-gray-700">
                  Stone retaining walls cost $55-$110 per square foot. For a typical 4-foot high wall,
                  this translates to $220-$440 per linear foot. Costs vary based on stone type,
                  wall height, and location.
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  What is the cheapest stone for retaining walls?
                </h3>
                <p className="text-gray-700">
                  Local fieldstone is typically the cheapest option at $55-$75 per square foot.
                  Using stone sourced locally reduces transportation costs. Fieldstone also
                  requires less processing than cut stone.
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  Do stone retaining walls need drainage?
                </h3>
                <p className="text-gray-700">
                  Yes, proper drainage is essential for stone walls. Without drainage,
                  water pressure can cause failure. Install a French drain, weep holes,
                  and gravel backfill for proper water management.
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  How long do stone retaining walls last?
                </h3>
                <p className="text-gray-700">
                  Stone retaining walls can last 100+ years with proper construction.
                  Natural stone is resistant to weather, insects, and decay. The key to longevity
                  is proper foundation and drainage.
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  Can I build a stone retaining wall myself?
                </h3>
                <p className="text-gray-700">
                  DIY is possible for dry-stacked walls under 3 feet tall. Taller walls or
                  mortared construction requires professional expertise due to weight,
                  structural requirements, and safety considerations.
                </p>
              </div>
            </div>
          </section>

          <!-- Related Links -->
          <section className="py-12 bg-white rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Related Resources
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Link href="/cost/concrete-retaining-wall-cost" className="price-card block text-center">
                <h3 className="font-semibold mb-2">Concrete Walls</h3>
                <p className="text-sm text-gray-600">Compare with concrete options</p>
              </Link>

              <Link href="/retaining-wall-calculator" className="price-card block text-center">
                <h3 className="font-semibold mb-2">Material Calculator</h3>
                <p className="text-sm text-gray-600">Compare all materials</p>
              </Link>

              <Link href="/cost/retaining-wall-cost-per-square-foot" className="price-card block text-center">
                <h3 className="font-semibold mb-2">Cost per Sq Ft</h3>
                <p className="text-sm text-gray-600">View detailed pricing</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}