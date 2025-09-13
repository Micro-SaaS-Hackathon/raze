import React from 'react';

const TimeAnalysisTab = () => {
  const hourlyData = [
    { hour: '12 AM', scans: 45 },
    { hour: '1 AM', scans: 23 },
    { hour: '2 AM', scans: 12 },
    { hour: '3 AM', scans: 8 },
    { hour: '4 AM', scans: 5 },
    { hour: '5 AM', scans: 15 },
    { hour: '6 AM', scans: 35 },
    { hour: '7 AM', scans: 78 },
    { hour: '8 AM', scans: 125 },
    { hour: '9 AM', scans: 189 },
    { hour: '10 AM', scans: 234 },
    { hour: '11 AM', scans: 267 },
    { hour: '12 PM', scans: 298 },
    { hour: '1 PM', scans: 312 },
    { hour: '2 PM', scans: 289 },
    { hour: '3 PM', scans: 256 },
    { hour: '4 PM', scans: 234 },
    { hour: '5 PM', scans: 198 },
    { hour: '6 PM', scans: 167 },
    { hour: '7 PM', scans: 145 },
    { hour: '8 PM', scans: 123 },
    { hour: '9 PM', scans: 98 },
    { hour: '10 PM', scans: 67 },
    { hour: '11 PM', scans: 45 }
  ];

  const maxScans = Math.max(...hourlyData.map(d => d.scans));

  return (
    <div className="space-y-8">
      {/* Peak Hours Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">⏰</span>
            </div>
            <div>
              <p className="text-sm text-gray-600">Peak Hour</p>
              <p className="text-xl font-bold text-gray-900">1-2 PM</p>
              <p className="text-sm text-green-600">312 scans</p>
            </div>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">📊</span>
            </div>
            <div>
              <p className="text-sm text-gray-600">Average Daily</p>
              <p className="text-xl font-bold text-gray-900">1,847</p>
              <p className="text-sm text-blue-600">scans</p>
            </div>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">📈</span>
            </div>
            <div>
              <p className="text-sm text-gray-600">Growth Rate</p>
              <p className="text-xl font-bold text-gray-900">+15.3%</p>
              <p className="text-sm text-green-600">vs last week</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hourly Chart */}
      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Hourly Scan Distribution</h3>
        <div className="space-y-4">
          {hourlyData.map((data, index) => (
            <div key={data.hour} className="flex items-center space-x-4">
              <div className="w-12 text-sm text-gray-600 font-medium">{data.hour}</div>
              <div className="flex-1 bg-gray-200 rounded-full h-6 relative overflow-hidden">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full transition-all duration-500"
                  style={{ 
                    width: `${(data.scans / maxScans) * 100}%`,
                    animationDelay: `${index * 50}ms`
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-end pr-3">
                  <span className="text-xs font-medium text-gray-700">{data.scans}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Trends</h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center">
              <div className="text-4xl mb-2">📈</div>
              <p className="text-gray-500">Line chart would go here</p>
              <p className="text-sm text-gray-400">Showing 7-day trend</p>
            </div>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Day of Week Analysis</h3>
          <div className="space-y-3">
            {[
              { day: 'Monday', scans: 1847, color: 'bg-blue-500' },
              { day: 'Tuesday', scans: 2134, color: 'bg-green-500' },
              { day: 'Wednesday', scans: 1987, color: 'bg-purple-500' },
              { day: 'Thursday', scans: 2256, color: 'bg-yellow-500' },
              { day: 'Friday', scans: 2456, color: 'bg-red-500' },
              { day: 'Saturday', scans: 1234, color: 'bg-indigo-500' },
              { day: 'Sunday', scans: 987, color: 'bg-pink-500' }
            ].map((day, index) => (
              <div key={day.day} className="flex items-center justify-between">
                <span className="text-sm text-gray-700">{day.day}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div 
                      className={`${day.color} h-2 rounded-full transition-all duration-500`}
                      style={{ width: `${(day.scans / 2456) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-600 w-12 text-right">{day.scans}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeAnalysisTab;
