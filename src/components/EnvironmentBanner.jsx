import config from '../config/environment.js'

const EnvironmentBanner = () => {
  // Only show banner in non-production environments
  if (config.isProd) return null

  return (
    <div className="bg-orange-500 text-white text-center py-1 text-xs font-medium sticky top-0 z-50">
      🚧 {config.mode.toUpperCase()} Environment - Redirects to: {config.baseUrl}
    </div>
  )
}

export default EnvironmentBanner
