import { NavItem, NavItemType } from '@suite/nav/navigator';

const studentItems: NavItem[] = [
  {
    name: 'Familias',
    icon: 'group',
    link: '/dashboard/clientes/novo',
    disabled: false
  },
  {
    name: 'Alunos',
    icon: 'person',
    link: '/dashboard/alunos',
    disabled: false
  },
  {
    name: 'Adicionar familia',
    icon: 'group',
    link: '/dashboard/clientes/novo',
    disabled: false
  }
]
const dashboardItems: NavItem[] = [
  {
    name: 'Dashboard',
    icon: 'dashboard',
    link: '/dashboard',
  },
  {
    name: 'Calendário',
    icon: 'calendar',
    link: '/dashboard/calendario',
    disabled: true
  },
  {
    name: 'Alunos',
    type: NavItemType.DropDown,
    icon: 'group',
    badge: { value: 1, color: 'accent' },
    tooltip: 'Alunos',
    children: [
      ...studentItems
    ]
  }
]
export const dashboardMenu: NavItem[] = [
  ...dashboardItems
]

export const navigation = {

}