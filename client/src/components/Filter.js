import React, { useState } from "react";
import PropTypes from "prop-types";

const Filter = ({ onFilter }) => {
  const [isFiltered, setIsFiltered] = useState(false);

  const handleChange = (event) => {
    setIsFiltered(event.target.checked);
    onFilter(event.target.checked);
  };

  return (
    <div className="checkboxes">
      <label className="checkboxContainer" htmlFor="filterby5">
        <input
          type="checkbox"
          id="filterby5"
          name="filterby5"
          value={isFiltered}
          onChange={handleChange}
        />
        Show users with more then 5 tickets created
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
