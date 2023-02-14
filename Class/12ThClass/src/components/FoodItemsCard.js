import { IMG_CDN_URL } from "../contants/configFile";

const FoodItemsCard = ({ name, price, cloudinaryImageId, description }) => {
  return (
    <div className="w-[200px] m-2 p-2 shadow-lg bg-pink-50 h-96 ">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{description}</h3>
      <h2 className="font-bold text-xl">Price :{price}</h2>
    </div>
  );
};

export default FoodItemsCard;
