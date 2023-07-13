import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../Layout";
import Home from "../Pages/Home";
import WeatherApp from "../Pages/WeatherApp";
import { WeatherProvider } from "../Context";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" Component={Layout}>
      <Route index Component={Home} />
      <Route path="/weather-app" Component={WeatherApp} />
    </Route>
  )
);

function App() {
  return (
    <React.Fragment>
      <WeatherProvider>
        <RouterProvider router={router} />
      </WeatherProvider>
    </React.Fragment>
  );
}

export default App;
