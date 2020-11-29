import Card from "./Card";
import "../App.css";

function CardList({ list }) {
  return (
    <div className="grid">
      {list.map((item, index) => (
        <Card key={index} user={item} />
      ))}
    </div>
  );
}

export default CardList;
