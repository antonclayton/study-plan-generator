import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };
  return (
    <div className="bg-black h-16 flex justify-evenly items-center">
      <Link
        to="/"
        className="text-white text-sm font-bold cursor-pointer sm:text-base lg:text-xl hover:underline hover:scale-105 transition-transform duration-200"
      >
        Home
      </Link>
      <Link
        to="/plans"
        className="text-white text-sm font-bold cursor-pointer sm:text-base lg:text-xl hover:underline hover:scale-105 transition-transform duration-200"
      >
        Study Plans
      </Link>
      {isLoggedIn ? (
        <button
          onClick={handleLogout}
          className="bg-red-400 px-4 py-2 rounded-md  text-white text-sm font-bold cursor-pointer sm:text-base lg:text-xl hover:underline hover:scale-105 transition-transform duration-200"
        >
          Logout
        </button>
      ) : (
        <Link
          to="/login"
          className="text-white text-sm font-bold cursor-pointer sm:text-base lg:text-xl hover:underline hover:scale-105 transition-transform duration-200"
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
