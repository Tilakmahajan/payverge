export default function GatewaysPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Payment Gateways Settings</h1>

      {/* Razorpay */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-2">Razorpay</h2>
        <p className="text-gray-600 mb-4">
          Configure API keys and security settings.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <input type="text" placeholder="Key ID" className="border p-3 rounded" />
          <input type="text" placeholder="Key Secret" className="border p-3 rounded" />
        </div>

        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Save Settings
        </button>
      </div>

      {/* Stripe */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-2">Stripe</h2>
        <p className="text-gray-600 mb-4">
          Configure publishable and secret keys.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <input type="text" placeholder="Publishable Key" className="border p-3 rounded" />
          <input type="text" placeholder="Secret Key" className="border p-3 rounded" />
        </div>

        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Save Settings
        </button>
      </div>

      {/* PayPal */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-2">PayPal</h2>
        <p className="text-gray-600 mb-4">
          Configure Client ID and Secret.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <input type="text" placeholder="Client ID" className="border p-3 rounded" />
          <input type="text" placeholder="Client Secret" className="border p-3 rounded" />
        </div>

        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Save Settings
        </button>
      </div>
    </div>
  );
}
