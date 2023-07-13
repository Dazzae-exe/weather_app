import React from "react";
import { WeatherContext } from "../../Context";
import ForecastCard from "../ForecastCard";

function WeatherCard() {
  const { items, isLoading } = React.useContext(WeatherContext);

  return (
    <div className="w-full h-fit">
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <div className="flex justify-around items-center w-full h-fit">
            <figure className="flex items-center justify-center w-fit h-fit flex-col">
              <img
                src={`https:${items?.current.condition.icon}`}
                alt="icon weather"
                className="w-48 h-40"
              />
              <figcaption className="relative bottom-6 w-fit">
                {items?.current.condition.text}
              </figcaption>
            </figure>

            <div className="flex flex-col items-start">
              <h2 className="truncate w-fit text-3xl font-bold">
                {items?.location.country}
              </h2>
              <h3 className="w-fit truncate text-xl font-semibold">
                {items?.location.name}
              </h3>
            </div>

            <div className="flex flex-col items-start">
              <h2 className="truncate w-fit text-3xl font-bold">
                {items?.current.temp_c}°
              </h2>
              <h3 className="w-fit truncate text-xl font-semibold">
                Temperature
              </h3>
            </div>

            <div className="flex flex-col items-start">
              <h2 className="truncate w-fit text-3xl font-bold">
                {items?.current.humidity}%
              </h2>
              <h3 className="w-fit truncate text-xl font-semibold">Humidity</h3>
            </div>

            <div className="flex flex-col items-start">
              <h2 className="truncate w-fit text-3xl font-bold">
                {items?.current.wind_kph}km/h
              </h2>
              <h3 className="w-fit truncate text-xl font-semibold">
                Wind speed
              </h3>
            </div>
          </div>
          <div className="w-full h-fit flex items-center gap-x-1 justify-around">
            {items?.forecast.forecastday.map((forecast) => (
              <ForecastCard
                key={forecast.date}
                data={forecast.day}
                hour={forecast.date}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default WeatherCard;
