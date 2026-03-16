import React from 'react';
import './OrderStyles.css';

export default function OrderSidebar() {
  return (
    <div className="order-sidebar-container">
      {/* Exchange Rate Heading */}
      <div className="sidebar-box exchange-rate-box">
        <div className="flags">🇪🇺🇺🇸</div>
        <span className="rate-text">EUR/USD = 1,1618</span>
      </div>

      {/* QR Code Box */}
      <div className="sidebar-box qr-box">
        <div className="qr-header">
          <strong>OPEN ORDER</strong>
          <span className="copy-icon">⎘</span>
        </div>
        <div className="qr-order-num">1990444855285989376</div>
        
        <div className="qr-image-placeholder">
          {/* Mock QR graphic */}
          <div className="qr-grid">
            <div className="qr-corner top-left"></div>
            <div className="qr-corner top-right"></div>
            <div className="qr-corner bottom-left"></div>
            <div className="qr-center"></div>
          </div>
        </div>
        
        <p className="qr-instructions">
          Please access the verification link to complete the process and receive the bank account details for the deposit.
        </p>
      </div>

      {/* Link block */}
      <div className="sidebar-box link-box">
        <span className="link-text">https://amplus-x.com/checkout...</span>
        <span className="copy-icon">⎘</span>
      </div>

      {/* Status Blocks */}
      <div className="sidebar-box status-box">
        <div className="status-icon clock-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 6v6l4 2"></path>
          </svg>
        </div>
        <strong>Under review</strong>
      </div>

      <div className="sidebar-box status-box">
        <div className="status-icon success-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
            <path d="M20 6L9 17l-5-5"></path>
          </svg>
        </div>
        <strong>Verified Account</strong>
      </div>

      <button className="action-btn btn-paid">PAID</button>
      <button className="action-btn btn-released">RELEASED</button>
    </div>
  );
}
