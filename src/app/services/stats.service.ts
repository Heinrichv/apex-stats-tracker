import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class StatsService {  
  constructor(readonly http: Http) { }
  getPlayerStats(platform: Number, username: String) {
    const headers = new Headers({'TRN-Api-Key': '1d57cffb-0296-45af-84de-0d2c7bbf9fc7'});
    debugger;
    return this.http.get(`https://public-api.tracker.gg/apex/v1/standard/profile/${platform}/${username}`, {
      headers: headers
    });
  }

}