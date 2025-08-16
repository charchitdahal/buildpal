import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

// Icons
const ChevronRightIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
  </svg>
)

const ChevronDownIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
)

const FolderIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
  </svg>
)

const ComponentIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
  </svg>
)

const DatabaseIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
    <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
    <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
  </svg>
)

const DesktopIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
  </svg>
)

const MobileIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
  </svg>
)

const EyeIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
  </svg>
)

// Tree Item Component
const TreeItem = ({ icon: Icon, label, children, isExpanded, onToggle, isSelected, onSelect, level = 0 }) => {
  return (
    <div className="select-none">
      <div
        className={`flex items-center px-2 py-1 hover:bg-gray-100 cursor-pointer rounded text-sm ${isSelected ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700'
          }`}
        style={{ paddingLeft: `${level * 16 + 8}px` }}
        onClick={onSelect}
      >
        {children && (
          <button onClick={(e) => { e.stopPropagation(); onToggle(); }} className="mr-1">
            {isExpanded ? <ChevronDownIcon /> : <ChevronRightIcon />}
          </button>
        )}
        <Icon />
        <span className="ml-2 font-medium">{label}</span>
      </div>
      {children && isExpanded && (
        <div>
          {children.map((child, index) => (
            <TreeItem key={index} {...child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

// Mock data for app structure
const getAppStructure = (appName) => ({
  pages: {
    label: 'Pages',
    icon: FolderIcon,
    isExpanded: true,
    children: [
      { label: 'Home', icon: ComponentIcon, isSelected: true },
      { label: 'Dashboard', icon: ComponentIcon },
      { label: 'Settings', icon: ComponentIcon },
    ]
  },
  components: {
    label: 'Components',
    icon: ComponentIcon,
    isExpanded: false,
    children: [
      { label: 'Header', icon: ComponentIcon },
      { label: 'Sidebar', icon: ComponentIcon },
      { label: 'Chart', icon: ComponentIcon },
      { label: 'Table', icon: ComponentIcon },
    ]
  },
  data: {
    label: 'Data Sources',
    icon: DatabaseIcon,
    isExpanded: false,
    children: [
      { label: 'Users', icon: DatabaseIcon },
      { label: 'Analytics', icon: DatabaseIcon },
      { label: 'API Endpoints', icon: DatabaseIcon },
    ]
  }
})

const AppBuilderPage = () => {
  const { appName } = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()

  const [activeTab, setActiveTab] = useState('pages')
  const [previewMode, setPreviewMode] = useState('desktop')
  const [inspectMode, setInspectMode] = useState(false)
  const [appStructure, setAppStructure] = useState(getAppStructure(appName))
  const [selectedItem, setSelectedItem] = useState('Home')
  const [prompt, setPrompt] = useState('Create a modern dashboard with charts and tables')

  // Mock app data
  const appData = {
    name: appName,
    description: 'A modern reporting dashboard with analytics and user management',
    lastModified: '2 minutes ago',
    status: 'Draft'
  }

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])

  const handleTreeItemToggle = (section, itemPath = null) => {
    setAppStructure(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        isExpanded: !prev[section].isExpanded
      }
    }))
  }

  const handleTreeItemSelect = (item) => {
    setSelectedItem(item)
  }

  const renderPreview = () => {
    const baseClasses = previewMode === 'mobile'
      ? 'w-80 h-[600px] mx-auto border-8 border-gray-800 rounded-3xl'
      : 'w-full h-full'

    return (
      <div className={`${baseClasses} bg-white shadow-2xl overflow-hidden relative`}>
        {/* Mock Preview Content */}
        <div className="h-full bg-gradient-to-br from-indigo-50 to-white p-6">
          <div className="h-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-900">{appData.name}</h1>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
            </div>

            {/* Content based on selected item */}
            {selectedItem === 'Home' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-xl shadow-sm border hover:shadow-md transition-shadow cursor-pointer">
                    <h3 className="font-semibold text-gray-900">Total Users</h3>
                    <p className="text-3xl font-bold text-indigo-600 mt-2">12,543</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border hover:shadow-md transition-shadow cursor-pointer">
                    <h3 className="font-semibold text-gray-900">Revenue</h3>
                    <p className="text-3xl font-bold text-green-600 mt-2">$45,210</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border hover:shadow-md transition-shadow cursor-pointer">
                    <h3 className="font-semibold text-gray-900">Conversion</h3>
                    <p className="text-3xl font-bold text-orange-600 mt-2">3.24%</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border">
                  <h3 className="font-semibold text-gray-900 mb-4">Analytics Chart</h3>
                  <div className="h-48 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-600">📊 Interactive Chart Component</p>
                  </div>
                </div>
              </div>
            )}

            {selectedItem === 'Dashboard' && (
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                  <h3 className="font-semibold text-gray-900 mb-4">Dashboard Overview</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-32 bg-blue-100 rounded-lg flex items-center justify-center">
                      <p className="text-blue-700">Chart 1</p>
                    </div>
                    <div className="h-32 bg-green-100 rounded-lg flex items-center justify-center">
                      <p className="text-green-700">Chart 2</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedItem === 'Settings' && (
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                  <h3 className="font-semibold text-gray-900 mb-4">App Settings</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Dark Mode</span>
                      <button className="w-12 h-6 bg-gray-300 rounded-full"></button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Notifications</span>
                      <button className="w-12 h-6 bg-indigo-500 rounded-full"></button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Inspect Mode Overlay */}
        {inspectMode && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-6 right-6 h-16 border-2 border-indigo-400 bg-indigo-100 bg-opacity-20 rounded"></div>
          </div>
        )}
      </div>
    )
  }

  if (!user) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate('/app')}
            className="text-gray-600 hover:text-gray-900"
          >
            ← Back to Apps
          </button>
          <div>
            <h1 className="text-xl font-semibold text-gray-900">{appData.name}</h1>
            <p className="text-sm text-gray-600">Last saved {appData.lastModified}</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            {appData.status}
          </span>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
            Publish
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Left Panel - Builder */}
        <div className="w-2/5 bg-white border-r border-gray-200 flex flex-col">
          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            {['pages', 'logic', 'data'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 px-4 py-3 text-sm font-medium capitalize ${activeTab === tab
                    ? 'border-b-2 border-indigo-500 text-indigo-600'
                    : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="flex-1 flex flex-col">
            {activeTab === 'pages' && (
              <>
                {/* App Outline */}
                <div className="border-b border-gray-200 p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">App Structure</h3>
                  <div className="space-y-1">
                    <TreeItem
                      {...appStructure.pages}
                      onToggle={() => handleTreeItemToggle('pages')}
                      onSelect={() => handleTreeItemSelect('Pages')}
                    />
                    <TreeItem
                      {...appStructure.components}
                      onToggle={() => handleTreeItemToggle('components')}
                      onSelect={() => handleTreeItemSelect('Components')}
                    />
                    <TreeItem
                      {...appStructure.data}
                      onToggle={() => handleTreeItemToggle('data')}
                      onSelect={() => handleTreeItemSelect('Data')}
                    />
                  </div>
                </div>

                {/* Prompt Editor */}
                <div className="flex-1 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-semibold text-gray-900">Edit with AI</h3>
                    <button className="text-xs text-indigo-600 hover:text-indigo-700">
                      Examples
                    </button>
                  </div>

                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Describe what you want to build or modify..."
                    className="w-full h-32 p-3 border border-gray-300 rounded-lg resize-none text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />

                  <button className="w-full mt-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 text-sm font-medium">
                    Apply Changes
                  </button>

                  {/* Quick Actions */}
                  <div className="mt-4 space-y-2">
                    <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Quick Actions</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <button className="text-xs py-2 px-3 bg-gray-100 hover:bg-gray-200 rounded text-gray-700">
                        Add Page
                      </button>
                      <button className="text-xs py-2 px-3 bg-gray-100 hover:bg-gray-200 rounded text-gray-700">
                        Add Chart
                      </button>
                      <button className="text-xs py-2 px-3 bg-gray-100 hover:bg-gray-200 rounded text-gray-700">
                        Add Table
                      </button>
                      <button className="text-xs py-2 px-3 bg-gray-100 hover:bg-gray-200 rounded text-gray-700">
                        Add Form
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'logic' && (
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Business Logic</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-900">User Authentication</h4>
                    <p className="text-xs text-gray-600 mt-1">Handle login/logout flows</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-900">Data Validation</h4>
                    <p className="text-xs text-gray-600 mt-1">Form validation rules</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-900">API Integrations</h4>
                    <p className="text-xs text-gray-600 mt-1">External service connections</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'data' && (
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Data Sources</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 rounded-lg flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Users Database</h4>
                      <p className="text-xs text-gray-600">PostgreSQL • 12,543 records</p>
                    </div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Analytics API</h4>
                      <p className="text-xs text-gray-600">REST API • Connected</p>
                    </div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <button className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-sm text-gray-600 hover:border-indigo-300 hover:text-indigo-600">
                    + Add Data Source
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Panel - Preview */}
        <div className="flex-1 bg-gray-100 flex flex-col">
          {/* Preview Controls */}
          <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h3 className="text-sm font-semibold text-gray-900">Live Preview</h3>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setPreviewMode('desktop')}
                  className={`p-2 rounded ${previewMode === 'desktop' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-600 hover:text-gray-900'
                    }`}
                >
                  <DesktopIcon />
                </button>
                <button
                  onClick={() => setPreviewMode('mobile')}
                  className={`p-2 rounded ${previewMode === 'mobile' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-600 hover:text-gray-900'
                    }`}
                >
                  <MobileIcon />
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setInspectMode(!inspectMode)}
                className={`flex items-center space-x-2 px-3 py-1.5 rounded text-sm ${inspectMode ? 'bg-indigo-100 text-indigo-600' : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                <EyeIcon />
                <span>Inspect</span>
              </button>
              <button className="text-gray-600 hover:text-gray-900 text-sm">
                Refresh
              </button>
            </div>
          </div>

          {/* Preview Area */}
          <div className="flex-1 p-6 overflow-auto">
            {renderPreview()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppBuilderPage
