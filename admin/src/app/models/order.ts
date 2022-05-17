export interface Order {
    Id: string
    CustomerId: string
    CreationDate: string
    CartId: string
    TotalAmount: string
    OrderStatus: OrderStatus
    OrderPaymentOption: string
    OrderPaymentStatus: string
}

export enum OrderStatus {
    OrderPlaced = 0,
    OrderDispatched = 1,
    OrderDelivered = 2,
    OrderRejected = 3
}
