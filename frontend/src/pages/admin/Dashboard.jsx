import { useEffect, useState } from "react";
import { getRooms } from "../../services/api";
import { logoutAdmin } from "../../utils/auth";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [roomsCount, setRoomsCount] = useState(0);
  const [bookingsCount, setBookingsCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    getRooms().then((rooms) => setRoomsCount(rooms.length));

    fetch("http://localhost:5000/bookings")
      .then((res) => res.json())
      .then((data) => setBookingsCount(data.length));
  }, []);

  const handleLogout = () => {
    logoutAdmin();
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold">Total Rooms</h2>
          <p className="text-3xl mt-2">{roomsCount}</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold">Total Bookings</h2>
          <p className="text-3xl mt-2">{bookingsCount}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
