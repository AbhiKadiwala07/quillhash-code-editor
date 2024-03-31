"use client";
import React, { useEffect, useRef, useState } from "react";
import MonacoEditor from "@monaco-editor/react";
import files from "@/utils/fileConstant";
import { useDispatch, useSelector } from "react-redux";
import { saveValue } from "@/store/slice/editorSlice";

const CodeEditor = () => {
  const dispatch = useDispatch();
  const { fileCode, listOfOpenFiles, fileName, currentFile } = useSelector(
    (state) => state.editor
  );
  console.log("fileName", fileName);

  const editorRef = useRef(null);

  const file = files[fileName];
  console.log("file", file);

  useEffect(() => {
    editorRef.current?.focus();
  }, [file?.name]);

  const handleClose = (fileId) => {
    const filteredFiles = listOfOpenFiles.filter((file) => file.id !== fileId);
    dispatch(
      saveValue({
        key: "listOfOpenFiles",
        value: filteredFiles,
      })
    );

    if (filteredFiles?.length >= 0) {
      return;
    }
    // active filename
    dispatch(
      saveValue({
        key: "fileName",
        value: filteredFiles[0].name,
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
    <div className="w-full p-2">
      <div className="flex gap-3">
        {listOfOpenFiles?.map((file) => (
          <button
            disabled={file.name === currentFile}
            onClick={() => handleCurrentFile(file.name)}
          >
            {file.name}
            <button className="ml-1" onClick={() => handleClose(file.id)}>
              &times;
            </button>
          </button>
        ))}
      </div>
      {file && (
        <MonacoEditor
          height="600px"
          path={file.name}
          defaultLanguage={file.language}
          defaultValue={file.value}
          onMount={(editor) => (editorRef.current = editor)}
        />
      )}
    </div>
  );
};

export default CodeEditor;
