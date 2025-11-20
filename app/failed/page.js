export default function FailedPage() {
  return (
    <div className="min-h-screen bg-red-50 flex justify-center items-center p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md w-full">

        <div className="text-6xl mb-4">❌</div>

        <h1 className="text-3xl font-bold text-red-700">Payment Failed</h1>

        <p className="text-gray-600 mt-2">
          Something went wrong. Please try again.
        </p>

        <a
          href="/pay"
          className="block mt-6 bg-red-600 text-white p-3 rounded-lg"
        >
          Retry Payment
        </a>

      </div>
    </div>
  );
}
