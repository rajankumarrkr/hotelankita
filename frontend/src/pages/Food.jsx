import Container from "../components/Container";

const foodItems = [
  {
    name: "Continental Breakfast",
    price: "₹450",
    image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
  },
  {
    name: "Indian Thali",
    price: "₹550",
    image: "https://images.unsplash.com/photo-1628294896516-344152572ee8",
  },
  {
    name: "Italian Pasta",
    price: "₹650",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e",
  },
  {
    name: "Chinese Noodles",
    price: "₹500",
    image: "https://images.unsplash.com/photo-1604908177522-402b40b9d7b3",
  },
  {
    name: "Grilled Chicken",
    price: "₹750",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
  },
  {
    name: "Paneer Butter Masala",
    price: "₹600",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7",
  },
  {
    name: "Desserts Platter",
    price: "₹350",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
  },
  {
    name: "Mocktails & Beverages",
    price: "₹300",
    image: "https://images.unsplash.com/photo-1544148103-0773bf10d330",
  },
];

const Food = () => {
  return (
    <div className="bg-gray-100">
      {/* HERO SECTION */}
      <div
        className="relative h-[75vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1551218808-94e220e084d2)",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <Container>
            <div className="max-w-3xl text-white">
              <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight drop-shadow-lg">
                Fine Dining <br />
                <span className="text-yellow-500">Experience</span>
              </h1>

              <p className="text-lg text-gray-200 max-w-xl leading-relaxed">
                Enjoy world-class cuisine in a luxurious dining atmosphere,
                crafted by our expert chefs exclusively for you.
              </p>
            </div>
          </Container>
        </div>
      </div>

      {/* FOOD CARDS */}
      <div className="py-20">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12">
            Our <span className="text-yellow-500">Special Menu</span>
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {foodItems.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2 overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-48 w-full object-cover group-hover:scale-105 transition duration-300"
                />

                <div className="p-5 text-center">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-600 transition">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 mb-3">{item.price}</p>

                  <button className="px-4 py-2 rounded-lg bg-yellow-500 text-black font-semibold hover:bg-yellow-600 transition shadow">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Food;
