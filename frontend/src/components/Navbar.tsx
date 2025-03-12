import { Link } from "react-router-dom";

const Navbar = () => {
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
      <Link
        to="/login"
        className="text-white text-sm font-bold cursor-pointer sm:text-base lg:text-xl hover:underline hover:scale-105 transition-transform duration-200"
      >
        Login
      </Link>
    </div>
  );
};

export default Navbar;
