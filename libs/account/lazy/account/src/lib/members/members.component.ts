import { Component, OnInit } from '@angular/core';
import { HelperService } from '@suite/nav/edu-helper';

@Component({
  selector: 'suite-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(
    private helperService: HelperService
  ) { }

  ngOnInit() {
    this.helperService.initialize(
      [
        {
          anchorId: 'app-home',
          content: 'This is a step from the eager loaded app module in the home component',
          title: 'Home Component',
          route: ''
        },
        {
          anchorId: 'module-a',
          content: 'This is a step from the lazy loaded module-a module in the module-a component',
          title: 'Module-a Component',
          route: 'module-a'
        },
        {
          anchorId: 'members',
          content: 'This is a step from the lazy loaded members module in the members component',
          title: 'Module-b Component',
          route: 'members'
        }
      ]
    );
    // this.helperService.start()
  }
  showInfo(type) {
    console.log(type)
  }
}
