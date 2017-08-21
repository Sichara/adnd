import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { NotificationService } from './core/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  constructor(private notifications: NotificationService,
              private vcr: ViewContainerRef) {
    this.notifications.setContainerRef(this.vcr);
  }
}
