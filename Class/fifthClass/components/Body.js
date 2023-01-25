import { restaurantList } from "../contants/configFile";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

// What is state
// what is React Hooks? - functions,
// What is useState

const Body = () => {
  const [allrestaurants] = useState(restaurantList);
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");

  function filterData(searchText, allrestaurants) {
    const filterData = allrestaurants.filter((restaurant) =>
      restaurant.data.name.toLocaleLowerCase().includes(searchText)
    );

    return filterData;
  }

  return (
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
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
