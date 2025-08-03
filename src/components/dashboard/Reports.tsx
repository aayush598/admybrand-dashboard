import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Download, 
  Calendar, 
  Filter,
  BarChart3,
  PieChart,
  TrendingUp,
  Users,
  DollarSign,
  Target,
  Clock,
  Share2,
  Plus,
  Eye,
  Edit3,
  Trash2
} from 'lucide-react';

const reportTemplates = [
  {
    id: 1,
    name: 'Monthly Performance Report',
    description: 'Comprehensive overview of monthly campaign performance',
    type: 'Performance',
    lastGenerated: '2024-01-15',
    frequency: 'Monthly',
    icon: BarChart3,
    color: 'blue'
  },
  {
    id: 2,
    name: 'Audience Demographics Report',
    description: 'Detailed breakdown of audience characteristics',
    type: 'Audience',
    lastGenerated: '2024-01-14',
    frequency: 'Weekly',
    icon: Users,
    color: 'green'
  },
  {
    id: 3,
    name: 'ROI Analysis Report',
    description: 'Return on investment analysis across all campaigns',
    type: 'Financial',
    lastGenerated: '2024-01-13',
    frequency: 'Quarterly',
    icon: DollarSign,
    color: 'purple'
  },
  {
    id: 4,
    name: 'Campaign Comparison Report',
    description: 'Side-by-side comparison of campaign performance',
    type: 'Comparison',
    lastGenerated: '2024-01-12',
    frequency: 'On-demand',
    icon: Target,
    color: 'orange'
  }
];

const recentReports = [
  {
    id: 1,
    name: 'Q4 2023 Performance Summary',
    type: 'Performance',
    generatedDate: '2024-01-10',
    size: '2.4 MB',
    format: 'PDF',
    status: 'Ready'
  },
  {
    id: 2,
    name: 'Holiday Campaign Analysis',
    type: 'Campaign',
    generatedDate: '2024-01-08',
    size: '1.8 MB',
    format: 'Excel',
    status: 'Ready'
  },
  {
    id: 3,
    name: 'Audience Insights December',
    type: 'Audience',
    generatedDate: '2024-01-05',
    size: '3.1 MB',
    format: 'PDF',
    status: 'Ready'
  },
  {
    id: 4,
    name: 'ROI Analysis Q4',
    type: 'Financial',
    generatedDate: '2024-01-03',
    size: '1.2 MB',
    format: 'Excel',
    status: 'Processing'
  }
];

const reportMetrics = [
  {
    title: 'Reports Generated',
    value: '127',
    change: 23.4,
    changeType: 'increase' as const,
    icon: FileText,
    period: 'This month'
  },
  {
    title: 'Avg. Generation Time',
    value: '2.3s',
    change: -15.2,
    changeType: 'decrease' as const,
    icon: Clock,
    period: 'Processing speed'
  },
  {
    title: 'Reports Shared',
    value: '89',
    change: 18.7,
    changeType: 'increase' as const,
    icon: Share2,
    period: 'This month'
  },
  {
    title: 'Active Templates',
    value: '12',
    change: 8.3,
    changeType: 'increase' as const,
    icon: PieChart,
    period: 'Available templates'
  }
];

export const Reports: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleGenerateReport = (templateId: number) => {
    console.log('Generating report for template:', templateId);
    // Implement report generation logic
  };

  const handleDownloadReport = (reportId: number) => {
    console.log('Downloading report:', reportId);
    // Implement download logic
  };

  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Custom Reports</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Generate and manage comprehensive analytics reports
          </p>
        </div>
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span className="text-sm font-medium">New Template</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Report Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {reportMetrics.map((metric, index) => {
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
                {metric.period}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Report Templates */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Report Templates</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reportTemplates.map((template, index) => {
            const Icon = template.icon;
            
            return (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-blue-300 dark:hover:border-blue-600 transition-colors cursor-pointer"
                onClick={() => setSelectedTemplate(template.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg ${
                    template.color === 'blue' ? 'bg-blue-50 dark:bg-blue-900/30' :
                    template.color === 'green' ? 'bg-green-50 dark:bg-green-900/30' :
                    template.color === 'purple' ? 'bg-purple-50 dark:bg-purple-900/30' :
                    'bg-orange-50 dark:bg-orange-900/30'
                  }`}>
                    <Icon className={`w-6 h-6 ${
                      template.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                      template.color === 'green' ? 'text-green-600 dark:text-green-400' :
                      template.color === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                      'text-orange-600 dark:text-orange-400'
                    }`} />
                  </div>
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs font-medium text-gray-600 dark:text-gray-400 rounded">
                    {template.type}
                  </span>
                </div>
                
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {template.name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {template.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500 mb-4">
                  <span>Frequency: {template.frequency}</span>
                  <span>Last: {template.lastGenerated}</span>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleGenerateReport(template.id);
                  }}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  Generate Report
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Recent Reports */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Reports</h3>
          <div className="flex items-center gap-2">
            <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
              <Filter className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </button>
            <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
              <Calendar className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">Report Name</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">Type</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">Generated</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">Size</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">Status</th>
                <th className="text-center py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentReports.map((report, index) => (
                <motion.tr
                  key={report.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{report.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{report.format}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-medium rounded">
                      {report.type}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-400">
                    {report.generatedDate}
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-400">
                    {report.size}
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded ${
                      report.status === 'Ready' 
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                        : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'
                    }`}>
                      {report.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center justify-center gap-2">
                      <button 
                        onClick={() => handleDownloadReport(report.id)}
                        className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                        disabled={report.status !== 'Ready'}
                      >
                        <Download className="w-4 h-4 text-gray-400" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors">
                        <Eye className="w-4 h-4 text-gray-400" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors">
                        <Share2 className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};