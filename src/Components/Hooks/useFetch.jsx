import React from "react";

function useFetch() {
  const [items, setItems] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const url = import.meta.env.VITE_BASE_URL;
    const params = {
      key: import.meta.env.VITE_API_KEY,
      q: "los angeles",
      days: 5,
    };

    fetch(url + new URLSearchParams(params))
      .then((res) =>
        !res.ok
          ? console.log(
              `API not working, please try later: status ${res.status}`
            )
          : res.json()
      )
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return { items, isLoading, setIsLoading, setItems };
}

export default useFetch;
