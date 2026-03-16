import React from 'react';
import './OrderStyles.css';

export default function OrderForm() {
  return (
    <div className="order-form-container">
      {/* Tabs */}
      <div className="order-tabs">
        <button className="tab-btn active">Buy coins</button>
        <button className="tab-btn">Sell coins</button>
      </div>

      {/* Spend / Receive */}
      <div className="input-group">
        <label>Spend</label>
        <div className="input-row">
          <input type="text" defaultValue="2619" />
          <div className="currency-selector">
            <span className="icon">🇪🇺</span> EUR <span>▼</span>
          </div>
        </div>
      </div>

      <div className="input-group">
        <label>Receive</label>
        <div className="input-row">
          <input type="text" defaultValue="3000" />
          <div className="currency-selector">
            <span className="icon">₮</span> USDT <span>▼</span>
          </div>
        </div>
      </div>

      {/* Wallet Address */}
      <div className="input-group">
        <label>Your wallet address</label>
        <div className="wallet-row">
          <span className="wallet-icon">🔶</span> BINANCE
          <span className="dropdown-icon">⬇</span>
        </div>
      </div>

      {/* Order Details Grid */}
      <div className="details-grid">
        <div className="col">
          <label>Order Number</label>
          <div className="detail-box">1990444855285989376</div>
        </div>
        <div className="col">
          <label>Price</label>
          <div className="detail-box text-center">0,873</div>
        </div>
        <div className="col">
          <label>Rate %</label>
          <div className="detail-box highlight-text text-center">1.425</div>
        </div>
      </div>

      {/* Payment methods */}
      <div className="input-group section-margin">
        <label>Payment method</label>
        <div className="payment-grid">
          <div className="payment-method active">
            <div className="pm-logo"><span style={{color: '#002C77', fontWeight: 'bold'}}>S€PA</span></div>
            <div className="pm-info">
              <strong>SEPA INSTANT</strong>
              <div className="pm-fee">Gateway Fee<br/>0%</div>
            </div>
          </div>
          <div className="payment-method">
            <div className="pm-logo zen-logo">zen</div>
            <div className="pm-info">
              <strong>ZEN.COM</strong>
              <div className="pm-fee">Gateway Fee<br/>0%</div>
            </div>
          </div>
          <div className="payment-method">
            <div className="pm-logo visa-logo">VISA</div>
            <div className="pm-info">
              <strong>VISA</strong>
              <div className="pm-fee">Gateway Fee<br/>2,59%</div>
            </div>
          </div>
          <div className="payment-method">
            <div className="pm-logo master-logo">MC</div>
            <div className="pm-info">
              <strong>MASTER</strong>
              <div className="pm-fee">Gateway Fee<br/>2,59%</div>
            </div>
          </div>
          <div className="payment-method">
            <div className="pm-logo gpay-logo">G Pay</div>
            <div className="pm-info">
              <strong>GOOGLE PAY</strong>
              <div className="pm-fee">Gateway Fee<br/>2,59%</div>
            </div>
          </div>
          <div className="payment-method">
            <div className="pm-logo apay-logo"> Pay</div>
            <div className="pm-info">
              <strong>APPLE PAY</strong>
              <div className="pm-fee">Gateway Fee<br/>2,59%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="summary-section">
        <div className="summary-header">
          <strong>Summary</strong>
          <span className="show-full">Show Full Summary</span>
        </div>
        <div className="summary-content">
          <div className="summary-row total">
            <span>Total Payable</span>
            <span>€ 2.628,00 EUR</span>
          </div>
          <div className="summary-row details">
            <span>Spread included</span>
            <span>€ 21,78 EUR</span>
          </div>
          <div className="summary-row details">
            <span>Processing Fee</span>
            <span>€ 0,00 EUR</span>
          </div>
          <div className="summary-row details">
            <span>Estimated Network Fee</span>
            <span>€ 0,43 EUR</span>
          </div>
        </div>
      </div>

      <button className="create-order-btn">Create Order</button>
    </div>
  );
}
