import { MenuItem, MenuItemType } from '@suite/interfaces';

const studentItems: MenuItem[] = [
  {
    name: 'Familias',
    icon: 'group',
    link: '/dashboard/clientes/novo',
    disabled: true
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
    disabled: true
  }
]
const dashboardItems: MenuItem[] = [
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
    type: MenuItemType.DropDown,
    icon: 'group',
    badge: { value: 1, color: 'accent' },
    tooltip: 'Alunos',
    children: [
      ...studentItems
    ]
  }
]
export const dashboardMenu: MenuItem[] = [
  ...dashboardItems
]

export const navigation = {

}