import React from "react";

function ForecastCard({ data, hour }) {
  return (
    <div className="w-36 p-2 h-40 rounded-lg bg-palette-background/60 text-palette-purple flex flex-col justify-between items-center">
      <span className="text-sm font-light">{data?.condition.text}</span>

      <figure className="flex">
        <img src={data?.condition.icon} alt="..." className="w-12 h-12" />
      </figure>

      <span className="text-sm font-light">{hour.replaceAll("-", "/")}</span>
    </div>
  );
}

export default ForecastCard;
