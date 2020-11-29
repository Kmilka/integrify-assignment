import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import fetchData from "./utils/API";
import CardList from "./Components/CardList";
import UserPage from "./Components/UserPage";

function App() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData("/")
      .then((data) => setUsers(data))
      .catch(console.log);
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <CardList list={users} />
        </Route>
        <Route path="/:id">
          <UserPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
