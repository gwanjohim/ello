import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'http://192.168.5.250:5003/'
  constructor(private httpClient: HttpClient) { }

  apiGet(endpoint: string) {
    var url = this.apiUrl + endpoint
    return this.httpClient.get(url)
  }
  apiPost(endpoint: string, body: any) {
    var url = this.apiUrl + endpoint
    return this.httpClient.post(url, body)
  }
  apiDelete(endpoint: string, body: any) {
    var url = this.apiUrl + endpoint
    return this.httpClient.delete(url, body)
  }
}
