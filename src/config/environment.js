// Environment configuration for Build Pal
const getEnvironment = () => {
  const isProd = import.meta.env.PROD
  const isDev = import.meta.env.DEV
  const mode = import.meta.env.MODE

  // Get the current origin/base URL
  const getBaseUrl = () => {
    if (typeof window !== 'undefined') {
      return window.location.origin
    }

    // Fallback for SSR or build time
    if (isProd) {
      return import.meta.env.VITE_PROD_URL || 'https://buildpal.net'
    }

    return 'http://localhost:3000'
  }

  return {
    isProd,
    isDev,
    mode,
    baseUrl: getBaseUrl(),

    // Supabase configuration with proper redirects
    supabase: {
      url: import.meta.env.VITE_SUPABASE_URL,
      anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
      redirectTo: `${getBaseUrl()}/app`, // Always redirect to /app after login
    },

    // App routes
    routes: {
      home: '/',
      login: '/login',
      app: '/app',
      afterLogin: '/app',
      afterLogout: '/',
    }
  }
}

export const config = getEnvironment()
export default config
