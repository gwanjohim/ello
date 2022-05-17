import { Component, OnInit } from '@angular/core';
import { Order } from './models/order';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'admin';
  categories: Order[] = []
  constructor(private apiService: ApiService) {

  }
  ngOnInit(): void {
    this.apiService.apiGet('Orders').subscribe((res) => {
      let jsonObj: any = JSON.stringify(res)
      this.categories = JSON.parse(jsonObj);
    });
  }
}
