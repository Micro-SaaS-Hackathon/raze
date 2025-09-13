import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

// Convert mock report to CSV format
export const convertToCSV = (data) => {
  const headers = ['Metric', 'Value'];
  const rows = [
    ['Site', data.site],
    ['Date', data.date],
    ['Total Scans', data.totalScans],
    ['', ''], // Empty row
    ['Device', 'Count'],
    ...data.devices.map(device => [device.name, device.count]),
    ['', ''], // Empty row
    ['Street', 'Count'],
    ...data.streets.map(street => [street.name, street.count])
  ];

  const csvContent = [headers, ...rows]
    .map(row => row.map(field => `"${field}"`).join(','))
    .join('\n');

  return csvContent;
};

// Convert mock report to XLSX format
export const convertToXLSX = (data) => {
  const workbook = XLSX.utils.book_new();
  
  // Summary sheet
  const summaryData = [
    ['Site Report Summary'],
    ['Site', data.site],
    ['Date', data.date],
    ['Total Scans', data.totalScans],
    ['', ''],
    ['Devices'],
    ['Device Name', 'Count'],
    ...data.devices.map(device => [device.name, device.count]),
    ['', ''],
    ['Streets'],
    ['Street Name', 'Count'],
    ...data.streets.map(street => [street.name, street.count])
  ];
  
  const summarySheet = XLSX.utils.aoa_to_sheet(summaryData);
  XLSX.utils.book_append_sheet(workbook, summarySheet, 'Summary');
  
  // Devices sheet
  const devicesSheet = XLSX.utils.aoa_to_sheet([
    ['Device Name', 'Count'],
    ...data.devices.map(device => [device.name, device.count])
  ]);
  XLSX.utils.book_append_sheet(workbook, devicesSheet, 'Devices');
  
  // Streets sheet
  const streetsSheet = XLSX.utils.aoa_to_sheet([
    ['Street Name', 'Count'],
    ...data.streets.map(street => [street.name, street.count])
  ]);
  XLSX.utils.book_append_sheet(workbook, streetsSheet, 'Streets');
  
  return workbook;
};

// Convert mock report to JSON format
export const convertToJSON = (data) => {
  return JSON.stringify(data, null, 2);
};

// Download file based on format
export const downloadFile = (data, format) => {
  const timestamp = new Date().toISOString().split('T')[0];
  const filename = `scanmaster-report-${timestamp}`;
  
  switch (format) {
    case 'csv':
      const csvContent = convertToCSV(data);
      const csvBlob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      saveAs(csvBlob, `${filename}.csv`);
      break;
      
    case 'xlsx':
      const workbook = convertToXLSX(data);
      XLSX.writeFile(workbook, `${filename}.xlsx`);
      break;
      
    case 'json':
      const jsonContent = convertToJSON(data);
      const jsonBlob = new Blob([jsonContent], { type: 'application/json;charset=utf-8;' });
      saveAs(jsonBlob, `${filename}.json`);
      break;
      
    default:
      console.error('Unsupported export format:', format);
  }
};
