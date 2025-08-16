import { createClient } from '@supabase/supabase-js'
import config from '../config/environment.js'

export const supabase = createClient(
  config.supabase.url,
  config.supabase.anonKey,
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
      // Use environment-aware redirect URL
      redirectTo: config.supabase.redirectTo,
    }
  }
)
