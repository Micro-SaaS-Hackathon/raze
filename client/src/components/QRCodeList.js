import React from 'react';

const QRCodeList = ({ qrCodes, onDeleteQRCode }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  if (qrCodes.length === 0) {
    return (
      <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-purple-500/20 p-6 hover:shadow-purple-500/10 hover:shadow-2xl transition-all duration-300">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3 shadow-lg shadow-purple-500/25">
            <span className="text-white text-lg">📱</span>
          </div>
          <h2 className="text-2xl font-bold text-white">Your QR Codes</h2>
        </div>

        <div className="text-center py-12">
          <div className="text-6xl mb-4">👋</div>
          <h3 className="text-xl font-semibold text-gray-300 mb-2">Welcome!</h3>
          <p className="text-gray-400 max-w-sm mx-auto">
            Generate your first QR code using the form to get started!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-purple-500/20 p-6 hover:shadow-purple-500/10 hover:shadow-2xl transition-all duration-300">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3 shadow-lg shadow-purple-500/25">
          <span className="text-white text-lg">📱</span>
        </div>
        <h2 className="text-2xl font-bold text-white">Your QR Codes</h2>
        <span className="ml-auto bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium border border-purple-500/30">
          {qrCodes.length}
        </span>
      </div>

      <div className="space-y-4 max-h-96 overflow-y-auto">
        {qrCodes.map((qrCode, index) => (
          <div
            key={qrCode.id}
            className="bg-gray-800/50 rounded-xl p-4 border border-purple-500/20 hover:shadow-purple-500/10 hover:shadow-lg transition-all duration-200 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start space-x-4">
              {/* QR Code Preview */}
              <div className="flex-shrink-0">
                <img
                  src={qrCode.image}
                  alt={`QR Code for ${qrCode.name}`}
                  className="w-32 h-32 rounded-lg border border-purple-500/30 shadow-lg shadow-purple-500/10"
                />
              </div>

              {/* QR Code Info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-white truncate">
                  {qrCode.name}
                </h3>
                <p className="text-sm text-gray-300 truncate mb-2">
                  {qrCode.url}
                </p>
                <div className="flex items-center space-x-4 text-xs text-gray-400">
                  <span>Created {formatDate(qrCode.createdAt)}</span>
                  <span>•</span>
                  <span>{qrCode.scans} scans</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex-shrink-0 flex items-center space-x-2">
                <button
                  onClick={() => navigator.clipboard.writeText(qrCode.url)}
                  className="p-2 text-gray-400 hover:text-purple-400 hover:bg-purple-500/20 rounded-lg transition-all duration-200"
                  title="Copy URL"
                >
                  📋
                </button>
                <button
                  onClick={() => onDeleteQRCode(index)}
                  className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-500/20 rounded-lg transition-all duration-200"
                  title="Delete"
                >
                  🗑️
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QRCodeList;
