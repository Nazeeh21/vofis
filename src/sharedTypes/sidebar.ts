export type SidebarItem = {
  name: string;
  id: number;
};

export type SidebarItemProps = {
  name: string;
  id: number;
  isActive: boolean;
};

export type SidebarProps = {
  items: SidebarItem[];
  children?: React.ReactNode;
};
