"use client";
import React from "react";
import LeftSidebar from "./LSidebar/LeftSidebar";
import CodeEditor from "./CodeEditor";
import RightSidebar from "./RSidebar/RightSidebar";
import { useSelector } from "react-redux";

const EditorLayout = () => {
  const { folders } = useSelector((state) => state.editor);

  return (
    <div className="p-4">
      <div className="flex justify-between">
        {/* Editor Header */}
        <div>
          <span>Sample Project</span>
        </div>
        <div className="flex gap-4">
          <button>Audit Now</button>
          <button>Options</button>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/4">
          <LeftSidebar folders={folders} />
        </div>
        <div className="w-1/2">
          <CodeEditor />
        </div>
        <div className="w-1/4">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default EditorLayout;
