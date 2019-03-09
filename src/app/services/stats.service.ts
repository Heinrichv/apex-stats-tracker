import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(readonly http: HttpClient) { }

  getPlayerStats(platform: Number, username: String) {
    return this.http.get(`https://public-api.tracker.gg/apex/v1/standard/profile/${platform}/${username}/`, {
      headers: {
        'TRN-Api-Key': 'c2062457-01a7-4146-8a70-59d9131d070f',
        'Accept': 'application/json'
      }
    });
  }
}
