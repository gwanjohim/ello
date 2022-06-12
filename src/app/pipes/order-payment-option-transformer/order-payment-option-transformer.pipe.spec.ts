import { OrderPaymentOptionTransformerPipe } from './order-payment-option-transformer.pipe';

describe('OrderPaymentOptionTransformerPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderPaymentOptionTransformerPipe();
    expect(pipe).toBeTruthy();
  });
});
