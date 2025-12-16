import { useNavigate } from "react-router-dom";
import Container from "../components/Container";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100">
      {/* HERO SECTION */}
      <div
        className="relative h-[85vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1566073771259-6a8506099945)",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <Container>
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Spend Quality Holidays <br /> With Us
              </h1>

              <p className="text-lg text-gray-200 mb-6">
                Experience luxury, comfort, and unforgettable moments at
                Hotel Ankita.
              </p>

              <button
                onClick={() => navigate("/rooms")}
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold shadow-lg transition"
              >
                Reserve Now
              </button>
            </div>
          </Container>
        </div>

        {/* CHECK AVAILABILITY BAR */}
        <div className="absolute bottom-[-45px] left-0 right-0 z-20">
          <Container>
            <div className="bg-white rounded-2xl shadow-xl p-4 grid gap-4 sm:grid-cols-5">
              <input
                type="date"
                className="border p-2 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
              />
              <input
                type="date"
                className="border p-2 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
              />
              <select className="border p-2 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none">
                <option>Adults</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <select className="border p-2 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none">
                <option>Children</option>
                <option>0</option>
                <option>1</option>
                <option>2</option>
              </select>
              <button
                onClick={() => navigate("/rooms")}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg px-6 shadow-md hover:shadow-lg transition"
              >
                Check Availability
              </button>
            </div>
          </Container>
        </div>
      </div>

      {/* FEATURES */}
      <div className="pt-32 pb-20">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose <span className="text-yellow-500">Hotel Ankita</span>
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Luxury Rooms",
                desc: "Spacious, elegant rooms designed for comfort.",
              },
              {
                title: "Premium Services",
                desc: "24/7 room service and housekeeping.",
              },
              {
                title: "Fine Dining",
                desc: "Delicious meals by experienced chefs.",
              },
              {
                title: "Secure Booking",
                desc: "Safe, fast and hassle-free booking.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="h-1 bg-yellow-500" />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-yellow-600 transition">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
