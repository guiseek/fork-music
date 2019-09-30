import { FormBuilder, Validators, FormGroup } from '@angular/forms';

const formBuilder = new FormBuilder

export function buildGroup(fields) {
  const group = formBuilder.group({})
  fields.forEach(field => {
    group.addControl(
      field.name,
      buildControl(field)
    )
  })
  return group
}

export function buildControl(field) {
  const control = formBuilder.control(
    field.value || '',
    bindValidations(field.validations || [])
  )
  return control
}

export function bindValidations(validations: any) {
  if (validations.length > 0) {
    const validList = []
    validations.forEach(valid => {
      validList.push(valid.validator)
    });
    return Validators.compose(validList)
  }
  return null
}

export function getValidationMessages(group: FormGroup, fields) {
  return fields
    .filter((f) => !!f.validations)
    .filter((field) => {
      console.log(field, field.validations)
      return field.validations
        .filter((validation) => {
          return !!group.get(field.name).hasError(validation.name)
        })
      // })
    })
}