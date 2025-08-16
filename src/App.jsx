import { useState } from 'react'

// Icons
const ChevronDownIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
)

const ArrowUpIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
  </svg>
)

const GlobeIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
  </svg>
)

// Sample FAQs
const faqs = [
  {
    question: "What is BuildPal?",
    answer: "BuildPal lets you build fully-functional apps in minutes with just your words. No coding necessary."
  },
  {
    question: "How does it work?",
    answer: "Simply describe what you want to build in natural language, and our AI will generate a complete application for you."
  },
  {
    question: "Is it free to use?",
    answer: "Yes! We offer a free tier that includes basic app building. Premium plans are available for advanced features."
  },
  {
    question: "What types of apps can I build?",
    answer: "You can build dashboards, games, portals, e-commerce sites, and many other types of applications."
  },
  {
    question: "Do I need coding experience?",
    answer: "Not at all! BuildPal is designed for anyone to create professional applications without writing code."
  }
]

// Suggested app templates
const suggestedApps = [
  "Reporting Dashboard",
  "Gaming Platform",
  "Onboarding Portal",
  "Networking App",
  "Room Visualizer"
]

// Navigation Component
const Navigation = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-10 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <h1 className="text-lg font-semibold text-gray-900">
              Build Pal
            </h1>
          </div>
          <div className="flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 font-normal text-sm">Product</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-normal text-sm">Resources</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-normal text-sm">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-normal text-sm">Enterprise</a>
            <div className="text-gray-600">
              <GlobeIcon />
            </div>
            <button className="bg-green-400 hover:bg-green-500 text-gray-900 px-5 py-2 rounded-full font-medium text-sm transition-colors">
              Start Building
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

// Hero Section Component matching Build Pal design
const HeroSection = () => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim()) {
      console.log('Building:', inputValue)
      // Here you would handle the app building logic
    }
  }

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col">
      <Navigation />

      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-gray-900 mb-6 leading-tight">
            Let's make your dream a{' '}
            <span className="text-green-400 font-light">reality.</span>
            <br />
            Right now.
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Build Pal lets you build fully-functional apps in minutes with just your words.
            <br />
            No coding necessary.
          </p>

          {/* Input Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 mb-8 shadow-lg max-w-3xl mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="What do you want to build?"
                  className="w-full px-6 py-4 text-lg rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-xl transition-colors"
                >
                  <ArrowUpIcon />
                </button>
              </div>
            </form>

            {/* Suggested Apps */}
            <div className="mt-6">
              <p className="text-gray-600 text-sm mb-4 text-left">
                Not sure where to start? Try one of these:
              </p>
              <div className="flex flex-wrap gap-3 justify-start">
                {suggestedApps.map((app, index) => (
                  <button
                    key={index}
                    onClick={() => setInputValue(app)}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm transition-colors"
                  >
                    {app}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Trust Indicator */}
          <div className="flex items-center justify-center space-x-3 text-gray-600">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-green-400 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-purple-400 border-2 border-white"></div>
            </div>
            <span className="text-sm font-medium">Trusted by 4k+ users</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// FAQ Component
const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null)

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about BuildPal
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl">
              <button
                className="w-full text-left p-6 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-gray-900">{faq.question}</h3>
                  <ChevronDownIcon className={`transform transition-transform ${openFAQ === index ? 'rotate-180' : ''
                    }`} />
                </div>
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Footer Component
const Footer = () => {
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
          <button className="bg-green-400 hover:bg-green-500 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg">
            Start Building Free
          </button>
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
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Templates</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Enterprise</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Status</a></li>
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

// Main App Component
function App() {
  return (
    <div className="App">
      <HeroSection />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
