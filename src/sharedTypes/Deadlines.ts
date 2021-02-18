export type DeadlineItemProps = {
  label: string;
  deadline: string;
};

export type DeadlineProps = {
  items: DeadlineItemProps[];
  children?: React.ReactNode;
};
