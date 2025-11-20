export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-green-50 flex justify-center items-center p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md w-full">

        <div className="text-6xl mb-4">✅</div>

        <h1 className="text-3xl font-bold text-green-700">Payment Successful!</h1>

        <p className="text-gray-600 mt-2">
          Thank you for your payment. Your transaction has been completed.
        </p>

        <div className="bg-gray-50 border rounded-lg p-4 mt-6 text-left">
          <p><strong>Transaction ID:</strong> TXN123456</p>
          <p><strong>Date:</strong> {new Date().toLocaleString()}</p>
        </div>

        <a
          href="/dashboard"
          className="block mt-6 bg-blue-600 text-white p-3 rounded-lg"
        >
          Go to Dashboard
        </a>

      </div>
    </div>
  );
}
