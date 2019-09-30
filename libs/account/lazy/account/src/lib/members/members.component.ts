import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'suite-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  showInfo(type) {
    console.log(type)
  }
}
