import { Component } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { FormControl, Validators } from '@angular/forms';
import { StatsService } from './services/stats.service';

@Component({
  selector: 'apex-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(readonly platform: Platform, readonly statsServ: StatsService) {

  }
  stats: any;
  username = new FormControl(null, Validators.required);
  platformId = new FormControl(5, Validators.required);


  title = 'Apex Legends Stats Tracker';

  isMobile(): boolean {
    return this.platform.ANDROID || this.platform.IOS;
  }

  search() {
    console.log(this.username.value, this.platformId.value);
    this.statsServ.getPlayerStats(this.platformId.value, this.username.value)
      .subscribe(res => {
        console.log(res);
        this.stats = res;
      });
  }
}
