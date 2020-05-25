import React from "react";
import PropTypes from "prop-types";

function UserList({ users }) {
  return (
    <div className="flex-grid">
      {users.map((user) => (
        <div className="col card" key={user.id}>
          <div className="title">
            <span className="cardFieldDescription">User Name:</span> {user.name}
          </div>
          <div className="userCompany">
            <span className="cardFieldDescription">Company:</span>{" "}
            {user.company}
          </div>
          <div className="userEmail">
            <span className="cardFieldDescription">Email:</span> {user.email}
          </div>
          <div className="userData">
            <span className="cardFieldDescription">Join date:</span>{" "}
            {user.joinDate}
          </div>
        </div>
      ))}
    </div>
  );
}

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default UserList;
