import ProfileClassComp from "./ProfileClassComp";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <p>
        This is the Namaste React Live Course Chapter 07 - Finding the Path 🚀
        <Outlet />
        <Link to="profile">profile</Link>
      </p>
    </div>
  );
};
export default About;
