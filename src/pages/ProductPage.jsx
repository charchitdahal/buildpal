import { Link } from 'react-router-dom'

// Icons (reused from main app)
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

const ArrowRightIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
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

// Product Page
const ProductPage = () => {
  const features = [
    {
      title: "AI-Powered Generation",
      description: "Transform your ideas into fully functional applications using advanced AI technology.",
      icon: "🤖"
    },
    {
      title: "No-Code Platform",
      description: "Build complex applications without writing a single line of code.",
      icon: "🚀"
    },
    {
      title: "Instant Deployment",
      description: "Your apps are automatically deployed and ready to use within minutes.",
      icon: "⚡"
    },
    {
      title: "Custom Templates",
      description: "Choose from hundreds of pre-built templates or create your own.",
      icon: "🎨"
    },
    {
      title: "Real-time Collaboration",
      description: "Work together with your team in real-time on any project.",
      icon: "👥"
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security with encryption and compliance certifications.",
      icon: "🔒"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <SharedNavigation currentPage="product" />

      {/* Hero Section */}
      <div className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Build Apps with the Power of AI
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Transform your ideas into fully functional applications in minutes.
            Our AI-powered platform makes app development accessible to everyone.
          </p>
          <Link
            to="/login"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg"
          >
            Start Building Now
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Modern Development
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to build, deploy, and scale your applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Experience the Future of App Development?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of developers who are already building with Build Pal
          </p>
          <Link
            to="/login"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg mr-4"
          >
            Get Started Free
          </Link>
          <Link
            to="/pricing"
            className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg border border-gray-300"
          >
            View Pricing
          </Link>
        </div>
      </div>

      <SharedFooter />
    </div>
  )
}

export default ProductPage
