import "./index.css";

const Header = () => (
  <nav className="nav-container">
    <h1>MovieDb</h1>
    <ul className="nav-list-container">
      <li className="list">Popular</li>
      <li className="list">Top Rated</li>
      <li className="list">Upcoming</li>
    </ul>
    <input type="text" className="input" placeholder="Movie Search" />
    <button className="search-button" type="button">
      Search
    </button>
  </nav>
);
export default Header;
