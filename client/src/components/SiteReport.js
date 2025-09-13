import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { mockReport } from '../data/mockData';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const SiteReport = () => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  };

  // Chart data for devices
  const deviceChartData = {
    labels: mockReport.devices.map(device => device.name),
    datasets: [
      {
        data: mockReport.devices.map(device => device.count),
        backgroundColor: [
          '#3B82F6', // Blue
          '#10B981', // Green
          '#F59E0B', // Yellow
          '#EF4444', // Red
          '#8B5CF6', // Purple
        ],
        borderWidth: 0,
      },
    ],
  };

  const deviceChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 20,
          usePointStyle: true,
        },
      },
    },
  };

  // Chart data for streets
  const streetChartData = {
    labels: mockReport.streets.map(street => street.name),
    datasets: [
      {
        label: 'Scans',
        data: mockReport.streets.map(street => street.count),
        backgroundColor: '#3B82F6',
        borderRadius: 4,
      },
    ],
  };

  const streetChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-purple-500/20 p-6">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3 shadow-lg shadow-purple-500/25">
          <span className="text-white text-lg">🌐</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Site Report</h3>
          <p className="text-sm text-gray-300">{mockReport.site}</p>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">👁️</span>
            <div>
              <p className="text-sm text-purple-400 font-medium">Total Scans</p>
              <p className="text-2xl font-bold text-white">{mockReport.totalScans}</p>
            </div>
          </div>
        </div>
        <div className="bg-pink-500/10 border border-pink-500/20 rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">📅</span>
            <div>
              <p className="text-sm text-pink-400 font-medium">Date</p>
              <p className="text-sm font-bold text-white">{formatDate(mockReport.date)}</p>
            </div>
          </div>
        </div>
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">📱</span>
            <div>
              <p className="text-sm text-blue-400 font-medium">Devices</p>
              <p className="text-2xl font-bold text-white">{mockReport.devices.length}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Devices Chart */}
        <div className="bg-gray-800/50 rounded-lg p-4 border border-purple-500/20">
          <h4 className="text-lg font-semibold text-white mb-4">Device Distribution</h4>
          <div className="h-64">
            <Doughnut data={deviceChartData} options={deviceChartOptions} />
          </div>
          <div className="mt-4 space-y-2">
            {mockReport.devices.map((device, index) => (
              <div key={device.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: deviceChartData.datasets[0].backgroundColor[index] }}
                  ></div>
                  <span className="text-gray-300">{device.name}</span>
                </div>
                <span className="font-medium text-white">{device.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Streets Chart */}
        <div className="bg-gray-800/50 rounded-lg p-4 border border-purple-500/20">
          <h4 className="text-lg font-semibold text-white mb-4">Top Streets in Baku</h4>
          <div className="h-64">
            <Bar data={streetChartData} options={streetChartOptions} />
          </div>
          <div className="mt-4 space-y-2">
            {mockReport.streets.map((street, index) => (
              <div key={street.name} className="flex items-center justify-between text-sm">
                <span className="text-gray-300">{street.name}</span>
                <span className="font-medium text-white">{street.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Streets Table */}
      <div className="mt-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Street Analysis</h4>
        <div className="bg-gray-50 rounded-lg overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Street Name
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Scans
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Percentage
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {mockReport.streets.map((street, index) => {
                const percentage = mockReport.totalScans > 0 
                  ? ((street.count / mockReport.totalScans) * 100).toFixed(1)
                  : '0.0';
                
                return (
                  <tr key={street.name} className="hover:bg-gray-100 transition-colors duration-200">
                    <td className="px-4 py-3 text-sm text-gray-900">{street.name}</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{street.count}</td>
                    <td className="px-4 py-3 text-sm text-gray-500">{percentage}%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="mt-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Location Map</h4>
        <div className="bg-gray-50 rounded-lg h-48 flex items-center justify-center border-2 border-dashed border-gray-300">
          <div className="text-center">
            <div className="text-4xl mb-2">🗺️</div>
            <p className="text-gray-500 font-medium">Baku, Azerbaijan</p>
            <p className="text-sm text-gray-400">Interactive map would be displayed here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteReport;
