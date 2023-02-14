import ProfileClassComp from "./ProfileClassComp";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";
import UserContext from "../utils/UserContext";

class AboutClass extends React.Component {
  render() {
    return (
      <div>
        <h1>About Us Page</h1>
        <UserContext.Consumer>
          {({ user }) => (
            <h3 className="font-bold text-xl p-10">{user.name}</h3>
          )}
        </UserContext.Consumer>
        <p>
          This is the Namaste React Live Course Chapter 07 - Finding the Path 🚀
          <Outlet />
          <Link to="profile">profile</Link>
        </p>
      </div>
    );
  }
}
export default AboutClass;
