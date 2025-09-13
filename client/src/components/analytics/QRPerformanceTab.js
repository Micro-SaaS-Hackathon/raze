import React from 'react';

const QRPerformanceTab = () => {
  const qrCodes = [
    {
      name: 'Product Launch',
      url: 'https://example.com/launch',
      scans: 2341,
      conversion: 12.5,
      status: 'active',
      created: '2024-01-15',
      lastScan: '2 hours ago'
    },
    {
      name: 'Event Registration',
      url: 'https://example.com/event',
      scans: 1876,
      conversion: 8.3,
      status: 'active',
      created: '2024-01-10',
      lastScan: '1 day ago'
    },
    {
      name: 'Contact Info',
      url: 'https://example.com/contact',
      scans: 1234,
      conversion: 15.2,
      status: 'active',
      created: '2024-01-08',
      lastScan: '3 hours ago'
    },
    {
      name: 'Social Media',
      url: 'https://example.com/social',
      scans: 987,
      conversion: 6.7,
      status: 'active',
      created: '2024-01-05',
      lastScan: '5 hours ago'
    },
    {
      name: 'Old Campaign',
      url: 'https://example.com/old',
      scans: 654,
      conversion: 4.2,
      status: 'inactive',
      created: '2023-12-20',
      lastScan: '1 week ago'
    }
  ];

  const getStatusBadge = (status) => {
    return status === 'active' 
      ? 'bg-green-100 text-green-800' 
      : 'bg-gray-100 text-gray-800';
  };

  const getConversionColor = (conversion) => {
    if (conversion >= 10) return 'text-green-600';
    if (conversion >= 5) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-8">
      {/* Performance Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">📊</span>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total QR Codes</p>
              <p className="text-2xl font-bold text-gray-900">{qrCodes.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">👁️</span>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Scans</p>
              <p className="text-2xl font-bold text-gray-900">
                {qrCodes.reduce((sum, qr) => sum + qr.scans, 0).toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">📈</span>
            </div>
            <div>
              <p className="text-sm text-gray-600">Avg Conversion</p>
              <p className="text-2xl font-bold text-gray-900">
                {(qrCodes.reduce((sum, qr) => sum + qr.conversion, 0) / qrCodes.length).toFixed(1)}%
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">🏆</span>
            </div>
            <div>
              <p className="text-sm text-gray-600">Top Performer</p>
              <p className="text-lg font-bold text-gray-900">Product Launch</p>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Chart */}
      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">QR Code Performance Over Time</h3>
        <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
          <div className="text-center">
            <div className="text-4xl mb-2">📈</div>
            <p className="text-gray-500">Performance chart would go here</p>
            <p className="text-sm text-gray-400">Showing scan trends for each QR code</p>
          </div>
        </div>
      </div>

      {/* QR Codes Table */}
      <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">QR Code Performance Details</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  QR Code
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  URL
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Scans
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Conversion
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Scan
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {qrCodes.map((qr, index) => (
                <tr key={qr.name} className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white text-sm">QR</span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{qr.name}</div>
                        <div className="text-sm text-gray-500">Created {qr.created}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 max-w-xs truncate">{qr.url}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{qr.scans.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`text-sm font-medium ${getConversionColor(qr.conversion)}`}>
                      {qr.conversion}%
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadge(qr.status)}`}>
                      {qr.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {qr.lastScan}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900 transition-colors duration-200">
                        View
                      </button>
                      <button className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                        Edit
                      </button>
                      <button className="text-red-600 hover:text-red-900 transition-colors duration-200">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center justify-center space-x-2 p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
            <span className="text-xl">📊</span>
            <span>Export Analytics</span>
          </button>
          <button className="flex items-center justify-center space-x-2 p-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 transform hover:scale-105">
            <span className="text-xl">📧</span>
            <span>Email Report</span>
          </button>
          <button className="flex items-center justify-center space-x-2 p-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
            <span className="text-xl">⚙️</span>
            <span>Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QRPerformanceTab;
