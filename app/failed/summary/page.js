export default function SummaryPage() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-lg w-full">

        <h1 className="text-3xl font-bold mb-4 text-center">Payment Summary</h1>

        <div className="space-y-4 text-gray-700">

          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> john@example.com</p>
          <p><strong>Amount:</strong> ₹500</p>
          <p><strong>Payment Method:</strong> UPI</p>
          <p><strong>Purpose:</strong> Test Payment</p>

        </div>

        <a
          href="/payment-method"
          className="block mt-6 bg-blue-600 text-white text-center p-3 rounded-lg"
        >
          Proceed to Pay
        </a>

      </div>
    </div>
  );
}
