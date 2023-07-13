import React from "react";
import useFetch from "../Components/Hooks/useFetch";

const WeatherContext = React.createContext();

function WeatherProvider({ children }) {
  const { items, isLoading, setIsLoading, setItems } = useFetch();

  const searchWeather = async (value) => {
    setIsLoading(true);
    const url = import.meta.env.VITE_BASE_URL;
    const params = { key: import.meta.env.VITE_API_KEY, q: value, days: 5 };

    const fetchData = await fetch(url + new URLSearchParams(params))
      .then((res) => (!res.ok ? console.log(res.status) : res.json()))
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));

    return fetchData;
  };

  return (
    <WeatherContext.Provider value={{ items, isLoading, searchWeather }}>
      {children}
    </WeatherContext.Provider>
  );
}

export { WeatherContext, WeatherProvider };
