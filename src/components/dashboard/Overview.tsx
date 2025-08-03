import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw as Refresh, Calendar, Download, TrendingUp } from 'lucide-react';
import { MetricCard } from '../ui/MetricCard';
import { LineChart } from '../charts/LineChart';
import { BarChart } from '../charts/BarChart';
import { DonutChart } from '../charts/DonutChart';
import { DataTable } from '../ui/DataTable';
import { 
  generateMetricCards, 
  generateRevenueData, 
  generateChannelData, 
  generateCampaignData 
} from '../../data/mockData';

export const Overview: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [metrics] = useState(generateMetricCards());
  const [revenueData] = useState(generateRevenueData());
  const [channelData] = useState(generateChannelData());
  const [campaignData] = useState(generateCampaignData());

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setLastUpdated(new Date());
    }, 1000);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Analytics Overview</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Last updated: {lastUpdated.toLocaleTimeString()}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleRefresh}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            <Refresh className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
            <span className="text-sm font-medium">Refresh</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span className="text-sm font-medium">Export</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <MetricCard metric={metric} isLoading={isLoading} />
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <LineChart 
            data={revenueData} 
            title="Revenue & Performance Trends" 
            isLoading={isLoading}
          />
        </div>
        <div>
          <DonutChart 
            data={channelData} 
            title="Traffic Sources" 
            isLoading={isLoading}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div>
          <BarChart 
            data={channelData} 
            title="Channel Performance" 
            isLoading={isLoading}
          />
        </div>
        <div className="xl:col-span-2">
          <DataTable data={campaignData} isLoading={isLoading} />
        </div>
      </div>

      {/* AI Insights Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200 dark:border-blue-800"
      >
        <div className="flex items-start gap-4">
          <div className="p-3 bg-blue-600 rounded-lg">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              AI-Powered Insights
            </h3>
            <div className="space-y-3">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-blue-200 dark:border-blue-700">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-medium text-blue-600 dark:text-blue-400">Revenue Optimization:</span> Your "Influencer Partnership" campaign shows 32% higher ROAS than average. Consider increasing budget allocation by 15-20%.
                </p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-blue-200 dark:border-blue-700">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-medium text-amber-600 dark:text-amber-400">Attention Needed:</span> "Video Marketing Push" campaign has a 2.95x ROAS, below the 4.0x benchmark. Review targeting and creative elements.
                </p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-blue-200 dark:border-blue-700">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-medium text-green-600 dark:text-green-400">Growth Opportunity:</span> Google Ads represents 45% of traffic but only 38% of conversions. A/B test landing pages to improve conversion rates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};