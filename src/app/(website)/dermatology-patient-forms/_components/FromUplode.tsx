"use client";

import type React from "react";

import { useState, useRef } from "react";
import { Upload } from "lucide-react";

export default function FromUplode() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      if (
        droppedFile.type === "application/pdf" &&
        droppedFile.size <= 5 * 1024 * 1024
      ) {
        setFile(droppedFile);
      } else {
        alert("Please upload a PDF file under 5MB");
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      if (
        selectedFile.type === "application/pdf" &&
        selectedFile.size <= 5 * 1024 * 1024
      ) {
        setFile(selectedFile);
      } else {
        alert("Please upload a PDF file under 5MB");
      }
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = () => {
    if (file) {
      console.log("Uploading file:", file.name);
      alert(`File "${file.name}" uploaded successfully!`);
      setFile(null);
    } else {
      alert("Please select a file to upload");
    }
  };

  return (
    <div className=" container px-4 py-8">
      <h2 className="text-center text-[24px] md:text-[32px] font-semibold text-[#A66A47] mb-10">
        UPLOAD FORM
      </h2>

      <p className="text-xl md:text-[24px] text-[#A66A47] font-semibold mb-2">
        Upload your completed forms using the secure form below.
      </p>

      <p className="text-base md:text-[18px] text-[#698B8F] mb-6">
        Accepted file formats: PDF. Maximum file size: 5MB.
      </p>

      <div
        className={`border-2 border-dashed rounded-lg p-8 mb-6 flex flex-col items-center justify-center cursor-pointer transition-colors
          ${
            isDragging
              ? "border-[#B27C50] bg-[#B27C50]/5"
              : "border-[#B27C50]/30"
          }
          ${file ? "bg-[#B27C50]/5" : ""}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleUploadClick}
        style={{ minHeight: "139px" }}
      >
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept=".pdf"
          onChange={handleFileChange}
        />

        <Upload className="w-10 h-10 text-[#B27C50] mb-4" />

        {file ? (
          <div className="text-center">
            <p className="font-medium text-[#B27C50]">File selected:</p>
            <p className="text-gray-600">{file.name}</p>
          </div>
        ) : (
          <p className="text-[#B27C50] text-center">
            Drag and Drop File Upload Area
          </p>
        )}
      </div>

      <div className="">
        <button
          className="bg-[#C7925B] hover:bg-[#C7925B]/80 text-base md:text-[18px] text-white font-medium py-2 px-6 rounded-md transition-colors"
          onClick={handleSubmit}
        >
          Upload & Submit
        </button>
      </div>
    </div>
  );
}
