import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Play, 
  Pause, 
  Edit3, 
  Trash2, 
  Copy,
  MoreHorizontal,
  Target,
  DollarSign,
  Users,
  MousePointer,
  TrendingUp,
  Calendar,
  Filter
} from 'lucide-react';
import { DataTable } from '../ui/DataTable';
import { generateCampaignData } from '../../data/mockData';

const campaignStats = [
  {
    title: 'Active Campaigns',
    value: '24',
    change: 12.5,
    changeType: 'increase' as const,
    icon: Target,
    color: 'blue'
  },
  {
    title: 'Total Spend',
    value: '$89,420',
    change: 8.3,
    changeType: 'increase' as const,
    icon: DollarSign,
    color: 'green'
  },
  {
    title: 'Total Impressions',
    value: '2.4M',
    change: 15.7,
    changeType: 'increase' as const,
    icon: Users,
    color: 'purple'
  },
  {
    title: 'Avg. CTR',
    value: '2.84%',
    change: -2.1,
    changeType: 'decrease' as const,
    icon: MousePointer,
    color: 'orange'
  }
];

const campaignTypes = [
  { name: 'Search Ads', count: 12, spend: 34500, color: 'bg-blue-500' },
  { name: 'Display Ads', count: 8, spend: 28900, color: 'bg-green-500' },
  { name: 'Social Media', count: 6, spend: 18200, color: 'bg-purple-500' },
  { name: 'Video Ads', count: 4, spend: 15800, color: 'bg-orange-500' }
];

export const Campaigns: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [campaignData] = useState(generateCampaignData());
  const [selectedCampaigns, setSelectedCampaigns] = useState<string[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleBulkAction = (action: string) => {
    console.log(`Performing ${action} on campaigns:`, selectedCampaigns);
    // Implement bulk actions
  };

  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Campaign Management</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Create, manage, and optimize your advertising campaigns
          </p>
        </div>
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span className="text-sm font-medium">New Campaign</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Campaign Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {campaignStats.map((stat, index) => {
          const Icon = stat.icon;
          const isPositive = stat.changeType === 'increase';
          
          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${
                  stat.color === 'blue' ? 'bg-blue-50 dark:bg-blue-900/30' :
                  stat.color === 'green' ? 'bg-green-50 dark:bg-green-900/30' :
                  stat.color === 'purple' ? 'bg-purple-50 dark:bg-purple-900/30' :
                  'bg-orange-50 dark:bg-orange-900/30'
                }`}>
                  <Icon className={`w-6 h-6 ${
                    stat.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                    stat.color === 'green' ? 'text-green-600 dark:text-green-400' :
                    stat.color === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                    'text-orange-600 dark:text-orange-400'
                  }`} />
                </div>
                <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                  isPositive 
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' 
                    : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                }`}>
                  <TrendingUp className={`w-3 h-3 ${isPositive ? '' : 'rotate-180'}`} />
                  {Math.abs(stat.change)}%
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </h3>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {stat.title}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Campaign Types Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Campaign Types</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {campaignTypes.map((type, index) => (
            <motion.div
              key={type.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-3 h-3 rounded-full ${type.color}`}></div>
                <span className="font-medium text-gray-900 dark:text-white">{type.name}</span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Campaigns:</span>
                  <span className="font-medium text-gray-900 dark:text-white">{type.count}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Spend:</span>
                  <span className="font-medium text-gray-900 dark:text-white">${type.spend.toLocaleString()}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bulk Actions */}
      {selectedCampaigns.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-lg"
        >
          <span className="text-sm font-medium text-blue-700 dark:text-blue-400">
            {selectedCampaigns.length} campaign(s) selected
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleBulkAction('pause')}
              className="flex items-center gap-1 px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <Pause className="w-3 h-3" />
              Pause
            </button>
            <button
              onClick={() => handleBulkAction('duplicate')}
              className="flex items-center gap-1 px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <Copy className="w-3 h-3" />
              Duplicate
            </button>
            <button
              onClick={() => handleBulkAction('delete')}
              className="flex items-center gap-1 px-3 py-1 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 text-red-700 dark:text-red-400 rounded text-sm hover:bg-red-100 dark:hover:bg-red-900/50 transition-colors"
            >
              <Trash2 className="w-3 h-3" />
              Delete
            </button>
          </div>
        </motion.div>
      )}

      {/* Campaign Data Table */}
      <DataTable data={campaignData} isLoading={isLoading} />
    </div>
  );
};