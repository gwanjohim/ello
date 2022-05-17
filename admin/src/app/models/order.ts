export interface Order {
    Id: string
    CustomerId: string
    CreationDate: string
    CartId: string
    TotalAmount: string
    OrderStatus: OrderStatus
    OrderPaymentOption: OrderPaymentOption
    OrderPaymentStatus: OrderPaymentStatus
}

export enum OrderStatus {
    OrderPlaced = 0,
    OrderDispatched = 1,
    OrderDelivered = 2,
    OrderRejected = 3
}
export enum OrderPaymentOption {
    CashOnDelivery = 0,
    MPESA = 1,
}
export enum OrderPaymentStatus {
    Paid = 0,
    NotPaid = 1,

}
