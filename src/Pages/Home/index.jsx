import React from "react";
import Icon from "../../Components/Icon";

function Home() {
  return (
    <div className="container mx-auto w-full h-fit flex flex-col items-start justify-start gap-16 mt-8">
      <div className="flex w-full h-fit flex-col gap-y-3">
        <h1 className="text-5xl font-black">Nubes - Wheather App</h1>
        <p>
          Welcome to <strong>Nubes App</strong>. Do you need to know the
          weather for these days? You can use this app to check the wheather of
          any city around the world.
        </p>

        <div className="w-full h-32 rounded-xl bg-palette-box flex flex-col items-center justify-center">
          <Icon icon="cloud" className="w-24 h-24 text-palette-white" />
          <span className="relative bottom-4 text-sm text-center w-full text-palette-white">
            WeatherAPI
          </span>
        </div>
      </div>

      <div className="flex w-full h-fit flex-col gap-y-3">
        <h2 className="text-3xl font-bold">Stack</h2>
        <div className="w-full h-32 rounded-xl bg-palette-box flex items-center justify-center gap-x-8">
          <Icon icon="react" className="w-24 h-24 text-palette-white" />
          <Icon icon="tailwind" className="w-24 h-24 text-palette-white" />
          <Icon icon="reactrouter" className="w-24 h-24 text-palette-white" />
          <Icon icon="framer" className="w-24 h-24 text-palette-white" />
        </div>
      </div>

      <div className="flex w-full h-fit flex-col gap-y-3">
        <h2 className="text-3xl font-bold">How to use it?</h2>
        <p>
          It&apos;s that easy just clicking in <strong>App</strong> into the
          Navbar it will lead you directly to the weather app. You will have a
          search input where you can search your city, and the default weather time is in LA.
        </p>
      </div>
    </div>
  );
}

export default Home;
