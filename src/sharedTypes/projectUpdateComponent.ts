export type ProjectupdateComponentProps = {
  src: string;
  alt: string;
  heading: string;
  description: string;
  headingColor: string;
  rightContent?: React.ReactNode;
};

export type ProjectUpdateItemProps = {
  items: ProjectupdateComponentProps[];
  style?: string;
  outerDivWidth?: string;
  children?: React.ReactNode;
};
