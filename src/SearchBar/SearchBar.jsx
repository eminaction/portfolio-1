import { useState, useEffect } from "react";
import "./SearchBar.css";
import Joke from "../Joke/Joke";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState(""); //sets searchTerm to empty string and provides function to update it
  const defaultSearchTerm = "Emma Nolan";

  useEffect(() => {
    //handles gradual display of letters
    let i = 0; //keeps track of the current index starting at 0
    const interval = setInterval(() => {
      //setInterval function to execute a block of code repeatedly with a fixed time delay.
      if (i < defaultSearchTerm.length) {
        //makes sure we don't have more indexs than characters
        setSearchTerm(
          () => defaultSearchTerm.substring(0, i + 1) //substring begins at 0 and adds 1 to the index to display each character
        );
        i++;
      } else {
        //executes when all charcaters displayed
        clearInterval(interval);
      }
    }, 300); // Adjust the interval for typing speed

    return () => clearInterval(interval); // Cleanup function to clear interval on unmount
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="search">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          readOnly
        />
        <div className="search-results">
          <a href="#about">
            <p>
              <b>{searchTerm}</b> About
            </p>
          </a>
          <a href="#portfolio">
            <p>
              <b>{searchTerm}</b> Portfolio
            </p>
          </a>
          <a href="#experience">
            <p>
              <b>{searchTerm}</b> Experience
            </p>
          </a>
          <a href="#contact">
            <p>
              <b>{searchTerm}</b> Contact
            </p>
          </a>
        </div>
      </div>
      <div className="buttons">
        <Joke />
      </div>
    </div>
  );
};

export default SearchBar;
