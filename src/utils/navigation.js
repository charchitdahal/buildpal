import config from '../config/environment.js'

/**
 * Get the correct URL for the current environment
 * @param {string} path - The path to append to the base URL
 * @returns {string} - The full URL
 */
export const getUrl = (path = '') => {
  return `${config.baseUrl}${path}`
}

/**
 * Navigate to a URL with environment awareness
 * @param {string} path - The path to navigate to
 * @param {boolean} replace - Whether to replace the current history entry
 */
export const navigateToUrl = (path, replace = false) => {
  const url = getUrl(path)

  if (replace) {
    window.location.replace(url)
  } else {
    window.location.href = url
  }
}

/**
 * Get the current environment info for debugging
 */
export const getEnvironmentInfo = () => {
  return {
    environment: config.mode,
    baseUrl: config.baseUrl,
    isProd: config.isProd,
    isDev: config.isDev,
  }
}

/**
 * Log environment info in development mode
 */
export const logEnvironmentInfo = () => {
  if (config.isDev) {
    console.log('🌍 Environment Info:', getEnvironmentInfo())
    console.log('🔗 Redirect URL:', config.supabase.redirectTo)
  }
}
