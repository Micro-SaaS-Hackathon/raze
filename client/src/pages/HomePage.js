import React, { useState, useEffect } from 'react';
import QRCodeForm from '../components/QRCodeForm';
import QRCodeList from '../components/QRCodeList';

const HomePage = () => {
  const [qrCodes, setQrCodes] = useState([]);

  // Load QR codes from localStorage on component mount
  useEffect(() => {
    const savedQrCodes = localStorage.getItem('scanmaster-qrcodes');
    if (savedQrCodes) {
      setQrCodes(JSON.parse(savedQrCodes));
    }
  }, []);

  // Save QR codes to localStorage whenever the list changes
  useEffect(() => {
    localStorage.setItem('scanmaster-qrcodes', JSON.stringify(qrCodes));
  }, [qrCodes]);

  const handleQRCodeGenerated = (newQrCode) => {
    setQrCodes(prev => [newQrCode, ...prev]);
  };

  const handleDeleteQRCode = (index) => {
    setQrCodes(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-6">
            Welcome to <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">ScanMaster</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Create, manage, and track your QR codes with powerful analytics
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </div>
        </div>

        {/* Two Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Generate QR Code Card */}
          <div className="animate-fade-in-up">
            <QRCodeForm onQRCodeGenerated={handleQRCodeGenerated} />
          </div>

          {/* Your QR Codes Card */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <QRCodeList 
              qrCodes={qrCodes} 
              onDeleteQRCode={handleDeleteQRCode}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
