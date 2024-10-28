"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiStar, FiTrash } from "react-icons/fi";

export default function ImageUpload({ filesState, setFilesState }) {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFilesState([
        ...filesState,
        ...acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
            featured: false,
          })
        ),
      ]);
    },
  });

  useEffect(() => {
    return () =>
      filesState.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [filesState]);

  return (
    <div className="flex gap-10">
      <div
        {...getRootProps()}
        className="w-56 h-56 border-2 border-dashed border-white rounded-md flex flex-col place-items-center place-content-center hover:cursor-pointer"
      >
        <input {...getInputProps()} />
        <div>
          <p>Image/Video Upload</p>
          <p className="text-center">(Drag and drop)</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 h-56 overflow-y-auto">
        <div className="flex flex-col gap-4 mr-1">
          {filesState.map((file) => (
            <div key={file.name} className="w-44 h-24 rounded-md relative">
              <Image
                src={file.preview}
                onLoad={() => URL.revokeObjectURL(file.preview)}
                className="absolute w-44 h-[6.5rem] rounded-md border-white border-2"
                alt={file.name}
                width={176}
                height={96}
              />
              <div className="flex flex-col absolute right-0 p-1">
                <FiStar
                  fill={file.featured == true ? "white" : "none"}
                  onClick={() =>
                    setFilesState(
                      filesState.map((fileItem) => {
                        if (fileItem.name == file.name) {
                          fileItem.featured = !fileItem.featured;
                          return fileItem;
                        } else {
                          fileItem.featured = false;
                          return fileItem;
                        }
                      })
                    )
                  }
                  className="hover:cursor-pointer"
                  size={22}
                />
                <FiTrash
                  onClick={() => {
                    setFilesState(
                      filesState.filter(
                        (fileItem) => fileItem.name != file.name
                      )
                    );
                  }}
                  className="hover:cursor-pointer"
                  size={22}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
