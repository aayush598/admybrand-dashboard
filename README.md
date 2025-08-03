# ADmyBRAND Analytics Dashboard

A comprehensive, AI-powered analytics dashboard built with React, TypeScript, and Tailwind CSS. This modern dashboard provides real-time insights, campaign management, audience analytics, and AI-driven recommendations for digital marketing campaigns.

## 🚀 Features

### 📊 **Dashboard Overview**
- Real-time metrics and KPI tracking
- Interactive charts and visualizations
- Performance trend analysis
- AI-powered insights and recommendations

### 📈 **Analytics Module**
- Page views and unique visitor tracking
- Bounce rate and session duration analysis
- Traffic source breakdown
- Geographic distribution
- Device and platform analytics
- Real-time activity monitoring

### 🎯 **Campaign Management**
- Campaign performance tracking
- Bulk operations (pause, duplicate, delete)
- Campaign type categorization
- Search and filter capabilities
- Status management (active, paused, completed)

### 👥 **Audience Insights**
- Demographic breakdowns (age, gender)
- Interest-based segmentation
- Geographic distribution
- Device usage patterns
- Engagement trend analysis

### 📋 **Custom Reports**
- Pre-built report templates
- Automated report generation
- Multiple export formats (PDF, Excel)
- Scheduled reporting
- Report sharing capabilities

### 🤖 **AI Insights**
- Performance optimization suggestions
- Budget reallocation recommendations
- Trend predictions
- Automated alerts for performance issues
- Machine learning-driven insights

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for smooth interactions
- **Recharts** - Composable charting library built on React components

### UI Components
- **Lucide React** - Beautiful & consistent icon set
- **React Hot Toast** - Elegant toast notifications
- **Date-fns** - Modern JavaScript date utility library

### Key Features
- **Dark/Light Theme** - Automatic theme switching with system preference detection
- **Responsive Design** - Mobile-first approach with full responsive support
- **Real-time Updates** - Live data updates and real-time activity tracking
- **Interactive Charts** - Hover effects, tooltips, and smooth animations
- **Advanced Filtering** - Search, sort, and filter capabilities across all data tables

## 📁 Project Structure

```
src/
├── components/
│   ├── charts/
│   │   ├── BarChart.tsx         # Reusable bar chart component
│   │   ├── DonutChart.tsx       # Donut/pie chart component
│   │   └── LineChart.tsx        # Line chart component
│   ├── dashboard/
│   │   ├── AIInsights.tsx       # AI-powered insights and recommendations
│   │   ├── Analytics.tsx        # Advanced analytics dashboard
│   │   ├── Audience.tsx         # Audience insights and demographics
│   │   ├── Campaigns.tsx        # Campaign management interface
│   │   ├── Overview.tsx         # Main dashboard overview
│   │   └── Reports.tsx          # Custom reporting interface
│   ├── layout/
│   │   ├── Header.tsx           # Top navigation bar
│   │   └── Sidebar.tsx          # Side navigation menu
│   └── ui/
│       ├── DataTable.tsx        # Advanced data table with sorting/filtering
│       ├── DateRangePicker.tsx  # Date range selection component
│       ├── LoadingSkeleton.tsx  # Loading state components
│       └── MetricCard.tsx       # KPI metric display cards
├── contexts/
│   └── ThemeContext.tsx         # Theme management (dark/light mode)
├── data/
│   └── mockData.ts              # Sample data for demonstration
├── types/
│   └── analytics.ts             # TypeScript type definitions
├── App.tsx                      # Main application component
└── index.css                    # Global styles and Tailwind configuration
```

## 🎨 Design Features

### Visual Design
- **Modern Glass-morphism** - Subtle transparency effects and blur
- **Consistent Color Palette** - Carefully chosen colors for optimal UX
- **Micro-interactions** - Hover effects, button animations, and smooth transitions
- **Gradient Accents** - Strategic use of gradients for visual hierarchy

