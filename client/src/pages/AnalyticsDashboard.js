import React, { useState } from 'react';
import OverviewTab from '../components/analytics/OverviewTab';
import TimeAnalysisTab from '../components/analytics/TimeAnalysisTab';
import DevicesLocationsTab from '../components/analytics/DevicesLocationsTab';
import QRPerformanceTab from '../components/analytics/QRPerformanceTab';
import IntegrationsPanel from '../components/IntegrationsPanel';
import SiteReport from '../components/SiteReport';

const AnalyticsDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'time', label: 'Time Analysis', icon: '⏰' },
    { id: 'devices', label: 'Devices & Locations', icon: '🌍' },
    { id: 'performance', label: 'QR Performance', icon: '📈' },
    { id: 'integrations', label: 'Integrations', icon: '🔗' },
    { id: 'site-report', label: 'Site Report', icon: '🌐' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab />;
      case 'time':
        return <TimeAnalysisTab />;
      case 'devices':
        return <DevicesLocationsTab />;
      case 'performance':
        return <QRPerformanceTab />;
      case 'integrations':
        return <IntegrationsPanel />;
      case 'site-report':
        return <SiteReport />;
      default:
        return <OverviewTab />;
    }
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Analytics Dashboard
          </h1>
          <p className="text-gray-300 text-lg">
            Track and analyze your QR code performance
          </p>
          <div className="mt-4 flex justify-start">
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-purple-500/20 mb-8">
          <div className="border-b border-purple-500/20">
            <nav className="flex space-x-8 px-6" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`${
                    activeTab === tab.id
                      ? 'border-purple-500 text-purple-400'
                      : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-purple-500/30'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-all duration-200 flex items-center space-x-2`}
                >
                  <span className="text-lg">{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="animate-fade-in">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
