import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import RetainingWallCalculator from '../components/RetainingWallCalculator'

export default function RetainingWallRepairCost() {
  const seoData = {
    title: "Retaining Wall Repair Cost 2024 | Damage Types & Pricing Guide",
    description: "Complete guide to retaining wall repair costs. Fix leaning, cracked, and failed walls. Compare repair vs replacement costs. Free quotes for your repair project.",
    keywords: ["retaining wall repair cost", "fixing retaining wall", "leaning wall repair cost", "retaining wall failure repair", "cracked retaining wall repair"]
  }

  // Common repair scenarios with real costs
  const repairScenarios = [
    {
      type: "Minor Cracks",
      description: "Small hairline cracks, surface damage",
      repairMethod: "Epoxy injection, patching",
      cost: "$5-$15 per linear foot",
      time: "1-2 days",
      severity: "Low"
    },
    {
      type: "Bowing/Leaning",
      description: "Wall leaning 1-3 inches from vertical",
      repairMethod: "Helical ties, wall anchors",
      cost: "$50-$150 per anchor",
      time: "2-3 days",
      severity: "Medium"
    },
    {
      type: "Drainage Issues",
      description: "Water damage, poor drainage",
      repairMethod: "Install drainage system",
      cost: "$1,500-$4,000",
      time: "2-4 days",
      severity: "Medium"
    },
    {
      type: "Foundation Failure",
      description: "Base erosion, settling",
      repairMethod: "Underpinning, rebuilding base",
      cost: "$30-$60 per square foot",
      time: "1-2 weeks",
      severity: "High"
    },
    {
      type: "Major Structural Failure",
      description: "Wall at risk of collapse",
      repairMethod: "Partial/complete replacement",
      cost: "$40-$100 per square foot",
      time: "2-4 weeks",
      severity: "Critical"
    }
  ]

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords.join(', ')} />
        <link rel="canonical" href="https://wallestimate.com/retaining-wall-repair-cost" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="breadcrumb py-4">
            <a href="/">Home</a>
            <span className="breadcrumb-separator">›</span>
            <span>Repair Cost</span>
          </nav>

          {/* Hero Section */}
          <section className="py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">
                Retaining Wall Repair Cost Guide
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Don't wait until it's too late. Get repair costs for all types of
                wall damage. Compare repair vs replacement. Free assessment.
              </p>
              <div className="bg-red-100 text-red-700 inline-block px-6 py-3 rounded-lg">
                <span className="font-bold">Act Fast:</span> Small fixes save thousands
              </div>
            </div>

            {/* AdSense顶部横幅 */}
            <div className="ads-container mb-8 max-w-728 mx-auto">
              <span>Advertisement</span>
            </div>

            {/* Emergency Alert */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-red-800 mb-4">
                  ⚠️ Wall Failure Warning Signs
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      Wall leaning more than 3 inches
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      Large cracks (¼" or wider)
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      Soil washing out from base
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      Bulging or bowing sections
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      Water pooling behind wall
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      Sudden new cracks
                    </li>
                  </ul>
                </div>
                <p className="mt-4 font-semibold text-red-800">
                  See these signs? Contact a professional immediately!
                </p>
              </div>
            </div>
          </section>

          {/* Repair Cost Calculator */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Quick Repair Cost Estimate
            </h2>

            <div className="max-w-4xl mx-auto">
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600 mb-2">$500</div>
                    <div className="text-sm text-gray-600">Minor Crack Repair</div>
                    <div className="text-xs text-gray-500">10ft wall, surface patch</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600 mb-2">$4,500</div>
                    <div className="text-sm text-gray-600">Leaning Wall Fix</div>
                    <div className="text-xs text-gray-500">50ft wall, anchors needed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-red-600 mb-2">$12,000</div>
                    <div className="text-sm text-gray-600">Major Reconstruction</div>
                    <div className="text-xs text-gray-500">Partial wall replacement</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Repair Scenarios */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Repair Costs by Damage Type
            </h2>

            <div className="space-y-6 max-w-5xl mx-auto">
              {repairScenarios.map((scenario, idx) => (
                <div key={idx} className={`bg-white rounded-lg shadow-lg overflow-hidden ${scenario.severity === 'Critical' ? 'border-2 border-red-300' : ''}`}>
                  <div className="md:flex">
                    <div className={`md:w-1/4 p-6 text-center ${scenario.severity === 'Critical' ? 'bg-red-100' : scenario.severity === 'High' ? 'bg-orange-100' : scenario.severity === 'Medium' ? 'bg-yellow-100' : 'bg-green-100'}`}>
                      <div className="text-3xl font-bold mb-2">{scenario.cost}</div>
                      <div className="text-sm text-gray-600 mb-4">Cost Range</div>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${scenario.severity === 'Critical' ? 'bg-red-600 text-white' : scenario.severity === 'High' ? 'bg-orange-600 text-white' : scenario.severity === 'Medium' ? 'bg-yellow-600 text-white' : 'bg-green-600 text-white'}`}>
                        {scenario.severity} Severity
                      </div>
                    </div>
                    <div className="md:w-3/4 p-6">
                      <h3 className="text-xl font-semibold mb-3">{scenario.type}</h3>
                      <p className="text-gray-700 mb-3">{scenario.description}</p>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="font-semibold">Repair Method:</span>
                          <p>{scenario.repairMethod}</p>
                        </div>
                        <div>
                          <span className="font-semibold">Timeline:</span>
                          <p>{scenario.time}</p>
                        </div>
                        <div>
                          <span className="font-semibold">Cost Range:</span>
                          <p className="text-lg font-bold text-primary-600">{scenario.cost}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* AdSense修复方案下方广告 */}
            <div className="ads-container mt-8 max-w-728 mx-auto">
              <span>Advertisement</span>
            </div>
          </section>

          {/* Repair Methods Detail */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Common Repair Methods & Costs
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">Structural Repairs</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <div className="font-semibold">Helical Tiebacks</div>
                    <div className="text-lg font-bold">$200-$500 each</div>
                    <div className="text-sm text-gray-600">Steel anchors installed through wall into soil</div>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <div className="font-semibold">Wall Anchors</div>
                    <div className="text-lg font-bold">$150-$350 each</div>
                    <div className="text-sm text-gray-600">Plate and rod system to stabilize leaning walls</div>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <div className="font-semibold">Carbon Fiber Strips</div>
                    <div className="text-lg font-bold">$30-$60 per foot</div>
                    <div className="text-sm text-gray-600">Epoxy-bonded reinforcement for cracks</div>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <div className="font-semibold">Underpinning</div>
                    <div className="text-lg font-bold">$100-$200 per foot</div>
                    <div className="text-sm text-gray-600">Extending foundation depth for stability</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-700">Surface & Drainage</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <div className="font-semibold">Epoxy Injection</div>
                    <div className="text-lg font-bold">$5-$15 per crack foot</div>
                    <div className="text-sm text-gray-600">Seals cracks and restores structural integrity</div>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <div className="font-semibold">French Drain Installation</div>
                    <div className="text-lg font-bold">$30-$50 per foot</div>
                    <div className="text-sm text-gray-600">Perforated pipe with gravel drainage system</div>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <div className="font-semibold">Weep Hole Installation</div>
                    <div className="text-lg font-bold">$25-$50 each</div>
                    <div className="text-sm text-gray-600">Allows water drainage through wall</div>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <div className="font-semibold">Surface Re-pointing</div>
                    <div className="text-lg font-bold">$8-$15 per sq ft</div>
                    <div className="text-sm text-gray-600">Removing and replacing damaged mortar joints</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Repair vs Replace */}
          <section className="py-12 bg-yellow-50 rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Repair vs Replace: When to Choose What
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4 text-green-700">🔧 REPAIR When:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Wall is under 10 years old
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Damage affects less than 25% of wall
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Foundation is stable and intact
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Leaning is less than 10 degrees
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Repair cost is less than 50% of replacement
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-green-100 rounded">
                  <div className="font-bold text-green-800">Savings: 40-70%</div>
                  <div className="text-sm text-green-700">vs full replacement</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4 text-red-700">🔄 REPLACE When:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    Wall is at risk of immediate collapse
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    Major foundation failure
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    Over 50% of wall needs repair
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    Wall is at end of lifespan
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    Multiple repair attempts failed
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-red-100 rounded">
                  <div className="font-bold text-red-800">Long-term Solution</div>
                  <div className="text-sm text-red-700">50+ year lifespan</div>
                </div>
              </div>
            </div>
          </section>

          {/* Prevention Tips */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Prevent Costly Repairs: Maintenance Tips
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="font-semibold mb-3">Regular Inspections</h3>
                <ul className="text-sm text-left space-y-1">
                  <li>• Check after heavy rains</li>
                  <li>• Look for new cracks</li>
                  <li>• Monitor wall lean</li>
                  <li>• Inspect drainage</li>
                </ul>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl mb-4">💧</div>
                <h3 className="font-semibold mb-3">Water Management</h3>
                <ul className="text-sm text-left space-y-1">
                  <li>• Clean gutters regularly</li>
                  <li>• Ensure proper grading</li>
                  <li>• Install French drain if needed</li>
                  <li>• Check sprinkler systems</li>
                </ul>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="font-semibold mb-3">Landscape Care</h3>
                <ul className="text-sm text-left space-y-1">
                  <li>• Plant trees away from wall</li>
                  <li>• Avoid deep roots near base</li>
                  <li>• Remove heavy vegetation</li>
                  <li>• Maintain soil moisture</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Calculator for New Quote */}
          <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg mb-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                Considering Replacement?
              </h2>
              <p className="text-xl mb-8">
                Sometimes replacement is more cost-effective. See what a new wall would cost.
              </p>
              <div className="bg-white rounded-lg p-8 max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Compare New Wall Cost
                </h3>
                <RetainingWallCalculator
                  showAdvanced={false}
                  title=""
                />
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Repair FAQ
            </h2>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="text-xl font-semibold mb-3">
                  How much does it cost to fix a leaning retaining wall?
                </h3>
                <p className="text-gray-700">
                  For minor leaning (1-2 inches): $2,000-$5,000 using wall anchors or helical tiebacks. For severe leaning (3+ inches): $8,000-$20,000 requiring extensive anchoring systems or partial reconstruction.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="text-xl font-semibold mb-3">
                  Can a collapsed retaining wall be repaired?
                </h3>
                <p className="text-gray-700">
                  Complete collapse usually requires full replacement. However, partial collapses can sometimes be repaired by rebuilding the failed section and adding reinforcement. Costs: $3,000-$15,000 depending on extent.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="text-xl font-semibold mb-3">
                  Does homeowners insurance cover retaining wall repair?
                </h3>
                <p className="text-gray-700">
                  Usually only if damage is from covered peril like landslide, earthquake, or vehicle collision. Normal wear and tear, poor construction, or lack of maintenance are not covered. Check your policy specifics.
                </p>
              </div>

              {/* AdSense FAQ下方广告 */}
              <div className="ads-container">
                <span>Advertisement</span>
              </div>
            </div>
          </section>

          {/* Related Pages */}
          <section className="py-12 bg-gray-100 rounded-lg">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-6">
                Need Professional Help?
              </h2>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <Link href="/retaining-wall-installation-cost" className="price-card block text-center">
                  <h3 className="font-semibold mb-2">Installation Costs</h3>
                  <p className="text-sm text-gray-600">Compare with repair</p>
                </Link>
                <Link href="/states" className="price-card block text-center">
                  <h3 className="font-semibold mb-2">Find Local Costs</h3>
                  <p className="text-sm text-gray-600">Prices by state</p>
                </Link>
                <Link href="/calculator" className="price-card block text-center">
                  <h3 className="font-semibold mb-2">Get Full Quote</h3>
                  <p className="text-sm text-gray-600">Free calculator</p>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}