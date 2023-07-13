import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Icon from "../Icon";
import { WeatherContext } from "../../Context";

function SearchWeather() {
  const { searchWeather } = React.useContext(WeatherContext);

  const form = useFormik({
    initialValues: {
      search: "",
    },
    validationSchema: Yup.object({
      search: Yup.string()
        .max(55, "Which city are you looking for?")
        .required("Type any city before submit."),
    }),
    onSubmit: (values) => {
      searchWeather(values.search);
    },
  });

  return (
    <form
      onSubmit={form.handleSubmit}
      className="relative mx-auto container w-full flex flex-col items-end justify-end"
    >
      <input
        type="text"
        name="search"
        id="search"
        {...form.getFieldProps("search")}
        placeholder="Search any city..."
        className="pl-2 py-1 pr-8 rounded-full bg-transparent ring-1 ring-black/20 placeholder:text-palette-purple/60 outline-none transition-all ease-in-out duration-300 focus:ring-1 focus:ring-palette-purple shadow-sm"
      />
      {form.touched.search && form.errors.search ? (
        <span className="absolute top-8 right-0 mb-3 text-sm text-red-400">
          {form.errors.search}
        </span>
      ) : null}

      <button
        type="submit"
        className="absolute top-1 right-1 p-0.5 rounded-full bg-transparent hover:bg-palette-background/60 transition-all ease-in-out duration-300"
      >
        <Icon icon="search" className="w-5 h-5" />
      </button>
    </form>
  );
}

export default SearchWeather;
