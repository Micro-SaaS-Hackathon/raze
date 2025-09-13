// Mock data for ScanMaster demo
export const mockReport = {
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

export const integrations = [
  {
    id: 'notion',
    name: 'Notion',
    icon: '📝',
    description: 'Sync your QR analytics to Notion databases',
    connected: false
  },
  {
    id: 'google-sheets',
    name: 'Google Sheets',
    icon: '📊',
    description: 'Export data directly to Google Sheets',
    connected: false
  },
  {
    id: 'excel',
    name: 'Excel',
    icon: '📈',
    description: 'Download data as Excel files',
    connected: true
  },
  {
    id: 'airtable',
    name: 'Airtable',
    icon: '🗃️',
    description: 'Connect to Airtable bases',
    connected: false
  }
];

export const exportOptions = [
  {
    id: 'csv',
    name: 'CSV',
    icon: '📄',
    description: 'Comma-separated values'
  },
  {
    id: 'xlsx',
    name: 'XLSX',
    icon: '📊',
    description: 'Excel spreadsheet format'
  },
  {
    id: 'json',
    name: 'JSON',
    icon: '🔧',
    description: 'JavaScript Object Notation'
  }
];
