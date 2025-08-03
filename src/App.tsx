import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { Overview } from './components/dashboard/Overview';
import { Analytics } from './components/dashboard/Analytics';
import { Campaigns } from './components/dashboard/Campaigns';
import { Audience } from './components/dashboard/Audience';
import { Reports } from './components/dashboard/Reports';
import { AIInsights } from './components/dashboard/AIInsights';

function App() {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview />;
      case 'analytics':
        return <Analytics />;
      case 'campaigns':
        return <Campaigns />;
      case 'audience':
        return <Audience />;
      case 'reports':
        return <Reports />;
      case 'insights':
        return <AIInsights />;
      default:
        return <Overview />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="flex">
          <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
          <div className="flex-1 flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 overflow-auto">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderContent()}
              </motion.div>
            </main>
          </div>
        </div>
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: 'var(--toast-bg)',
              color: 'var(--toast-color)',
              border: '1px solid var(--toast-border)',
            },
          }}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;