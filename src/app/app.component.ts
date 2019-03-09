import { Component } from '@angular/core';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'apex-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public platform: Platform) {

  }

  title = 'Apex Legends Stats Tracker';

  isMobile(): boolean {
    return this.platform.ANDROID || this.platform.IOS;
  }
}
