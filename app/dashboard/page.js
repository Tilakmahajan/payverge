export default function Dashboard() {
  return (
    <div className="p-8">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="text-gray-500 text-sm">Total Transactions</h2>
          <p className="text-3xl font-bold mt-2">1,238</p>
        </div>

        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="text-gray-500 text-sm">Successful Payments</h2>
          <p className="text-3xl font-bold mt-2 text-green-600">1,102</p>
        </div>

        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="text-gray-500 text-sm">Failed Payments</h2>
          <p className="text-3xl font-bold mt-2 text-red-500">136</p>
        </div>

      </div>

      {/* Chart Placeholder */}
      <div className="bg-white shadow p-10 rounded-lg mt-10 text-center text-gray-500">
        📊 Chart will be displayed here (Dummy UI)
      </div>
    </div>
  );
}
