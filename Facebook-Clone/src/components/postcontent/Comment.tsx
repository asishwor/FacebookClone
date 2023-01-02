import { AiFillHeart, AiFillLike, AiOutlineHeart } from "react-icons/ai";
import { FaEmber, FaRegCommentAlt, FaRegLaughBeam } from "react-icons/fa";
import { BiComment, BiLike } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
interface commentProp {
  profile?: string;
}
const Comment = ({ profile }: commentProp) => {
  return (
    <div className="mt-3 ">
      <div>
        <div className="flex gap-[2px] pb-[5px] border-b-2 border-gray-300">
          <AiFillLike className="cursor-pointer hover:text-[var(--primary-color)] text-xl" />
          <AiFillHeart className="cursor-pointer hover:text-[var(--primary-color)] text-xl" />
          <AiOutlineHeart className="cursor-pointer hover:text-[var(--primary-color)] text-xl" />
          <FaRegLaughBeam className="cursor-pointer hover:text-[var(--primary-color)] text-xl" />
          <div>
            <p className="text-[var(--body-font-color)] text-sm ml-[10px]">
              <span className="cursor-pointer hover:underline ml-2 hover:text-[var(--primary-color)]">
                Ashok Khadka{" "}
              </span>
              <span> and</span>
              <span className="cursor-pointer hover:underline hover:text-[var(--primary-color)] ml-2">
                40 others
              </span>
            </p>
          </div>
          <div className="commentCount ml-auto cursor-pointer text-sm text">
            <span className="text-[var(--body-font-color)] hover:underline">
              3 comments
            </span>
          </div>
        </div>
        {/*  Likre comment share */}
        <div className="flex justify-between">
          <div className="text-[var(--body-font-color)] flex justify-center font-bold flex-grow-[1] py-2  w-[100%] cursor-pointer hover:bg-[var(--section-bg-color)] text-sm items-center">
            <span className="mr-2">
              <BiLike />
            </span>
            <span className="">Like</span>
          </div>
          {/* comment button */}
          <div className="text-[var(--body-font-color)] flex justify-center font-bold flex-grow-[1] py-2  w-[100%] cursor-pointer hover:bg-[var(--section-bg-color)] text-sm items-center">
            <span className="mr-2">
              <FaRegCommentAlt />
            </span>
            <span className="">Comment</span>
          </div>
          {/* share button */}
          <div className="text-[var(--body-font-color)] flex justify-center font-bold flex-grow-[1] py-2  w-[100%] cursor-pointer hover:bg-[var(--section-bg-color)] text-sm items-center">
            <span className="mr-2">
              <RiShareForwardLine />
            </span>
            <span className="">Share</span>
          </div>
        </div>
        {/*  WRITE COMMENT  */}
        <div>
          <div className="mt-2 flex items-center w-[100%]">
            <div className="profile h-[50px] w-[50px] rounded-[50%] overflow-hidden object-center">
              <img src={profile} alt="profile" />
            </div>
            <div className="comment__box ml-2 flex gap-1  flex-grow-[1] text-[var(--body-font-color)] ">
              <input
                type="text"
                placeholder="Write Comment"
                className="text-sm "
              />
              <div className="ml-auto flex">
                <BiComment />
                <BiComment />
                <BiComment />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
