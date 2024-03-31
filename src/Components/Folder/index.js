import { saveValue } from "@/store/slice/editorSlice";
import React, { useState } from "react";
import { FaFolder, FaFolderOpen, FaFileAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const Folder = ({ folder }) => {
  const dispatch = useDispatch();
  const { listOfOpenFiles } = useSelector((state) => state.editor);
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleSelectFile = (file) => {
    const fileId = file.id;
    const isFileExist = listOfOpenFiles.find((file) => file.id === fileId);
    if (isFileExist) {
      return;
    }

    // setListOfOpenFiles([...listOfOpenFiles, file]);
    dispatch(
      saveValue({
        key: "listOfOpenFiles",
        value: [...listOfOpenFiles, file],
      })
    );
  };

  const handleCurrentFile = (fileName) => {
    console.log("fileName", fileName);
    dispatch(
      saveValue({
        key: "fileName",
        value: fileName,
      })
    );
  };

  return (
    <div>
      <div onClick={toggleCollapse} className="cursor-pointer p-1">
        {/* {collapsed ? "+" : "-"} {folder.name} */}
        <span className="flex flex-row gap-2 items-center	">
          {collapsed ? <FaFolder /> : <FaFolderOpen />} {folder.name}
        </span>
      </div>
      {!collapsed && (
        <div className="cursor-pointer ml-4 p-1">
          {folder.folders &&
            folder.folders.map((subfolder) => (
              <Folder key={subfolder.id} folder={subfolder} />
            ))}
          {folder.files &&
            folder.files.map((file) => (
              <div
                key={file.id}
                className="ml-4 p-1"
                onClick={() => {
                  handleSelectFile(file);
                  handleCurrentFile(file.name);
                }}
              >
                <span className="flex flex-row gap-2 items-center	">
                  <FaFileAlt /> {file.name}
                </span>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Folder;
