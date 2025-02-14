import Card from "./Card/Card";
import SocialNetworks from "./socialNetworks/SocialNetworks";

const Cards = ({ children }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
    >
      {children}
      <div className=" flex justify-center  flex-wrap">
        <Card
          title="SIGMA"
          image={"sigmaCover.jpg"}
          link={"https://sigmasafi.pe/"}
          text={
            <>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              commodo nulla vel velit mattis, eget condimentum metus vehicula.
              Nullam condimentum quis risus non molestie. Vestibulum quis risus
              eget justo lobortis mattis.
            </>
          }
        />

        <Card
          title="VOYANT"
          image={"voyantCover.jpg"}
          link={"https://voyant-chi.vercel.app/"}
          text={
            <>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              commodo nulla vel velit mattis, eget condimentum metus vehicula.
              Nullam condimentum quis risus non molestie. Vestibulum quis risus
              eget justo lobortis mattis.
            </>
          }
        ></Card>
      </div>
    </div>
  );
};

export default Cards;
