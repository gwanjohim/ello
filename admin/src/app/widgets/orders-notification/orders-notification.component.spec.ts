import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersNotificationComponent } from './orders-notification.component';

describe('OrdersNotificationComponent', () => {
  let component: OrdersNotificationComponent;
  let fixture: ComponentFixture<OrdersNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
