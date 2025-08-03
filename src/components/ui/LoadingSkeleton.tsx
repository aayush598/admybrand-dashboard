import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSkeletonProps {
  className?: string;
  variant?: 'card' | 'chart' | 'table' | 'text';
  lines?: number;
}

export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ 
  className = '', 
  variant = 'card',
  lines = 3 
}) => {
  const baseClasses = "animate-pulse bg-gray-200 dark:bg-gray-700 rounded";

  if (variant === 'card') {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 ${className}`}
      >
        <div className={`h-4 ${baseClasses} mb-4 w-1/3`}></div>
        <div className={`h-8 ${baseClasses} mb-2 w-2/3`}></div>
        <div className={`h-3 ${baseClasses} w-1/4`}></div>
      </motion.div>
    );
  }

  if (variant === 'chart') {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 ${className}`}
      >
        <div className={`h-6 ${baseClasses} mb-6 w-1/4`}></div>
        <div className={`h-64 ${baseClasses}`}></div>
      </motion.div>
    );
  }

  if (variant === 'table') {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 ${className}`}
      >
        <div className={`h-6 ${baseClasses} mb-4 w-1/4`}></div>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex gap-4 mb-3">
            <div className={`h-4 ${baseClasses} flex-1`}></div>
            <div className={`h-4 ${baseClasses} w-20`}></div>
            <div className={`h-4 ${baseClasses} w-20`}></div>
            <div className={`h-4 ${baseClasses} w-16`}></div>
          </div>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={className}
    >
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className={`h-4 ${baseClasses} mb-2 ${i === lines - 1 ? 'w-2/3' : 'w-full'}`}></div>
      ))}
    </motion.div>
  );
};