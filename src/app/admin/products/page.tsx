import { mockProducts } from "@/lib/mockData";

export default function AdminProducts() {
  return (
    <div>
      <div className="flex justify-between mb-4">
        <h1 className="text-xl font-bold">Products</h1>
        <button className="bg-black text-white px-4 py-2 rounded">
          Add Product
        </button>
      </div>

      <table className="w-full bg-white rounded shadow">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 text-left">Title</th>
            <th className="p-3">Price</th>
            <th className="p-3">Stock</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {mockProducts.map((p) => (
            <tr key={p.id} className="border-t">
              <td className="p-3">{p.title}</td>
              <td className="p-3">₹{p.price}</td>
              <td className="p-3">{p.stock}</td>
              <td className="p-3 space-x-3">
                <button className="text-blue-600">Edit</button>
                <button className="text-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
