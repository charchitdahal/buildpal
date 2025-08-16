# Supabase Setup Guide

## 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project"
3. Sign up with GitHub
4. Create a new project
5. Choose a name and password
6. Select your region
7. Wait for setup to complete

## 2. Get API Keys

1. In your Supabase dashboard, go to Settings > API
2. Copy your Project URL
3. Copy your `anon` `public` API key

## 3. Configure Environment Variables

1. Open `.env.local` in your project root
2. Replace the placeholders with your actual values:

```env
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

## 4. Enable Authentication

1. In Supabase dashboard, go to Authentication > Settings
2. Disable "Enable email confirmations" for development (optional)
3. For Google OAuth:
   - Go to Authentication > Providers
   - Enable Google provider
   - Add your Google OAuth credentials

## 5. Test Authentication

1. Start your development server: `npm run dev`
2. Go to `/login` page
3. Try creating an account
4. Check the Authentication > Users tab in Supabase

## Features Included

✅ Email/Password Authentication
✅ Google OAuth (when configured)
✅ Protected Routes
✅ User Session Management
✅ Automatic redirects
✅ Loading states and error handling

## File Structure

```
src/
├── lib/
│   └── supabase.js          # Supabase client configuration
├── contexts/
│   └── AuthContext.jsx      # Authentication context
├── components/
│   └── ProtectedRoute.jsx   # Protected route wrapper
├── pages/
│   ├── LoginPage.jsx        # Login/signup page
│   └── AppPage.jsx          # Protected app dashboard
└── App.jsx                  # Main app with routing
```
