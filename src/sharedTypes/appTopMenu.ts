export type ItemProps = {
  index: number;
  icon: string;
  isActive: boolean;
  show: boolean;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
  setShowPanel: (index: number) => void | null;
  children?: React.ReactNode;
};

export type MenuItem = {
  icon: string;
  id: number;
};

export type MenuProps = {
  items: MenuItem[];
  children?: React.ReactNode;
};
