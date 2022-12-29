import { FaFacebook, FaSearch, FaUsers, FaVideo } from "react-icons/fa";
import {
  MdNotifications,
  MdOutlineHome,
  MdOutlineOndemandVideo,
} from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { CiShop } from "react-icons/ci";
import { MdOutlineApps } from "react-icons/md";
import { RiMessengerFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { Header } from "./Header.style";
import { Link } from "react-router-dom";

const HeaderComponents = () => {
  return (
    <>
      <Header className="bg-[var(--white-color)] shadow-md ">
        <nav className="flex justify-between text-[var(--body-font-color)] items-center  px-4">
          <div className="logo flex items-center   " aria-label="facebook-logo">
            <Link to={"/"}>
              <FaFacebook
                className="text-[var(--primary-color)] text-4xl cursor-pointer"
                aria-label="facebook-logo"
              />
            </Link>
            <div
              aria-label="facebook search"
              className="search flex justify-center items-center rounded-3xl cursor-pointer  border bg-[var(--section-bg-color)] py-[5px] px-[10px] ml-2 rad"
            >
              <label htmlFor="search">
                <FaSearch className="cursor-pointer" />
              </label>
              <input
                id="search"
                placeholder="Search Facebook"
                className="  focus:outline-none placeholder:text-[var(--body-font-color)] placeholder:font-[500] active:outline-none ml-2  focus:border-[var(--white-color)] border-0 bg-[var(--section-bg-color)] sm:block hidden"
                type="text "
              />
            </div>
          </div>
          {/*  Link for navigation  */}
          {/* desktop menu */}
          <div className="menuBar sm:flex hidden  text-3xl gap-[40px] items-center justify-between">
            <NavLink
              className={
                "hover:bg-[var(--section-bg-color)] py-[10px] px-[35px] hover:py-[10px] hover:px-[35px] hover:rounded-xl"
              }
              to={"/"}
            >
              <MdOutlineHome />
            </NavLink>
            <NavLink
              to={"/watch"}
              className={
                "hover:bg-[var(--section-bg-color)] py-[10px] px-[35px] hover:py-[10px] hover:px-[35px] hover:rounded-xl"
              }
            >
              <MdOutlineOndemandVideo />
            </NavLink>
            <NavLink
              to={"/shop"}
              className={
                "hover:bg-[var(--section-bg-color)] py-[10px] px-[35px] hover:py-[10px] hover:px-[35px] hover:rounded-xl"
              }
            >
              <CiShop />
            </NavLink>
            <NavLink
              to={"/user"}
              className={
                "hover:bg-[var(--section-bg-color)] py-[10px] px-[35px] hover:py-[10px] hover:px-[35px] hover:rounded-xl"
              }
            >
              <FaUsers />
            </NavLink>
          </div>
          {/* MObile Menu */}
          <div
            className={
              "text-3xl ml-3 cursor-pointer active:text-[var(--primary-color)] transition-all ease-in-out md:hidden block hover:ease-in-out  hover:bg-[var(--section-bg-color)]py-[10px] px-[35px] hover:py-[10px] hover:px-[35px] hover:rounded-xl"
            }
          >
            <AiOutlineMenu />
          </div>

          {/*  Right menu */}
          <div className="rightMenu flex  ml-2 items-center text-3xl gap-2">
            <div className="p-[7px] mr-[10px] cursor-pointer hover:bg-gray-200 bg-[var(--section-bg-color)] rounded-[50%]">
              <MdOutlineApps />
            </div>
            <div className="p-[7px] mr-[10px] cursor-pointer hover:bg-gray-200 bg-[var(--section-bg-color)] rounded-[50%]">
              <RiMessengerFill />
            </div>
            <div className="p-[7px] mr-[10px] cursor-pointer hover:bg-gray-200 bg-[var(--section-bg-color)] rounded-[50%]">
              <MdNotifications />
            </div>

            <div className="avatar w-[30px] h-[100%] text-[5px]">
              <img
                src="/Images/profile.jpg "
                className="w-[50px] h-[50px] rounded-[50%] object-cover"
                alt="profile image"
              />
            </div>
          </div>
        </nav>
      </Header>
    </>
  );
};

export default HeaderComponents;
