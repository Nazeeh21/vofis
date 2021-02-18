import React from 'react';
import { PaymentNotificationCompProps } from '../../sharedTypes/PaymentNotificationTypes';
import PaymentNotificationItem from './PaymentNotificationItem';

const PaymentNotifications: React.FC<PaymentNotificationCompProps> = ({
  items,
}) => {
  return (
    <div
      style={{ height: '24rem' }}
      className="h-64 bg-white p-4 rounded-l-3xl shadow-lg overflow-y-auto"
    >
      <div className="font-body text-blue font-semibold text-xl border-gray3 border-b-2 p-3">
        Payments
      </div>
      {items.map((item, idx) => (
        <div key={idx}>
          <PaymentNotificationItem
            src={item.src}
            description={item.description}
          />
          {idx !== items.length - 1 && (
            <div
              style={{ height: '1px' }}
              className="w-11/12 m-auto bg-gray-400"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default PaymentNotifications;
