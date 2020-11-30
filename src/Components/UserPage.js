import "../App.css";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchData } from "../utils/api";
import Loading from "./Loading";

function renderUserInfo(item) {
  let infoList = [];
  for (const [key, value] of Object.entries(item)) {
    if (key === "id") {
      continue;
    }
    if (typeof value === "object") {
      infoList.push(
        <li key={key + value}>
          <p className="noFormat capitalize">{key}</p>
          <ul>{renderUserInfo(value)}</ul>
        </li>
      );
    } else {
      infoList.push(
        <li key={key + value} className="capitalize">
          {key}: {value}
        </li>
      );
    }
  }
  return infoList;
}

function UserPage() {
  const { id } = useParams();
  let [user, setUser] = useState([]);
  let [loadingStatus, setLoadingStatus] = useState(true);

  useEffect(() => {
    fetchData(`/${id}`).then((data) => {
      setUser(data);
      setLoadingStatus(false);
    });
  }, []);

  return (
    <div>
      {loadingStatus ? (
        <Loading />
      ) : (
        <div>
          <ul>{renderUserInfo(user)}</ul>
          <Link to="/">
            <button>go to main page</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default UserPage;
