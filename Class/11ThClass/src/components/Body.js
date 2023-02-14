import { restaurantList } from "../contants/configFile";
import RestaurantCard from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import UserContext from "../utils/UserContext";

// What is state
// what is React Hooks? - functions,
// What is useState

const Body = () => {
  const [allrestaurants, setAllRestaurants] = useState("");
  const [filterRestaurants, setFilterRestaurants] = useState("");
  const [searchText, setSearchText] = useState("");
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    apiCall();
  }, []);

  const apiCall = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&page_type=DESKTOP_WEB_LISTING"
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
  console.log(user);
  // not render component (Early return)
  // if (!allrestaurants) return null;
  return allrestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 bg-pink-50 my-5 ">
        <input
          type="text"
          className="focus:bg-gray-200"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="p-2 m-2 bg-green-400 rounded-xl hover:bg-green-500"
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
        <input
          type="text"
          className="focus:bg-gray-200"
          placeholder="Name"
          value={user.name}
          onChange={(e) => {
            setUser({
              ...user,
              name: e.target.value,
            });
          }}
        />
        <input
          type="text"
          className="focus:bg-gray-200"
          placeholder="Email"
          value={user.email}
          onChange={(e) => {
            setUser({
              ...user,
              email: e.target.value,
            });
          }}
        />
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {filterRestaurants && filterRestaurants.length === 0 ? (
          <>
            <h1>No Restraunt found please search again...</h1>
          </>
        ) : (
          filterRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant?.data?.id}
                key={restaurant?.data?.id}
              >
                <RestaurantCard {...restaurant?.data} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
