import Card from "./Card/Card";

const Cards = ({ children }) => {
  return (
    <div data-aos="fade-up"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine"
    data-aos-duration="1000">
      {children}
      <div className=" flex justify-center space-x-4 flex-wrap">
        
        <Card title="SIGMA" image={"sigmaCover.jpg"} text={
            <>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              commodo nulla vel velit mattis, eget condimentum metus vehicula.
              Nullam condimentum quis risus non molestie. Vestibulum quis risus
              eget justo lobortis mattis. 
            </>
          } />
        <Card title="VOYANT Landing page" image={"voyantCover.jpg"} text={
            <>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              commodo nulla vel velit mattis, eget condimentum metus vehicula.
              Nullam condimentum quis risus non molestie. Vestibulum quis risus
              eget justo lobortis mattis. 
            </>
          } />
      </div>
    </div>
  );
};

export default Cards;
