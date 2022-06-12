import { OrderPaymentStatusTransformerPipe } from './order-payment-status-transformer.pipe';

describe('OrderPaymentStatusTransformerPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderPaymentStatusTransformerPipe();
    expect(pipe).toBeTruthy();
  });
});
