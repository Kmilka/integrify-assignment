import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { fetchData } from "./utils/api";
import CardList from "./Components/CardList";
import UserPage from "./Components/UserPage";
import ErrorBoundary from "./Components/ErrorBoudary";

function App() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData("/").then((data) => setUsers(data));
  }, []);

  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
}

export default App;
