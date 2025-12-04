import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import RetainingWallCalculator from '../../components/RetainingWallCalculator'

export default function ColoradoRetainingWallCost() {
  const seoData = {
    title: "Colorado Retaining Wall Cost 2024 | CO Mountain Terrain Pricing",
    description: "Calculate retaining wall costs in Colorado. Mountain terrain considerations, rocky soil conditions, and local pricing for Denver, Colorado Springs, Boulder.",
    keywords: ["colorado retaining wall cost", "colorado retaining wall prices", "denver retaining wall cost", "mountain retaining wall colorado", "rocky soil retaining wall"]
  }

  const coloradoRegions = [
    { name: "Front Range", costMultiplier: 1.05, notes: "Denver metro area" },
    { name: "Rocky Mountains", costMultiplier: 1.10, notes: "Rocky terrain, difficult access" },
    { name: "Western Slope", costMultiplier: 0.98, notes: "More affordable" },
    { name: "Eastern Plains", costMultiplier: 0.92, notes: "Lowest costs" },
    { name: "Mountain Resort", costMultiplier: 1.20, notes: "Premium locations" }
  ]

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords.join(', ')} />
        <link rel="canonical" href="https://wallestimate.com/colorado/retaining-wall-cost" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="breadcrumb py-4">
            <a href="/">Home</a>
            <span className="breadcrumb-separator">›</span>
            <a href="/states">States</a>
            <span className="breadcrumb-separator">›</span>
            <span>Colorado</span>
          </nav>

          {/* Hero Section */}
          <section className="py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">
                Colorado Retaining Wall Cost 2024
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Complete Colorado retaining wall cost guide. Special requirements for
                mountain terrain, rocky soil conditions, and elevation changes.
                Colorado costs are 5% above national average.
              </p>
              <div className="flex justify-center gap-4 mt-6">
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                  🏔️ Mountain Terrain
                </span>
                <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full">
                  🪨 Rocky Soil
                </span>
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
                  ⛰️ High Elevation
                </span>
              </div>
            </div>

            {/* Calculator */}
            <div className="max-w-4xl mx-auto mb-12">
              <RetainingWallCalculator
                location="colorado"
                title="Colorado Retaining Wall Cost Calculator"
              />
            </div>
          </section>

          {/* CO Specific Costs */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Colorado Retaining Wall Costs (5% Above National Average)
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="price-card">
                <h3 className="font-semibold mb-4 text-lg">Mountain Terrain</h3>
                <div className="text-2xl font-bold text-primary-600 mb-2">$47-$63</div>
                <p className="text-gray-600 mb-3">per square foot</p>
                <ul className="text-sm space-y-1">
                  <li>• Sloped sites</li>
                  <li>• Grade challenges</li>
                  <li>• Access difficulties</li>
                  <li>• Engineering needed</li>
                </ul>
              </div>

              <div className="price-card">
                <h3 className="font-semibold mb-4 text-lg">Rocky Conditions</h3>
                <div className="text-2xl font-bold text-orange-600 mb-2">+$10-$25</div>
                <p className="text-gray-600 mb-3">per square foot</p>
                <ul className="text-sm space-y-1">
                  <li>• Rock drilling</li>
                  <li>• Heavy equipment</li>
                  <li>• Extra labor</li>
                  <li>• Long timelines</li>
                </ul>
              </div>

              <div className="price-card">
                <h3 className="font-semibold mb-4 text-lg">Elevation Factors</h3>
                <div className="text-2xl font-bold text-blue-600 mb-2">+$5-$15</div>
                <p className="text-gray-600 mb-3">per square foot</p>
                <ul className="text-sm space-y-1">
                  <li>• Weather delays</li>
                  <li>• Special concrete</li>
                  <li>• Curing issues</li>
                  <li>• Winter limits</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Colorado Regional Costs */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Costs by Colorado Region
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {coloradoRegions.map((region, idx) => (
                <div key={idx} className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                  <div>
                    <h4 className="font-semibold">{region.name}</h4>
                    <p className="text-sm text-gray-600">{region.notes}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-primary-600">
                      ${Math.round(45 * region.costMultiplier)}-${Math.round(60 * region.costMultiplier)}
                    </div>
                    <p className="text-xs text-gray-500">per sq ft</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Mountain Terrain Challenges */}
          <section className="py-12 bg-blue-50 rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Colorado Mountain Terrain Challenges
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  Slope Considerations
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Maximum slope: 2:1</li>
                  <li>• Terraced solutions common</li>
                  <li>• Erosion control critical</li>
                  <li>• Landslide prevention</li>
                  <li>• Native vegetation required</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  Access Challenges
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Steep driveway access</li>
                  <li>• Limited parking</li>
                  <li>• Equipment restrictions</li>
                  <li>• Material delivery limits</li>
                  <li>• Weather windows short</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  Design Solutions
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Terraced walls</li>
                  <li>• Gravity walls for steep slopes</li>
                  <li>• Cantilever walls for space</li>
                    <li>• Anchored walls for tall heights</li>
                  <li>• Gabion walls for cost</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Rocky Soil Conditions */}
          <section className="py-12 bg-orange-50 rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Colorado Rocky Soil Conditions
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-orange-700">
                  Common Rocky Conditions
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Bedrock near surface (0-2ft)</span>
                  </li>
                    <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Boulders and rock outcroppings</span>
                  </li>
                    <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Glacial till deposits</span>
                  </li>
                    <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Expansive clay pockets</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-orange-700">
                  Cost Impacts
                </h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Rock hammering</span>
                    <span className="font-bold">$5,000-$20,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Heavy equipment rental</span>
                    <span className="font-bold">$500-$1,500/day</span>
                  </li>
                    <li className="flex justify-between">
                    <span>Special labor</span>
                    <span className="font-bold">$25,000+</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Additional time</span>
                    <span className="font-bold">+2-4 weeks</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Major Cities */}
          <section className="py-12">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Costs in Major CO Cities
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="price-card">
                <h3 className="text-lg font-semibold">Denver</h3>
                <p className="text-2xl font-bold text-primary-600 mb-2">
                  $47-$63
                </p>
                <p className="text-gray-600 mb-4">per square foot</p>
                <Link href="/colorado/denver/retaining-wall-cost"
                      className="text-blue-600 hover:underline">
                  View Denver Costs →
                </Link>
              </div>

              <div className="price-card">
                <h3 className="text-lg font-semibold">Colorado Springs</h3>
                <p className="text-2xl font-bold text-primary-600 mb-2">
                  $48-$65
                </p>
                <p className="text-gray-600 mb-4">per square foot</p>
                <Link href="/colorado/colorado-springs/retaining-wall-cost"
                      className="text-blue-600 hover:underline">
                  View Springs Costs →
                </Link>
              </div>

              <div className="price-card">
                <h3 className="text-lg font-semibold">Boulder</h3>
                <p className="text-2xl font-bold text-primary-600 mb-2">
                  $50-$68
                </p>
                <p className="text-gray-600 mb-4">per square foot</p>
                <Link href="/colorado/boulder/retaining-wall-cost"
                      className="text-blue-600 hover:underline">
                  View Boulder Costs →
                </Link>
              </div>

              <div className="price-card">
                <h3 className="text-lg font-semibold">Fort Collins</h3>
                <p className="text-2xl font-bold text-primary-600 mb-2">
                  $44-$60
                </p>
                <p className="text-gray-600 mb-4">per square foot</p>
                <Link href="/colorado/fort-collins/retaining-wall-cost"
                      className="text-blue-600 hover:underline">
                  View Fort Collins Costs →
                </Link>
              </div>
            </div>
          </section>

          {/* Elevation Considerations */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              High Elevation Considerations
            </h2>

            <div className="max-w-4xl mx-auto">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <p className="text-gray-700">
                  Colorado's high elevation (5,000-14,000 feet) creates special challenges:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-700">
                    Concrete Considerations
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Air entrainment mandatory (6% air)</li>
                    <li>• Special curing compounds</li>
                    <li>• Short building season</li>
                    <li>• Winter protection required</li>
                    <li>• Wind breaks for curing</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-700">
                    Weather Impacts
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• UV protection needed</li>
                    <li>• Rapid temperature changes</li>
                    <li>• Freeze/thaw cycles</li>
                    <li>• Snow load considerations</li>
                    <li>• Spring runoff</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Seasonal Building */}
          <section className="py-12 bg-gray-100 rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Colorado Building Season
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold">Good</span>
                </div>
                <h3 className="font-semibold mb-2">May-September</h3>
                <p className="text-sm text-gray-600">Optimal weather for concrete work</p>
                <p className="text-sm text-gray-500">Peak season, premium rates</p>
              </div>

              <div className="text-center p-4 bg-white rounded-lg">
                <div className="bg-yellow-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold">Fair</span>
                </div>
                <h3 className="font-semibold mb-2">April & October</h3>
                <p className="text-sm text-gray-600">Transitional months</p>
                <p className="text-sm text-gray-500">Weather dependent</p>
              </div>

              <div className="text-center p-4 bg-white rounded-lg">
                <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold">Poor</span>
                </div>
                <h3 className="font-semibold mb-2">November-March</h3>
                <p className="text-sm text-gray-600">Winter months</p>
                <p className="text-sm text-gray-500">Limited building possible</p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Colorado Retaining Wall FAQ
            </h2>

            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  How much does a retaining wall cost in Colorado?
                </h3>
                <p className="text-gray-700">
                  Colorado retaining walls cost $47-$90 per square foot including mountain terrain,
                  rocky soil conditions, and elevation factors. A typical 50ft × 4ft wall costs
                  $9,400-$18,000 including Colorado-specific requirements.
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  How do you build on a slope in Colorado?
                </h3>
                <p className="gray-700">
                  Building on slopes requires terraced designs or engineered solutions. Common Colorado methods:
                  terraced walls for slopes over 2:1, gravity walls for very steep terrain, anchored walls for
                  heights over 6 feet. Engineering is required for slopes over 3:1.
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  What are the challenges of building in Colorado mountains?
                </h3>
                <p className="text-gray-700">
                  Mountain building challenges include: difficult access, rock excavation, limited build season,
                  weather delays, engineering requirements, and higher costs for materials and labor due to
                  remote locations.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}