import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../contants/configFile";

const useRestaurauntList = (id) => {
  const [restaurant, setRestauraunt] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const getRestaurantInfo = async () => {
    const fetchData = await fetch(FETCH_MENU_URL + id);
    const resData = await fetchData.json();
    setRestauraunt(resData.data);
  };
  return restaurant;
};
export default useRestaurauntList;
