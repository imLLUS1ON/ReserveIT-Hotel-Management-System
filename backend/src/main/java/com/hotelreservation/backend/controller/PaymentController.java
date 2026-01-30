package com.hotelreservation.backend.controller;

import com.hotelreservation.backend.model.PaymentOrderResponse;
import com.hotelreservation.backend.service.PaymentService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/payment")
@CrossOrigin(origins = "*")
public class PaymentController {

    private final PaymentService paymentService;

    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @PostMapping("/create-order")
    public PaymentOrderResponse createOrder(@RequestParam int amount) throws Exception {
        return paymentService.createOrder(amount);
    }
}
