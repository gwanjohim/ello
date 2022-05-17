import { Pipe, PipeTransform } from '@angular/core';
import { OrderPaymentStatus } from 'src/app/models/order';

@Pipe({
  name: 'orderPaymentStatusTransformer'
})
export class OrderPaymentStatusTransformerPipe implements PipeTransform {

  transform(value: number): string {
    return OrderPaymentStatus[value]
  }

}
