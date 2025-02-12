import CardComponent from "./CardComponent";

const Cards = () => {
  return (
    <div className="my-24 flex justify-center space-x-4">
      <CardComponent title="VOYANT Landing page" image={"voyantCover.jpg"}/>
      <CardComponent title="SIGMA" image={"sigmaCover.jpg"}></CardComponent>
      <CardComponent title="VOYANT Landing page" image={"voyantCover.jpg"}></CardComponent>
    </div>
  );
};

export default Cards;
