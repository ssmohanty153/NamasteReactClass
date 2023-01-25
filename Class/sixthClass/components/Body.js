import { restaurantList } from "../contants/configFile";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "../Shimmer";

// What is state
// what is React Hooks? - functions,
// What is useState

const Body = () => {
  const [allrestaurants, setAllRestaurants] = useState("");
  const [filterRestaurants, setFilterRestaurants] = useState("");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    apiCall();
  }, []);

  const apiCall = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const result = await data.json();
    setAllRestaurants(result?.data?.cards[2]?.data?.data?.cards);
    setFilterRestaurants(result?.data?.cards[2]?.data?.data?.cards);
  };

  const filterData = (searchText, restaurants) => {
    const filterData = restaurants.filter((restaurant) =>
      restaurant.data.name.toLocaleLowerCase().includes(searchText)
    );

    return filterData;
  };
  // not render component (Early return)
  // if (!allrestaurants) return null;
  return allrestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(
              searchText.toLocaleLowerCase(),
              allrestaurants
            );
            // update the state - restaurants
            setFilterRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filterRestaurants && filterRestaurants.length === 0 ? (
          <>
            <h1>No Restraunt found please search again...</h1>
          </>
        ) : (
          filterRestaurants.map((restaurant) => {
            return (
              <RestaurantCard
                {...restaurant?.data}
                key={restaurant?.data?.id}
              />
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
