import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <h4 className="flex justify-center bg-pink-50 h-10  sticky bottom-0">
      @developed by {user.name} 2023
    </h4>
  );
};
export default Footer;
