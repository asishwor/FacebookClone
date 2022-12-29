import { FaBusinessTime, FaCaretDown, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { ImUsers } from "react-icons/im";
import { AiOutlineShop } from "react-icons/ai";

const LeftAside = () => {
  return (
    <>
      <div className="left__top   my-[30px] w-[300px] lg:block hidden">
        <div className="profile">
          <div className="profile__image flex hover:bg-gray-200 p-2 rounded-lg items-center font-bold text-[20px] text-[var(--heading-font-color)]">
            <img
              src="/Images/profile.jpg"
              alt="profile image"
              className="rounded-[50%] object-cover h-[50px] cursor-pointer w-[50px]"
            />
            <div className="name ml-2">Ishwor Khadka</div>
          </div>
          <div className="menuList">
            <ul className="grid mt-2">
              <li>
                <Link
                  className="flex items-center text-[16px] gap-3 font-bold  hover:bg-gray-200 p-2 rounded-lg"
                  to=""
                >
                  <ImUsers className="text-[var(--primary-color)] text-2xl " />
                  Friends
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center text-[16px] gap-3 font-bold  hover:bg-gray-200 p-2 rounded-lg"
                  to=""
                >
                  <FaBusinessTime className="text-[var(--primary-color)] text-2xl" />
                  Most Recent
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center text-[16px] gap-3 font-bold  hover:bg-gray-200 p-2 rounded-lg"
                  to=""
                >
                  <FaUsers className="text-[var(--primary-color)]  text-2xl" />
                  Groups
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center text-[16px] gap-3  font-bold hover:bg-gray-200 p-2 rounded-lg"
                  to=""
                >
                  <AiOutlineShop className="text-[var(--primary-color)] text-2xl" />
                  Marketplace
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center text-[16px] gap-3  font-bold hover:bg-gray-200 p-2 rounded-lg"
                  to=""
                >
                  <MdOutlineOndemandVideo className="text-[var(--primary-color)] text-2xl" />
                  Watch
                </Link>
              </li>

              <button className="flex items-center text-[16px] hover:text-[var(--primary-color)] gap-3">
                <FaCaretDown /> See more
              </button>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftAside;
