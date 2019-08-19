import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MAPBOX_URL, NEED_RIDE_URL } from "./constants/url.constants";
import { Observable } from "rxjs";
import { MAP_PARAMS, FORMAT } from './constants/constants';
import { NeedRide } from './model/NeedRide';

@Injectable({
  providedIn: "root"
})
export class AppService {
  constructor(private http: HttpClient) { }

  getSource(latitude: string, longitude: string): Observable<any> {
    return this.http.get(MAPBOX_URL + longitude + "," + latitude + FORMAT, {
      params: MAP_PARAMS
    });
  }

  getSuggestions(searchString: string): Observable<any> {
    return this.http.get(MAPBOX_URL + searchString + FORMAT, {
      params: MAP_PARAMS
    });
  }

  needRide(srcLat: string, srcLong: string, noOfSeats: number): Observable<any> {
    return this.http.post(NEED_RIDE_URL, new NeedRide(srcLat, srcLong, noOfSeats));
  }

}
