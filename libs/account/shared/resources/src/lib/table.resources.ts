import { Subject } from 'rxjs';

export const userAccountTable = {
  endpoint: '/api/account/user-account',
  refresh: new Subject,
  columns: [
    { columnDef: 'id', header: '#', cell: (element: any) => `${element.id}` },
    { columnDef: 'firstName', header: 'Nome', cell: (element: any) => `${element.firstName}` },
    { columnDef: 'lastName', header: 'Sobrenome', cell: (element: any) => `${element.lastName}` },
    { columnDef: 'email', header: 'Email', cell: (element: any) => `${element.email}` }
  ],
  config: {
    clickable: true,
    editable: true,
    deletable: true,
    selectable: true,
    paginator: {
      hidePageSize: true,
      showFirstLastButtons: false
    }
  },
}
export const userGroupTypeTable = {
  endpoint: '/api/account/user-group-type',
  refresh: new Subject,
  columns: [
    { columnDef: 'id', header: '#', cell: (element: any) => `${element.id}` },
    { columnDef: 'typeName', header: 'Nome', cell: (element: any) => `${element.typeName}` },
    { columnDef: 'membersMin', header: 'Mínimo', cell: (element: any) => `${element.membersMin}` },
    { columnDef: 'membersMax', header: 'Máximo', cell: (element: any) => `${element.membersMax}` }
  ],
  config: {
    clickable: true,
    editable: true,
    deletable: true,
    selectable: true,
    paginator: {
      hidePageSize: true,
      showFirstLastButtons: false
    }
  },
}
export const userGroupTable = {
  endpoint: '/api/account/user-group',
  refresh: new Subject,
  columns: [
    { columnDef: 'id', header: '#', cell: (element: any) => `${element.id}` },
    { columnDef: 'userGroupType', header: 'Tipo', cell: (element: any) => `${element.userGroupType}` },
    { columnDef: 'customerInvoiceData', header: 'Pedido', cell: (element: any) => `${element.customerInvoiceData}` }
  ],
  config: {
    clickable: true,
    editable: true,
    deletable: true,
    selectable: true,
    paginator: {
      hidePageSize: true,
      showFirstLastButtons: false
    }
  },
}
export const inGroupTable = {
  endpoint: '/api/account/in-group',
  refresh: new Subject,
  columns: [
    { columnDef: 'id', header: '#', cell: (element: any) => `${element.id}` },
    { columnDef: 'timeAdded', header: 'Adicionado', cell: (element: any) => `${element.timeAdded}` },
    { columnDef: 'groupAdmin', header: 'Admin', cell: (element: any) => `${element.groupAdmin}` },
    { columnDef: 'userGroup', header: 'Grupo', cell: (element: any) => `${element.userGroup}` },
    { columnDef: 'userAccount', header: 'Conta', cell: (element: any) => `${element.userAccount}` }
  ],
  config: {
    clickable: true,
    editable: true,
    deletable: true,
    selectable: true,
    paginator: {
      hidePageSize: true,
      showFirstLastButtons: false
    }
  },
}