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

  constructor(private apiService: ApiService) {
  }
  ngOnInit(): void {

  }
}
