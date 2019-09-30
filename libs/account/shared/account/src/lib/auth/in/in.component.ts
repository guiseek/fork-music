import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormField } from '@suite/common/forms/dynamic-form';

@Component({
  selector: 'account-auth-in',
  templateUrl: './in.component.html',
  styleUrls: ['./in.component.scss']
})
export class InComponent implements OnInit {
  fields
  formFields: FormField[] = [{
    type: 'selectAsync',
    label: 'Async',
    name: 'groupType',
    asyncConfig: {
      endpoint: '/api/account/user-group-type',
      value: 'id',
      viewValue: 'typeName'
    }
  }]
  resource = this.route.snapshot.data.resource
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // const { fields } = this.route.snapshot.data
    // console.log('data: ', this.route.snapshot.data)
    // fields.push({
    //   type: 'button',
    //   label: 'Salvar'
    // })
    // console.log('data: ', fields)
    // this.fields = fields
  }
  onSubmit(value) {
    console.log(value)
  }
}
