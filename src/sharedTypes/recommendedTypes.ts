export type RecommendedItemsProps = {
  category: string;
  title: string;
  description: string;
  type: string;
};

export type RecommendedProps = {
  items: RecommendedItemsProps[];
  children?: React.ReactNode;
};
