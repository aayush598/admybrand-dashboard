import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  CheckCircle, 
  Lightbulb,
  Target,
  DollarSign,
  Users,
  MousePointer,
  Zap,
  Star,
  ArrowRight,
  RefreshCw
} from 'lucide-react';

const insightCategories = [
  {
    id: 'optimization',
    title: 'Optimization Opportunities',
    icon: TrendingUp,
    color: 'green',
    count: 8
  },
  {
    id: 'alerts',
    title: 'Performance Alerts',
    icon: AlertTriangle,
    color: 'yellow',
    count: 3
  },
  {
    id: 'recommendations',
    title: 'AI Recommendations',
    icon: Lightbulb,
    color: 'blue',
    count: 12
  },
  {
    id: 'predictions',
    title: 'Trend Predictions',
    icon: Brain,
    color: 'purple',
    count: 5
  }
];

const aiInsights = [
  {
    id: 1,
    type: 'optimization',
    priority: 'high',
    title: 'Budget Reallocation Opportunity',
    description: 'Your "Influencer Partnership" campaign shows 32% higher ROAS than average. Consider increasing budget allocation by 15-20% to maximize returns.',
    impact: '+$12,400 potential monthly revenue',
    confidence: 94,
    action: 'Increase Budget',
    icon: DollarSign,
    timestamp: '2 hours ago'
  },
  {
    id: 2,
    type: 'alert',
    priority: 'medium',
    title: 'Declining CTR in Video Campaigns',
    description: 'Video Marketing Push campaign CTR has dropped 18% over the past week. Creative fatigue may be affecting performance.',
    impact: '-$3,200 in potential conversions',
    confidence: 87,
    action: 'Refresh Creative',
    icon: MousePointer,
    timestamp: '4 hours ago'
  },
  {
    id: 3,
    type: 'recommendation',
    priority: 'high',
    title: 'Audience Expansion Opportunity',
    description: 'Similar audiences to your top-performing segments show high engagement potential. Expanding targeting could increase reach by 40%.',
    impact: '+156 new conversions/month',
    confidence: 91,
    action: 'Expand Targeting',
    icon: Users,
    timestamp: '6 hours ago'
  },
  {
    id: 4,
    type: 'prediction',
    priority: 'low',
    title: 'Seasonal Trend Forecast',
    description: 'Based on historical data, expect 25% increase in conversion rates during the upcoming holiday season. Prepare inventory and budget accordingly.',
    impact: '+$45,000 projected revenue',
    confidence: 78,
    action: 'Plan Campaign',
    icon: Target,
    timestamp: '1 day ago'
  },
  {
    id: 5,
    type: 'optimization',
    priority: 'medium',
    title: 'Landing Page Optimization',
    description: 'Google Ads traffic has 15% lower conversion rate than other channels. A/B testing landing page variations could improve performance.',
    impact: '+89 conversions/month',
    confidence: 83,
    action: 'A/B Test Pages',
    icon: TrendingUp,
    timestamp: '1 day ago'
  }
];

const performanceMetrics = [
  {
    title: 'AI Accuracy',
    value: '94.2%',
    change: 2.1,
    changeType: 'increase' as const,
    icon: Brain,
    description: 'Prediction accuracy rate'
  },
  {
    title: 'Insights Generated',
    value: '847',
    change: 15.3,
    changeType: 'increase' as const,
    icon: Lightbulb,
    description: 'This month'
  },
  {
    title: 'Actions Taken',
    value: '234',
    change: 8.7,
    changeType: 'increase' as const,
    icon: CheckCircle,
    description: 'Implemented recommendations'
  },
  {
    title: 'ROI Impact',
    value: '+$127K',
    change: 23.4,
    changeType: 'increase' as const,
    icon: DollarSign,
    description: 'Revenue from AI insights'
  }
];

export const AIInsights: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 2000);
  };

  const filteredInsights = selectedCategory === 'all' 
    ? aiInsights 
    : aiInsights.filter(insight => insight.type === selectedCategory);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/30';
      case 'medium': return 'text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/30';
      case 'low': return 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30';
      default: return 'text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/30';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">AI Insights</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            AI-powered recommendations and performance insights
          </p>
        </div>
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleRefresh}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            <span className="text-sm font-medium">Refresh Insights</span>
          </motion.button>
        </div>
      </motion.div>

      {/* AI Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {performanceMetrics.map((metric, index) => {
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
                  <TrendingUp className={`w-3 h-3 ${isPositive ? '' : 'rotate-180'}`} />
                  {Math.abs(metric.change)}%
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {metric.value}
              </h3>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                {metric.title}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                {metric.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Insight Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Insight Categories</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
          {insightCategories.map((category, index) => {
            const Icon = category.icon;
            const isSelected = selectedCategory === category.id;
            
            return (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  isSelected 
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30' 
                    : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-lg ${
                    category.color === 'green' ? 'bg-green-50 dark:bg-green-900/30' :
                    category.color === 'yellow' ? 'bg-yellow-50 dark:bg-yellow-900/30' :
                    category.color === 'blue' ? 'bg-blue-50 dark:bg-blue-900/30' :
                    'bg-purple-50 dark:bg-purple-900/30'
                  }`}>
                    <Icon className={`w-5 h-5 ${
                      category.color === 'green' ? 'text-green-600 dark:text-green-400' :
                      category.color === 'yellow' ? 'text-yellow-600 dark:text-yellow-400' :
                      category.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                      'text-purple-600 dark:text-purple-400'
                    }`} />
                  </div>
                  <span className="font-bold text-2xl text-gray-900 dark:text-white">
                    {category.count}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 text-left">
                  {category.title}
                </p>
              </motion.button>
            );
          })}
        </div>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            selectedCategory === 'all'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          Show All Insights
        </motion.button>
      </motion.div>

      {/* AI Insights List */}
      <div className="space-y-4">
        {filteredInsights.map((insight, index) => {
          const Icon = insight.icon;
          
          return (
            <motion.div
              key={insight.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex-shrink-0">
                  <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {insight.title}
                        </h4>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(insight.priority)}`}>
                          {insight.priority} priority
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">
                        {insight.description}
                      </p>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-500 flex-shrink-0">
                      {insight.timestamp}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div>
                        <p className="text-sm font-medium text-green-600 dark:text-green-400">
                          {insight.impact}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">
                          Projected impact
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {insight.confidence}% confidence
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <span className="text-sm font-medium">{insight.action}</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* AI Learning Progress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl border border-purple-200 dark:border-purple-800"
      >
        <div className="flex items-start gap-4">
          <div className="p-3 bg-purple-600 rounded-lg">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              AI Learning Progress
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Our AI system continuously learns from your campaign data to provide more accurate insights and recommendations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">2.4M</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Data Points Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">847</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Patterns Identified</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">94.2%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Accuracy Rate</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};