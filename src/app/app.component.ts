import { Component, OnInit } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { FormControl, Validators } from '@angular/forms';
import { StatsService } from './services/stats.service';

@Component({
  selector: 'apex-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  constructor(readonly platform: Platform, readonly statsServ: StatsService) {

  }

  title = 'Apex Legends Stats Tracker';
  stats: any;
  username = new FormControl(null, Validators.required);
  platformId = new FormControl(5, Validators.required);

  ngOnInit(): void {
    const username = window.localStorage.getItem('username');
    const platform = window.localStorage.getItem('platform');

    if (username) {
      this.username.setValue(username);
    }

    if (platform) {
      this.platformId.setValue(platform);
    }

    if (platform && username) {
      this.search();
    }
  }

  isMobile(): boolean {
    return this.platform.ANDROID || this.platform.IOS;
  }

  search() {
    window.localStorage.setItem('username', this.username.value);
    window.localStorage.setItem('platform', this.platformId.value);

    console.log(this.username.value, this.platformId.value);
    this.statsServ.getPlayerStats(this.platformId.value, this.username.value)
      .subscribe(res => {
        console.log(res);
        this.stats = res;
      });
  }
}
