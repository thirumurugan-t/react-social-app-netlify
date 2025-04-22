import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = ({ Search, setSearch, setupdatetasks }) => {
  const ClearAll = () => {
    setupdatetasks({ id: null, title: "", datetime: "", body: "" });
  };

  return (
    <>
      <div className="navbar">
        <form onSubmit={(e) => e.preventDefault()}>
          <label className="label">Search Posts</label>
          <input
            type="search"
            placeholder="Search Posts"
            value={Search}
            onChange={(e) => setSearch(e.target.value)}
            className="searchbar"
          />
        </form>

        <ul className="buttons">
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li onClick={ClearAll}>
            <Link to="/newpost">
              Post
            </Link>
          </li>
          <li>
            <Link to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
