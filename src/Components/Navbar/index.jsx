import React from "react";

// dependencies
import { NavLink, useLocation } from "react-router-dom";
import { CloudIcon } from "@heroicons/react/24/outline";

// components
import SearchWeather from "../SearchWeather";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="sticky top-0 left-0 w-full h-20 flex items-center bg-palette-background/10 z-10 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between">
        <ul className="relative container mx-auto w-full h-full flex items-center justify-start gap-x-3">
          <li>
            <NavLink to="/" className="text-xl font-semibold">
              <CloudIcon className="w-6 h-6" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-sm underline underline-offset-4"
                  : "text-sm"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/weather-app"
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-sm underline underline-offset-4"
                  : "text-sm"
              }
            >
              App
            </NavLink>
          </li>
        </ul>

        {location.pathname === "/weather-app" ? <SearchWeather /> : null}
      </div>
    </nav>
  );
}

export default Navbar;
