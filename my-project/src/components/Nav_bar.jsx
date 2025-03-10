import { DrawerComponent } from "./drawer/DrawerComponent";

const Nav_bar = ({ children }) => {
  const scrollToSection = (id) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      } else {
        console.warn(`⚠️ No se encontró el elemento con id: ${id}`);
      }
    }, 100); // Espera 100ms antes de buscar la sección
  };

  return (
    <header>
      <nav className="bg-white h-24 w-full z-20 top-0 start-0 shadow-lg">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 my-4">
          {children}
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <DrawerComponent className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"></DrawerComponent>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-slate-400 md:p-0"
                >
                  Acerca de mi
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-slate-400 md:p-0"
                >
                  Proyectos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-slate-400 md:p-0"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav_bar;
