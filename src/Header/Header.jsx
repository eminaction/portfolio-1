import "./Header.css";
import SearchBar from "../SearchBar/SearchBar";

export default function Header() {
  return (
    <>
      <header>
        <div id="header" className="main-header">
          <div>
            <h1>
              <span id="blue">C</span>
              <span id="red">o</span>
              <span id="yellow">d</span>
              <span id="blue">e</span>
              <span id="green">o</span>
              <span id="red">o</span>
              <span id="blue">g</span>
              <span id="yellow">l</span>
              <span id="green">e</span>
            </h1>
          </div>

          <div>
            <SearchBar />
          </div>
        </div>
      </header>
    </>
  );
}
