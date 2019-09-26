import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private _http: HttpClient
  ) { }
  get(path: string) {
    return this._http.get(path)
  }
  post(path: string, data: any) {
    return this._http.post(path, data)
  }
}
