import React from 'react';

const OverviewTab = () => {
  const stats = [
    {
      title: 'Total Scans',
      value: '12,847',
      change: '+12.5%',
      changeType: 'positive',
      icon: '👁️'
    },
    {
      title: 'Active QR Codes',
      value: '24',
      change: '+3',
      changeType: 'positive',
      icon: '📱'
    },
    {
      title: 'Top QR Code',
      value: 'Product Launch',
      change: '2,341 scans',
      changeType: 'neutral',
      icon: '🏆'
    },
    {
      title: 'Conversion Rate',
      value: '8.2%',
      change: '+0.8%',
      changeType: 'positive',
      icon: '📈'
    }
  ];

  const recentActivity = [
    { action: 'QR Code generated', name: 'Event Registration', time: '2 minutes ago' },
    { action: 'High scan activity', name: 'Product Launch', time: '15 minutes ago' },
    { action: 'QR Code generated', name: 'Contact Info', time: '1 hour ago' },
    { action: 'Peak scan time', name: 'All QR codes', time: '2 hours ago' }
  ];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={stat.title}
            className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className={`text-sm ${
                  stat.changeType === 'positive' ? 'text-green-600' : 
                  stat.changeType === 'negative' ? 'text-red-600' : 'text-gray-600'
                }`}>
                  {stat.change}
                </p>
              </div>
              <div className="text-3xl opacity-80">{stat.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Scan Trends Chart */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Scan Trends (7 days)</h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center">
              <div className="text-4xl mb-2">📊</div>
              <p className="text-gray-500">Chart visualization would go here</p>
              <p className="text-sm text-gray-400">Using Chart.js or Recharts</p>
            </div>
          </div>
        </div>

        {/* Device Distribution */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Device Distribution</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📱</span>
                <span className="text-gray-700">Mobile</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '68%' }}></div>
                </div>
                <span className="text-sm font-medium text-gray-600">68%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">💻</span>
                <span className="text-gray-700">Desktop</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '28%' }}></div>
                </div>
                <span className="text-sm font-medium text-gray-600">28%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📱</span>
                <span className="text-gray-700">Tablet</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '4%' }}></div>
                </div>
                <span className="text-sm font-medium text-gray-600">4%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {recentActivity.map((activity, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">
                  <span className="font-medium">{activity.action}</span> - {activity.name}
                </p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverviewTab;
