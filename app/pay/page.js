"use client";
import { useState } from "react";

export default function PayPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    amount: "",
    purpose: "",
  });

  function openRazorpay() {

    if (!form.name || !form.email || !form.mobile || !form.amount) {
      alert("Please fill all fields before proceeding.");
      return;
    }

    const options = {
      key: "rzp_test_Ri43wJATJX67fl", 
      amount: form.amount * 100, 
      currency: "INR",
      name: "Payverge",
      description: form.purpose || "Test Transaction",
      
      handler: function (response) {
        window.location.href = `/success?payment_id=${response.razorpay_payment_id}`;
      },

      prefill: {
        name: form.name,
        email: form.email,
        contact: form.mobile,
      },

      notes: {
        purpose: form.purpose,
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
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg">

        <h1 className="text-3xl font-bold mb-6 text-center">Payment Details</h1>

        <div className="space-y-4">

          <input
            className="w-full border p-3 rounded"
            placeholder="Full Name"
            onChange={(e)=>setForm({...form, name:e.target.value})}
          />
          
          <input
            className="w-full border p-3 rounded"
            placeholder="Email"
            type="email"
            onChange={(e)=>setForm({...form, email:e.target.value})}
          />

          <input
            className="w-full border p-3 rounded"
            placeholder="Mobile Number"
            type="number"
            onChange={(e)=>setForm({...form, mobile:e.target.value})}
          />

          <input
            className="w-full border p-3 rounded"
            placeholder="Amount"
            type="number"
            onChange={(e)=>setForm({...form, amount:e.target.value})}
          />

          <input
            className="w-full border p-3 rounded"
            placeholder="Purpose (ex: Donation, Subscription)"
            onChange={(e)=>setForm({...form, purpose:e.target.value})}
          />

        </div>

        {/* DIRECT RAZORPAY BUTTON */}
        <button
          onClick={openRazorpay}
          className="block mt-6 bg-blue-600 text-white text-center p-3 rounded-lg hover:bg-blue-700 w-full"
        >
          Pay Now
        </button>

      </div>
    </div>
  );
}
