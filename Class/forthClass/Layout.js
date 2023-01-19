const Layout = ({  name, cuisines, deliveryTime, cloudinaryImageId }) => {
  // console.log(restaurant);
  // const { name, cuisines, deliveryTime, cloudinaryImageId } = restaurant.data;
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        alt="logo"
      />
      <h1>{name}</h1>
      <h3>{cuisines}</h3>
      <h4>{deliveryTime}</h4>
    </div>
  );
};
export default Layout;
