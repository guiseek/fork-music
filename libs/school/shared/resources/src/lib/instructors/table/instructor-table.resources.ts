import { Subject } from 'rxjs';

export const instructorTable = {
  endpoint: '/api/school/instructors',
  refresh: new Subject,
  columns: [
    { columnDef: 'id', header: '#', cell: (element: any) => `${element.id}` },
    { columnDef: 'firstName', header: 'Nome', cell: (element: any) => `${element.firstName}` },
    { columnDef: 'lastName', header: 'Sobrenome', cell: (element: any) => `${element.lastName}` },
    { columnDef: 'email', header: 'Email', cell: (element: any) => `${element.contactMail}` },
    { columnDef: 'phone', header: 'Telefone', cell: (element: any) => `${element.contactPhone}` }
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