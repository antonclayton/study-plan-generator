import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-black h-16 flex justify-evenly items-center">
      <Link to="/" className="text-white text-2xl font-bold cursor-pointer">
        Home
      </Link>
      <Link
        to="/plans"
        className="text-white text-2xl font-bold cursor-pointer"
      >
        Study Plans
      </Link>
    </div>
  );
};

export default Navbar;
