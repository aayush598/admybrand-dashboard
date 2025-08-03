import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  UserPlus, 
  UserMinus, 
  Heart,
  Share2,
  MessageCircle,
  ShoppingCart,
  Globe,
  Smartphone,
  Monitor,
  Tablet
} from 'lucide-react';
import { BarChart } from '../charts/BarChart';
import { DonutChart } from '../charts/DonutChart';
import { LineChart } from '../charts/LineChart';

const audienceMetrics = [
  {
    title: 'Total Audience',
    value: '847K',
    change: 12.3,
    changeType: 'increase' as const,
    icon: Users,
    color: 'blue'
  },
  {
    title: 'New Followers',
    value: '+2,847',
    change: 18.7,
    changeType: 'increase' as const,
    icon: UserPlus,
    color: 'green'
  },
  {
    title: 'Engagement Rate',
    value: '4.2%',
    change: -2.1,
    changeType: 'decrease' as const,
    icon: Heart,
    color: 'red'
  },
  {
    title: 'Conversion Rate',
    value: '2.8%',
    change: 5.4,
    changeType: 'increase' as const,
    icon: ShoppingCart,
    color: 'purple'
  }
];

const ageGroups = [
  { name: '18-24', value: 18.5 },
  { name: '25-34', value: 32.8 },
  { name: '35-44', value: 24.7 },
  { name: '45-54', value: 15.2 },
  { name: '55+', value: 8.8 }
];

const genderData = [
  { name: 'Female', value: 54.3 },
  { name: 'Male', value: 43.2 },
  { name: 'Other', value: 2.5 }
];

const interestData = [
  { name: 'Technology', value: 28.4 },
  { name: 'Fashion', value: 22.1 },
  { name: 'Travel', value: 18.7 },
  { name: 'Food', value: 15.3 },
  { name: 'Sports', value: 12.8 },
  { name: 'Music', value: 2.7 }
];

const engagementTrend = [
  { name: 'Jan', revenue: 3.2, users: 2.8, conversions: 1.9 },
  { name: 'Feb', revenue: 3.5, users: 3.1, conversions: 2.1 },
  { name: 'Mar', revenue: 3.8, users: 3.4, conversions: 2.3 },
  { name: 'Apr', revenue: 4.1, users: 3.7, conversions: 2.5 },
  { name: 'May', revenue: 4.3, users: 3.9, conversions: 2.7 },
  { name: 'Jun', revenue: 4.2, users: 3.8, conversions: 2.6 }
];

const topLocations = [
  { country: 'United States', users: 234567, percentage: 27.7 },
  { country: 'United Kingdom', users: 156789, percentage: 18.5 },
  { country: 'Canada', users: 98765, percentage: 11.7 },
  { country: 'Australia', users: 76543, percentage: 9.0 },
  { country: 'Germany', users: 65432, percentage: 7.7 }
];

export const Audience: React.FC = () => {
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
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Audience Insights</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Understand your audience demographics and behavior patterns
          </p>
        </div>
      </motion.div>

      {/* Audience Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {audienceMetrics.map((metric, index) => {
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
                <div className={`p-3 rounded-lg ${
                  metric.color === 'blue' ? 'bg-blue-50 dark:bg-blue-900/30' :
                  metric.color === 'green' ? 'bg-green-50 dark:bg-green-900/30' :
                  metric.color === 'red' ? 'bg-red-50 dark:bg-red-900/30' :
                  'bg-purple-50 dark:bg-purple-900/30'
                }`}>
                  <Icon className={`w-6 h-6 ${
                    metric.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                    metric.color === 'green' ? 'text-green-600 dark:text-green-400' :
                    metric.color === 'red' ? 'text-red-600 dark:text-red-400' :
                    'text-purple-600 dark:text-purple-400'
                  }`} />
                </div>
                <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                  isPositive 
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' 
                    : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                }`}>
                  {isPositive ? '↗' : '↘'} {Math.abs(metric.change)}%
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {metric.value}
              </h3>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {metric.title}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Demographics Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <BarChart 
          data={ageGroups} 
          title="Age Distribution" 
          isLoading={isLoading}
        />
        <DonutChart 
          data={genderData} 
          title="Gender Breakdown" 
          isLoading={isLoading}
        />
        <DonutChart 
          data={interestData} 
          title="Top Interests" 
          isLoading={isLoading}
        />
      </div>

      {/* Engagement Trends */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <LineChart 
          data={engagementTrend} 
          title="Engagement Trends (6 Months)" 
          isLoading={isLoading}
        />
        
        {/* Top Locations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center gap-3 mb-6">
            <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Top Locations</h3>
          </div>
          
          <div className="space-y-4">
            {topLocations.map((location, index) => (
              <motion.div
                key={location.country}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                      {location.country.slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{location.country}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {location.users.toLocaleString()} users
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900 dark:text-white">{location.percentage}%</p>
                  <div className="w-16 h-2 bg-gray-200 dark:bg-gray-700 rounded-full mt-1">
                    <div 
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: `${location.percentage}%` }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Device & Platform Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Device & Platform Usage</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg mb-3 inline-block">
              <Monitor className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Desktop</h4>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-1">58.2%</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">492K users</p>
          </div>
          <div className="text-center">
            <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg mb-3 inline-block">
              <Smartphone className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Mobile</h4>
            <p className="text-2xl font-bold text-green-600 dark:text-green-400 mt-1">35.4%</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">300K users</p>
          </div>
          <div className="text-center">
            <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg mb-3 inline-block">
              <Tablet className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Tablet</h4>
            <p className="text-2xl font-bold text-purple-600 dark:text-purple-400 mt-1">6.4%</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">54K users</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};