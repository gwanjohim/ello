import { OrderStatusTransformerPipe } from './order-status-transformer.pipe';

describe('OrderStatusTransformerPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderStatusTransformerPipe();
    expect(pipe).toBeTruthy();
  });
});
