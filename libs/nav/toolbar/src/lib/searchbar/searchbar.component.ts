import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'suite-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  input: string
  focused: boolean

  constructor() { }

  ngOnInit() {
  }

  openDropdown() {
    this.focused = true
  }

  closeDropdown() {
    this.focused = false
  }
}
