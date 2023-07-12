import React from "react";

export const MainPage = () => {
  return (
    <main className="w-full bg-[#1C1C3A]  rounded-b-3xl   lg:flex lg:flex-row sm:flex sm:flex-col sm:items-center sm:justify-center">
      <div className="left-div w-1/2 flex justify-center">
        <img
          src="https://ik.imagekit.io/aq3ybtarw/landing/mobile-landing.webp?updatedAt=1680626119244"
          alt="img"
        />
      </div>
      <div className="right-div w-1/2 p-4 m-8 flex flex-col text-center ">
        <div className="lg:text-6xl text-white mt-5 font-semibold font-sans p-3 m-3 leading-24 sm:text-3xl">
          <span className=""> Gauge Water Purifier </span>
          <br />
          <span className="text-red-400">Puts An End </span>
          <span>To RO </span>
          <br />
          <span className="text-center">Service Pain</span>
        </div>
        <div className="mt-6 max-w-2xl">
          <span className="text-gray-400 leading-relaxed text-center text-base font-medium ">
            Fully automatic water purifier provides the highest water savings
            while ensuring a seamless service experience.
          </span>
        </div>
        <div className="mt-10">
        <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-full font-mono text-white bg-blue-500 p-5 ">
                Take a product tour
            </button>
        </div>
        <div className="mt-8 max-w-2xl">
          <span className="text-gray-400 leading-relaxed text-center text-base font-medium ">
          Experience Convenience Like Never Before With Our Smart Water Purifier
          </span>
        </div>
      </div>
    </main>
  );
};
