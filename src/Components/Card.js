import "../App.css";
import { Link } from "react-router-dom";

function Card({ user }) {
  return (
    <div className="card">
      <h1>{user.name}</h1>
      <p className="email">{user.email}</p>
      <p className="link">{user.website}</p>
      <Link to={`/${user.id}`}>
        <button>more details</button>
      </Link>
    </div>
  );
}
export default Card;
