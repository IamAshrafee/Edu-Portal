import { AiOutlinePlusCircle } from "react-icons/ai";
import React from "react";
import Admin_SideBar from "../Common/Admin_SideBar";

const AdminHome = () => {
  return (
    <div className="flex gap-4">
      <div className="p-4 flex-1 bg-gray-200">
        <p className="pb-4 border-gray-300 border-b">Users List</p>
        <div className="flex flex-col gap-2.5">
          <div className="w-full bg-gray-400 flex justify-between">
            <div>
              <p>Name</p>
              <p className="text-[12px]">name@gmail.com</p>
            </div>
            <div className="flex items-center">
              <button className="flex gap-2.5 justify-center items-center bg-gray-600 cursor-pointer text-white px-1.5 ">
                <AiOutlinePlusCircle /> Add Courses
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 flex-2 bg-gray-200">
        <div className="flex justify-between">
          <p className="pb-4 border-gray-300 border-b">Course List</p>
          <div>
            <input type="text" />
            <button className="bg-gray-600 cursor-pointer text-white px-1.5">
              Create
            </button>
          </div>
          <button className="flex gap-2.5 justify-center items-center bg-gray-600 cursor-pointer text-white px-1.5 ">
            <AiOutlinePlusCircle />
            Create new course
          </button>
        </div>

        {/* Course Name List (Commented only for do designing) */}
        {/* <div className="flex flex-col gap-2.5">
          <div className="w-full p-4 bg-gray-400 flex justify-between">
            <div>
              <p>Batch 11</p>
            </div>
            <div className="flex items-center">
              <button className="flex gap-2.5 justify-center items-center bg-gray-600 cursor-pointer text-white px-1.5 ">
                Enter
              </button>
            </div>
          </div>
          <div className="w-full p-4 bg-gray-400 flex justify-between">
            <div>
              <p>Batch 12</p>
            </div>
            <div className="flex items-center">
              <button className="flex gap-2.5 justify-center items-center bg-gray-600 cursor-pointer text-white px-1.5 ">
                Enter
              </button>
            </div>
          </div>
        </div> */}

        {/* Subject List */}
        <div className="flex flex-col gap-2.5">
          <div className="w-full p-4 bg-gray-400 flex justify-between">
            <div className="flex gap-3 items-center ">
              <img className="w-8"
                src="https://ums-public-cdn.udvash-unmesh.com/UmsStudyImage/2502/d260c868-9471-46d8-bb4c-2e9f593e3cf6.png"
                alt=""
              />
              <p>English</p>
            </div>
            <div className="flex items-center">
              <button className="flex gap-2.5 justify-center items-center bg-gray-600 cursor-pointer text-white px-1.5 ">
                Enter
              </button>
            </div>
          </div>
          <div className="w-full p-4 bg-gray-400 flex justify-between">
           <div className="flex gap-3 items-center ">
              <img className="w-8"
                src="https://ums-public-cdn.udvash-unmesh.com/UmsStudyImage/2502/d260c868-9471-46d8-bb4c-2e9f593e3cf6.png"
                alt=""
              />
              <p>Bangla 1st Paper</p>
            </div>
            <div className="flex items-center">
              <button className="flex gap-2.5 justify-center items-center bg-gray-600 cursor-pointer text-white px-1.5 ">
                Enter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
