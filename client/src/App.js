import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import SortButtons from "./components/SortButtons";
import UserList from "./components/UserList";
import Calculations from "./components/Calculations";
import Filter from "./components/Filter";
import Loader from "./Loader";

function App() {
  const [users, setUsers] = useState([]);
  const [calculations, setCalculations] = useState({});
  const [sortedBy, setSortedBy] = useState("newest");
  const [originalUsers, setOriginalUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`/api/users`)
      .then((res) => {
        setUsers(res.data.users);
        setOriginalUsers(res.data.users);
        setCalculations(res.data.calculations);
        setLoading(false);
      })
      .catch((e) => console.error(e));
  }, []);

  const getSortFunc = (userA, userB) => {
    let a = new Date(userA.joinDate.replace(" ", ""));
    let b = new Date(userB.joinDate.replace(" ", ""));

    if (sortedBy === "newest") {
      return a > b ? -1 : a < b ? 1 : 0;
    } else {
      return a > b ? 1 : a < b ? -1 : 0;
    }
  };

  const onSort = (sortType) => {
    setSortedBy(sortType);
    setUsers(users.sort(getSortFunc));
    setOriginalUsers(originalUsers.sort(getSortFunc));
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
      {loading && <Loader />}
      {users.length ? (
        <UserList users={users} />
      ) : loading ? null : (
        <p>No Users</p>
      )}
      <Calculations calculations={calculations} />
    </div>
  );
}

export default App;
