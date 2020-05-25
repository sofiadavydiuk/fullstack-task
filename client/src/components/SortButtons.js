import React from "react";
import PropTypes from "prop-types";

const SortButtons = ({ onSort }) => {
  return (
    <div>
      <button className="buttonSort" onClick={() => onSort("newest")}>
        Sort By Newest
      </button>
      <button className="buttonSort" onClick={() => onSort("oldest")}>
        Sort By Oldest
      </button>
    </div>
  );
};

SortButtons.propTypes = {
  onSort: PropTypes.func.isRequired,
};

export default SortButtons;
