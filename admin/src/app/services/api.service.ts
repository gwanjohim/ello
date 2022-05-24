import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService<T> {

  apiUrl = 'http://192.168.5.250:5003/'
  constructor(private httpClient: HttpClient) { }

  apiGet<T>(endpoint: string): Observable<T> {
    var url = this.apiUrl + endpoint
    return this.httpClient.get<T>(url)
  }
  apiPost(endpoint: string, body: any) {
    var url = this.apiUrl + endpoint
    return this.httpClient.post(url, body)
  }
  apiPut<T>(endpoint: string, body: any): Observable<T> {
    var url = this.apiUrl + endpoint
    return this.httpClient.put<T>(url, body)
  }
  apiDelete(endpoint: string, body: any) {
    var url = this.apiUrl + endpoint
    return this.httpClient.delete(url, body)
  }
}
