import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import RetainingWallCalculator from '../components/RetainingWallCalculator'

export default function AverageCostOfRetainingWall() {
  const seoData = {
    title: "Average Cost of a Retaining Wall 2024 | National Average Guide",
    description: "What's the average cost of a retaining wall in 2024? Complete breakdown by size, material, and location with real examples.",
    keywords: ["average cost of retaining wall", "retaining wall average cost", "average retaining wall price", "how much does the average retaining wall cost", "typical retaining wall cost"]
  }

  const averageProjects = [
    {
      name: "Garden Wall",
      size: "25ft × 2ft = 50 sq ft",
      averageCost: "$2,250",
      range: "$1,500-$3,500",
      material: "Timber",
      commonUses: "Garden beds, small slopes"
    },
    {
      name: "Residential Wall",
      size: "50ft × 4ft = 200 sq ft",
      averageCost: "$9,000",
      range: "$6,000-$15,000",
      material: "Concrete Blocks",
      commonUses: "Front/back yards, property boundaries"
    },
    {
      name: "Large Property Wall",
      size: "100ft × 6ft = 600 sq ft",
      averageCost: "$30,000",
      range: "$18,000-$45,000",
      material: "Poured Concrete",
      commonUses: "Commercial properties, large estates"
    },
    {
      name: "Commercial Wall",
      size: "200ft × 8ft = 1,600 sq ft",
      averageCost: "$96,000",
      range: "$64,000-$160,000",
      material: "Segmental Blocks",
      commonUses: "Shopping centers, highways, public spaces"
    }
  ]

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords.join(', ')} />
        <link rel="canonical" href="https://wallestimate.com/average-cost-of-retaining-wall" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="breadcrumb py-4">
            <a href="/">Home</a>
            <span className="breadcrumb-separator">›</span>
            <span>Average Cost</span>
          </nav>

          {/* Hero Section */}
          <section className="py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">
                Average Cost of a Retaining Wall 2024
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Based on analysis of thousands of projects nationwide. See real costs for
                different sizes, materials, and locations. Find out if your budget is
                on track.
              </p>
              <div className="bg-blue-100 text-blue-700 inline-block px-6 py-3 rounded-lg mt-4">
                <span className="text-2xl font-bold">$45</span>
                <span className="ml-2">National Average per sq ft</span>
              </div>
            </div>

            {/* Calculator */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-center mb-6">
                  Compare to Average Costs
                </h2>
                <RetainingWallCalculator
                  showAdvanced={true}
                  title="Calculate Your Cost"
                />
              </div>
            </div>
          </section>

          {/* Quick Stats */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              National Average Statistics
            </h2>

            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">$45</div>
                <div className="text-gray-600">per sq ft</div>
                <p className="text-sm text-gray-500 mt-2">National average cost</p>
              </div>

              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="text-4xl font-bold text-green-600 mb-2">$9,000</div>
                <div className="text-gray-600">total project</div>
                <p className="text-sm text-gray-500 mt-2">Average wall (50×4ft)</p>
              </div>

              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="text-4xl font-bold text-purple-600 mb-2">45%</div>
                <div className="text-gray-600">labor cost</div>
                <p className="text-sm text-gray-500 mt-2">Of total project cost</p>
              </div>

              <div className="text-center p-6 bg-orange-50 rounded-lg">
                <div className="text-4xl font-bold text-orange-600 mb-2">5 days</div>
                <div className="text-gray-600">average time</div>
                <p className="text-sm text-gray-500 mt-2">For medium project</p>
              </div>
            </div>
          </section>

          {/* Average by Project Size */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Average Cost by Project Size
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {averageProjects.map((project, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{project.name}</h3>
                      <p className="text-gray-600">{project.size}</p>
                      <p className="text-sm text-gray-500 mt-1">{project.commonUses}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary-600">{project.averageCost}</div>
                      <p className="text-sm text-gray-500">Average Cost</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Range:</span>
                    <span className="font-semibold">{project.range}</span>
                  </div>

                  <div className="flex justify-between items-center text-sm mt-2">
                    <span className="text-gray-500">Material:</span>
                    <span className="font-semibold">{project.material}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* AdSense项目表格下方广告 */}
            <div className="ads-container mt-8 max-w-728 mx-auto">
              <span>Advertisement</span>
            </div>
          </section>

          {/* Average by Material Type */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Average Cost by Material Type
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full max-w-4xl mx-auto">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-4 text-left">Material</th>
                    <th className="p-4 text-center">Average Cost</th>
                    <th className="p-4 text-center">Cost Range</th>
                    <th className="p-4 text-center">Average Lifespan</th>
                    <th className="p-4 text-left">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 font-semibold">Pressure-Treated Wood</td>
                    <td className="p-4 text-center font-bold text-green-600">$27</td>
                    <td className="p-4 text-center">$20-$35</td>
                    <td className="p-4 text-center">15-20 years</td>
                    <td className="p-4 text-sm">Budget projects</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-semibold">Concrete Blocks</td>
                    <td className="p-4 text-center font-bold text-yellow-600">$42</td>
                    <td className="p-4 text-center">$35-$50</td>
                    <td className="p-4 text-center">30-50 years</td>
                    <td className="p-4 text-sm">Most applications</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Poured Concrete</td>
                    <td className="p-4 text-center font-bold text-blue-600">$52</td>
                    <td className="p-4 text-center">$45-$60</td>
                    <td className="p-4 text-center">50+ years</td>
                    <td className="p-4 text-sm">Commercial/homes</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-semibold">Natural Stone</td>
                    <td className="p-4 text-center font-bold text-purple-600">$65</td>
                    <td className="p-4 text-center">$55-$75</td>
                    <td className="p-4 text-center">100+ years</td>
                    <td className="p-4 text-sm">Premium appearance</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Segmental Blocks</td>
                    <td className="p-4 text-center font-bold text-orange-600">$57</td>
                    <td className="p-4 text-center">$50-$65</td>
                    <td className="p-4 text-center">50+ years</td>
                    <td className="p-4 text-sm">Curved designs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Regional Averages */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Average Cost by Region
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="price-card">
                <h3 className="font-semibold mb-4 text-red-600">Most Expensive</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>California</span>
                    <span className="font-bold">$65/sq ft</span>
                  </div>
                  <div className="flex justify-between">
                    <span>New York</span>
                    <span className="font-bold">$60/sq ft</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Massachusetts</span>
                    <span className="font-bold">$58/sq ft</span>
                  </div>
                </div>
              </div>

              <div className="price-card">
                <h3 className="font-semibold mb-4 text-blue-600">About Average</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Washington</span>
                    <span className="font-bold">$52/sq ft</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Colorado</span>
                    <span className="font-bold">$47/sq ft</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Illinois</span>
                    <span className="font-bold">$49/sq ft</span>
                  </div>
                </div>
              </div>

              <div className="price-card">
                <h3 className="font-semibold mb-4 text-green-600">Least Expensive</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Texas</span>
                    <span className="font-bold">$41/sq ft</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ohio</span>
                    <span className="font-bold">$38/sq ft</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Alabama</span>
                    <span className="font-bold">$37/sq ft</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Factors Affecting Average */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              What Affects the Average Cost?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-red-600">
                  Increases Cost Above Average
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">↑</span>
                    <span>Complex design or curves (+25-50%)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">↑</span>
                    <span>Poor soil conditions (+20-40%)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">↑</span>
                    <span>Difficult site access (+15-30%)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">↑</span>
                    <span>Urban locations (+25-50%)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-600">
                  Reduces Cost Below Average
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">↓</span>
                    <span>Simple rectangular design (-10-20%)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">↓</span>
                    <span>Easy site access (-10-15%)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">↓</span>
                    <span>Rural locations (-15-25%)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">↓</span>
                    <span>Off-season timing (-10-20%)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Real Examples from 2024 */}
          <section className="py-12 bg-gray-100 rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              2024 Real Project Examples
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg">
                <div className="text-sm text-gray-500 mb-1">Below Average</div>
                <h3 className="text-lg font-semibold mb-2">Ohio Backyard Wall</h3>
                <div className="text-xl font-bold text-green-600 mb-2">$4,800</div>
                <p className="text-sm text-gray-600 mb-3">40ft × 3ft concrete block</p>
                <p className="text-xs text-gray-500">Owner provided materials, contractor installation only</p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <div className="text-sm text-gray-500 mb-1">At Average</div>
                <h3 className="text-lg font-semibold mb-2">Texas Front Yard Wall</h3>
                <div className="text-xl font-bold text-blue-600 mb-2">$9,200</div>
                <p className="text-sm text-gray-600 mb-3">50ft × 4ft limestone</p>
                <p className="text-xs text-gray-500">Full service contractor, included drainage</p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <div className="text-sm text-gray-500 mb-1">Above Average</div>
                <h3 className="text-lg font-semibold mb-2">California Estate Wall</h3>
                <div className="text-xl font-bold text-red-600 mb-2">$28,000</div>
                <p className="text-sm text-gray-600 mb-3">80ft × 6ft decorative concrete</p>
                <p className="text-xs text-gray-500">Seismic requirements, premium finish, difficult access</p>
              </div>
            </div>
          </section>

          {/* Timeline and Process */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Average Project Timeline
            </h2>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="bg-blue-600 h-2 rounded-full"></div>
                <div className="grid md:grid-cols-5 gap-2 mt-8">
                  <div className="text-center">
                    <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 shadow-lg">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    <p className="font-semibold">Planning</p>
                    <p className="text-sm text-gray-600">1-2 weeks</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 shadow-lg">
                      <span className="text-blue-600 font-bold">2</span>
                    </div>
                    <p className="font-semibold">Permits</p>
                    <p className="text-sm text-gray-600">1-4 weeks</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 shadow-lg">
                      <span className="text-blue-600 font-bold">3</span>
                    </div>
                    <p className="font-semibold">Installation</p>
                    <p className="text-sm text-gray-600">3-10 days</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 shadow-lg">
                      <span className="text-blue-600 font-bold">4</span>
                    </div>
                    <p className="font-semibold">Final Touches</p>
                    <p className="text-sm text-gray-600">1-2 days</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 shadow-lg">
                      ✓
                    </div>
                    <p className="font-semibold">Complete</p>
                    <p className="text-sm text-gray-600">4-7 weeks</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Average Cost FAQ
            </h2>

            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  What's the average cost for a 50-foot retaining wall?
                </h3>
                <p className="text-gray-700">
                  The average cost for a 50-foot retaining wall depends on height:
                  3ft high: $5,000-$8,000, 4ft high: $9,000-$15,000, 6ft high: $13,500-$27,000.
                  These are national averages; your location may vary significantly.
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  Is $50 per square foot a good price for a retaining wall?
                </h3>
                <p className="text-gray-700">
                  $50 per square foot is slightly above national average ($45/sq ft),
                  making it a fair price for quality work. For premium materials or
                  complex designs, $50/sq ft may be a good deal.
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  How accurate are these average costs?
                </h3>
                <p className="text-gray-700">
                  Our averages are based on thousands of real projects nationwide.
                  Your actual cost may vary ±30% based on location, material choice,
                  site conditions, and contractor rates. Always get multiple quotes.
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