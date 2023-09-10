export interface IRoutGroupItem {
  name: string;
  path?: string;
  icon: any;
  items?: {
    name: string;
    path: string;
  }[];
}

export interface IRoutGroup {
  id: string;
  items: IRoutGroupItem[];
}

export interface IRoutGroupItemProps {
  menuTogle: boolean;
  item: IRoutGroupItem;
  isItemSelected: boolean;
  setSelectedItem: React.Dispatch<
    React.SetStateAction<string | void | undefined>
  >;
}
