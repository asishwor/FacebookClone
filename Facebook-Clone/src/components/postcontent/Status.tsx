import React from "react";
import { MdVideoCall } from "react-icons/md";
import { TfiGallery } from "react-icons/tfi";

const PostStatus = () => {
  return (
    <>
      <div>
        <div className="p-2 rounded-2xl bg-[var(--white-color)] shadow-2xl">
          <div className="flex">
            <div className=" overflow-hidden h-[50px] cursor-pointer b object-cover w-[50px] rounded-[50%]">
              <img src="/Images/profile.jpg " alt="" />
            </div>
            <input
              type="text"
              className="flex-1 px-4 rounded-[30px] ml-2 cursor-pointer hover:bg-gray-200 font-bold bg-[var(--section-bg-color)]"
              placeholder="What's on your mind Ishwor ?"
            />
          </div>
          {/*  Live Videos */}
          <div className="flex mt-[10px]">
            <div className="flex-grow-[1] flex justify-center items-center cursor-pointer text-md font-semibold text-[var(--body-font-color)]  rounded-lg hover:bg-[var(--section-bg-color)] py-1 my-2">
              <MdVideoCall className="text-[var(--color-danger)] text-2xl " />
              <span className="ml-1">Live video</span>
            </div>

            <div className="flex-grow-[1] flex justify-center items-center cursor-pointer text-md font-semibold text-[var(--body-font-color)]  rounded-lg hover:bg-[var(--section-bg-color)] py-1 my-2">
              <TfiGallery className="text-[var(--success-color)] text-xl " />
              <span className="ml-1 ">Upload Images</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostStatus;
