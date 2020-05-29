import React from "react";
import PropTypes from "prop-types";

const Calculations = ({ calculations }) => {
  return (
    <div className="calculation">
      <h2>Statistics</h2>
      <li>
        <span className="cardFieldDescription">Average Ticket Created:</span>
        {calculations.averageTicketCreated}
      </li>
      <li>
        <span className="cardFieldDescription">Average Backups Created:</span>
        {calculations.averageBackupsCreated}
      </li>
    </div>
  );
};

Calculations.propTypes = {
  calculations: PropTypes.shape.isRequired,
};

export default Calculations;
