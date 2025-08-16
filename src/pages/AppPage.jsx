import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const AppPage = () => {
  const { user, signOut } = useAuth()
  const [inputValue, setInputValue] = useState('')
  const [generatedApps, setGeneratedApps] = useState([])

  const handleSignOut = async () => {
    await signOut()
  }

  const handleBuildApp = (e) => {
    e.preventDefault()
    if (inputValue.trim()) {
      // Simulate app generation
      const newApp = {
        id: Date.now(),
        name: inputValue,
        status: 'Building...',
        createdAt: new Date().toLocaleDateString()
      }
      setGeneratedApps([newApp, ...generatedApps])
      setInputValue('')

      // Simulate completion after 3 seconds
      setTimeout(() => {
        setGeneratedApps(prev =>
          prev.map(app =>
            app.id === newApp.id
              ? { ...app, status: 'Ready', url: `https://${inputValue.toLowerCase().replace(/\s+/g, '-')}.vercel.app` }
              : app
          )
        )
      }, 3000)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <h1 className="text-lg font-semibold text-gray-900">
                Build Pal
              </h1>
            </Link>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Welcome, {user?.email}
              </span>
              <button
                onClick={handleSignOut}
                className="text-gray-600 hover:text-gray-900 font-normal text-sm"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to your Build Pal Dashboard
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Describe what you want to build and watch your app come to life
          </p>

          {/* Build Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
            <form onSubmit={handleBuildApp}>
              <div className="relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Describe your app idea in detail..."
                  className="w-full px-6 py-4 text-lg rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-xl font-medium transition-colors"
                >
                  Build App
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Generated Apps */}
        {generatedApps.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Generated Apps</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {generatedApps.map((app) => (
                <div key={app.id} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 truncate">
                      {app.name}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${app.status === 'Ready'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                      }`}>
                      {app.status}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Created on {app.createdAt}
                  </p>
                  {app.status === 'Ready' && app.url ? (
                    <div className="space-y-2">
                      <a
                        href={app.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-medium transition-colors"
                      >
                        View App
                      </a>
                      <button className="w-full text-gray-600 hover:text-gray-900 py-2 text-sm">
                        Edit App
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center py-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-orange-500"></div>
                      <span className="ml-2 text-sm text-gray-600">Building...</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quick Start Templates */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Start Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'E-commerce Store',
              'Social Media Dashboard',
              'Task Management App',
              'Weather App',
              'Blog Platform',
              'Portfolio Website',
              'Chat Application',
              'Invoice Generator'
            ].map((template, index) => (
              <button
                key={index}
                onClick={() => setInputValue(`Build a ${template.toLowerCase()}`)}
                className="p-4 bg-white rounded-lg border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all text-left"
              >
                <h3 className="font-medium text-gray-900 mb-1">{template}</h3>
                <p className="text-sm text-gray-600">Start with this template</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppPage
