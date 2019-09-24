import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'suite-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() title: string
  route
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    console.log(this.router.config)
    // this.route = this.router.config
    // // const tree = null
    // if (this.router.config instanceof Array) {
    //   const tree = this.router.config.map(({ path, children, data }) => {

    //   })
    //   console.log(tree)
    // }
  }

}
