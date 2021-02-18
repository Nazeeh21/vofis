export type DashboardAnalyticsItem = {
  figure: number;
  unitString?: string;
  title: string;
  timeString: string;
  changeInPercent: number;
  id: number;
  currency?: string;
};

export type DashboardAnalyticsProps = {
  items: DashboardAnalyticsItem[];
  transparent?: boolean;
  children?: React.ReactNode;
};
