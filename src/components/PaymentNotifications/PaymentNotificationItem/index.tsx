import React from 'react';
import { PaymentNotificationItemProps } from '../../../sharedTypes/PaymentNotificationTypes';

const PaymentNotificationItem: React.FC<PaymentNotificationItemProps> = ({
  src,
  description,
}) => {
  return (
    <div className="w-full px-1 py-2 flex items-center gap-2">
      <div>
        <img src={src} className="w-16" alt="dollar-sign" />
      </div>
      <div className="font-inter text-md">{description}</div>
    </div>
  );
};

export default PaymentNotificationItem;
