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
const navCalendar = {
  name: 'Calendário',
  icon: 'event',
  link: 'calendario'
}
const navDashboard = {
  name: 'Dashboard',
  icon: 'dashboard',
  link: '/dashboard',
}
const navNotifications = {
  name: 'Notificações',
  icon: 'notification_important',
  link: 'notificacoes',
}
const navServices = {
  name: 'Serviços',
  icon: 'local_offer',
  link: 'servicos',
}
const navTeam = {
  name: 'Equipe',
  icon: 'supervisor_account',
  link: 'equipe',
}
const navRooms = {
  name: 'Salas',
  icon: 'account_tree',
  link: 'salas',
}
const navAccount = {
  name: 'Conta',
  icon: 'account_circle',
  link: 'conta',
}
const navSettings = {
  name: 'Configurações',
  icon: 'settings',
  link: 'configuracoes',
}

const navCompany = {
  name: 'Gerenciar',
  type: NavItemType.DropDown,
  icon: 'settings_applications',
  badge: { value: 1, color: 'accent' },
  tooltip: 'Configurações da empresa',
  children: [
    navAccount,
    navTeam,
    navServices,
    navSettings
  ]
}
export const navigation = {

}

export const adminMenu: NavItem[] = [
  navDashboard,
  navCalendar,
  navRooms,
  navNotifications,
  navCompany
]