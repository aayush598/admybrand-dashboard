import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Users, 
  Target, 
  TrendingUp, 
  Settings, 
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Home,
  PieChart,
  FileText
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const menuItems = [
  { id: 'overview', label: 'Overview', icon: Home },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'campaigns', label: 'Campaigns', icon: Target },
  { id: 'audience', label: 'Audience', icon: Users },
  { id: 'reports', label: 'Reports', icon: FileText },
  { id: 'insights', label: 'AI Insights', icon: TrendingUp },
];

const bottomItems = [
  { id: 'settings', label: 'Settings', icon: Settings },
  { id: 'help', label: 'Help & Support', icon: HelpCircle },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <motion.aside
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className={`${isCollapsed ? 'w-16' : 'w-64'} bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col transition-all duration-300`}
    >
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2"
            >
              <div className="p-2 bg-blue-600 rounded-lg flex-shrink-0">
                <PieChart className="w-6 h-6 text-white" />
              </div>
              <span className="font-semibold text-gray-900 dark:text-white">Dashboard</span>
            </motion.div>
          )}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1.5 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            {isCollapsed ? (
              <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            ) : (
              <ChevronLeft className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            )}
          </motion.button>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <motion.button
                key={item.id}
                whileHover={{ x: 2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onTabChange(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-l-4 border-blue-600'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                <Icon className={`${isCollapsed ? 'w-6 h-6' : 'w-5 h-5'} flex-shrink-0 ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}`} />
                {!isCollapsed && (
                  <span className="font-medium">{item.label}</span>
                )}
              </motion.button>
            );
          })}
        </div>
      </nav>

      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="space-y-2">
          {bottomItems.map((item) => {
            const Icon = item.icon;
            
            return (
              <motion.button
                key={item.id}
                whileHover={{ x: 2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onTabChange(item.id)}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
              >
                <Icon className={`${isCollapsed ? 'w-6 h-6' : 'w-5 h-5'} flex-shrink-0 text-gray-500 dark:text-gray-400`} />
                {!isCollapsed && (
                  <span className="font-medium">{item.label}</span>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.aside>
  );
};