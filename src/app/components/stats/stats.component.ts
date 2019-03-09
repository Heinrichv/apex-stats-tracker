import { Component, OnInit, Input } from '@angular/core';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'apex-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  @Input() stats: any;

  constructor(readonly platform: Platform) { }

  ngOnInit() {

  }

  isMobile(): boolean {
    return this.platform.ANDROID || this.platform.IOS;
  }
}
