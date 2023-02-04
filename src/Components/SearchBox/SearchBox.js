import React, { useContext } from "react";
import "../SearchBox/SearchBox.css";
import { FaSearch } from "react-icons/fa";
import { focusContext } from "../../context";
export default function Searchbox(props) {
  const { focusState } = useContext(focusContext);
  return (
    <>
      {focusState[0] ? (
        <div className="searchboxs">
          <div class="select">
            <select onClick={props.focusLiftState}>
              <option value="All">All</option>
              <option value="All">All</option>
              <option value="All">All</option>
              <option value="All">All</option>
              <option value="All">All</option>
              <option value="All">All</option>
              <option value="All">All</option>
            </select>
          </div>
          <div class="search">
            <input type="search" name="" id="" onClick={focusState[1]} />
            <div class="SearchIcon">
              <FaSearch id="sbtn" />
            </div>
          </div>
        </div>
      ) : (
        <div className="searchbox">
          <div class="select">
            <select>
              <option value="All">All</option>
              <option value="All">All</option>
              <option value="All">All</option>
              <option value="All">All</option>
              <option value="All">All</option>
              <option value="All">All</option>
              <option value="All">All</option>
            </select>
          </div>
          <div class="search">
            <input type="search" name="" id="" onClick={focusState[1]} />
            <div class="SearchIcon">
              <FaSearch id="sbtn" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
