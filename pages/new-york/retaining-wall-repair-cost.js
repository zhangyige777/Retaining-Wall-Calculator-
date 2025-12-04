import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function NewYorkRetainingWallRepairCost() {
  const seoData = {
    title: "New York Retaining Wall Repair Cost 2024 | NY Repair Pricing",
    description: "Complete guide to retaining wall repair costs in New York. Fix freeze/thaw damage, cracked walls, leaning structures. Local pricing for NYC, Buffalo, Rochester.",
    keywords: ["new york retaining wall repair cost", "ny retaining wall repair", "freeze thaw retaining wall repair", "retaining wall collapse repair new york", "cracked retaining wall repair cost"]
  }

  // 维修类型和成本
  const repairTypes = [
    {
      type: "Crack Repair",
      description: "Fixing small to medium cracks in concrete or stone walls",
      costRange: "$500-$3,000",
      avgCost: "$1,500",
      severity: "Minor to Moderate",
      commonInNY: true
    },
    {
      type: "Bulging Wall",
      description: "Straightening walls that bow or bulge outward",
      costRange: "$2,000-$8,000",
      avgCost: "$5,000",
      severity: "Moderate to Severe",
      commonInNY: true
    },
    {
      type: "Leaning Wall",
      description: "Correcting walls that tilt or lean",
      costRange: "$3,000-$12,000",
      avgCost: "$7,500",
      severity: "Severe",
      commonInNY: true
    },
    {
      type: "Drainage Issues",
      description: "Fixing or installing proper drainage systems",
      costRange: "$1,000-$5,000",
      avgCost: "$3,000",
      severity: "Moderate",
      commonInNY: true
    },
    {
      type: "Foundation Failure",
      description: "Major reconstruction of wall foundation",
      costRange: "$5,000-$20,000",
      avgCost: "$12,500",
      severity: "Severe",
      commonInNY: false
    },
    {
      type: "Complete Rebuild",
      description: "Tearing down and rebuilding the entire wall",
      costRange: "$8,000-$35,000",
      avgCost: "$20,000",
      severity: "Complete Failure",
      commonInNY: false
    }
  ]

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords.join(', ')} />
        <link rel="canonical" href="https://wallestimate.com/new-york/retaining-wall-repair-cost" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="breadcrumb py-4">
            <a href="/">Home</a>
            <span className="breadcrumb-separator">›</span>
            <a href="/new-york/retaining-wall-cost">New York</a>
            <span className="breadcrumb-separator">›</span>
            <span>Repair Cost</span>
          </nav>

          {/* Hero Section */}
          <section className="py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">
                New York Retaining Wall Repair Cost Guide 2024
              </h1>
              <p className="text-xl text-gray-600">
                Complete guide to fixing retaining walls in New York. Address common issues
                from freeze/thaw cycles, aging infrastructure, and urban development demands.
                Costs are 25% higher than national average due to specialized repairs needed.
              </p>
              <div className="flex justify-center gap-4 mt-6">
                <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full">
                  ❄️ Freeze/Thaw Repairs
                </span>
                <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full">
                  🏙️ Urban Challenges
                </span>
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                  📋 Engineering Often Required
                </span>
              </div>
            </div>

            {/* AdSense顶部横幅 */}
            <div className="ads-container mb-8 max-w-728 mx-auto">
              <span>Advertisement</span>
            </div>
          </section>

          {/* NYC Special Considerations */}
          <section className="py-12 bg-red-50 rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Why NY Has High Repair Demand
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4 text-red-700">
                  Freeze/Thaw Cycles
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• 30-40 freeze cycles annually</li>
                  <li>• Water expands 9% when frozen</li>
                  <li>• Creates 20,000 PSI pressure</li>
                  <li>• Repeated stress causes cracks</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4 text-red-700">
                  Aging Infrastructure
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Many walls 50+ years old</li>
                  <li>• Outdated construction methods</li>
                  <li>• Lack of modern drainage</li>
                  <li>• No reinforcement in old walls</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4 text-red-700">
                  Urban Challenges
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Limited access for equipment</li>
                  <li>• Nearby structures at risk</li>
                  <li>• Strict permit requirements</li>
                  <li>• Higher disposal costs</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Repair Types and Costs */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Common Repairs & Costs in New York
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {repairTypes.map((repair, idx) => (
                <div key={idx} className={`price-card ${repair.commonInNY ? 'border-l-4 border-red-500' : ''}`}>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold">{repair.type}</h3>
                    {repair.commonInNY && (
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                        Common in NY
                      </span>
                    )}
                  </div>
                  <div className="text-2xl font-bold text-primary-600 mb-2">
                    {repair.costRange}
                  </div>
                  <p className="text-gray-600 mb-3">{repair.description}</p>
                  <div className="flex justify-between text-sm">
                    <span><strong>Average:</strong> {repair.avgCost}</span>
                    <span><strong>Severity:</strong> {repair.severity}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* AdSense维修类型表格下方广告 */}
            <div className="ads-container mt-8 max-w-728 mx-auto">
              <span>Advertisement</span>
            </div>
          </section>

          {/* Warning Signs */}
          <section className="py-12 bg-yellow-50 rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Warning Signs That Need Immediate Attention
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-yellow-700">
                  Visual Signs
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">⚠️</span>
                    <span>Horizontal cracks wider than 1/4 inch</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">⚠️</span>
                    <span>Stair-step cracks in block walls</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">⚠️</span>
                    <span>Bulging or bowing > 2 inches</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">⚠️</span>
                    <span>Leaning > 5 degrees from vertical</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-yellow-700">
                  Environmental Signs
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">⚠️</span>
                    <span>Water pooling behind wall</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">⚠️</span>
                    <span>Soil erosion at wall base</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">⚠️</span>
                    <span>New gaps after winter thaw</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">⚠️</span>
                    <span>Damaged drainage systems</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Prevention Tips */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Prevent Future Repairs - NY Specific Tips
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="price-card">
                <h3 className="font-semibold mb-4 text-lg">Winter Preparation</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Clear drainage before freeze</li>
                  <li>• Check for cracks in fall</li>
                  <li>• Remove snow buildup</li>
                  <li>• Avoid salt near walls</li>
                </ul>
              </div>

              <div className="price-card">
                <h3 className="font-semibold mb-4 text-lg">Proper Drainage</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Install French drains</li>
                  <li>• Use weep holes every 6ft</li>
                  <li>• Grade soil away from wall</li>
                  <li>• Add gravel backfill</li>
                </ul>
              </div>

              <div className="price-card">
                <h3 className="font-semibold mb-4 text-lg">Regular Maintenance</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Annual inspections</li>
                  <li>• Clean weep holes yearly</li>
                  <li>• Monitor after heavy rain</li>
                  <li>• Check for plant damage</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Repair Process */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              NY Repair Process & Timeline
            </h2>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold mr-4">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Inspection & Assessment</h4>
                    <p className="text-gray-600">1-2 days. Engineer may be required for walls over 4ft or with severe damage.</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold mr-4">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Permits & Approvals</h4>
                    <p className="text-gray-600">1-3 weeks. NYC has the most complex process, other NY cities are faster.</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold mr-4">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Repair Work</h4>
                    <p className="text-gray-600">3-10 days depending on severity. Weather delays common in winter.</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold mr-4">
                    4
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Final Inspection</h4>
                    <p className="text-gray-600">1-2 days. City inspector must approve all major repairs.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* City-Specific Costs */}
          <section className="py-12 bg-white rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Repair Costs by NY City
            </h2>

            <table className="w-full max-w-4xl mx-auto">
              <thead>
                <tr>
                  <th className="p-3 text-left">City</th>
                  <th className="p-3 text-center">Minor Repairs</th>
                  <th className="p-3 text-center">Major Repairs</th>
                  <th className="p-3 text-left">Special Considerations</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 font-semibold">New York City</td>
                  <td className="p-3 text-center">$2,000-$6,000</td>
                  <td className="p-3 text-center">$8,000-$35,000</td>
                  <td className="p-3">Highest costs, strict permits, limited access</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 font-semibold">Buffalo</td>
                  <td className="p-3 text-center">$1,500-$4,500</td>
                  <td className="p-3 text-center">$6,000-$25,000</td>
                  <td className="p-3">Severe freeze/thaw, lower labor costs</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Rochester</td>
                  <td className="p-3 text-center">$1,400-$4,200</td>
                  <td className="p-3 text-center">$5,500-$23,000</td>
                  <td className="p-3">Similar to Buffalo, slightly lower</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 font-semibold">Albany</td>
                  <td className="p-3 text-center">$1,600-$4,800</td>
                  <td className="p-3 text-center">$6,500-$27,000</td>
                  <td className="p-3">State capital, moderate costs</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Emergency Repairs */}
          <section className="py-12 bg-red-50 rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Emergency Repairs
            </h2>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg border-l-4 border-red-500 mb-6">
                <h3 className="text-xl font-semibold text-red-700 mb-3">When to Call Emergency Services</h3>
                <ul className="space-y-2">
                  <li>• Wall is actively collapsing</li>
                  <li>• Threat to adjacent structures</li>
                  <li>• Utility lines exposed or damaged</li>
                  <li>• Complete failure imminent</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="price-card">
                  <h3 className="font-semibold mb-3 text-lg">Emergency Response</h3>
                  <p className="text-2xl font-bold text-red-600 mb-2">+$5,000-$15,000</p>
                  <p className="text-gray-600 text-sm">Additional costs for 24/7 service, immediate mobilization, temporary shoring</p>
                </div>

                <div className="price-card">
                  <h3 className="font-semibold mb-3 text-lg">Temporary Stabilization</h3>
                  <p className="text-2xl font-bold text-orange-600 mb-2">$2,000-$8,000</p>
                  <p className="text-gray-600 text-sm">Shoring, bracing, erosion control until permanent repair</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-12 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              NY Repair FAQ
            </h2>

            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  How much does retaining wall repair cost in NY?
                </h3>
                <p className="text-gray-700">
                  In New York, retaining wall repairs cost $500-$35,000. Minor crack repairs start at $500,
                  while complete rebuilds can exceed $35,000 in NYC. NY costs are 25% higher than national average
                  due to freeze/thaw damage and urban challenges.
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  Does homeowners insurance cover retaining wall repair in NY?
                </h3>
                <p className="text-gray-700">
                  Insurance typically covers retaining wall repair only if damage is from a covered peril
                  (landslide, flood, earthquake). Normal wear and tear, freeze/thaw damage, and aging are
                  usually not covered. Check your policy for specific coverage.
                </p>
              </div>

              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  Can I repair a retaining wall myself in NY?
                </h3>
                <p className="text-gray-700">
                  DIY repairs are limited to minor cosmetic issues under 3 feet high. Most repairs in NY require
                  professional service due to engineering requirements, permit needs, and safety concerns.
                  Always consult local building codes first.
                </p>
              </div>

              {/* AdSense FAQ下方广告 */}
              <div className="ads-container">
                <span>Advertisement</span>
              </div>
            </div>
          </section>

          {/* Find Contractors */}
          <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                Need Professional Repair in NY?
              </h2>
              <p className="text-xl mb-8">
                Connect with licensed NY contractors specializing in retaining wall repair.
                Free quotes, emergency service available.
              </p>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition">
                Get Free Repair Quotes
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}