import { Link } from "react-router-dom";
import "./mainNavigation.css";

function MainNavigation() {
  return (
    <header className="header">
      <div className="logo primary">ReactNavigation</div>
      <div className="logo secondary">RN</div>
      <nav>
        <ul>
          <li>
            <Link to="/"> All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup"> Add new Meetups</Link>
          </li>
          <li>
            <Link to="/favorites"> My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
