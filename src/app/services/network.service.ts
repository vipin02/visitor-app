import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(private _http: HttpClient) { }

  getNews() {
    const options = {
      params: {
        q: 'bitcoin',
        from: '2020-05-25',
        sortBy: 'publishedAt',
        apiKey: '1848b5465b1449d78d10c2991b1bea98'
      }
    }
    return this._http.get('https://newsapi.org/v2/everything', options);
  }
}
