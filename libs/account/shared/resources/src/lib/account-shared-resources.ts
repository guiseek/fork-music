import { userAccountTable, userGroupTable } from './table.resources';
import { userAccountFormFields, userGroupFormFields } from './form.resources';
import { userAccountDialogForm, userGroupDialogFormConfig } from './dialog.resources';

export const resources = {
  userAccount: {
    table: userAccountTable,
    form: userAccountFormFields,
    dialogForm: userAccountDialogForm
  },
  userGroup: {
    table: userGroupTable,
    form: userGroupFormFields,
    dialogForm: userGroupDialogFormConfig
  }
}