import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpQueryParams, HttpDatabaseParams } from '../interfaces/http-query-params.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpDatabaseService {

  constructor(
    private _http: HttpClient
  ) { }
  get<T = any>(path: string, options: HttpDatabaseParams) {
    // const params = new HttpParams()
    const params = {}
    console.log(JSON.stringify(options))
    console.log(options)
    if (!options.page) {

    }

    Object.keys(options).map((param) => {
      params[param] = `${options[param]}`
    })
    // console.log(params.keys())
    console.log(params.toString())
    return this._http.get<T>(
      path, { params }
    )
  }
  post<T = any>(path: string, data: T) {
    return this._http.post<T>(path, data)
  }
  put<T>(path: string) { }
  delete<T>(path: string) { }
}
