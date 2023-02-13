import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import Logo from "../assets/foodvilla.png";
const Title = () => (
  <a href="/">
    <img className="h-28 p-2" alt="logo" src={Logo} />
  </a>
);

const Header = () => {
  const isOnline = useOnline();
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg">
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
          <Link to="/cart">Cart</Link>
        </li>
        <li className="px-2">
          <Link to="/instamart">Instamart</Link>
        </li>

        {/* <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <Link to="/">
          <li>Cart</li>
        </Link>
        <Link to="/instamart">
          <li>Instamart</li>
        </Link> */}
      </ul>

      <h1>{isOnline ? "✅" : "🔴"}</h1>
    </div>
  );
};

export default Header;
