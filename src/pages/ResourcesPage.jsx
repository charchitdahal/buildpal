import { Link } from 'react-router-dom'

// Icons (reused)
const GlobeIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
  </svg>
)

const BookIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const VideoIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
  </svg>
)

const QuestionIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
  </svg>
)

const CommunityIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
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

// Resources Page
const ResourcesPage = () => {
  const resourceCategories = [
    {
      title: "Documentation",
      description: "Comprehensive guides and API documentation",
      icon: <BookIcon />,
      resources: [
        "Getting Started Guide",
        "API Reference",
        "Integration Tutorials",
        "Best Practices",
        "Troubleshooting"
      ]
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides for all features",
      icon: <VideoIcon />,
      resources: [
        "Build Your First App",
        "Advanced Features",
        "Team Collaboration",
        "Deployment Guide",
        "Weekly Webinars"
      ]
    },
    {
      title: "Help Center",
      description: "Find answers to common questions",
      icon: <QuestionIcon />,
      resources: [
        "Frequently Asked Questions",
        "Feature Requests",
        "Bug Reports",
        "Contact Support",
        "System Status"
      ]
    },
    {
      title: "Community",
      description: "Connect with other Build Pal users",
      icon: <CommunityIcon />,
      resources: [
        "Discord Community",
        "User Forum",
        "Success Stories",
        "Template Gallery",
        "Developer Blog"
      ]
    }
  ]

  const blogPosts = [
    {
      title: "10 Tips for Building Better Apps with AI",
      excerpt: "Learn how to get the most out of Build Pal's AI-powered features",
      date: "March 15, 2025",
      readTime: "5 min read"
    },
    {
      title: "From Idea to Production in 30 Minutes",
      excerpt: "A real-world case study of rapid app development",
      date: "March 10, 2025",
      readTime: "8 min read"
    },
    {
      title: "Best Practices for Team Collaboration",
      excerpt: "How to effectively work with your team on Build Pal",
      date: "March 5, 2025",
      readTime: "6 min read"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <SharedNavigation currentPage="resources" />

      {/* Hero Section */}
      <div className="bg-gradient-hero py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Resources & Support
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Everything you need to succeed with Build Pal. From getting started guides
            to advanced tutorials and community support.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/login"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg"
            >
              Get Started
            </Link>
            <button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg border border-gray-300">
              Browse Docs
            </button>
          </div>
        </div>
      </div>

      {/* Resource Categories */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Find What You Need
            </h2>
            <p className="text-xl text-gray-600">
              Browse our comprehensive collection of resources and support materials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resourceCategories.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="text-orange-500 mr-4">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {category.resources.map((resource, resourceIndex) => (
                    <li key={resourceIndex}>
                      <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors flex items-center">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                        {resource}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Latest Blog Posts */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Latest from Our Blog
            </h2>
            <p className="text-xl text-gray-600">
              Stay updated with the latest tips, tutorials, and product updates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-orange-400 to-pink-400"></div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">
                    {post.date} • {post.readTime}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <a href="#" className="text-orange-500 hover:text-orange-600 font-medium">
                    Read More →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Support */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our support team is here to help you succeed. Get in touch and we'll respond quickly.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg">
              Contact Support
            </button>
            <button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg border border-gray-300">
              Join Community
            </button>
          </div>
        </div>
      </div>

      <SharedFooter />
    </div>
  )
}

export default ResourcesPage
