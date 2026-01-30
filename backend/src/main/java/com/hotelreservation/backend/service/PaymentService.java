package com.hotelreservation.backend.service;

import com.hotelreservation.backend.model.PaymentOrderResponse;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {

    @Value("${razorpay.key}")
    private String razorpayKey;

    @Value("${razorpay.secret}")
    private String razorpaySecret;

    public PaymentOrderResponse createOrder(int amount) throws Exception {
        RazorpayClient client = new RazorpayClient(razorpayKey, razorpaySecret);

        JSONObject options = new JSONObject();
        options.put("amount", amount * 100);  // Convert to paise
        options.put("currency", "INR");
        options.put("payment_capture", true);

        Order order = client.orders.create(options);

        return new PaymentOrderResponse(
                order.get("id"),
                order.get("currency"),
                order.get("amount")
        );
    }
}
