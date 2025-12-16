import { useEffect, useState } from "react";

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    const response = await fetch("http://localhost:5000/bookings");
    const data = await response.json();
    setBookings(data);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const updateStatus = async (id, status) => {
    await fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    });

    fetchBookings();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Manage Bookings</h1>

      <div className="bg-white rounded-2xl shadow">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 border">Guest Name</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Check-In</th>
                <th className="p-2 border">Check-Out</th>
                <th className="p-2 border">Guests</th>
                <th className="p-2 border">Status</th>
                <th className="p-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id}>
                  <td className="p-2 border">{booking.name}</td>
                  <td className="p-2 border">{booking.email}</td>
                  <td className="p-2 border">{booking.checkIn}</td>
                  <td className="p-2 border">{booking.checkOut}</td>
                  <td className="p-2 border">{booking.guests}</td>
                  <td className="p-2 border text-center">
                    <span
                      className={`px-2 py-1 rounded text-sm ${
                        booking.status === "Confirmed"
                          ? "bg-green-100 text-green-700"
                          : booking.status === "Cancelled"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {booking.status || "Pending"}
                    </span>
                  </td>
                  <td className="p-2 border text-center space-x-2">
                    <button
                      onClick={() =>
                        updateStatus(booking.id, "Confirmed")
                      }
                      className="bg-green-600 text-white px-2 py-1 rounded-lg hover:bg-green-700 transition text-sm"
                    >
                      Confirm
                    </button>
                    <button
                      onClick={() =>
                        updateStatus(booking.id, "Cancelled")
                      }
                      className="bg-red-600 text-white px-2 py-1 rounded-lg hover:bg-red-700 transition text-sm"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {bookings.length === 0 && (
          <p className="text-center p-4 text-gray-500">
            No bookings found
          </p>
        )}
      </div>
    </div>
  );
};

export default AdminBookings;
