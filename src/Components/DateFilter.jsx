import React, { useState } from "react";

// DATE FILTER COMPONENT
export default function DateFilter({ filterByDate, removeFilter }) {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const handleSubmit = () => {
    filterByDate(fromDate, toDate);
  };

  return (
    <div className="filter">
      <h4>Filter By Date Range: </h4>
      <br />
      From:{" "}
      <input
        type="date"
        placeholder="search"
        onChange={(e) => setFromDate(e.target.value)}
      />
      <br />
      To:{" "}
      <input
        type="date"
        placeholder="search"
        onChange={(e) => setToDate(e.target.value)}
      />
      <br />
      <button className="filter-button" onClick={handleSubmit}>
        Filter
      </button>
      <button className="filter-button" onClick={() => removeFilter()}>
        Remove Filter
      </button>
    </div>
  );
}
