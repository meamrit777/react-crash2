import { useContext } from "react";

import FavoriteContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";
import { Link } from "react-router-dom";

const Favorites = () => {
  const favoriteCtx = useContext(FavoriteContext);

  let content;
  if (favoriteCtx.totalFavorite === 0) {
    content = (
      <div>
        You got no favorites yet.
        <Link to="/" className="btn" style={{ textDecoration: "none" }}>
          Start adding some ?
        </Link>
      </div>
    );
  } else {
    content = <MeetupList meetups={favoriteCtx.favorite} />;
  }
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
};

export default Favorites;
