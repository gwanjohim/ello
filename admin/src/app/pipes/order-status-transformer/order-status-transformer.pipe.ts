import { Pipe, PipeTransform } from '@angular/core';
import { OrderStatus } from 'src/app/models/DTOs/order';

@Pipe({
  name: 'orderStatusTransformer'
})
export class OrderStatusTransformerPipe implements PipeTransform {

  transform(value: number): string {
    return OrderStatus[value]
  }

}
