import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Subhransu Sekhar Mohanty",
    email: "ssmohanty153@gmail.com",
  },
});
export default UserContext;
