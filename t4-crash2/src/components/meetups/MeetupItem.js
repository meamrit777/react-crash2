import { useContext } from "react";
import "./meetupItem.css";
import Card from "../ui/Card";
import FavoriteContext from "../../store/favorites-context";

const MeetupItem = (props) => {
  const favoriteCtx = useContext(FavoriteContext);

  const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoriteCtx.removeFavorite(props.id);
    } else {
      favoriteCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }
  return (
    <li className="item">
      <Card>
        <div className="image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="content">
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
          <div className="actions">
            <button onClick={toggleFavoriteStatusHandler}>
              {itemIsFavorite ? "Remove from Favorite" : "To Favorite"}
            </button>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
