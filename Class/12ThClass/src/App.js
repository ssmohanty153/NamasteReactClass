import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantList from "./components/RestaurantList";
import ProfileClassComp from "./components/ProfileClassComp";
import Shimmer from "./components/Shimmer";
import AboutClass from "./components/AboutClass";
import UserContext from "./utils/UserContext";

const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Subhransu Sekhar Mohanty",
    email: "ssmohanty153@gmail.com",
  });
  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <AboutClass />,
        children: [
          {
            path: "profile",
            element: <ProfileClassComp />,
          },
        ],
      },
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantList />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
