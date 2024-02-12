import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <section className="w-full h-screen pt-14 bg-white flex justify-center items-center">
        <form className="-mt-20 rounded-lg drop-shadow-md flex flex-col bg-gray-500 gap-4 w-96 p-14">
          <h1 className="text-white text-4xl text-center">Entrar</h1>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-blue-400 focus:outline-none focus:ring-0 focus:border-blue-400 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-400 peer-focus:dark:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-blue-400 focus:outline-none focus:ring-0 focus:border-blue-400 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-400 peer-focus:dark:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Senha
            </label>
          </div>

          <input
            type="submit"
            name="btn_submit"
            className="px-6 py-2 cursor-pointer bg-blue-400 rounded-md text-white"
            id="btn_submit"
            value="Entrar"
          />
          <div className="text-white text-base flex justify-center gap-1">
            <span>Não possui conta?</span>
            <Link to={"/register"} className="text-blue-300">
              Cadastre-se
            </Link>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
