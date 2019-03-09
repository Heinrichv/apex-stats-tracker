import { Component } from '@angular/core';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'apex-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.scss']
})
export class AdComponent {

  constructor(public platform: Platform) {

  }


  isMobile(): boolean {
    return this.platform.ANDROID || this.platform.IOS;
  }
}
