import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  constructor(readonly http: HttpClient) { }
  getPlayerStats(platform: Number, username: String) {
    return this.http.get(`https://apex-stats-tracker-api.herokuapp.com/api/v1/stats/${platform}/${username}`);
  }

}
