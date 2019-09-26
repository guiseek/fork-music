import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'wd-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.css']
})
export class EmployeePageComponent implements OnInit {

  public navLinks = [{
    path: 'perfil',
    label: 'Perfil'
  }, {
    path: 'detalhes',
    label: 'Detalhes'
  }]
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

}
