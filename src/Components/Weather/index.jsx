import React from "react";
import { WeatherContext } from "../../Context";
import WeatherCard from "../WeatherCard";

function Weather() {
  const { isLoading } = React.useContext(WeatherContext);

  return (
    <div className="container mx-auto w-full h-[400px] rounded-lg px-3 py-2 bg-palette-box text-palette-white flex items-center">
      {isLoading ? "loading..." : <WeatherCard />}
    </div>
  );
}

export default Weather;
