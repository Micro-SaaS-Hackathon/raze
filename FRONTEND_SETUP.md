# ScanMaster Frontend Setup

## Quick Start

1. **Navigate to client directory**:
   ```bash
   cd client
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm start
   ```

4. **Open your browser**:
   - Go to http://localhost:3000
   - The app will automatically reload when you make changes

## Features Added

### 🔗 Integrations Panel
- **4 Integration Cards**: Notion, Google Sheets, Excel, Airtable
- **Fake OAuth Flow**: Click "Connect" to simulate authentication
- **Status Management**: Shows Connected/Disconnected states
- **Export Functionality**: Download data in CSV, XLSX, or JSON format

### 🌐 Site Report
- **Mock Data**: Hard-coded stats for https://scanmaster.netlify.com
- **Device Distribution**: Doughnut chart showing device breakdown
- **Street Analysis**: Bar chart of top streets in Baku
- **Interactive Tables**: Detailed breakdown of scans by location
- **Map Placeholder**: Visual representation of scan locations

### 📊 Export Features
- **CSV Export**: Comma-separated values with all data
- **XLSX Export**: Multi-sheet Excel file with summary, devices, and streets
- **JSON Export**: Raw data in JSON format
- **Client-Side Download**: Uses file-saver library for downloads

## Mock Data Structure

```javascript
const mockReport = {
  site: "https://scanmaster.netlify.com",
  date: "2025-09-13",
  totalScans: 5,
  devices: [
    { name: "iPhone 12 (iOS 16)", count: 1 },
    { name: "Samsung Galaxy S21 (Android 12)", count: 1 },
    { name: "Xiaomi Redmi Note 11 (Android 11)", count: 1 },
    { name: "iPad Pro (iPadOS 16)", count: 1 },
    { name: "Desktop (Windows 10, Chrome)", count: 1 }
  ],
  streets: [
    { name: "Neftchilar Avenue", count: 2 },
    { name: "Istiglaliyyat Street", count: 1 },
    { name: "Jafar Jabbarly Street", count: 1 },
    { name: "Nariman Narimanov Avenue", count: 1 },
    { name: "Akhundov Street", count: 0 }
  ]
};
```

## Dependencies Added

- `xlsx`: For Excel file generation
- `file-saver`: For client-side file downloads
- `chart.js`: For data visualization
- `react-chartjs-2`: React wrapper for Chart.js

## Notes for Reviewers

- **All integrations are simulated** - no real API calls are made
- **Export functionality is client-side** - downloads mock data only
- **QR generator remains fully functional** - core feature unchanged
- **Charts use mock data** - realistic but not connected to real analytics
- **UI is polished** - professional look suitable for hackathon demo

## File Structure

```
client/src/
├── components/
│   ├── IntegrationsPanel.js    # Integrations & export functionality
│   ├── SiteReport.js          # Site report with charts
│   └── ...
├── data/
│   └── mockData.js            # Hard-coded mock data
├── utils/
│   └── exportUtils.js         # Export functionality
└── pages/
    └── AnalyticsDashboard.js  # Updated with new tabs
```
