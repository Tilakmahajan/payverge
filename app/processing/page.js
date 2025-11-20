export default function ProcessingPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center p-6">

      <div className="animate-spin h-16 w-16 border-4 border-blue-600 border-t-transparent rounded-full"></div>

      <h2 className="text-2xl font-semibold mt-6 text-gray-700">
        Processing your payment…
      </h2>
      <p className="text-gray-500 mt-2">Please do not close this window</p>

      <a
        href="/success"
        className="mt-10 text-blue-600 underline"
      >
        (Click here to simulate Success)
      </a>
      <a
        href="/failed"
        className="mt-2 text-red-500 underline"
      >
        (Click here to simulate Failure)
      </a>

    </div>
  );
}
