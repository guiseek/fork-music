import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'account-auth-in',
  templateUrl: './in.component.html',
  styleUrls: ['./in.component.scss']
})
export class InComponent implements OnInit {
  fields
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let { createUserAccountForm } = this.route.snapshot.data
    console.log('data: ', createUserAccountForm)
    createUserAccountForm.push({
      type: 'button',
      label: 'Salvar'
    })
    console.log('data: ', createUserAccountForm)
    this.fields = createUserAccountForm
  }
  onSubmit(value) {
    console.log(value)
  }
}
