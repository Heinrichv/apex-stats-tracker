import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'apex-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  @Input() stats: any;

  constructor() { }

  ngOnInit() {

  }

}
