"use client"

import { useRouter } from "next/navigation";
import React from "react";

const Profile = () => {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path || "/");
  };

  return (
    <div className="w-96 px-6 py-6  text-center bg-gray-800 rounded-lg lg:mt-0 xl:px-10">
      <div className="space-y-4 xl:space-y-6">
        <img
          className="mx-auto rounded-full h-36 w-36"
          src="https://res.cloudinary.com/ddcd2cxvz/image/upload/v1613737101/Portfolio%20photos/IMG_2480_aslhjp.jpg"
          alt="author avatar"
        />
        <div className="space-y-2">
          <div className="flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6">
            <h3 className="text-white">Abhishek Kadiwala</h3>
            <p className="text-indigo-300">React.Js Developer</p>
            <a
              className="flex justify-center mt-5 space-x-5"
              href="https://abhishekkadiwala.netlify.app/"
              target="_blank"
            >
              Click Me
            </a>
          </div>
          <button className="p-5" onClick={() => handleNavigation("/")}>Home</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
