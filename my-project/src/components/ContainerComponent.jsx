import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContainerComponent = () => {
  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <section className="flex items-center justify-center h-dvh bg-[url('src/assets/common-bg.svg')] my-26  opacity-25 space-x-11">
      <div className="" data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine">
        <h4 className="text-[25px]">Hola,soy</h4>
        <h1 className="w-72 text-[52px]">Gilberto Diaz</h1>
      </div>
      <div className="w-1/2 flex items-center justify-center content-center space-x-4" data-aos="fade-left"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine" >

        <div>
          <p className="text-[20px]">Desarrollador front-end y de videojuegos, creo aplicaciones web intuitivas
            funcionales y atractivas
          </p>
        </div>

      </div>
    </section>
  )
}

export default ContainerComponent