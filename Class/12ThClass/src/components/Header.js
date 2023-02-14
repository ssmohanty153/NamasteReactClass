import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import Logo from "../assets/foodvilla.png";
import { useSelector } from "react-redux";
const Title = () => (
  <a href="/">
    <img className="h-28 p-2" alt="logo" src={Logo} />
  </a>
);

const Header = () => {
  const isOnline = useOnline();
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sticky top-0">
      <Title />

      <ul className="flex py-10 ">
        <li className="px-2">
          <Link to="/">Home</Link>
        </li>
        <li className="px-2">
          <Link to="/about">About</Link>
        </li>
        <li className="px-2">
          <Link to="/contact">Contact</Link>
        </li>

        <li className="px-2">
          <Link to="/instamart">Instamart</Link>
        </li>
        <li className="px-2">
          <Link to="/cart">Cart -{cartItems.length} </Link>
        </li>
      </ul>

      <h1>{isOnline ? "✅" : "🔴"}</h1>
    </div>
  );
};

export default Header;
