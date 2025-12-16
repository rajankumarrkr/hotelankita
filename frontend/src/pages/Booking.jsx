import { useState } from "react";
import { createBooking } from "../services/api";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const bookingPayload = {
      name: formData.name,
      email: formData.email,
      checkIn: formData.checkIn,
      checkOut: formData.checkOut,
      guests: Number(formData.guests),
      status: "Pending",
    };

    try {
      await createBooking(bookingPayload);
      setSuccess(true);
    } catch (error) {
      alert("Booking failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-2xl font-bold text-green-600">
          Booking successful!
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 sm:p-8 rounded-2xl shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">
          Book Your Stay
        </h2>

        {/* Full Name */}
        <div className="space-y-1">
          <label className="text-sm font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border p-2 rounded-lg"
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full border p-2 rounded-lg"
            onChange={handleChange}
          />
        </div>

        {/* Check-In */}
        <div className="space-y-1">
          <label className="text-sm font-medium">Check-In Date</label>
          <input
            type="date"
            name="checkIn"
            required
            className="w-full border p-2 rounded-lg"
            onChange={handleChange}
          />
        </div>

        {/* Check-Out */}
        <div className="space-y-1">
          <label className="text-sm font-medium">Check-Out Date</label>
          <input
            type="date"
            name="checkOut"
            required
            className="w-full border p-2 rounded-lg"
            onChange={handleChange}
          />
        </div>

        {/* Guests */}
        <div className="space-y-1">
          <label className="text-sm font-medium">Guests</label>
          <input
            type="number"
            name="guests"
            min="1"
            required
            className="w-full border p-2 rounded-lg"
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition font-medium"
        >
          {loading ? "Booking..." : "Confirm Booking"}
        </button>
      </form>
    </div>
  );
};

export default Booking;
