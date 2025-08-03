import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronUp, 
  ChevronDown, 
  Search, 
  Filter,
  Download,
  MoreHorizontal,
  Play,
  Pause,
  CheckCircle
} from 'lucide-react';
import { TableRow } from '../../types/analytics';

interface DataTableProps {
  data: TableRow[];
  isLoading?: boolean;
}

type SortField = keyof TableRow;
type SortDirection = 'asc' | 'desc';

const StatusBadge: React.FC<{ status: TableRow['status'] }> = ({ status }) => {
  const styles = {
    active: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
    paused: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400',
    completed: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
  };

  const icons = {
    active: Play,
    paused: Pause,
    completed: CheckCircle
  };

  const Icon = icons[status];

  return (
    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${styles[status]}`}>
      <Icon className="w-3 h-3" />
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

export const DataTable: React.FC<DataTableProps> = ({ data, isLoading = false }) => {
  const [sortField, setSortField] = useState<SortField>('revenue');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(5);

  const sortedAndFilteredData = useMemo(() => {
    let filtered = data.filter(row => 
      row.campaign.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.status.toLowerCase().includes(searchTerm.toLowerCase())
    );

    filtered.sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];
      
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortDirection === 'asc' 
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }
      
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
      }
      
      return 0;
    });

    return filtered;
  }, [data, sortField, sortDirection, searchTerm]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return sortedAndFilteredData.slice(startIndex, startIndex + pageSize);
  }, [sortedAndFilteredData, currentPage, pageSize]);

  const totalPages = Math.ceil(sortedAndFilteredData.length / pageSize);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const SortIcon: React.FC<{ field: SortField }> = ({ field }) => {
    if (sortField !== field) return <ChevronDown className="w-4 h-4 opacity-30" />;
    return sortDirection === 'asc' 
      ? <ChevronUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />
      : <ChevronDown className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
  };

  if (isLoading) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
      >
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-4 w-1/4"></div>
          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex gap-4 mb-3">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded flex-1"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
            </div>
          ))}
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
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Campaign Performance</h3>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search campaigns..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="p-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
            <Filter className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          </button>
          <button className="p-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors">
            <Download className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left py-3 px-4">
                <button 
                  onClick={() => handleSort('campaign')}
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Campaign
                  <SortIcon field="campaign" />
                </button>
              </th>
              <th className="text-right py-3 px-4">
                <button 
                  onClick={() => handleSort('impressions')}
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Impressions
                  <SortIcon field="impressions" />
                </button>
              </th>
              <th className="text-right py-3 px-4">
                <button 
                  onClick={() => handleSort('clicks')}
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Clicks
                  <SortIcon field="clicks" />
                </button>
              </th>
              <th className="text-right py-3 px-4">
                <button 
                  onClick={() => handleSort('ctr')}
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  CTR
                  <SortIcon field="ctr" />
                </button>
              </th>
              <th className="text-right py-3 px-4">
                <button 
                  onClick={() => handleSort('revenue')}
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Revenue
                  <SortIcon field="revenue" />
                </button>
              </th>
              <th className="text-right py-3 px-4">
                <button 
                  onClick={() => handleSort('roas')}
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  ROAS
                  <SortIcon field="roas" />
                </button>
              </th>
              <th className="text-center py-3 px-4">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Status</span>
              </th>
              <th className="text-center py-3 px-4">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {paginatedData.map((row, index) => (
                <motion.tr
                  key={row.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
                >
                  <td className="py-4 px-4">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{row.campaign}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(row.date).toLocaleDateString()}
                      </p>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-right text-sm text-gray-900 dark:text-white">
                    {row.impressions.toLocaleString()}
                  </td>
                  <td className="py-4 px-4 text-right text-sm text-gray-900 dark:text-white">
                    {row.clicks.toLocaleString()}
                  </td>
                  <td className="py-4 px-4 text-right text-sm text-gray-900 dark:text-white">
                    {row.ctr}%
                  </td>
                  <td className="py-4 px-4 text-right text-sm font-medium text-gray-900 dark:text-white">
                    ${row.revenue.toLocaleString()}
                  </td>
                  <td className="py-4 px-4 text-right text-sm font-medium text-gray-900 dark:text-white">
                    {row.roas.toFixed(2)}x
                  </td>
                  <td className="py-4 px-4 text-center">
                    <StatusBadge status={row.status} />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors">
                      <MoreHorizontal className="w-4 h-4 text-gray-400" />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Showing {((currentPage - 1) * pageSize) + 1} to {Math.min(currentPage * pageSize, sortedAndFilteredData.length)} of {sortedAndFilteredData.length} results
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="px-3 py-2 text-sm border border-gray-200 dark:border-gray-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                currentPage === page
                  ? 'bg-blue-600 text-white'
                  : 'border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            className="px-3 py-2 text-sm border border-gray-200 dark:border-gray-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </motion.div>
  );
};