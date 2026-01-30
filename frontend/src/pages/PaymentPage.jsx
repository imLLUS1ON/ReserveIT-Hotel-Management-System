import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosClient from '../utils/axiosClient';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const booking = location.state?.booking;

  useEffect(() => {
    if (!booking) {
      navigate("/");
    }
  }, []);

  const startPayment = async () => {
    try {
      // Step 1 — Create order in backend
      const res = await axiosClient.post(`/payment/create-order?amount=${booking.totalPrice}`);
      const order = res.data;

      const options = {
        key: "YOUR_KEY_ID",
        amount: order.amount,
        currency: order.currency,
        name: "ReserveIT",
        description: "Hotel / Restaurant Reservation",
        order_id: order.orderId,

        handler: function (response) {
          navigate("/payment", {
            state: {
              booking,
              paymentId: response.razorpay_payment_id
            }
          });
        },

        prefill: {
          name: booking.bookingData.customerName,
          email: booking.bookingData.customerEmail,
          contact: booking.bookingData.customerPhone
        },

        theme: { color: "#1e40af" }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (err) {
      console.error(err);
      alert("Payment failed to initialize");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-3xl font-bold mb-4">Complete Your Payment</h1>

      <p className="text-lg mb-6">
        Total Amount: <span className="font-semibold text-green-600">₹{booking?.totalPrice}</span>
      </p>

      <button
        onClick={startPayment}
        className="btn-primary text-lg px-6 py-3"
      >
        Pay Now
      </button>
    </div>
  );
};

export default PaymentPage;
