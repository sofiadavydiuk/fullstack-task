import React, { useState, useEffect } from "react";
import axios from "axios";
import SortButtons from "./components/SortButtons";
import UserList from "./components/UserList";
import Calculations from "./components/Calculations";
import Filter from "./components/Filter";
import Loader from "./Loader";
import { getSortFunc } from "./utilities/Utilities";

function App() {
  const [users, setUsers] = useState([]);
  const [calculations, setCalculations] = useState({});
  const [sortedBy, setSortedBy] = useState("");
  const [originalUsers, setOriginalUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`/api/users`)
      .then((res) => {
        setUsers(res.data.users);
        setOriginalUsers(res.data.users);
        setCalculations(res.data.calculations);
        setIsLoading(false);
      })
      .catch((e) => console.error(e));
  }, []);

  const onSort = (sortedBy) => {
    setSortedBy(sortedBy);
    setUsers(users.sort(getSortFunc(sortedBy)));
    setOriginalUsers(originalUsers.sort(getSortFunc(sortedBy)));
  };

  const filterByTicketsCreated = (user) => {
    return user.ticketsCreated.length >= 5;
  };

  const onFilter = (isFiltered) => {
    isFiltered
      ? setUsers(users.filter(filterByTicketsCreated))
      : setUsers(originalUsers);
  };

  return (
    <div className="App">
      <h1 className="heading">Full Stack Task</h1>
      <div className="top-section">
        <SortButtons onSort={onSort} />
        <Filter onFilter={onFilter} />
      </div>
      {isLoading && <Loader />}
      {users.length ? (
        <UserList users={users} />
      ) : isLoading ? null : (
        <p>No Users</p>
      )}
      <Calculations calculations={calculations} />
    </div>
  );
}

export default App;
