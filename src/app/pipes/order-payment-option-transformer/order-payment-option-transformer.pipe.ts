import { Pipe, PipeTransform } from '@angular/core';
import { OrderPaymentOption } from 'src/app/models/DTOs/order';

@Pipe({
  name: 'orderPaymentOptionTransformer'
})
export class OrderPaymentOptionTransformerPipe implements PipeTransform {

  transform(value: number): string {
    return OrderPaymentOption[value]
  }

}
