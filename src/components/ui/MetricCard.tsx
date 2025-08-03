import React from 'react';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  Users, 
  Target, 
  TrendingUp, 
  TrendingDown,
  ArrowUp,
  ArrowDown
} from 'lucide-react';
import { MetricCard as MetricCardType } from '../../types/analytics';

const iconMap = {
  DollarSign,
  Users,
  Target,
  TrendingUp
};

interface MetricCardProps {
  metric: MetricCardType;
  isLoading?: boolean;
}

export const MetricCard: React.FC<MetricCardProps> = ({ metric, isLoading = false }) => {
  const Icon = iconMap[metric.icon as keyof typeof iconMap];
  const isPositive = metric.changeType === 'increase';

  if (isLoading) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
      >
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-4 w-1/3"></div>
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded mb-2 w-2/3"></div>
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
      className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
            {metric.title}
          </p>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {metric.value}
          </h3>
          <div className="flex items-center gap-2">
            <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
              isPositive 
                ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' 
                : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
            }`}>
              {isPositive ? (
                <ArrowUp className="w-3 h-3" />
              ) : (
                <ArrowDown className="w-3 h-3" />
              )}
              {Math.abs(metric.change)}%
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">vs last month</span>
          </div>
        </div>
        <div className={`p-3 rounded-lg ${
          isPositive 
            ? 'bg-blue-50 dark:bg-blue-900/30' 
            : 'bg-gray-50 dark:bg-gray-700'
        }`}>
          <Icon className={`w-6 h-6 ${
            isPositive 
              ? 'text-blue-600 dark:text-blue-400' 
              : 'text-gray-600 dark:text-gray-400'
          }`} />
        </div>
      </div>
      
      {/* Mini trend chart */}
      <div className="mt-4 h-8 flex items-end justify-between gap-1">
        {metric.trend.map((value, index) => (
          <motion.div
            key={index}
            initial={{ height: 0 }}
            animate={{ height: `${(value / Math.max(...metric.trend)) * 100}%` }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            className={`flex-1 rounded-sm ${
              isPositive 
                ? 'bg-blue-200 dark:bg-blue-600/50' 
                : 'bg-gray-200 dark:bg-gray-600'
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};