import CardComponent from "./CardComponent";

const Cards = () => {
  return (
    <div className="my-24 flex justify-center space-x-4">
      <CardComponent title="VOYANT Landing page"/>
      <CardComponent></CardComponent>
      <CardComponent></CardComponent>
    </div>
  );
};

export default Cards;
