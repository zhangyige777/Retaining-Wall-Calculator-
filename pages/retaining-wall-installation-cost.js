import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import RetainingWallCalculator from '../components/RetainingWallCalculator'

export default function RetainingWallInstallationCost() {
  const seoData = {
    title: "Retaining Wall Installation Cost 2024 | Labor Pricing Guide",
    description: "Complete guide to retaining wall installation costs. Labor breakdown by material, location, and project complexity. Get detailed contractor pricing.",
    keywords: ["retaining wall installation cost", "retaining wall labor cost", "how much to install a retaining wall", "retaining wall contractor rates", "wall installation labor price"]
  }

  const laborRates = [
    { role: "General Laborer", rate: "$40-$65", description: "Helper, debris removal" },
    { role: "Skilled Laborer", rate: "$50-$75", description: "Block laying, finishing" },
    { role: "Mason/Bricklayer", rate: "$75-$150", description: "Stone/brick work" },
    { role: "Concrete Finisher", rate: "$70-$120", description: "Pouring, finishing" },
    { role: "Equipment Operator", rate: "$85-$130", description: "Excavator, loader" },
    { role: "Foreman/Site Manager", rate: "$90-$140", description: "Project management" },
    { role: "Master Mason", rate: "$150-$250", description="Custom stonework" }
  ]

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords.join(', ')} />
        <link rel="canonical" href="https://wallestimate.com/retaining-wall-installation-cost" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="breadcrumb py-4">
            <a href="/">Home</a>
            <span className="breadcrumb-separator">›</span>
            <span>Installation Cost</span>
          </nav>

          {/* Hero Section */}
          <section className="py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">
                Retaining Wall Installation Cost 2024
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Complete breakdown of retaining wall installation costs. Labor typically
                accounts for 40-50% of total project cost. Get detailed contractor rates
                by location and material type.
              </p>
              <div className="flex justify-center gap-4 text-sm">
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                  👷 Labor: 45% of Cost
                </span>
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
                  📍 Location Matters
                </span>
                <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full">
                  ⏱️ Duration: 2-10 days
                </span>
              </div>
            </div>

            {/* AdSense顶部横幅 */}
            <div className="ads-container mb-8 max-w-728 mx-auto">
              <span>Advertisement</span>
            </div>

            {/* Calculator */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-center mb-6">
                  Calculate Installation Cost
                </h2>
                <RetainingWallCalculator
                  showAdvanced={true}
                  title="Installation Cost Calculator"
                />
              </div>
            </div>
          </section>

          {/* Labor Cost Breakdown */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Labor Cost Breakdown by Role
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {laborRates.map((worker, idx) => (
                <div key={idx} className="border rounded-lg p-5 hover:shadow-lg transition">
                  <h3 className="text-lg font-semibold mb-2">{worker.role}</h3>
                  <div className="text-2xl font-bold text-primary-600 mb-2">{worker.rate}</div>
                  <p className="text-sm text-gray-600">per hour</p>
                  <p className="text-sm text-gray-500 mt-2">{worker.description}</p>
                </div>
              ))}
            </div>

            {/* AdSense费率表下方广告 */}
            <div className="ads-container mt-8 max-w-728 mx-auto">
              <span>Advertisement</span>
            </div>
          </section>

          {/* Labor by Material Type */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Installation Cost by Material Type
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full max-w-5xl mx-auto">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-4 text-left">Material</th>
                    <th className="p-4 text-center">Labor Cost/sq ft</th>
                    <th className="p-4 text-center">Difficulty</th>
                    <th className="p-4 text-center">Time/sq ft</th>
                    <th className="p-4 text-left">Key Skills</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 font-semibold">Pressure-Treated Timber</td>
                    <td className="p-4 text-center font-bold text-green-600">$12-$18</td>
                    <td className="p-4 text-center">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded">Easy</span>
                    </td>
                    <td className="p-4 text-center">15-30 min</td>
                    <td className="p-4">Basic carpentry, cutting</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-semibold">Concrete Blocks</td>
                    <td className="p-4 text-center font-bold text-yellow-600">$18-$25</td>
                    <td className="p-4 text-center">
                      <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Moderate</span>
                    </td>
                    <td className="p-4 text-center">30-45 min</td>
                    <td className="p-4">Masonry, leveling</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Poured Concrete</td>
                    <td className="p-4 text-center font-bold text-orange-600">$25-$35</td>
                    <td className="p-4 text-center">
                      <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded">Complex</span>
                    </td>
                    <td className="p-4 text-center">45-90 min</td>
                    <td className="p-4">Formwork, concrete work</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-semibold">Natural Stone</td>
                    <td className="p-4 text-center font-bold text-red-600">$30-$50</td>
                    <td className="p-4 text-center">
                      <span className="bg-red-100 text-red-700 px-2 py-1 rounded">Expert</span>
                    </td>
                    <td className="p-4 text-center">60-120 min</td>
                    <td className="p-4">Stone masonry, artistry</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Segmental Systems</td>
                    <td className="p-4 text-center font-bold text-blue-600">$20-$30</td>
                    <td className="p-4 text-center">
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">Moderate</span>
                    </td>
                    <td className="p-4 text-center">30-45 min</td>
                    <td className="p-4">System installation</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Installation Process Timeline */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Installation Process & Labor Hours
            </h2>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold mr-4">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Site Preparation</h4>
                    <div className="grid md:grid-cols-2 gap-4 mt-2">
                      <div>
                        <span className="text-sm text-gray-500">Labor Hours</span>
                        <div className="font-medium">8-16 hours</div>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Workers Needed</span>
                        <div className="font-medium">2-3 laborers, 1 operator</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Clearing, grading, equipment setup</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-green-50 rounded-lg">
                  <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold mr-4">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Foundation Work</h4>
                    <div className="grid md:grid-cols-2 gap-4 mt-2">
                      <div>
                        <span className="text-sm text-gray-500">Labor Hours</span>
                        <div className="font-medium">16-40 hours</div>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Workers Needed</span>
                        <div className="font-medium">2-4 laborers, 1 operator</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Excavation, footings, drainage installation</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-yellow-50 rounded-lg">
                  <div className="bg-yellow-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold mr-4">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Wall Construction</h4>
                    <div className="grid md:grid-cols-2 gap-4 mt-2">
                      <div>
                        <span className="text-sm text-gray-500">Labor Hours</span>
                        <div className="font-medium">40-120 hours</div>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Workers Needed</span>
                        <div className="font-medium">2-6 specialized workers</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Material installation, construction, reinforcement</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-purple-50 rounded-lg">
                  <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold mr-4">
                    4
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Finishing & Cleanup</h4>
                    <div className="grid md:grid-cols-2 gap-4 mt-2">
                      <div>
                        <span className="text-sm text-gray-500">Labor Hours</span>
                        <div className="font-medium">8-24 hours</div>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Workers Needed</span>
                        <div className="font-medium">1-3 finishers</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Curing, finishing touches, site cleanup</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Regional Labor Costs */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Labor Costs by Region
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-red-600">
                  High Cost Regions
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded">
                    <span>California</span>
                    <span className="font-bold">+40-60%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded">
                    <span>New York Metro</span>
                    <span className="font-bold">+35-50%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded">
                    <span>Massachusetts</span>
                    <span className="font-bold">+30-45%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded">
                    <span>Washington</span>
                    <span className="font-bold">+25-35%</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-600">
                  Lower Cost Regions
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                    <span>Texas</span>
                    <span className="font-bold">-10-20%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                    <span>Ohio</span>
                    <span className="font-bold">-15-25%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                    <span>Alabama</span>
                    <span className="font-bold">-20-30%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                    <span>Mississippi</span>
                    <span className="font-bold">-20-30%</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Project Size Labor Calculations */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Labor Cost by Project Size
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="price-card">
                <h3 className="font-semibold mb-4">Small Project</h3>
                <div className="text-sm text-gray-600 mb-2">25ft × 3ft = 75 sq ft</div>
                <div className="text-xl font-bold text-primary-600 mb-2">
                  $1,500-$2,500
                </div>
                <p className="text-gray-600 mb-3">Total Labor Cost</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• 2 workers, 2-3 days</li>
                  <li>• Simple equipment</li>
                  <li>• Minimal supervision</li>
                </ul>
              </div>

              <div className="price-card">
                <h3 className="font-semibold mb-4">Medium Project</h3>
                <div className="text-sm text-gray-600 mb-2">50ft × 4ft = 200 sq ft</div>
                <div className="text-xl font-bold text-primary-600 mb-2">
                  $4,500-$7,500
                </div>
                <p className="text-gray-600 mb-3">Total Labor Cost</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• 3-4 workers, 4-6 days</li>
                  <li>• Basic equipment</li>
                  <li>• Site supervision</li>
                </ul>
              </div>

              <div className="price-card">
                <h3 className="font-semibold mb-4">Large Project</h3>
                <div className="text-sm text-gray-600 mb-2">100ft × 6ft = 600 sq ft</div>
                <div className="text-xl font-bold text-primary-600 mb-2">
                  $15,000-$25,000
                </div>
                <p className="text-gray-600 mb-3">Total Labor Cost</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• 4-6 workers, 10-14 days</li>
                  <li>• Heavy equipment</li>
                  <li>• Full crew management</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Additional Labor Costs */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Additional Labor Costs
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold mb-4">Direct Labor Costs</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Overtime (1.5x rate)</span>
                    <span>$60-$150/hr</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Weekend/Holiday (2x rate)</span>
                    <span>$80-$200/hr</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Night work (1.25x rate)</span>
                    <span>$50-$90/hr</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Rush completion (+50%)</span>
                    <span>+50% total</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Indirect Labor Costs</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Project Management</span>
                    <span>10-15% total</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Supervision</span>
                    <span>5-10% total</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Tool & Equipment</span>
                    <span>5-8% total</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Worker's Comp</span>
                    <span>8-15% total</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* DIY vs Professional */}
          <section className="py-12 bg-yellow-50 rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              DIY vs Professional Installation
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-red-600">
                  DIY Installation
                </h3>
                <div className="text-2xl font-bold text-green-600 mb-2">Save $3,000-$15,000</div>
                <p className="text-gray-600 mb-4">on typical project</p>
                <div className="space-y-2">
                  <p className="font-medium">Pros:</p>
                  <ul className="text-sm text-gray-600 ml-4">
                    <li>• Significant cost savings</li>
                    <li>• Complete control</li>
                    <li>• Flexible timeline</li>
                  </ul>
                  <p className="font-medium mt-3">Cons:</p>
                  <ul className="text-sm text-gray-600 ml-4">
                    <li>• No warranty</li>
                    <li>• Risk of failure</li>
                    <li>• Equipment rental $200-800/day</li>
                    <li>• May need permits anyway</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-green-600">
                  Professional Installation
                </h3>
                <div className="text-2xl font-bold text-primary-600 mb-2">Peace of Mind</div>
                <p className="text-gray-600 mb-4">with expert installation</p>
                <div className="space-y-2">
                  <p className="font-medium">Pros:</p>
                  <ul className="text-sm text-gray-600 ml-4">
                    <li>• Warranty included</li>
                    <li>• Proper engineering</li>
                    <li>• Faster completion</li>
                    <li>• Insurance coverage</li>
                  </ul>
                  <p className="font-medium mt-3">Cons:</p>
                  <ul className="text-sm text-gray-600 ml-4">
                    <li>• Higher initial cost</li>
                    <li>• Contractor reliability varies</li>
                    <li>• Less control</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Installation Cost FAQ
            </h2>

            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  How much of retaining wall cost is labor?
                </h3>
                <p className="text-gray-700">
                  Labor typically accounts for 40-50% of total retaining wall cost. For complex projects
                  like natural stone, labor can be 60-70%. For simple timber walls, labor may only be 30-40%.
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  How much does labor cost to install a retaining wall?
                </h3>
                <p className="text-gray-700">
                  Labor costs range from $12-$50 per square foot depending on material.
                  Timber: $12-$18/sq ft, Concrete blocks: $18-$25/sq ft, Poured concrete: $25-$35/sq ft,
                  Natural stone: $30-$50/sq ft.
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  How long does it take to install a retaining wall?
                </h3>
                <p className="text-gray-700">
                  Small walls (25ft × 3ft): 2-3 days. Medium walls (50ft × 4ft): 4-6 days.
                  Large walls (100ft × 6ft): 10-14 days. Complex projects or weather delays can extend timeline.
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  Should I hire a professional or DIY?
                </h3>
                <p className="text-gray-700">
                  DIY only recommended for walls under 3 feet tall. Taller walls require engineering,
                  permits, and expertise. The cost of fixing a failed DIY wall often exceeds professional
                  installation costs.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Hire Professional Installers?
              </h2>
              <p className="text-xl mb-8">
                Get free quotes from vetted retaining wall contractors in your area.
                Compare prices and save on your installation.
              </p>
              <div className="flex justify-center gap-4">
                <Link href="/calculator" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Calculate Costs
                </Link>
                <Link href="/retaining-wall-contractors" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
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