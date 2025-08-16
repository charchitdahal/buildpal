import { Link, useParams } from 'react-router-dom'

const PublishedAppPage = () => {
  const { appName } = useParams()

  // Mock published app content - this would be the actual generated app
  const renderPublishedApp = () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
        {/* Published App Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900 capitalize">
                {appName.replace(/-/g, ' ')}
              </h1>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">
                  Built with BuildPal
                </span>
                <Link
                  to="/"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Create Your Own
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Published App Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 capitalize">
              Welcome to {appName.replace(/-/g, ' ')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              This is a live, published app built with BuildPal. All functionality is working and ready for users.
            </p>
          </div>

          {/* App Content Based on Type */}
          {appName.includes('dashboard') && (
            <div className="space-y-8">
              {/* Dashboard Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Users</h3>
                  <p className="text-3xl font-bold text-indigo-600">12,543</p>
                  <p className="text-sm text-green-600 mt-2">↗ +15% from last month</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Revenue</h3>
                  <p className="text-3xl font-bold text-green-600">$45,210</p>
                  <p className="text-sm text-green-600 mt-2">↗ +22% from last month</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Conversion Rate</h3>
                  <p className="text-3xl font-bold text-orange-600">3.24%</p>
                  <p className="text-sm text-red-600 mt-2">↘ -2% from last month</p>
                </div>
              </div>

              {/* Chart Section */}
              <div className="bg-white p-8 rounded-xl shadow-lg border">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Analytics Overview</h3>
                <div className="h-64 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📊</div>
                    <p className="text-gray-600 text-lg">Interactive Chart Component</p>
                    <p className="text-gray-500 text-sm">Real-time data visualization</p>
                  </div>
                </div>
              </div>

              {/* Data Table */}
              <div className="bg-white p-8 rounded-xl shadow-lg border">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">User</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Action</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Time</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { user: 'John Doe', action: 'Created report', time: '2 min ago', status: 'Success' },
                        { user: 'Jane Smith', action: 'Updated dashboard', time: '5 min ago', status: 'Success' },
                        { user: 'Mike Johnson', action: 'Exported data', time: '10 min ago', status: 'Pending' },
                        { user: 'Sarah Wilson', action: 'Shared report', time: '15 min ago', status: 'Success' },
                      ].map((row, index) => (
                        <tr key={index} className="border-b border-gray-100">
                          <td className="py-3 px-4 text-gray-900">{row.user}</td>
                          <td className="py-3 px-4 text-gray-600">{row.action}</td>
                          <td className="py-3 px-4 text-gray-500">{row.time}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${row.status === 'Success'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                              }`}>
                              {row.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Generic App Content for other app types */}
          {!appName.includes('dashboard') && (
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border text-center">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Your App is Live!
                </h3>
                <p className="text-gray-600 mb-6">
                  This is your published {appName.replace(/-/g, ' ')} application.
                  All features are functional and ready for your users.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Feature 1</h4>
                    <p className="text-gray-600 text-sm">Core functionality working perfectly</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Feature 2</h4>
                    <p className="text-gray-600 text-sm">User interface fully responsive</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Feature 3</h4>
                    <p className="text-gray-600 text-sm">Backend integration complete</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <h3 className="text-xl font-semibold">Built with BuildPal</h3>
            </div>
            <p className="text-gray-400 mb-4">
              This app was created in minutes using BuildPal's AI-powered no-code platform.
            </p>
            <Link
              to="/"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Create Your Own App
            </Link>
          </div>
        </footer>
      </div>
    )
  }

  return renderPublishedApp()
}

export default PublishedAppPage
