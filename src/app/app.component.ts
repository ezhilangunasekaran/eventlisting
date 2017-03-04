import { Component } from '@angular/core';
import { EventListComponent } from './events/event-list/event-list.component';

@Component({
  selector: 'app-root',
  template: `<div>
  <event-list></event-list>
  </div>`
})
export class AppComponent {

}
