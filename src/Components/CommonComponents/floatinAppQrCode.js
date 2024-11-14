import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const QrCodeBanner = () => {
  const downloadUrl = 'https://example.com/download';

  return (
    <div className="qr-code-banner">
      <div className="qr-code-instructions">
        <h5>Scan & Download Our App Now</h5>
      </div>
      <QRCodeCanvas value={downloadUrl} size={100} />
    </div>
  );
};

export default QrCodeBanner;
