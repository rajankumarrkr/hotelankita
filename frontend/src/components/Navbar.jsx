import { NavLink, useNavigate } from "react-router-dom";
import { isAdminAuthenticated, logoutAdmin } from "../utils/auth";

const navClass = ({ isActive }) =>
  isActive
    ? "px-5 py-2 rounded-lg bg-yellow-500 text-black font-semibold shadow"
    : "px-5 py-2 rounded-lg border border-yellow-500 text-yellow-600 font-semibold hover:bg-yellow-500 hover:text-black transition-colors duration-200";

const Navbar = () => {
  const navigate = useNavigate();
  const isAdmin = isAdminAuthenticated();

  const handleLogout = () => {
    logoutAdmin();
    navigate("/admin");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* BRAND */}
        <NavLink to="/" className="text-2xl font-extrabold tracking-wide">
          <span className="text-yellow-500">Hotel</span>{" "}
          <span className="text-gray-900">Ankita</span>
        </NavLink>

        {/* MENU */}
        <div className="flex items-center gap-4">
          {!isAdmin && (
            <>
              <NavLink to="/" className={navClass}>
                Home
              </NavLink>

              <NavLink to="/food" className={navClass}>
                Food
              </NavLink>

              <NavLink to="/rooms" className={navClass}>
                Rooms
              </NavLink>
            </>
          )}

          {isAdmin && (
            <>
              <NavLink to="/admin/dashboard" className="font-medium">
                Dashboard
              </NavLink>

              <NavLink to="/admin/rooms" className="font-medium">
                Rooms
              </NavLink>

              <NavLink to="/admin/bookings" className="font-medium">
                Bookings
              </NavLink>

              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition font-medium"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
