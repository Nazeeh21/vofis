export type PaymentNotificationItemProps = {
  src: string;
  description: string;
};

export type PaymentNotificationCompProps = {
  items: PaymentNotificationItemProps[];
  children?: React.ReactNode;
};
