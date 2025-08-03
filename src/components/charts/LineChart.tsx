import React from 'react';
import { motion } from 'framer-motion';
import { 
  LineChart as RechartsLineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';
import { ChartData } from '../../types/analytics';

interface LineChartProps {
  data: ChartData[];
  title: string;
  isLoading?: boolean;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
      >
        <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <div 
              className="w-3 h-3 rounded"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-gray-600 dark:text-gray-400">{entry.dataKey}:</span>
            <span className="font-medium text-gray-900 dark:text-white">
              {entry.dataKey === 'revenue' ? `$${entry.value.toLocaleString()}` : entry.value.toLocaleString()}
            </span>
          </div>
        ))}
      </motion.div>
    );
  }
  return null;
};

export const LineChart: React.FC<LineChartProps> = ({ data, title, isLoading = false }) => {
  if (isLoading) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
      >
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-6 w-1/4"></div>
          <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <RechartsLineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis 
            dataKey="name" 
            className="text-gray-600 dark:text-gray-400"
            fontSize={12}
          />
          <YAxis 
            className="text-gray-600 dark:text-gray-400"
            fontSize={12}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="revenue" 
            stroke="#3B82F6" 
            strokeWidth={3}
            dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: '#3B82F6', strokeWidth: 2 }}
            name="Revenue"
          />
          <Line 
            type="monotone" 
            dataKey="users" 
            stroke="#10B981" 
            strokeWidth={3}
            dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: '#10B981', strokeWidth: 2 }}
            name="Users"
          />
          <Line 
            type="monotone" 
            dataKey="conversions" 
            stroke="#F59E0B" 
            strokeWidth={3}
            dot={{ fill: '#F59E0B', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: '#F59E0B', strokeWidth: 2 }}
            name="Conversions"
          />
        </RechartsLineChart>
      </ResponsiveContainer>
    </motion.div>
  );
};