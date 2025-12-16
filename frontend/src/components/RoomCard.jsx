const RoomCard = ({ room, onBook }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition duration-200">
      <img
        src={room.image}
        alt={room.name}
        className="h-48 w-full object-cover"
      />

      <div className="p-5 space-y-3">
        <h3 className="text-xl font-semibold text-gray-800">
          {room.name}
        </h3>

        <p className="text-gray-600 text-lg">
          ₹{room.price} <span className="text-sm">/ night</span>
        </p>

        <button
          onClick={() => onBook(room)}
          className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition font-medium"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default RoomCard;
