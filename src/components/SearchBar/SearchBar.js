import React from "react";
import "./SearchBar.css";
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

const SearchBar = ({ coins, setResults }) => {
  const [input, setInput] = useState("");

  //Return the search results based on both coin names and symbols
  const coinSearchResults = (value) => {
    const coninResults = coins.filter((coin) => {
      return (
        value &&
        (coin?.name?.toLowerCase().includes(value.toLowerCase()) ||
        coin?.symbol?.toLowerCase().includes(value.toLowerCase()))
      );
    });
    setResults(coninResults);
  };

  const handleChange = (value) => {
    setInput(value);
    coinSearchResults(value);
  };

  return (
    <div className="input-wrapper">
      <IoSearchSharp id="search-icon"/>
      <input
        placeholder="Type to search"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
