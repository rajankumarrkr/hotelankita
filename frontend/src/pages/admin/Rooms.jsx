import { useEffect, useState } from "react";
import { getRooms, addRoom, deleteRoom } from "../../services/api";

const AdminRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const fetchRooms = async () => {
    setLoading(true);
    const data = await getRooms();
    setRooms(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  const handleAddRoom = async (e) => {
    e.preventDefault();

    const newRoom = {
      name,
      price: Number(price),
      image: "https://picsum.photos/400/250?random=" + Math.random(),
    };

    await addRoom(newRoom);
    setName("");
    setPrice("");
    fetchRooms();
  };

  const handleDelete = async (id) => {
    await deleteRoom(id);
    fetchRooms();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Manage Rooms</h1>

      {/* Add Room Form */}
      <form
        onSubmit={handleAddRoom}
        className="bg-white p-4 rounded-2xl shadow mb-6 space-y-3 max-w-md"
      >
        <h2 className="text-xl font-semibold">Add New Room</h2>

        <input
          type="text"
          placeholder="Room Name"
          value={name}
          required
          className="w-full border p-2 rounded-lg"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price per night"
          value={price}
          required
          className="w-full border p-2 rounded-lg"
          onChange={(e) => setPrice(e.target.value)}
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Add Room
        </button>
      </form>

      {/* Loading */}
      {loading && (
        <p className="text-center text-gray-500">
          Loading rooms...
        </p>
      )}

      {/* Rooms Table */}
      {!loading && rooms.length > 0 && (
        <div className="bg-white rounded-2xl shadow">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2 border">Name</th>
                  <th className="p-2 border">Price</th>
                  <th className="p-2 border">Action</th>
                </tr>
              </thead>
              <tbody>
                {rooms.map((room) => (
                  <tr key={room.id}>
                    <td className="p-2 border">{room.name}</td>
                    <td className="p-2 border">₹{room.price}</td>
                    <td className="p-2 border text-center">
                      <button
                        onClick={() => handleDelete(room.id)}
                        className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Empty State */}
      {!loading && rooms.length === 0 && (
        <p className="text-center text-gray-500 mt-4">
          No rooms available
        </p>
      )}
    </div>
  );
};

export default AdminRooms;
