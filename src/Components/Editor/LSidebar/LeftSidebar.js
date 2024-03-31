import Folder from "@/Components/Folder";
import React from "react";

const LeftSidebar = ({ folders }) => {
  return (
    <div className="w-full p-2">
      <h1 className="text-2xl font-bold mb-4">Folders & Files</h1>
      <Folder folder={folders} />
    </div>
  );
};

export default LeftSidebar;
