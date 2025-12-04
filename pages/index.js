import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import RetainingWallCalculator from '../components/RetainingWallCalculator'

export default function HomePage() {
  // SEO数据
  const seoData = {
    title: "Retaining Wall Cost Calculator 2024 | Free Instant Estimates",
    description: "Calculate retaining wall costs instantly with our free calculator. Compare prices for concrete, stone, timber, and more materials. Get accurate estimates for your project.",
    keywords: ["retaining wall calculator", "retaining wall cost", "cost of retaining wall", "how much does a retaining wall cost", "retaining wall cost calculator"],
    canonical: "https://wallestimate.com"
  }

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords.join(', ')} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.canonical} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={seoData.canonical} />

        {/* JSON-LD结构化数据 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "WallEstimate Pro",
            "url": seoData.canonical,
            "description": "Professional retaining wall cost calculator and estimation platform",
            "potentialAction": {
              "@type": "SearchAction",
              "target": `${seoData.canonical}/search?q={search_term_string}`,
              "query-input": "required name=search_term_string"
            }
          })
        }} />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Retaining Wall Cost Calculator
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Get instant, accurate estimates for your retaining wall project.
                Compare materials, calculate costs, and make informed decisions.
              </p>

              {/* AdSense横幅广告位置 */}
              <div className="ads-container mb-8 mx-auto max-w-728">
                <span>Advertisement</span>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-16 -mt-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <RetainingWallCalculator />
            </div>
          </div>
        </section>

        {/* Average Costs Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Average Retaining Wall Costs by Material
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Concrete */}
              <div className="price-card">
                <h3 className="text-xl font-semibold mb-4">Concrete Retaining Wall</h3>
                <div className="text-3xl font-bold text-primary-600 mb-2">$45-$60</div>
                <p className="text-gray-600 mb-4">per square foot</p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ Durable and long-lasting (50+ years)</li>
                  <li>✓ Versatile design options</li>
                  <li>✓ Low maintenance</li>
                  <li>✓ Suitable for all applications</li>
                </ul>
                <Link href="/cost/concrete-retaining-wall-cost" className="cta-button inline-block mt-6">
                  Learn More
                </Link>
              </div>

              {/* Natural Stone */}
              <div className="price-card">
                <h3 className="text-xl font-semibold mb-4">Natural Stone Wall</h3>
                <div className="text-3xl font-bold text-primary-600 mb-2">$55-$75</div>
                <p className="text-gray-600 mb-4">per square foot</p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ Beautiful natural appearance</li>
                  <li>✓ Extremely durable (100+ years)</li>
                  <li>✓ Increases property value</li>
                  <li>✓ Environmentally friendly</li>
                </ul>
                <Link href="/cost/stone-retaining-wall-cost" className="cta-button inline-block mt-6">
                  Learn More
                </Link>
              </div>

              {/* Timber */}
              <div className="price-card">
                <h3 className="text-xl font-semibold mb-4">Timber Wall</h3>
                <div className="text-3xl font-bold text-primary-600 mb-2">$20-$35</div>
                <p className="text-gray-600 mb-4">per square foot</p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ Most affordable option</li>
                  <li>✓ Natural, rustic look</li>
                  <li>✓ Easy to install</li>
                  <li>✓ Great for garden walls</li>
                </ul>
                <Link href="/cost/timber-retaining-wall-cost" className="cta-button inline-block mt-6">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* States Guide Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Retaining Wall Costs by State
            </h2>

            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {/* Tier 1 States */}
              <div>
                <h3 className="font-semibold text-lg mb-4 text-primary-700">Tier 1 - Highest Priority</h3>
                <ul className="space-y-2">
                  <li><Link href="/california/retaining-wall-cost" className="text-blue-600 hover:underline">California</Link></li>
                  <li><Link href="/washington/retaining-wall-cost" className="text-blue-600 hover:underline">Washington</Link></li>
                  <li><Link href="/oregon/retaining-wall-cost" className="text-blue-600 hover:underline">Oregon</Link></li>
                </ul>
              </div>

              {/* Tier 2 States */}
              <div>
                <h3 className="font-semibold text-lg mb-4 text-primary-700">Tier 2 - High Value</h3>
                <ul className="space-y-2">
                  <li><Link href="/new-york/retaining-wall-cost" className="text-blue-600 hover:underline">New York</Link></li>
                  <li><Link href="/pennsylvania/retaining-wall-cost" className="text-blue-600 hover:underline">Pennsylvania</Link></li>
                  <li><Link href="/ohio/retaining-wall-cost" className="text-blue-600 hover:underline">Ohio</Link></li>
                  <li><Link href="/michigan/retaining-wall-cost" className="text-blue-600 hover:underline">Michigan</Link></li>
                </ul>
              </div>

              {/* Tier 3 States */}
              <div>
                <h3 className="font-semibold text-lg mb-4 text-primary-700">Tier 3 - Good Value</h3>
                <ul className="space-y-2">
                  <li><Link href="/texas/retaining-wall-cost" className="text-blue-600 hover:underline">Texas</Link></li>
                  <li><Link href="/colorado/retaining-wall-cost" className="text-blue-600 hover:underline">Colorado</Link></li>
                  <li><Link href="/florida/retaining-wall-cost" className="text-blue-600 hover:underline">Florida</Link></li>
                </ul>
              </div>

              {/* Other States */}
              <div>
                <h3 className="font-semibold text-lg mb-4 text-primary-700">View All States</h3>
                <Link href="/states" className="cta-button">
                  Complete State List
                </Link>
              </div>
            </div>

            {/* AdSense广告位置 */}
            <div className="ads-container mt-12 max-w-728 mx-auto">
              <span>Advertisement</span>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {/* FAQ 1 */}
              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  How much does a retaining wall cost in 2024?
                </h3>
                <p className="text-gray-700">
                  The average cost of a retaining wall in 2024 ranges from $15 to $75 per square foot,
                  depending on materials and complexity. A typical 50-foot by 4-foot wall costs between
                  $3,000 and $15,000 to install.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  Do I need a permit for a retaining wall?
                </h3>
                <p className="text-gray-700">
                  Most jurisdictions require permits for retaining walls over 3-4 feet tall.
                  Always check with your local building department before starting construction.
                  Permit costs typically range from $100 to $500.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  What is the most cost-effective retaining wall material?
                </h3>
                <p className="text-gray-700">
                  Pressure-treated timber is the most affordable at $20-$35 per square foot, but concrete
                  offers the best long-term value at $45-$60 per square foot due to its durability and
                  low maintenance requirements.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="faq-item">
                <h3 className="text-xl font-semibold mb-3">
                  How long does a retaining wall last?
                </h3>
                <p className="text-gray-700">
                  Lifespan varies by material: timber walls last 15-20 years, concrete walls 50+ years,
                  and natural stone walls can last 100+ years with proper maintenance and drainage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Additional Calculators & Tools
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Link href="/concrete-retaining-wall-calculator" className="price-card block">
                <h3 className="text-xl font-semibold mb-4">Concrete Wall Calculator</h3>
                <p className="text-gray-600">Calculate costs specifically for concrete retaining walls with reinforcement options.</p>
              </Link>

              <Link href="/retaining-wall-block-calculator" className="price-card block">
                <h3 className="text-xl font-semibold mb-4">Block Wall Calculator</h3>
                <p className="text-gray-600">Estimate costs for concrete block and segmental retaining wall systems.</p>
              </Link>

              <Link href="/retaining-wall-cost-per-foot" className="price-card block">
                <h3 className="text-xl font-semibold mb-4">Cost Per Foot Guide</h3>
                <p className="text-gray-600">View detailed cost breakdowns per linear foot for different wall types.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8">
              Use our calculator to get instant estimates and connect with local contractors.
            </p>
            <Link href="/calculator" className="cta-button text-xl px-8 py-4">
              Get Started Now
            </Link>
          </div>
        </section>

        {/* Schema for FAQ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much does a retaining wall cost in 2024?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The average cost of a retaining wall in 2024 ranges from $15 to $75 per square foot. A typical 50-foot by 4-foot wall costs between $3,000 and $15,000."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need a permit for a retaining wall?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most jurisdictions require permits for retaining walls over 3-4 feet tall. Always check with your local building department. Permit costs typically range from $100 to $500."
                }
              }
            ]
          })
        }} />
      </div>
    </>
  )
}