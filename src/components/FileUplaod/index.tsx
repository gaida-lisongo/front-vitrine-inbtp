import { useRef, useState } from "react";
import { upload } from "../Blog/uplaod.action";


const FileUpload = ({selectedFile, setSelectedFile}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    setSelectedFile(file || null);
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="mb-6">
      {/* Hidden original file input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        className="hidden"
        accept=".pdf,.doc,.docx"
      />

      {/* Styled button trigger */}
      <div className="mb-3">
        <button
          onClick={triggerFileSelect}
          className="flex items-center justify-center gap-2 w-full rounded-md bg-white border-2 border-dashed border-primary px-6 py-4 text-base font-medium text-body-color transition duration-300 ease-in-out hover:bg-opacity-80"
        >
          <svg 
            className="w-6 h-6 text-primary"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
            />
          </svg>
          <span>Choisir un fichier</span>
        </button>
      </div>

      {/* Selected file name */}
      {selectedFile && (
        <div className="flex items-center justify-between bg-opacity-10 bg-primary rounded-md p-3">
          <span className="text-sm text-body-color truncate">
            {selectedFile.name}
          </span>
          <button
            onClick={() => setSelectedFile(null)}
            className="text-red-500 hover:text-red-700"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default FileUpload;