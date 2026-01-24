package com.hotelreservation.backend.model;

public class PaymentOrderResponse {
    private String orderId;
    private String currency;
    private int amount;

    public PaymentOrderResponse(String orderId, String currency, int amount) {
        this.orderId = orderId;
        this.currency = currency;
        this.amount = amount;
    }

    public String getOrderId() { return orderId; }
    public String getCurrency() { return currency; }
    public int getAmount() { return amount; }
}
