const express = require('express');
const cors = require('cors');
const QRCode = require('qrcode');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, 'client/build')));

// API endpoint to generate QR code
app.post('/api/generate-qr', async (req, res) => {
  try {
    const { 
      url, 
      name, 
      foregroundColor = '#000000', 
      backgroundColor = '#FFFFFF',
      logo = null,
      logoSize = 0.2,
      margin = 2,
      width = 300
    } = req.body;

    // Validate input
    if (!url || !name) {
      return res.status(400).json({ 
        error: 'Both URL and name are required' 
      });
    }

    // Validate URL format
    try {
      new URL(url);
    } catch (error) {
      return res.status(400).json({ 
        error: 'Please enter a valid URL' 
      });
    }

    // Generate QR code as base64
    const qrCodeDataURL = await QRCode.toDataURL(url, {
      width: parseInt(width),
      margin: parseInt(margin),
      color: {
        dark: foregroundColor,
        light: backgroundColor
      }
    });

    // If logo is provided, overlay it on the QR code
    let finalImage = qrCodeDataURL;
    if (logo && logo.trim() !== '') {
      try {
        const { createCanvas, loadImage } = require('canvas');
        const canvas = createCanvas(parseInt(width), parseInt(width));
        const ctx = canvas.getContext('2d');
        
        // Load QR code image
        const qrImage = await loadImage(qrCodeDataURL);
        ctx.drawImage(qrImage, 0, 0);
        
        // Load and overlay logo
        const logoImage = await loadImage(logo);
        const logoSizePx = parseInt(width) * parseFloat(logoSize);
        const logoX = (parseInt(width) - logoSizePx) / 2;
        const logoY = (parseInt(width) - logoSizePx) / 2;
        
        // Draw white background for logo
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(logoX - 5, logoY - 5, logoSizePx + 10, logoSizePx + 10);
        
        // Draw logo
        ctx.drawImage(logoImage, logoX, logoY, logoSizePx, logoSizePx);
        
        finalImage = canvas.toDataURL('image/png');
      } catch (logoError) {
        console.warn('Logo processing failed, using QR code without logo:', logoError.message);
        // Continue with QR code without logo
      }
    }

    res.json({
      name,
      image: finalImage,
      customization: {
        foregroundColor,
        backgroundColor,
        logo: logo || null,
        logoSize,
        margin,
        width
      }
    });

  } catch (error) {
    console.error('Error generating QR code:', error);
    res.status(500).json({ 
      error: 'Failed to generate QR code' 
    });
  }
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
