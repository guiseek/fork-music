import { TreeNode } from '@suite/utils';

export enum NavItemType {
  Link = 'link',
  DropDown = 'dropDown',
  Icon = 'icon',
  Separator = 'separator',
  ExtLink = 'extLink',
}

export interface NavItem extends TreeNode<NavItem> {
  name: string; // Used as display text for item and title for separator type
  type?: NavItemType; // Possible values: link/dropDown/icon/separator/extLink
  icon?: string; // Item icon name
  link?: string; // Router state
  badge?: { value: number; color?: string };
  tooltip?: string; // Tooltip text
  disabled?: boolean; // If true, item will not be appeared in sidenav.
  [key: string]: any;
}
