const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// ROOMS
export const getRooms = async () => {
  const res = await fetch(`${BASE_URL}/rooms`);
  return res.json();
};

export const addRoom = async (room) => {
  const res = await fetch(`${BASE_URL}/rooms`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(room),
  });
  return res.json();
};

export const deleteRoom = async (id) => {
  await fetch(`${BASE_URL}/rooms/${id}`, {
    method: "DELETE",
  });
};

// BOOKINGS
export const createBooking = async (booking) => {
  const res = await fetch(`${BASE_URL}/bookings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(booking),
  });
  return res.json();
};

export const getBookings = async () => {
  const res = await fetch(`${BASE_URL}/bookings`);
  return res.json();
};
