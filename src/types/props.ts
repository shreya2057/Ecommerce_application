import { IconType } from "react-icons";

export interface ToastProps {
  title: string;
}

export interface DropDownMenuProps<ItemType> {
  buttonIcon: React.ReactElement;
  buttonText: string;
  itemGroup1: ItemType[];
  itemGroup2?: ItemType[];
}

export interface DropDownItemProps {
  icon: React.ReactElement;
  text: string;
  onClickFunction: () => void;
}
