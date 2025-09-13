import React, { useState } from 'react';

const QRCustomization = ({ customization, onCustomizationChange }) => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleColorChange = (type, color) => {
    onCustomizationChange({
      ...customization,
      [type]: color
    });
  };

  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onCustomizationChange({
          ...customization,
          logo: e.target.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSliderChange = (property, value) => {
    onCustomizationChange({
      ...customization,
      [property]: parseFloat(value)
    });
  };

  const handleNumberChange = (property, value) => {
    onCustomizationChange({
      ...customization,
      [property]: parseInt(value) || 300
    });
  };

  const presetColors = [
    { name: 'Classic', fg: '#000000', bg: '#FFFFFF' },
    { name: 'Purple', fg: '#8B5CF6', bg: '#F3F4F6' },
    { name: 'Pink', fg: '#EC4899', bg: '#FDF2F8' },
    { name: 'Blue', fg: '#3B82F6', bg: '#EFF6FF' },
    { name: 'Green', fg: '#10B981', bg: '#ECFDF5' },
    { name: 'Orange', fg: '#F59E0B', bg: '#FFFBEB' },
    { name: 'Red', fg: '#EF4444', bg: '#FEF2F2' },
    { name: 'Dark', fg: '#1F2937', bg: '#F9FAFB' }
  ];

  return (
    <div className="bg-gray-800/50 rounded-xl p-6 border border-purple-500/20">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3 shadow-lg shadow-purple-500/25">
          <span className="text-white text-lg">🎨</span>
        </div>
        <h3 className="text-xl font-bold text-white">Customize QR Code</h3>
      </div>

      {/* Color Presets */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-300 mb-3">Color Presets</h4>
        <div className="grid grid-cols-4 gap-2">
          {presetColors.map((preset) => (
            <button
              key={preset.name}
              onClick={() => {
                handleColorChange('foregroundColor', preset.fg);
                handleColorChange('backgroundColor', preset.bg);
              }}
              className="p-2 rounded-lg border border-gray-600 hover:border-purple-500 transition-colors duration-200"
              title={preset.name}
            >
              <div className="w-full h-8 rounded flex items-center justify-center text-xs font-medium"
                   style={{ 
                     background: `linear-gradient(45deg, ${preset.fg} 50%, ${preset.bg} 50%)`,
                     color: preset.fg === '#000000' ? '#FFFFFF' : '#000000'
                   }}>
                {preset.name}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Custom Colors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">
            Foreground Color
          </label>
          <div className="flex items-center space-x-3">
            <input
              type="color"
              value={customization.foregroundColor}
              onChange={(e) => handleColorChange('foregroundColor', e.target.value)}
              className="w-12 h-10 rounded-lg border border-gray-600 cursor-pointer"
            />
            <input
              type="text"
              value={customization.foregroundColor}
              onChange={(e) => handleColorChange('foregroundColor', e.target.value)}
              className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm"
              placeholder="#000000"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">
            Background Color
          </label>
          <div className="flex items-center space-x-3">
            <input
              type="color"
              value={customization.backgroundColor}
              onChange={(e) => handleColorChange('backgroundColor', e.target.value)}
              className="w-12 h-10 rounded-lg border border-gray-600 cursor-pointer"
            />
            <input
              type="text"
              value={customization.backgroundColor}
              onChange={(e) => handleColorChange('backgroundColor', e.target.value)}
              className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm"
              placeholder="#FFFFFF"
            />
          </div>
        </div>
      </div>

      {/* Logo Upload */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-300 mb-2">
          Logo (Optional)
        </label>
        <div className="flex items-center space-x-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleLogoUpload}
            className="hidden"
            id="logo-upload"
          />
          <label
            htmlFor="logo-upload"
            className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg hover:bg-purple-500/30 cursor-pointer transition-colors duration-200 border border-purple-500/30"
          >
            Upload Logo
          </label>
          {customization.logo && (
            <div className="flex items-center space-x-2">
              <img
                src={customization.logo}
                alt="Logo preview"
                className="w-8 h-8 rounded object-cover"
              />
              <button
                onClick={() => handleColorChange('logo', null)}
                className="text-red-400 hover:text-red-300 text-sm"
              >
                Remove
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Advanced Options Toggle */}
      <button
        onClick={() => setShowAdvanced(!showAdvanced)}
        className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-200 mb-4"
      >
        <span className="text-sm font-medium">Advanced Options</span>
        <span className={`transform transition-transform duration-200 ${showAdvanced ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>

      {/* Advanced Options */}
      {showAdvanced && (
        <div className="space-y-4 p-4 bg-gray-700/30 rounded-lg border border-gray-600">
          {/* Logo Size */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Logo Size: {Math.round(customization.logoSize * 100)}%
            </label>
            <input
              type="range"
              min="0.1"
              max="0.4"
              step="0.05"
              value={customization.logoSize}
              onChange={(e) => handleSliderChange('logoSize', e.target.value)}
              className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>

          {/* QR Code Size */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              QR Code Size: {customization.width}px
            </label>
            <input
              type="range"
              min="200"
              max="600"
              step="50"
              value={customization.width}
              onChange={(e) => handleSliderChange('width', e.target.value)}
              className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>

          {/* Margin */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Margin: {customization.margin}px
            </label>
            <input
              type="range"
              min="1"
              max="10"
              step="1"
              value={customization.margin}
              onChange={(e) => handleSliderChange('margin', e.target.value)}
              className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>
        </div>
      )}

      {/* Reset Button */}
      <div className="mt-6 pt-4 border-t border-gray-600">
        <button
          onClick={() => onCustomizationChange({
            foregroundColor: '#000000',
            backgroundColor: '#FFFFFF',
            logo: null,
            logoSize: 0.2,
            margin: 2,
            width: 300
          })}
          className="px-4 py-2 bg-gray-600 text-gray-300 rounded-lg hover:bg-gray-500 transition-colors duration-200"
        >
          Reset to Default
        </button>
      </div>
    </div>
  );
};

export default QRCustomization;
