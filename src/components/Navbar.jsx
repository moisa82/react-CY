import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full h-14 bg-gray-500 flex justify-between items-center px-12 text-white fixed">
      <img src="" alt="Logo" />
      <ul className="flex justify-between gap-4">
        <Link to={"/"}>Inicio</Link>
        <Link to={"/sobre"}>Sobre</Link>
      </ul>

      <Link to={"/login"} className="px-6 py-2 bg-blue-400 rounded-md">
        Entrar
      </Link>
    </nav>
  );
};

export default Navbar;
