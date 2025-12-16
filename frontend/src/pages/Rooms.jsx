import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRooms } from "../services/api";
import RoomCard from "../components/RoomCard";
import Container from "../components/Container";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getRooms()
      .then(setRooms)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Container>
        <h1 className="text-3xl font-bold text-center mb-8">
          Our Rooms
        </h1>

        {loading && (
          <p className="text-center text-gray-500">
            Loading rooms...
          </p>
        )}

        {!loading && rooms.length === 0 && (
          <p className="text-center text-gray-500">
            No rooms available
          </p>
        )}

        {!loading && rooms.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room) => (
              <RoomCard
                key={room.id}
                room={room}
                onBook={() => navigate("/booking")}
              />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default Rooms;
