import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Navigate } from "react-router-dom";
import TrendSearchDiv from "./TrendSearchDiv";


const SearchBar = () => {
  const [redirectToResults, setRedirectToResults] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleSearchClick = () => {
    setShowResult(true);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setRedirectToResults(true);
  };

  return (
    <>
      <form onSubmit={handleSearchSubmit}>
            <input
            type="search"
            placeholder="search"
            id="search1"
            onClick={handleSearchClick}
            />
            <CiSearch className="search-icon" />
        {redirectToResults && <Navigate to={"/search"} />}
      </form>
      {showResult && <TrendSearchDiv />}
    </>
  );

};

export default SearchBar;
