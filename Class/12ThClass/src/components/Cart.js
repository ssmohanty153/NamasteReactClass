import { useDispatch, useSelector } from "react-redux";
import { clearItem, removeCarts } from "../utils/cartSlice";
import FoodItemsCard from "./FoodItemsCard";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatchClear = useDispatch();
  const handleClearCart = () => {
    dispatchClear(clearItem());
  };
  const handleRemoveCart=(index)=>{
    dispatchClear(removeCarts(index));
  }
  return (
    <>
      <h1 className="font-bold text-3xl">Cart Items -{cartItems.length}</h1>
      <button
        className="p-2 m-2 bg-green-100"
        onClick={() => handleClearCart()}
      >
        clearCart
      </button>
      <div className="flex">
        {cartItems.map((item,index) => (
          <>
            <FoodItemsCard key={item.id} {...item} />
            <button
              className="p-2 m-2 bg-green-100"
              onClick={() => handleRemoveCart(index)}
            >
              removeCart
            </button>
          </>
        ))}
      </div>
    </>
  );
};
export default Cart;
