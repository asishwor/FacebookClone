import { BsThreeDots } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { MdPublic } from "react-icons/md";
import { Link } from "react-router-dom";
import Comment from "./Comment";

interface propType {
  image: string;
  name: string;
  link?: string;
  post:string
  postImage:string
}

const Post = ({name,image, link,post, postImage}:propType) => {
  return (
    <div className="post w-[100%] grid bg-[var(--white-color)] rounded-lg p-3 ">
      <div className=" border-b-2 border-gray-300">
        <h2>
          <span className="text-sm text-[var(--body-font-color)] mr-2 mb-2 ">
            Album
          </span>
          <span className="font-bold text-md">{name}</span>
        </h2>
      </div>

      {/* profile header */}
      <div className="mt-3">
        <div className="profile flex place-items-start  ">
          <div className="h-[50px] w-[50px] rounded-[50%] overflow-hidden">
            <img src={image} alt="" />
          </div>
          {/*  profile and option */}
          <div className="name ml-2 grid">
            <Link to={"/profile"}>
              <span className="font-bold hover:underline cursor-pointer">
               {name}
              </span>
            </Link>
            <span className="text-[16px] flex items-center text-[var(--body-font-color)]">
              <span>2h</span>
              <span className="mr-2">
                <MdPublic />
              </span>
            </span>
          </div>
          {/* optins  */}
          <span className="ml-auto flex">
            <span className="p-2  rounded-[50%] hover:bg-[var(--section-bg-color)] cursor-pointer">
              <BsThreeDots />
            </span>
            <span className="p-2  rounded-[50%] hover:bg-[var(--section-bg-color)] cursor-pointer">
              <FaTimes />
            </span>
          </span>
          {/* status */}
        </div>
      </div>
      <div className="my-3 ">
        <p>
          ##मेरा रहरहरुका पाना पल्टाउदा तिम्रो हुने रहर हरेक पानामा भेटिने
          गर्छ!♥️माया Miss you Maya ❤️❤️RS 12/29/2022😍
        </p>
      </div>
      <div className="statusImage cursor-pointer mx-[-15px]">
        <img src={image} alt="" />
      </div>
      {/*  comment like section  */}
      <Comment />
    </div>
  );
};

export default Post;
