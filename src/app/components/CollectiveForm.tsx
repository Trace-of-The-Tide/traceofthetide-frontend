"use client";

import React, { useState } from "react";

export default function CollectiveForm() {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles([...files, ...Array.from(e.target.files)]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-8">
      <form className="bg-[#111] border border-[#2A2A2A] rounded-2xl p-8 max-w-xl w-full shadow-[0_0_20px_rgba(255,255,255,0.05)]">
        {/* Name fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm mb-1 text-gray-400">First name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-md px-3 py-2 focus:outline-none focus:border-[#C9A961]"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-gray-400">Last name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-md px-3 py-2 focus:outline-none focus:border-[#C9A961]"
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm mb-1 text-gray-400">Email address</label>
          <input
            type="email"
            placeholder="Placeholder..."
            className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-md px-3 py-2 focus:outline-none focus:border-[#C9A961]"
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-sm mb-1 text-gray-400">Phone number</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-md px-3 py-2 focus:outline-none focus:border-[#C9A961]"
          />
          <p className="text-xs text-gray-500 mt-1">
            Don't forget to write the phone number with your country code
          </p>
        </div>

        {/* Experience */}
        <div className="mb-4">
          <label className="block text-sm mb-1 text-gray-400">Experience field</label>
          <input
            type="text"
            placeholder="Select or write your experience field"
            className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-md px-3 py-2 focus:outline-none focus:border-[#C9A961]"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-sm mb-1 text-gray-400">Tell us about yourself</label>
          <textarea
            placeholder="Describe yourself, experience, or your projects. And why we should accept you."
            className="w-full h-28 bg-[#1A1A1A] border border-[#2A2A2A] rounded-md px-3 py-2 focus:outline-none focus:border-[#C9A961]"
          />
        </div>

        {/* Country & City */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm mb-1 text-gray-400">Country</label>
            <input
              type="text"
              placeholder="Select"
              className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-md px-3 py-2 focus:outline-none focus:border-[#C9A961]"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-gray-400">City</label>
            <input
              type="text"
              placeholder="Select"
              className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-md px-3 py-2 focus:outline-none focus:border-[#C9A961]"
            />
          </div>
        </div>

        {/* Upload */}
        <div className="mb-4">
          <label className="block text-sm mb-2 text-gray-400">Upload files</label>
          <div className="bg-[#1A1A1A] border border-dashed border-[#2A2A2A] rounded-md p-4 text-center text-gray-400 cursor-pointer hover:border-[#C9A961] transition-all">
            <input
              type="file"
              multiple
              className="hidden"
              id="file-upload"
              onChange={handleFileChange}
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              Drag and drop files here, or click to browse
            </label>
            <p className="text-xs mt-2 text-gray-500">
              Supported: JPG, PNG, PDF, MP3, MP4, DOC (Max 20MB)
            </p>
          </div>

          {files.map((file, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-[#1A1A1A] border border-[#2A2A2A] rounded-md px-3 py-2 mt-2"
            >
              <span className="text-sm text-gray-300">{file.name}</span>
              <button
                type="button"
                onClick={() => removeFile(index)}
                className="text-red-400 hover:text-red-500 text-xs"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        {/* Terms */}
        <div className="flex items-center gap-2 mb-6">
          <input type="checkbox" className="accent-[#C9A961]" />
          <label className="text-sm text-gray-400">
            I agree to the <span className="text-[#C9A961]">terms</span> and{" "}
            <span className="text-[#C9A961]">privacy policy</span>.
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-[#C9A961] hover:bg-[#B89851] text-black font-medium py-2 rounded-md transition-all"
        >
          Submit
        </button>

        <p className="text-center text-sm text-gray-500 mt-4">
          Go back to <span className="text-[#C9A961] cursor-pointer">Home page</span>
        </p>
      </form>
    </div>
  );
}
