import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full h-14 bg-gray-500 flex justify-between items-center px-12 text-white fixed">
      {/* <img src="" alt="Logo" /> */}
      <h1>Connect Youth</h1>

      <div className="flex gap-4 items-center">
        <div className="flex gap-2">
          <Link to={"/"} className="hover:bg-gray-400 rounded-md px-4 py-1">
            Inicio
          </Link>
          <Link
            to={"/sobre"}
            className="hover:bg-gray-400 rounded-md px-4 py-1"
          >
            Sobre
          </Link>
        </div>
        <Link to={"/register"} className="px-6 py-2 bg-blue-400 rounded-md">
          Cadastre-se
        </Link>
        <Link to={"/login"} className="px-6 py-2 bg-blue-400 rounded-md">
          Entrar
        </Link>
        <Link to={"/events"} className="px-6 py-2 bg-blue-400 rounded-md">
          loginAUT
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
