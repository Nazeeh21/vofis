export type DashboardRightCompItemProps = {
  src: string;
  alt: string;
  label: string;
};

export type DashboardRightCompProps = {
  items: DashboardRightCompItemProps[];
  children?: React.ReactNode;
};

export type NewsPanelRightComponentItemProps = {
  label: string;
};

export type NewsPanelRightComponentProps = {
  items: NewsPanelRightComponentItemProps[];
  children?: React.ReactNode;
};
