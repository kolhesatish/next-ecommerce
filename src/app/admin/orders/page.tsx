import { mockOrders } from "@/lib/mockData";

export default function AdminOrders() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Orders</h1>

      {mockOrders.map((o) => (
        <div
          key={o.id}
          className="bg-white p-4 rounded shadow mb-3"
        >
          <p>
            <strong>Order ID:</strong> {o.id}
          </p>
          <p>
            <strong>Product:</strong> {o.product}
          </p>
          <p>
            <strong>Amount:</strong> ₹{o.amount}
          </p>
          <p>
            <strong>Status:</strong>{" "}
            <span
              className={
                o.status === "PAID"
                  ? "text-green-600"
                  : "text-yellow-600"
              }
            >
              {o.status}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}
