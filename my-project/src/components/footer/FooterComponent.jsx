"use client";

import { Footer } from "flowbite-react";
import Logo from "../Logo/Logo";

export function FooterComponent() {
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
    <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Logo></Logo>
          <Footer.LinkGroup>
            <Footer.Link href="#" onClick={() => scrollToSection("about")}>
              Acerca de mi
            </Footer.Link>
            <Footer.Link href="#" onClick={() => scrollToSection("projects")}>
              Proyectos
            </Footer.Link>
            <Footer.Link href="#" onClick={() => scrollToSection("contact")}>
              Contacto
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="Gilberto Diaz™" year={2025} />
      </div>
    </Footer>
  );
}
