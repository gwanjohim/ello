import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService<T> {

  apiUrl = environment.apiURL;

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
