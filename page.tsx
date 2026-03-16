import React from 'react';
import OrderForm from '../../components/OrderForm';
import OrderSidebar from '../../components/OrderSidebar';

export default function OrdersPage() {
  return (
    <div className="order-page-wrapper">
      <OrderForm />
      <OrderSidebar />
    </div>
  );
}
