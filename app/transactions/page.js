export default function TransactionsPage() {
  const dummyData = [
    { id: "TXN12345", amount: "₹500", status: "Success", gateway: "Razorpay" },
    { id: "TXN54321", amount: "₹1,200", status: "Failed", gateway: "Stripe" },
    { id: "TXN98765", amount: "₹750", status: "Pending", gateway: "PayPal" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Transactions</h1>

      <table className="w-full bg-white shadow rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Transaction ID</th>
            <th className="p-3 text-left">Amount</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Gateway</th>
          </tr>
        </thead>

        <tbody>
          {dummyData.map((txn, index) => (
            <tr key={index} className="border-t">
              <td className="p-3">{txn.id}</td>
              <td className="p-3">{txn.amount}</td>
              <td className={`p-3 font-semibold ${
                txn.status === "Success"
                  ? "text-green-600"
                  : txn.status === "Failed"
                  ? "text-red-500"
                  : "text-yellow-500"
              }`}>
                {txn.status}
              </td>
              <td className="p-3">{txn.gateway}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
