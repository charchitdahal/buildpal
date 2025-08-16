# BuildPal App Builder - Feature Overview

## 🎨 **New Split View App Builder**

### **URL Structure**
- Main app dashboard: `/app`
- App builder: `/app/:appName` (e.g., `/app/sales-dashboard`)

### **Left Panel - Builder Interface (40% width)**

#### **🌳 App Structure Tree**
- **Pages**: Home, Dashboard, Settings (expandable tree)
- **Components**: Header, Sidebar, Chart, Table (organized hierarchy)
- **Data Sources**: Users, Analytics, API Endpoints (connection status)

#### **📝 AI-Powered Prompt Editor**
- Natural language input for modifications
- Quick action buttons (Add Page, Add Chart, Add Table, Add Form)
- Real-time AI processing

#### **📑 Tabs System**
- **Pages**: Structure and layout management
- **Logic**: Business rules and workflows
- **Data**: Database connections and API integrations

### **Right Panel - Live Preview (60% width)**

#### **📱 Device Preview Modes**
- **Desktop**: Full-screen preview
- **Mobile**: iPhone-style frame preview
- **Automatic responsive switching**

#### **🔍 Inspect Mode**
- Hover highlighting of components
- Real-time component identification
- Interactive element selection

#### **⚡ Hot Reload**
- Instant preview updates
- Real-time design changes
- No page refresh required

### **🎯 Interactive Features**

#### **Tree Navigation**
- Collapsible sections with chevron icons
- Visual hierarchy with proper indentation
- Selected item highlighting
- Context-aware content switching

#### **Mock App Content**
Based on selected tree item:
- **Home**: Dashboard with metrics cards and analytics chart
- **Dashboard**: Multi-chart overview layout
- **Settings**: Configuration panels and toggles

#### **Header Controls**
- Back navigation to main app list
- App status indicator (Draft/Published)
- Last saved timestamp
- Publish button

## 🛠️ **Technical Implementation**

### **React Router Integration**
```javascript
// Dynamic routing with parameters
<Route path="/app/:appName" element={
  <ProtectedRoute>
    <AppBuilderPage />
  </ProtectedRoute>
} />
```

### **State Management**
- App structure tree state
- Selected item tracking
- Preview mode switching
- Inspect mode toggle

### **Component Architecture**
- TreeItem component with recursive children
- Responsive layout with Tailwind utilities
- Icon library integration
- Mock data generation

### **Authentication Protection**
- Protected routes requiring login
- User context integration
- Automatic redirect handling

## 🎨 **Design System**

### **Color Scheme**
- Primary: Indigo gradients for active states
- Secondary: Gray scale for interface elements
- Accent: Orange for action buttons
- Status: Green/Yellow/Red for app states

### **Layout Structure**
- Fixed header with navigation
- Split view: 40% builder / 60% preview
- Responsive mobile frame simulation
- Shadow and border styling

### **Interactive States**
- Hover effects on tree items
- Active state highlighting
- Loading animations
- Transition effects

## 🚀 **Usage Flow**

1. **Access**: Navigate to `/app` and click "Edit App" on any existing app
2. **Build**: Use the tree structure to navigate between pages and components
3. **Edit**: Write natural language prompts to modify the app
4. **Preview**: See changes instantly in the live preview panel
5. **Inspect**: Toggle inspect mode to highlight specific components
6. **Switch Views**: Toggle between desktop and mobile previews
7. **Publish**: Save and publish changes when ready

## 📋 **Future Enhancements**

- Real AI integration for prompt processing
- Actual code generation and deployment
- Component library with drag-and-drop
- Collaborative editing features
- Version control and rollback
- Advanced debugging tools

The new app builder provides a professional, intuitive interface for building applications with a sophisticated split-view design that matches modern development tools.
