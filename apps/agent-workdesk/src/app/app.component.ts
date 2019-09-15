import { Component } from '@angular/core';

@Component({
  selector: 'suite-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'agent-workdesk';
  elementUrl = 'https://your-org.com/elements/some-element.js';
}
