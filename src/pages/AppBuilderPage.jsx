import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

// Icons
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

const SendIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
  </svg>
)

const UserIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
  </svg>
)

const BotIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
  </svg>
)

const AppBuilderPage = () => {
  const { appName } = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()

  const [previewMode, setPreviewMode] = useState('desktop')
  const [selectedItem, setSelectedItem] = useState('Home')
  const [isPublished, setIsPublished] = useState(false)
  const [isPublishing, setIsPublishing] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      type: 'bot',
      message: `Welcome to your ${appName} workspace! I'm here to help you build and modify your app. What would you like to work on?`,
      timestamp: new Date().toLocaleTimeString()
    }
  ])
  const [currentMessage, setCurrentMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  // Mock app data
  const appData = {
    name: appName,
    description: 'A modern reporting dashboard with analytics and user management',
    lastModified: '2 minutes ago',
    status: isPublished ? 'Published' : 'Draft',
    publishedUrl: isPublished ? `/${appName}` : null
  }

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!currentMessage.trim()) return

    // Add user message
    const userMessage = {
      id: Date.now(),
      type: 'user',
      message: currentMessage,
      timestamp: new Date().toLocaleTimeString()
    }

    setChatMessages(prev => [...prev, userMessage])
    setCurrentMessage('')
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        type: 'bot',
        message: generateBotResponse(currentMessage),
        timestamp: new Date().toLocaleTimeString()
      }
      setChatMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const generateBotResponse = (userMessage) => {
    const responses = [
      "I'll help you add that component to your app. Let me update the preview for you.",
      "Great idea! I'm updating your app structure to include those changes.",
      "I've made those modifications. You can see the changes in the live preview.",
      "Perfect! I've added that feature to your app. Check out the updated preview.",
      "Done! Your app has been updated with the new functionality you requested."
    ]
    return responses[Math.floor(Math.random() * responses.length)]
  }

  const handlePublish = async () => {
    setIsPublishing(true)

    try {
      // Simulate publishing process
      await new Promise(resolve => setTimeout(resolve, 2000))

      setIsPublished(true)

      // Add success message to chat
      const publishMessage = {
        id: Date.now(),
        type: 'bot',
        message: `🎉 Your app "${appName}" has been successfully published! It's now live at ${window.location.origin}/${appName}`,
        timestamp: new Date().toLocaleTimeString()
      }
      setChatMessages(prev => [...prev, publishMessage])

    } catch (error) {
      console.error('Publish failed:', error)

      // Add error message to chat
      const errorMessage = {
        id: Date.now(),
        type: 'bot',
        message: `❌ Failed to publish "${appName}". Please try again.`,
        timestamp: new Date().toLocaleTimeString()
      }
      setChatMessages(prev => [...prev, errorMessage])
    } finally {
      setIsPublishing(false)
    }
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
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${isPublished
              ? 'bg-green-100 text-green-800'
              : 'bg-yellow-100 text-yellow-800'
            }`}>
            {appData.status}
          </span>

          {isPublished && (
            <a
              href={`/${appName}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-700 text-sm font-medium flex items-center space-x-1"
            >
              <span>View Live App</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          )}

          <button
            onClick={handlePublish}
            disabled={isPublishing}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${isPublishing
                ? 'bg-gray-400 text-white cursor-not-allowed'
                : isPublished
                  ? 'bg-green-600 hover:bg-green-700 text-white'
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white'
              }`}
          >
            {isPublishing ? 'Publishing...' : isPublished ? 'Republish' : 'Publish'}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Left Panel - Chat Interface */}
        <div className="w-2/5 bg-white border-r border-gray-200 flex flex-col">
          {/* Chat Header */}
          <div className="border-b border-gray-200 p-4">
            <h3 className="text-lg font-semibold text-gray-900">AI Assistant</h3>
            <p className="text-sm text-gray-600">Chat with AI to build and modify your app</p>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {chatMessages.map((message) => (
                <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    {/* Avatar */}
                    <div className={`flex-shrink-0 ${message.type === 'user' ? 'ml-3' : 'mr-3'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${message.type === 'user' ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-600'
                        }`}>
                        {message.type === 'user' ? <UserIcon className="w-4 h-4" /> : <BotIcon className="w-4 h-4" />}
                      </div>
                    </div>

                    {/* Message */}
                    <div className={`px-4 py-2 rounded-2xl ${message.type === 'user'
                        ? 'bg-indigo-500 text-white'
                        : 'bg-gray-100 text-gray-900'
                      }`}>
                      <p className="text-sm">{message.message}</p>
                      <p className={`text-xs mt-1 ${message.type === 'user' ? 'text-indigo-200' : 'text-gray-500'
                        }`}>
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex mr-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">
                      <BotIcon className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="bg-gray-100 text-gray-900 px-4 py-2 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <div className="border-t border-gray-200 p-4">
              <form onSubmit={handleSendMessage} className="flex space-x-2">
                <input
                  type="text"
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  placeholder="Ask me to modify your app..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                />
                <button
                  type="submit"
                  disabled={!currentMessage.trim() || isTyping}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <SendIcon />
                </button>
              </form>

              {/* Quick Suggestions */}
              <div className="mt-3">
                <p className="text-xs text-gray-500 mb-2">Quick suggestions:</p>
                <div className="flex flex-wrap gap-2">
                  {['Add a chart', 'Create new page', 'Change colors', 'Add user login'].map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentMessage(suggestion)}
                      className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-xs transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            </div>
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
