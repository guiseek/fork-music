import { DialogHeader, DialogConfig } from '@suite/cdk/dialog';
import { userGroupTypeFormFields, userGroupFormFields } from './form.resources';

export const userAccountDialogHeader: DialogHeader = {
  title: 'Conta de usuário',
  subtitle: 'Suas informações básicas necessárias',
  color: 'accent'
}
export const userAccountDialogForm: DialogConfig = {
  backdropClass: '',
  panelClass: '',
  disableClose: true,
  header: userAccountDialogHeader
}

export const userGroupTypeDialogHeader: DialogHeader = {
  title: 'Tipo de grupos',
  color: 'primary'
}

export const userGroupTypeDialogConfig: Partial<DialogConfig> = {
  hasBackdrop: true,
  draggable: true,
  header: userGroupTypeDialogHeader
}
export const userGroupTypeDialogFormConfig: Partial<DialogConfig> = {
  header: userGroupTypeDialogHeader,
  ...userGroupTypeDialogConfig,
  data: {
    fields: userGroupTypeFormFields
  }
}

export const userGroupDialogHeader: DialogHeader = {
  title: 'Grupos do usuário',
  color: 'primary'
}
export const userGroupDialogConfig: Partial<DialogConfig> = {
  hasBackdrop: true,
  draggable: true,
  header: userGroupDialogHeader
}
export const userGroupDialogFormConfig: Partial<DialogConfig> = {
  header: userGroupDialogHeader,
  ...userGroupDialogConfig,
  data: {
    fields: userGroupFormFields
  }
}