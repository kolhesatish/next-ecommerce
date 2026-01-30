export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <p className="text-gray-500">Total Products</p>
          <p className="text-3xl font-bold">12</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <p className="text-gray-500">Orders</p>
          <p className="text-3xl font-bold">8</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <p className="text-gray-500">Revenue</p>
          <p className="text-3xl font-bold">₹4,520</p>
        </div>
      </div>
    </div>
  );
}
