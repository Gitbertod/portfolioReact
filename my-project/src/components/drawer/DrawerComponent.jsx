"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button, Drawer, Sidebar } from "flowbite-react";
import { useState } from "react";
import styles from "./DrawerComponent.module.css";
import { HiCollection, HiInformationCircle, HiUsers } from "react-icons/hi";
import Logo from "../Logo/Logo";

export function DrawerComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

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
    <>
      <div className="flex  items-center justify-center">
        <button
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          data-collapse-toggle="navbar-sticky"
          type="button"
          aria-controls="navbar-sticky"
          aria-expanded="true"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <Drawer open={isOpen} onClose={handleClose} position="right">
        <Drawer.Header
          title=""
          titleIcon={() => (
            <Logo></Logo>
          )}
        />
        <Drawer.Items>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0"
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                <Sidebar.Items>
                  <Sidebar.ItemGroup>
                    <Sidebar.Item icon={HiUsers}>
                      <a onClick={() => scrollToSection("about")}>Acerca de mi</a>
                    </Sidebar.Item>
                    <Sidebar.Item icon={HiCollection}>
                      <a onClick={() => scrollToSection("projects")}>Proyectos</a>
                    </Sidebar.Item>
                    <Sidebar.Item icon={HiInformationCircle}>
                      <a onClick={() => scrollToSection("contact")}>Contacto</a>
                    </Sidebar.Item>
                    <Sidebar.Item icon={HiInformationCircle}>
                      <a onClick={() => scrollToSection("contact")}>Descargar CV</a>
                    </Sidebar.Item>
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