### User Experience
- **Intuitive Navigation** - Collapsible sidebar with clear iconography
- **Smart Loading States** - Skeleton screens and progressive loading
- **Contextual Tooltips** - Helpful information on hover
- **Responsive Tables** - Mobile-optimized data presentation

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/aayush598/admybrand-dashboard.git
   cd admybrand-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the dashboard.

### Build for Production

```bash
npm run build
# or
yarn build
```

## 🎯 Key Components

### MetricCard Component
Displays KPI metrics with trend indicators and mini charts:
- Real-time value updates
- Percentage change indicators
- Trend visualization
- Responsive design

### DataTable Component
Advanced table with enterprise-grade features:
- Sorting by any column
- Search and filtering
- Pagination
- Bulk operations
- Status indicators

### Chart Components
Responsive charts built with Recharts:
- **LineChart**: Time-series data visualization
- **BarChart**: Categorical data comparison
- **DonutChart**: Proportional data representation

### AI Insights Engine
Intelligent recommendations system:
- Performance optimization suggestions
- Budget allocation recommendations
- Trend predictions
- Automated alerts

## 🌙 Theme System

The dashboard includes a sophisticated theme system:

```typescript
// Theme context provides dark/light mode switching
const { theme, toggleTheme } = useTheme();

// Automatic system preference detection
useEffect(() => {
  const savedTheme = localStorage.getItem('admybrand-theme');
  if (savedTheme) {
    setTheme(savedTheme);
  }
}, []);
```

### Theme Features
- **System Preference Detection** - Automatically detects user's system theme
- **Persistent Storage** - Remembers user's theme preference
- **Smooth Transitions** - Animated theme switching
- **Comprehensive Coverage** - All components support both themes

## 📊 Data Management

### Mock Data Structure
The dashboard uses structured mock data to simulate real analytics:

```typescript
interface MetricCard {
  id: string;
  title: string;
  value: string;
  change: number;
  changeType: 'increase' | 'decrease';
  icon: string;
  trend: number[];
}
```

### Real-time Updates
- Simulated live data updates every 30 seconds
- Progressive data loading
- Optimistic UI updates

## 🎨 Styling Architecture

### Tailwind CSS Configuration
- **Custom Color Palette** - Brand-consistent colors
- **Dark Mode Support** - Complete dark theme implementation
- **Responsive Design** - Mobile-first approach
- **Custom Animations** - Smooth micro-interactions

### CSS Custom Properties
```css
:root {
  --toast-bg: #ffffff;
  --toast-color: #374151;
  --toast-border: #e5e7eb;
}
```

## 🔧 Customization

### Adding New Metrics
1. Update the `mockData.ts` file with new metric definitions
2. Add corresponding icons from Lucide React
3. Update TypeScript interfaces in `types/analytics.ts`

### Creating New Dashboard Sections
1. Create new component in `components/dashboard/`
2. Add route handling in `App.tsx`
3. Update sidebar navigation in `Sidebar.tsx`

### Styling Customization
- Modify Tailwind configuration for brand colors
- Update CSS custom properties for theme variables
- Customize chart colors in individual chart components

## 📱 Responsive Design

The dashboard is fully responsive across all device sizes:

- **Desktop (1280px+)**: Full feature set with expanded layouts
- **Tablet (768px-1279px)**: Optimized grid layouts and navigation
- **Mobile (320px-767px)**: Stacked layouts and touch-optimized interactions

## 🔒 Performance Optimizations

### Code Splitting
- Lazy loading of dashboard components
- Dynamic imports for better bundle optimization

### Animation Performance
- GPU-accelerated animations with Framer Motion
- Optimized re-renders with React.memo
- Efficient state management

### Data Handling
- Memoized expensive calculations
- Virtualized tables for large datasets
- Optimistic UI updates

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Recharts** for beautiful and responsive charts
- **Framer Motion** for smooth animations
- **Tailwind CSS** for rapid UI development
- **Lucide** for consistent iconography
- **React Hot Toast** for elegant notifications

## 📞 Support

For support, email aayushgid598@gmail.com or create an issue in the GitHub repository.

---

**Built with ❤️ by Aayush Gid**