import { Link } from 'react-router-dom'

// Icons (reused)
const GlobeIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
  </svg>
)

const CheckIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
)

// Shared Navigation Component
const SharedNavigation = ({ currentPage }) => {
  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <Link to="/" className="flex items-center">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <h1 className="text-lg font-semibold text-gray-900">
              Build Pal
            </h1>
          </Link>
          <div className="flex items-center space-x-8">
            <Link
              to="/product"
              className={`font-normal text-sm transition-colors ${currentPage === 'product'
                  ? 'text-orange-500'
                  : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              Product
            </Link>
            <Link
              to="/resources"
              className={`font-normal text-sm transition-colors ${currentPage === 'resources'
                  ? 'text-orange-500'
                  : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              Resources
            </Link>
            <Link
              to="/pricing"
              className={`font-normal text-sm transition-colors ${currentPage === 'pricing'
                  ? 'text-orange-500'
                  : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              Pricing
            </Link>
            <Link
              to="/enterprise"
              className={`font-normal text-sm transition-colors ${currentPage === 'enterprise'
                  ? 'text-orange-500'
                  : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              Enterprise
            </Link>
            <div className="text-gray-600">
              <GlobeIcon />
            </div>
            <Link
              to="/login"
              className="bg-green-400 hover:bg-green-500 text-gray-900 px-5 py-2 rounded-full font-medium text-sm transition-colors"
            >
              Start Building
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

// Shared Footer Component
const SharedFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Start Building?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of creators who are building without code
          </p>
          <Link
            to="/login"
            className="bg-green-400 hover:bg-green-500 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg"
          >
            Start Building Free
          </Link>
        </div>

        <div className="border-t border-gray-800 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">B</span>
                </div>
                <h3 className="text-xl font-semibold">Build Pal</h3>
              </div>
              <p className="text-gray-400">
                Build functional apps in minutes with just your words.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link to="/product" className="text-gray-400 hover:text-white transition-colors">Templates</Link></li>
                <li><Link to="/product" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
                <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
                <li><Link to="/enterprise" className="text-gray-400 hover:text-white transition-colors">Enterprise</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><Link to="/resources" className="text-gray-400 hover:text-white transition-colors">Help Center</Link></li>
                <li><Link to="/resources" className="text-gray-400 hover:text-white transition-colors">Community</Link></li>
                <li><Link to="/resources" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/resources" className="text-gray-400 hover:text-white transition-colors">Status</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">&copy; 2025 Build Pal. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Pricing Page
const PricingPage = () => {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      period: "forever",
      description: "Perfect for trying out Build Pal",
      features: [
        "3 apps per month",
        "Basic templates",
        "Community support",
        "Standard deployment",
        "Basic analytics"
      ],
      cta: "Start Free",
      popular: false
    },
    {
      name: "Pro",
      price: "$29",
      period: "per month",
      description: "Best for individual developers",
      features: [
        "Unlimited apps",
        "Premium templates",
        "Priority support",
        "Custom domains",
        "Advanced analytics",
        "API access",
        "Team collaboration"
      ],
      cta: "Start Pro Trial",
      popular: true
    },
    {
      name: "Team",
      price: "$99",
      period: "per month",
      description: "Ideal for growing teams",
      features: [
        "Everything in Pro",
        "Up to 10 team members",
        "Advanced collaboration",
        "Custom integrations",
        "White-label options",
        "SSO authentication",
        "24/7 phone support"
      ],
      cta: "Start Team Trial",
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <SharedNavigation currentPage="pricing" />

      {/* Hero Section */}
      <div className="bg-gradient-hero py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Start building for free, then choose a plan that scales with your needs.
            No hidden fees, no surprises.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all hover:shadow-xl ${plan.popular
                    ? 'border-orange-500 transform scale-105'
                    : 'border-gray-200'
                  }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-2">{plan.period}</span>
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckIcon className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/login"
                    className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${plan.popular
                        ? 'bg-orange-500 hover:bg-orange-600 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                      }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Have questions about our pricing? We're here to help.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Can I switch plans anytime?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and you'll only pay the prorated difference."
              },
              {
                question: "Is there a free trial?",
                answer: "Yes! Our Pro and Team plans come with a 14-day free trial. No credit card required to start."
              },
              {
                question: "What happens if I exceed my app limit?",
                answer: "On the Starter plan, you'll be prompted to upgrade. Pro and Team plans have unlimited apps, so you never have to worry about limits."
              },
              {
                question: "Do you offer refunds?",
                answer: "Yes, we offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, we'll refund your payment in full."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SharedFooter />
    </div>
  )
}

export default PricingPage
