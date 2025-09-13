import React, { useState } from 'react';
import QRCustomization from './QRCustomization';

const QRCodeForm = ({ onQRCodeGenerated }) => {
  const [formData, setFormData] = useState({
    url: '',
    name: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [customization, setCustomization] = useState({
    foregroundColor: '#000000',
    backgroundColor: '#FFFFFF',
    logo: null,
    logoSize: 0.2,
    margin: 2,
    width: 300
  });
  const [showCustomization, setShowCustomization] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/generate-qr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          ...customization
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate QR code');
      }

      // Add timestamp and id to the QR code data
      const qrCodeWithMeta = {
        ...data,
        id: Date.now(),
        createdAt: new Date().toISOString(),
        scans: Math.floor(Math.random() * 100) // Mock scan count
      };

      onQRCodeGenerated(qrCodeWithMeta);
      setFormData({ url: '', name: '' }); // Reset form
      setCustomization({
        foregroundColor: '#000000',
        backgroundColor: '#FFFFFF',
        logo: null,
        logoSize: 0.2,
        margin: 2,
        width: 300
      }); // Reset customization
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-purple-500/20 p-6 hover:shadow-purple-500/10 hover:shadow-2xl transition-all duration-300">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3 shadow-lg shadow-purple-500/25">
          <span className="text-white text-lg">⚡</span>
        </div>
        <h2 className="text-2xl font-bold text-white">Generate QR Code</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="url" className="block text-sm font-semibold text-gray-300 mb-2">
            URL to encode
          </label>
          <input
            type="url"
            id="url"
            name="url"
            value={formData.url}
            onChange={handleInputChange}
            placeholder="https://example.com"
            className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/30 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 transition-all duration-200 hover:border-purple-400 text-white placeholder-gray-400"
            required
          />
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
            QR Code Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="My Awesome QR Code"
            className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/30 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 transition-all duration-200 hover:border-purple-400 text-white placeholder-gray-400"
            required
          />
        </div>

        <div className="space-y-3">
          <button
            type="button"
            onClick={() => setShowCustomization(!showCustomization)}
            className="w-full px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors duration-200 border border-gray-600"
          >
            {showCustomization ? 'Hide Customization' : 'Customize QR Code'} 🎨
          </button>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg shadow-purple-500/25"
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Generating...
              </div>
            ) : (
              'Generate QR Code'
            )}
          </button>
        </div>
      </form>

      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl animate-fade-in">
          <div className="flex items-center">
            <span className="text-red-500 mr-2">⚠️</span>
            {error}
          </div>
        </div>
      )}

      {showCustomization && (
        <div className="mt-6">
          <QRCustomization
            customization={customization}
            onCustomizationChange={setCustomization}
          />
        </div>
      )}
    </div>
  );
};

export default QRCodeForm;
