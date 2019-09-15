import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'auth-sign-shell',
  templateUrl: './sign-shell.component.html',
  styleUrls: ['./sign-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignShellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
