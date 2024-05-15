import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Footer from "./components/Footer";
import Error from "./components/Error";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";


const AppLayout=()=>{
    return(
        <div className="app">
          <Header/>
          <Outlet/>
          <Footer/>
        </div>
    )
}

const appRouter = createBrowserRouter([
  {
    path: "/",                //if my path is ths
    element: <AppLayout />,   // load this
    children: [
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: <About/>,
      },  
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>,
      },
    ],
    errorElement : <Error/>
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter} />) ;

