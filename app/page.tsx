export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8faff]">

      {/* NAVBAR */}
      <nav className="w-full bg-white shadow-sm px-8 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
            <span>Λ</span>
          </div>
          <h1 className="text-xl font-semibold text-gray-800">Payverge</h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-700">
          <a href="/dashboard" className="hover:text-blue-600">Dashboard</a>
          <a href="/transactions" className="hover:text-blue-600">Transactions</a>
          <a href="/gateways" className="hover:text-blue-600">Gateways</a>
          <a href="/pay" className="hover:text-blue-600">Payment Flow</a>

          <a
            href="/pay"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="text-center px-6 py-20">

        {/* Badge */}
        <div className="inline-flex items-center border px-4 py-2 bg-white rounded-full shadow-sm text-sm mb-4">
          <span className="text-green-600 text-lg">●</span>
          <span className="ml-2 text-gray-600">
            Secure & Compliant Payment Processing
          </span>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight max-w-4xl mx-auto">
          Streamline Your{" "}
          <span className="text-blue-600">Payment Gateway</span>{" "}
          Integration
        </h2>

        {/* Description */}
        <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-lg">
          Payverge simplifies payment processing with a unified platform. 
          Integrate multiple gateways, manage transactions, and monitor payments 
          in real-time—all from one centralized dashboard.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4">

          {/* New Payment Button */}
          <a
            href="/pay"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Make a Payment
          </a>

          <a
            href="/summary"
            className="px-6 py-3 bg-white border rounded-lg text-gray-700 hover:bg-gray-100 transition"
          >
            View Documentation
          </a>
        </div>

      </section>

      {/* FEATURE CARDS SECTION */}
      <section className="px-6 py-16">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 text-2xl mb-4">
              ⚡
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Integration</h3>
            <p className="text-gray-600">
              Plug in multiple gateways with minimal setup and clean APIs.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 shadow">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 text-2xl mb-4">
              🔐
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure & Compliant</h3>
            <p className="text-gray-600">
              Built with encryption, validation, and best industry practices.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 text-2xl mb-4">
              📊
            </div>
            <h3 className="text-xl font-semibold mb-2">Real-Time Monitoring</h3>
            <p className="text-gray-600">
              Track payment statuses and manage transactions instantly.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
