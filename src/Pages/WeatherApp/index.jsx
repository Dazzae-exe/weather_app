import React from "react";
import Weather from "../../Components/Weather";

function WeatherApp() {
  return (
    <div className="w-full h-full flex flex-col gap-y-4">
      <h2 className="container mx-auto text-3xl font-semibold mt-8">App</h2>
      <Weather />
    </div>
  );
}

export default WeatherApp;
