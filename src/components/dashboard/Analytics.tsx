import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  TrendingDown, 
  BarChart3, 
  PieChart, 
  Activity,
  Users,
  MousePointer,
  Eye,
  Clock,
  Globe
} from 'lucide-react';
import { LineChart } from '../charts/LineChart';
import { BarChart } from '../charts/BarChart';
import { DonutChart } from '../charts/DonutChart';

const analyticsMetrics = [
  {
    title: 'Page Views',
    value: '2.4M',
    change: 15.3,
    changeType: 'increase' as const,
    icon: Eye,
    description: 'Total page views this month'
  },
  {
    title: 'Unique Visitors',
    value: '847K',
    change: 8.7,
    changeType: 'increase' as const,
    icon: Users,
    description: 'Unique visitors this month'
  },
  {
    title: 'Bounce Rate',
    value: '32.4%',
    change: -5.2,
    changeType: 'decrease' as const,
    icon: MousePointer,
    description: 'Percentage of single-page visits'
  },
  {
    title: 'Avg. Session Duration',
    value: '4m 32s',
    change: 12.1,
    changeType: 'increase' as const,
    icon: Clock,
    description: 'Average time spent on site'
  }
];

const trafficSources = [
  { name: 'Organic Search', value: 42.3 },
  { name: 'Direct', value: 28.7 },
  { name: 'Social Media', value: 15.2 },
  { name: 'Referral', value: 8.9 },
  { name: 'Email', value: 4.9 }
];

const deviceData = [
  { name: 'Desktop', value: 58.2 },
  { name: 'Mobile', value: 35.4 },
  { name: 'Tablet', value: 6.4 }
];

const geographicData = [
  { name: 'United States', value: 45.2 },
  { name: 'United Kingdom', value: 18.7 },
  { name: 'Canada', value: 12.3 },
  { name: 'Australia', value: 8.9 },
  { name: 'Germany', value: 6.8 },
  { name: 'Others', value: 8.1 }
];

const hourlyTraffic = [
  { name: '00:00', value: 120 },
  { name: '03:00', value: 89 },
  { name: '06:00', value: 156 },
  { name: '09:00', value: 340 },
  { name: '12:00', value: 520 },
  { name: '15:00', value: 480 },
  { name: '18:00', value: 390 },
  { name: '21:00', value: 280 }
];

export const Analytics: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Advanced Analytics</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Deep dive into your website performance and user behavior
          </p>
        </div>
      </motion.div>

      {/* Analytics Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {analyticsMetrics.map((metric, index) => {
          const Icon = metric.icon;
          const isPositive = metric.changeType === 'increase';
          
          return (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                  isPositive 
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' 
                    : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                }`}>
                  {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  {Math.abs(metric.change)}%
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {metric.value}
              </h3>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                {metric.title}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                {metric.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <LineChart 
          data={hourlyTraffic.map(item => ({ ...item, revenue: item.value * 12, users: item.value, conversions: Math.floor(item.value * 0.1) }))} 
          title="Hourly Traffic Pattern" 
          isLoading={isLoading}
        />
        <BarChart 
          data={geographicData} 
          title="Geographic Distribution" 
          isLoading={isLoading}
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <DonutChart 
          data={trafficSources} 
          title="Traffic Sources" 
          isLoading={isLoading}
        />
        <DonutChart 
          data={deviceData} 
          title="Device Breakdown" 
          isLoading={isLoading}
        />
        
        {/* Real-time Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center gap-3 mb-6">
            <Activity className="w-5 h-5 text-green-500" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Real-time Activity</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Active Users</span>
              <span className="text-lg font-bold text-green-500">1,247</span>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">New user from New York</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">Purchase completed - $299</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">Newsletter signup</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">Blog post shared</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};