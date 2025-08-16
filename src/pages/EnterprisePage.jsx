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

const ShieldIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
)

const UsersIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
  </svg>
)

const ChartIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
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

// Enterprise Page
const EnterprisePage = () => {
  const enterpriseFeatures = [
    {
      icon: <ShieldIcon />,
      title: "Enterprise Security",
      description: "SOC 2 compliance, SSO integration, advanced user management, and audit logs."
    },
    {
      icon: <UsersIcon />,
      title: "Unlimited Team Members",
      description: "Scale your team without limits. Advanced role-based permissions and team management."
    },
    {
      icon: <ChartIcon />,
      title: "Advanced Analytics",
      description: "Detailed usage analytics, performance monitoring, and custom reporting dashboards."
    }
  ]

  const benefits = [
    "Dedicated customer success manager",
    "Priority 24/7 phone and email support",
    "Custom integrations and API access",
    "On-premise deployment options",
    "Advanced security and compliance",
    "Custom training and onboarding",
    "Flexible billing and contracts",
    "White-label options available"
  ]

  return (
    <div className="min-h-screen bg-white">
      <SharedNavigation currentPage="enterprise" />

      {/* Hero Section */}
      <div className="bg-gradient-hero py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Enterprise-Grade App Building
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Scale your organization with Build Pal Enterprise. Get advanced security,
            dedicated support, and custom solutions for your team.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg">
              Contact Sales
            </button>
            <Link
              to="/login"
              className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg border border-gray-300"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </div>

      {/* Enterprise Features */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Built for Enterprise Scale
            </h2>
            <p className="text-xl text-gray-600">
              Everything your organization needs to build and deploy applications at scale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {enterpriseFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="text-orange-500">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Build Pal Enterprise?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Get the power and flexibility your enterprise needs with advanced
                features, dedicated support, and custom solutions.
              </p>

              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Enterprise Pricing</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Work Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Team Size
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent">
                    <option>10-50 employees</option>
                    <option>51-200 employees</option>
                    <option>201-1000 employees</option>
                    <option>1000+ employees</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Contact Sales Team
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Testimonials */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Leading Organizations
            </h2>
            <p className="text-xl text-gray-600">
              See how enterprises are transforming their development process with Build Pal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
              <p className="text-gray-600 mb-6 italic">
                "Build Pal Enterprise has revolutionized how our team builds internal tools.
                We've reduced development time by 80% and our developers can focus on core product features."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">JS</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">John Smith</div>
                  <div className="text-gray-600">CTO, TechCorp Inc.</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
              <p className="text-gray-600 mb-6 italic">
                "The enterprise security features and dedicated support make Build Pal
                the perfect choice for our regulated industry. Highly recommended."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">MJ</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Maria Johnson</div>
                  <div className="text-gray-600">VP Engineering, FinanceFlow</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Development Process?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get in touch with our enterprise team to discuss your specific needs and get a custom quote.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg">
              Schedule a Demo
            </button>
            <button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg">
              Download Datasheet
            </button>
          </div>
        </div>
      </div>

      <SharedFooter />
    </div>
  )
}

export default EnterprisePage
