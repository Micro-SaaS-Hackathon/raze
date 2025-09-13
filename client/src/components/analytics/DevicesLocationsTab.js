import React from 'react';

const DevicesLocationsTab = () => {
  const deviceData = [
    { device: 'iPhone', percentage: 45, count: 5784, icon: '📱' },
    { device: 'Android', percentage: 38, count: 4882, icon: '🤖' },
    { device: 'Desktop', percentage: 12, count: 1541, icon: '💻' },
    { device: 'iPad', percentage: 5, count: 642, icon: '📱' }
  ];

  const locationData = [
    { country: 'United States', percentage: 35, count: 4498, flag: '🇺🇸' },
    { country: 'Canada', percentage: 18, count: 2312, flag: '🇨🇦' },
    { country: 'United Kingdom', percentage: 15, count: 1926, flag: '🇬🇧' },
    { country: 'Germany', percentage: 12, count: 1541, flag: '🇩🇪' },
    { country: 'Australia', percentage: 8, count: 1028, flag: '🇦🇺' },
    { country: 'Others', percentage: 12, count: 1541, flag: '🌍' }
  ];

  const browserData = [
    { browser: 'Safari', percentage: 42, count: 5395, icon: '🧭' },
    { browser: 'Chrome', percentage: 35, count: 4498, icon: '🌐' },
    { browser: 'Firefox', percentage: 15, count: 1926, icon: '🦊' },
    { browser: 'Edge', percentage: 8, count: 1028, icon: '🔷' }
  ];

  return (
    <div className="space-y-8">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">📱</span>
            </div>
            <div>
              <p className="text-sm text-gray-600">Mobile Users</p>
              <p className="text-2xl font-bold text-gray-900">83%</p>
            </div>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">🌍</span>
            </div>
            <div>
              <p className="text-sm text-gray-600">Countries</p>
              <p className="text-2xl font-bold text-gray-900">24</p>
            </div>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">🌐</span>
            </div>
            <div>
              <p className="text-sm text-gray-600">Browsers</p>
              <p className="text-2xl font-bold text-gray-900">4</p>
            </div>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">📊</span>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Scans</p>
              <p className="text-2xl font-bold text-gray-900">12,847</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Device Distribution */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Device Distribution</h3>
          <div className="space-y-4">
            {deviceData.map((device, index) => (
              <div key={device.device} className="flex items-center space-x-4">
                <div className="text-2xl">{device.icon}</div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">{device.device}</span>
                    <span className="text-sm text-gray-500">{device.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${device.percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{device.count.toLocaleString()} scans</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Browser Distribution */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Browser Distribution</h3>
          <div className="space-y-4">
            {browserData.map((browser, index) => (
              <div key={browser.browser} className="flex items-center space-x-4">
                <div className="text-2xl">{browser.icon}</div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">{browser.browser}</span>
                    <span className="text-sm text-gray-500">{browser.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-green-500 to-teal-500 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${browser.percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{browser.count.toLocaleString()} scans</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Geographic Distribution */}
      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Geographic Distribution</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Placeholder */}
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">🗺️</div>
              <p className="text-gray-500">Interactive map would go here</p>
              <p className="text-sm text-gray-400">Showing scan locations</p>
            </div>
          </div>

          {/* Country List */}
          <div className="space-y-3">
            {locationData.map((location, index) => (
              <div key={location.country} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <div className="flex items-center space-x-3">
                  <span className="text-xl">{location.flag}</span>
                  <span className="text-sm font-medium text-gray-700">{location.country}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${location.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 w-12 text-right">{location.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Cities */}
      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Top Cities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { city: 'New York', scans: 1234, country: '🇺🇸' },
            { city: 'Toronto', scans: 987, country: '🇨🇦' },
            { city: 'London', scans: 856, country: '🇬🇧' },
            { city: 'Berlin', scans: 743, country: '🇩🇪' },
            { city: 'Sydney', scans: 621, country: '🇦🇺' },
            { city: 'Paris', scans: 534, country: '🇫🇷' }
          ].map((city, index) => (
            <div key={city.city} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              <div className="flex items-center space-x-3">
                <span className="text-lg">{city.country}</span>
                <div>
                  <p className="font-medium text-gray-900">{city.city}</p>
                  <p className="text-sm text-gray-500">{city.scans} scans</p>
                </div>
              </div>
              <div className="text-lg font-bold text-gray-600">#{index + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevicesLocationsTab;
