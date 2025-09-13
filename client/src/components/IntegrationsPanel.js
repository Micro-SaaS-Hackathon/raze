import React, { useState } from 'react';
import { integrations, exportOptions } from '../data/mockData';
import { downloadFile } from '../utils/exportUtils';
import { mockReport } from '../data/mockData';

const IntegrationsPanel = () => {
  const [integrationsState, setIntegrationsState] = useState(integrations);
  const [showConnectModal, setShowConnectModal] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);
  const [selectedIntegration, setSelectedIntegration] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnect = (integration) => {
    setSelectedIntegration(integration);
    setShowConnectModal(true);
  };

  const handleConfirmConnect = async () => {
    setIsConnecting(true);
    
    // Simulate OAuth flow delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIntegrationsState(prev => 
      prev.map(integration => 
        integration.id === selectedIntegration.id 
          ? { ...integration, connected: true }
          : integration
      )
    );
    
    setIsConnecting(false);
    setShowConnectModal(false);
    setSelectedIntegration(null);
  };

  const handleExport = (format) => {
    downloadFile(mockReport, format);
    setShowExportModal(false);
  };

  return (
    <div className="space-y-6">
      {/* Integrations Section */}
      <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-purple-500/20 p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg">🔗</span>
            </div>
            <h3 className="text-xl font-bold text-white">Integrations</h3>
          </div>
          <button
            onClick={() => setShowExportModal(true)}
            className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 shadow-lg shadow-purple-500/25"
          >
            Export Data
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {integrationsState.map((integration, index) => (
            <div
              key={integration.id}
              className="bg-gray-800/50 rounded-xl p-4 border border-purple-500/20 hover:shadow-purple-500/10 hover:shadow-lg transition-all duration-200 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                    {integration.id === 'google-sheets' && (
                      <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                        </svg>
                      </div>
                    )}
                    {integration.id === 'airtable' && (
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{background: 'linear-gradient(135deg, #FFB400 0%, #FF5C00 100%)'}}>
                        <div className="flex space-x-0.5">
                          <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                          <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                          <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                          <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                        </div>
                      </div>
                    )}
                    {integration.id === 'notion' && (
                      <div className="w-10 h-10 bg-white border border-gray-300 rounded-lg flex items-center justify-center">
                        <span className="text-black font-bold">N</span>
                      </div>
                    )}
                    {integration.id === 'excel' && (
                      <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                          <path d="M14 2v6h6"/>
                          <path d="M16 13H8v2h8v-2z"/>
                          <path d="M16 17H8v2h8v-2z"/>
                          <path d="M10 9H8v2h2V9z"/>
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white">{integration.name}</h4>
                    <p className="text-sm text-gray-300 mt-1">{integration.description}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    integration.connected 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                  }`}>
                    {integration.connected ? 'Connected' : 'Disconnected'}
                  </span>
                  <button
                    onClick={() => handleConnect(integration)}
                    disabled={integration.connected}
                    className={`px-3 py-1 text-xs font-medium rounded-lg transition-all duration-200 ${
                      integration.connected
                        ? 'bg-gray-500/20 text-gray-400 cursor-not-allowed'
                        : 'bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 border border-purple-500/30'
                    }`}
                  >
                    {integration.connected ? 'Connected' : 'Connect'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Connect Modal */}
      {showConnectModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-gray-900 rounded-2xl p-6 max-w-md w-full mx-4 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Connect Your Accounts</h3>
              <button
                onClick={() => setShowConnectModal(false)}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-3">
              {/* Google Sheets */}
              <button
                onClick={selectedIntegration?.id === 'google-sheets' ? handleConfirmConnect : undefined}
                disabled={selectedIntegration?.id !== 'google-sheets'}
                className={`w-full flex items-center space-x-3 p-4 rounded-xl transition-all duration-200 ${
                  selectedIntegration?.id === 'google-sheets' 
                    ? 'bg-gray-700 hover:bg-gray-600' 
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
              >
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                  </svg>
                </div>
                <span className="text-white font-medium">Google Sheets</span>
              </button>

              {/* Airtable */}
              <button
                onClick={selectedIntegration?.id === 'airtable' ? handleConfirmConnect : undefined}
                disabled={selectedIntegration?.id !== 'airtable'}
                className={`w-full flex items-center space-x-3 p-4 rounded-xl transition-all duration-200 ${
                  selectedIntegration?.id === 'airtable' 
                    ? 'bg-gray-700 hover:bg-gray-600' 
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{background: 'linear-gradient(135deg, #FFB400 0%, #FF5C00 100%)'}}>
                  <div className="flex space-x-0.5">
                    <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                  </div>
                </div>
                <span className="text-white font-medium">Airtable</span>
              </button>

              {/* Notion */}
              <button
                onClick={selectedIntegration?.id === 'notion' ? handleConfirmConnect : undefined}
                disabled={selectedIntegration?.id !== 'notion'}
                className={`w-full flex items-center space-x-3 p-4 rounded-xl transition-all duration-200 ${
                  selectedIntegration?.id === 'notion' 
                    ? 'bg-gray-700 hover:bg-gray-600' 
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
              >
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-sm">N</span>
                </div>
                <span className="text-white font-medium">Notion</span>
              </button>
            </div>

            {isConnecting && (
              <div className="mt-6 flex items-center justify-center space-x-2 py-4">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                <span className="text-white">Connecting...</span>
              </div>
            )}

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                This is a demo integration. In a real app, this would redirect to OAuth.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Export Modal */}
      {showExportModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4 shadow-2xl">
            <div className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Export Data</h3>
              <p className="text-gray-600 mb-6">
                Choose a format to download your analytics data
              </p>
              
              <div className="space-y-3">
                {exportOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleExport(option.id)}
                    className="w-full flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="text-2xl">{option.icon}</span>
                    <div className="flex-1 text-left">
                      <div className="font-medium text-gray-900">{option.name}</div>
                      <div className="text-sm text-gray-500">{option.description}</div>
                    </div>
                    <span className="text-gray-400">→</span>
                  </button>
                ))}
              </div>
              
              <button
                onClick={() => setShowExportModal(false)}
                className="mt-6 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IntegrationsPanel;
