import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../contants/configFile";
import Shimmer from "../Shimmer";
import useRestaurauntList from "../utils/useRestaurauntList";

const RestaurantList = () => {
  let { id } = useParams();

  const restaurant = useRestaurauntList(id);
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restraunt id: {id}</h1>
        <h2>{restaurant?.name}</h2>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating} stars</h3>
        <h3>{restaurant?.costForTwoMsg}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {restaurant &&
            Object.values(restaurant?.menu?.items).map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantList;
