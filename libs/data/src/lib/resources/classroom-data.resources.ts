import { Validators } from '@angular/forms';
import { FormField } from '@suite/common/forms/dynamic-form';
import { DialogHeader, DialogConfig } from '@suite/cdk/dialog';
import { Subject } from 'rxjs';
import { CardFeature, TableConfig } from '@suite/interfaces';
// import { fn } from 'moment';

export const classroomEndpoint = '/api/school/classrooms'

export const classroomBackend = {
  endpoint: classroomEndpoint,
  relations: ['classroom_type'],
  fields: [],
  params: {
    per_page: 10
  }
}

export const classroomPage = {
  toolbar: {
    text: 'Cursos',
    actions: [
      // { label: 'Adicionar', click: fn. }
    ]
  }
}

export const classroomFormFields: FormField[] = [
  {
    type: 'select',
    label: 'Tipo de classe',
    name: 'classroomType',
    value: null,
    options: [],
    appearance: 'outline',
    asyncConfig: {
      endpoint: '/api/school/classroom-types',
      value: 'id',
      viewValue: 'name'
    }
  },
  {
    type: 'input',
    label: 'Nome',
    inputType: 'text',
    name: 'name',
    hint: 'Ex.: Aulas de guitarra',
    appearance: 'outline',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Nome de classe obrigatório'
      },
      {
        name: 'maxlength',
        validator: Validators.maxLength(128),
        message: 'Máximo de 128 caracteres'
      }
    ]
  },
  {
    type: 'input',
    label: 'Descrição',
    inputType: 'text',
    name: 'description',
    appearance: 'outline',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Descrição de classe obrigatório'
      },
      {
        name: 'maxlength',
        validator: Validators.maxLength(512),
        message: 'Máximo de 512 caracteres'
      }
    ]
  },
  {
    type: 'date',
    label: 'Inicio',
    name: 'startDate',
    appearance: 'outline',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Data inicial obrigatória'
      }
    ]
  },
  {
    type: 'date',
    label: 'Término',
    name: 'endDate',
    appearance: 'outline'
  },
  {
    type: 'checkbox',
    label: 'Concluída',
    name: 'completed',
    value: false
  },
  {
    type: 'button',
    label: 'Salvar'
  }
]

export const classroomDialogHeader: DialogHeader = {
  title: 'Classe / turma',
  color: 'accent'
}

export const classroomDialogConfig: Partial<DialogConfig> = {
  hasBackdrop: true,
  draggable: true,
  header: classroomDialogHeader,
  data: {}
}

export const classroomTable = {
  endpoint: classroomEndpoint,
  columns: [
    { columnDef: 'id', header: '#', format: 'currency', cell: (element: any) => `${element.id}` },
    { columnDef: 'name', header: 'Nome', cell: (element: any) => `${element.name}`, onClick: (fn) => fn.bind(this) },
    { columnDef: 'startDate', header: 'Inicio', cell: (element: any) => `${element.startDate}`, format: 'date' },
    { columnDef: 'endDate', header: 'Término', cell: (element: any) => `${element.endDate}`, format: 'date' }
    // { columnDef: 'id', header: '#', cell: (element: any) => `${element.id}` },
    // { columnDef: 'name', header: 'Nome', cell: (element: any) => `${element.name}` }
  ],
  refresh: new Subject,
  config: {
    paginator: {
      hidePageSize: true,
      showFirstLastButtons: false
    }
  },
  clickable: true,
  editable: true,
  deletable: true,
  selectable: true
}
export const classroomCard: CardFeature = {
  title: 'Turma',
  endpoint: classroomEndpoint,
  refresh: new Subject,
  fields: classroomFormFields,
  columns: [
    { columnDef: 'id', header: '#', cell: (element: any) => `${element.id}` },
    { columnDef: 'name', header: 'Nome', cell: (element: any) => `${element.name}` }
  ],
  dialog: classroomDialogConfig
}

export const classroomHelper = {
  model: {
    main: 'Contém detalhes sobre todas as classes. Podemos ter várias instâncias de cada tipo de classe. Todos atributos são obrigatórios, exceto término.',
    classType: 'O campo tipo de classe é uma referência ao tipo de classse / turma',
    name: 'O campo nome é um nome abreviado da classe.',
    description: 'essa descrição é mais específica que a da tabela class_type.',
    startDate: 'O campo inicio é a data que a classe inicia',
    endDate: 'O campo término é a data final da turma. Não é obrigatório, pois nem sempre sabemos a data exata de término de cada aula com antecedência.',
    completed: 'O campo concluída indica se todas as atividades de classe planejadas foram concluídas. Isso é útil quando atingimos o tempo final planejado para uma aula, mas outras atividades ainda precisam ser concluídas.'
  }
}

export const classroomResources = {
  endpoint: classroomEndpoint,
  backend: classroomBackend,
  card: classroomCard,
  form: classroomFormFields,
  dialog: classroomDialogConfig,
  table: classroomTable,
  helper: classroomHelper,
  page: classroomPage
}