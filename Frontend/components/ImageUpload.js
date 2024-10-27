import { useDropzone } from "react-dropzone";
import { FiStar, FiTrash } from "react-icons/fi";

export default function ImageUpload() {
  return (
    <div className="flex gap-10">
      <div className="w-56 h-56 border-2 border-white rounded-md flex flex-col place-items-center place-content-center hover:cursor-pointer">
        <div>
          <p>Image/Video Upload</p>
          <p className="text-center">(Drag and drop)</p>
        </div>
        <input type="file" />
      </div>
      <div className="flex flex-col gap-2 h-56 overflow-y-scroll">
        <div className="flex flex-col gap-2">
          <div className="border-2 border-white w-44 h-24 rounded-md relative">
            <div className="flex flex-col absolute right-0 p-1">
              <FiStar className="hover:cursor-pointer" size={22} />
              <FiTrash className="hover:cursor-pointer" size={22} />
            </div>
          </div>
          <div className="border-2 border-white w-44 h-24 rounded-md relative">
            <div className="flex flex-col absolute right-0 p-1">
              <FiStar size={22} />
              <FiTrash size={22} />
            </div>
          </div>
          <div className="border-2 border-white w-44 h-24 rounded-md relative">
            <div className="flex flex-col absolute right-0 p-1">
              <FiStar size={22} />
              <FiTrash size={22} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
