import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(
    private _http: HttpClient
  ) { }
  get<T>(path: string) {
    return this._http.get<T>(path)
  }
  post<T>(path: string, data: any) {
    return this._http.post<T>(path, data)
  }
}
