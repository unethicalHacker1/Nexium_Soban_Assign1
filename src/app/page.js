"use client";
import Link from "next/link";

const Pages = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 flex flex-col justify-center items-center text-center px-4 py-10">
      <h1 className="text-white text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-md">
        Welcome to the <span className="text-yellow-300">Quote Generator!</span>
      </h1>

      <p className="text-white text-lg md:text-xl font-light max-w-xl mb-10">
        Click the button below to generate an amazing motivational quote that inspires your day.
      </p>

      <Link
        href="/quotes"
        className="bg-white text-purple-700 text-lg font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-300 hover:text-indigo-800 transition duration-300 ease-in-out"
      >
        Generate a Quote
      </Link>
    </div>
  );
};

export default Pages;
