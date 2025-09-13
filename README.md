# ScanMaster - QR Code Generator

A minimal React + Node.js MVP for generating QR codes quickly and easily.

## Features

- Simple form with URL input and QR code name
- Generate QR codes as base64 images
- Clean, responsive UI with Tailwind CSS
- No database or authentication required

## Quick Start

1. Install dependencies:
   ```bash
   npm run install-all
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and go to `http://localhost:3000`

## Project Structure

```
scanmaster1/
├── server.js              # Express backend server
├── package.json           # Backend dependencies
├── client/                # React frontend
│   ├── public/
│   ├── src/
│   │   ├── App.js         # Main React component
│   │   ├── App.css        # Custom styles
│   │   ├── index.js       # React entry point
│   │   └── index.css      # Tailwind CSS imports
│   ├── package.json       # Frontend dependencies
│   └── tailwind.config.js # Tailwind configuration
└── README.md
```

## API Endpoints

- `POST /api/generate-qr` - Generate QR code
  - Body: `{ "url": "https://example.com", "name": "My QR Code" }`
  - Response: `{ "name": "My QR Code", "image": "data:image/png;base64,..." }`

## Technologies Used

- **Backend**: Node.js, Express, qrcode npm package
- **Frontend**: React, Tailwind CSS
- **Development**: Concurrently for running both servers

## Development

- Backend runs on port 5000
- Frontend runs on port 3000
- Frontend proxies API requests to backend
