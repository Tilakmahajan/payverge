"use client";
import { useState } from "react";

export default function PaymentMethod() {
  
  // Dummy amount — you can fetch from previous page later
  const amount = 500; // ₹500

  function openRazorpay() {
    const options = {
      key: "rzp_test_1234567890ABC", // 🔴 Replace with your Razorpay Test Key
      amount: amount * 100, // amount in paise
      currency: "INR",
      name: "Payverge",
      description: "Test Payment",
      image: "https://your-logo-url.com", // optional
      handler: function (response) {
        // Redirect to success page
        window.location.href = `/success?payment_id=${response.razorpay_payment_id}`;
      },
      prefill: {
        name: "John Doe",
        email: "john@example.com",
        contact: "9876543210",
      },
      notes: {
        address: "Payverge Corporate Office",
      },
      theme: {
        color: "#2563EB",
      },
    };

    const razor = new window.Razorpay(options);
    razor.open();

    razor.on("payment.failed", function () {
      window.location.href = "/failed";
    });
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg">
        
        <h1 className="text-3xl font-bold text-center mb-6">
          Select Payment Method
        </h1>

        <div className="space-y-4">

          <button className="w-full border p-3 rounded-lg hover:bg-gray-100">
            💳 Credit / Debit Card
          </button>

          <button className="w-full border p-3 rounded-lg hover:bg-gray-100">
            📱 UPI (Google Pay / PhonePe / Paytm)
          </button>

          <button className="w-full border p-3 rounded-lg hover:bg-gray-100">
            🏦 Net Banking
          </button>

          <button className="w-full border p-3 rounded-lg hover:bg-gray-100">
            👜 Wallets
          </button>

        </div>

        {/* Razorpay Button */}
        <button
          onClick={openRazorpay}
          className="block mt-6 bg-blue-600 text-white text-center p-3 rounded-lg hover:bg-blue-700 w-full"
        >
          Pay with Razorpay
        </button>

      </div>
    </div>
  );
}
