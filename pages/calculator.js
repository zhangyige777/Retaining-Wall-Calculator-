import React from 'react'
import Head from 'next/head'
import RetainingWallCalculator from '../components/RetainingWallCalculator'

export default function CalculatorPage() {
  return (
    <>
      <Head>
        <title>Retaining Wall Calculator 2024 | Free Online Cost Estimator</title>
        <meta name="description" content="Calculate retaining wall costs instantly with our free calculator. Get accurate estimates for materials, labor, and installation costs. Compare prices by state and material type." />
        <meta name="keywords" content="retaining wall calculator, retaining wall cost calculator, wall cost estimator, concrete wall calculator, stone wall calculator" />
        <link rel="canonical" href="https://wallestimate.com/calculator" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <nav className="breadcrumb">
            <a href="/">Home</a>
            <span className="breadcrumb-separator">›</span>
            <span>Calculator</span>
          </nav>
        </div>

        {/* Main Calculator Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">
                  Professional Retaining Wall Calculator
                </h1>
                <p className="text-xl text-gray-600">
                  Get instant, accurate estimates for your retaining wall project.
                  Enter your dimensions and requirements below.
                </p>
              </div>

              {/* AdSense顶部广告 */}
              <div className="ads-container mb-8">
                <span>Advertisement</span>
              </div>

              {/* Main Calculator */}
              <RetainingWallCalculator showAdvanced={true} />
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              Calculator Tips & Guidelines
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary-600">
                  Measuring Your Wall
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Measure the total length along the base</li>
                  <li>• Height is measured from base to top</li>
                  <li>• Add 10% for waste and overage</li>
                  <li>• Consider slope and drainage requirements</li>
                  <li>• Account for underground utilities</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary-600">
                  Cost Considerations
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Material costs vary by region</li>
                  <li>• Labor typically costs 40-50% of total</li>
                  <li>• Drainage systems add $10-15 per linear foot</li>
                  <li>• Permits range from $100-500</li>
                  <li>• Excavation costs $50-100 per hour</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Material Comparison */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Material Cost Comparison
            </h2>

            <table className="max-w-4xl mx-auto">
              <thead>
                <tr>
                  <th>Material</th>
                  <th>Cost per sq ft</th>
                  <th>Lifespan</th>
                  <th>Maintenance</th>
                  <th>Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Concrete</strong></td>
                  <td>$45-$60</td>
                  <td>50+ years</td>
                  <td>Low</td>
                  <td>All applications</td>
                </tr>
                <tr>
                  <td><strong>Natural Stone</strong></td>
                  <td>$55-$75</td>
                  <td>100+ years</td>
                  <td>Very Low</td>
                  <td>Decorative walls</td>
                </tr>
                <tr>
                  <td><strong>Timber</strong></td>
                  <td>$20-$35</td>
                  <td>15-20 years</td>
                  <td>High</td>
                  <td>Garden walls</td>
                </tr>
                <tr>
                  <td><strong>Concrete Blocks</strong></td>
                  <td>$35-$50</td>
                  <td>30-50 years</td>
                  <td>Medium</td>
                  <td>Diy projects</td>
                </tr>
                <tr>
                  <td><strong>Segmental</strong></td>
                  <td>$50-$65</td>
                  <td>50+ years</td>
                  <td>Low</td>
                  <td>Curved walls</td>
                </tr>
              </tbody>
            </table>

            {/* AdSense表格下方广告 */}
            <div className="ads-container mt-12 max-w-728 mx-auto">
              <span>Advertisement</span>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}