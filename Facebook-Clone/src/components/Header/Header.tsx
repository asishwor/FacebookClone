import { FaFacebook, FaSearch, FaUsers } from "react-icons/fa";
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
import { useDispatch, useSelector } from "react-redux";
import { ShowLeft, ShowRight } from "../../statemanagement/Action";
import { MenuToggleReducer } from "../../statemanagement/Redcer";
const HeaderComponents = () => {
  const dispatch = useDispatch();
  const toggleMenu = useSelector((state: any) => state.MenuToggleReducer);
  console.log(toggleMenu);
  return (
    <>
      <Header className="bg-[var(--white-color)] z-[999] shadow-md  h-[56px] ">
        {/*  mobile menu  */}
        <div className="sm:hidden flex gap-3 pt-1 z-[999] bg-white items-center">
          <Link to={"/"}>
            <FaFacebook
              className="text-[var(--primary-color)] text-4xl cursor-pointer"
              aria-label="facebook-logo"
            />
          </Link>
          <div
            aria-label="facebook search"
            className="search flex  justify-center items-center rounded-3xl cursor-pointer  border bg-[var(--section-bg-color)] py-[5px] px-[10px] ml-2 "
          >
            <label htmlFor="search">
              <FaSearch className="cursor-pointer" />
            </label>
            <input
              id="search"
              placeholder="Search Facebook"
              className="    focus:outline-none placeholder:text-[var(--body-font-color)] placeholder:font-[500] active:outline-none ml-2  focus:border-[var(--white-color)] border-0 bg-[var(--section-bg-color)] lg:block hidden"
              type="text "
            />
          </div>
          {/* messenger and notification */}
          <div className="p-[7px] mr-[10px] cursor-pointer hover:bg-gray-200 bg-[var(--section-bg-color)] rounded-[50%]">
            <RiMessengerFill />
          </div>
          <div className="p-[7px] mr-[10px] cursor-pointer hover:bg-gray-200 bg-[var(--section-bg-color)] rounded-[50%]">
            <MdNotifications />
          </div>
          {/*  Menu toggle */}
          <div
            className={
              " ml-auto text-xl sm:ml-3 z-50 cursor-pointer active:text-[var(--primary-color)] transition-all ease-in-out sm:hidden block hover:ease-in-out  hover:bg-[var(--section-bg-color)]py-[10px] px-[15px] hover:text-[var(--primary-color)] hover:py-[10px] hover:px-[15px] hover:rounded-xl"
            }
            onClick={() => {
              dispatch(ShowLeft());
            }}
          >
            <AiOutlineMenu />
          </div>
          <div
            onClick={() => dispatch(ShowRight())}
            className="p-[7px] z-[300] mr-[10px] cursor-pointer hover:bg-gray-200 bg-[var(--section-bg-color)] rounded-[50%]"
          >
            <MdOutlineApps />
          </div>
        </div>
        {/* for pages navigation */}
        {toggleMenu.leftToggle === false &&
          toggleMenu.rightToggle === false && (
            <div className="sm:hidden z-[999] transition-all relative shadow-lg bg-white text-3xl justify-center  flex">
              <NavLink to={"/"} className="p-4 hover:bg-gray-200 active:py-2 hover:rounded-md active:rounded-none">
                <MdOutlineHome />
              </NavLink>
              <NavLink
                to={"/video"}
                className="p-4 hover:bg-gray-200 hover:rounded-md active:rounded-none"
              >
                <MdOutlineOndemandVideo />
              </NavLink>
              <NavLink to='user' className="p-4 hover:bg-gray-200 hover:rounded-md active:rounded-none">
                <FaUsers />
              </NavLink>
              <NavLink to='/shopping' className="p-4 hover:bg-gray-200 hover:rounded-md active:rounded-none">
                <CiShop />
              </NavLink>
            </div>
          )}

        {/*  Desktop menu */}
        <nav className="flex sm:justify-between text-[var(--body-font-color)]  items-center  px-4">
          <div
            className="logo relative z-40 hidden  sm:flex items-center  overflow-hidden  "
            aria-label="facebook-logo"
          >
            <Link to={"/"}>
              <FaFacebook
                className="text-[var(--primary-color)] text-4xl cursor-pointer"
                aria-label="facebook-logo"
              />
            </Link>
            <div
              aria-label="facebook search"
              className="search flex  justify-center items-center rounded-3xl cursor-pointer  border bg-[var(--section-bg-color)] py-[5px] px-[10px] ml-2 "
            >
              <label htmlFor="search">
                <FaSearch className="cursor-pointer" />
              </label>
              <input
                id="search"
                placeholder="Search Facebook"
                className="focus:outline-none placeholder:text-[var(--body-font-color)] placeholder:font-[500] active:outline-none ml-2  focus:border-[var(--white-color)] border-0 bg-[var(--section-bg-color)] lg:block hidden"
                type="text "
              />
            </div>
          </div>
          {/*  Link for navigation  */}
          {/* desktop menu */}
          <div className="menuBar sm:mx-[-20px] fixed w-[100vw] sm:flex hidden text-xl md:text-3xl  items-center justify-center">
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
            <NavLink
              to={"/user"}
              className={
                "hover:bg-[var(--section-bg-color)] py-[10px] px-[35px] hover:py-[10px] hover:px-[35px] hover:rounded-xl"
              }
            >
              <FaUsers />
            </NavLink>
          </div>
          {/* Mobile Menu */}
          <div
            className={
              " ml-auto text-xl sm:ml-3 z-50 cursor-pointer active:text-[var(--primary-color)] transition-all ease-in-out md:hidden sm:block hidden hover:ease-in-out  hover:bg-[var(--section-bg-color)]py-[10px] px-[15px] hover:text-[var(--primary-color)] hover:py-[10px] hover:px-[15px] hover:rounded-xl"
            }
            onClick={() => {
              dispatch(ShowLeft());
            }}
          >
            <AiOutlineMenu />
          </div>
          {/*  Right menu */}
          <div className="rightMenu lg:flex  ml-2 items-center hidden sm:flex md:text-3xl  gap-2">
            <div className="p-[7px] mr-[10px] cursor-pointer hover:bg-gray-200 bg-[var(--section-bg-color)] rounded-[50%]">
              <RiMessengerFill />
            </div>
            <div className="p-[7px] mr-[10px] cursor-pointer hover:bg-gray-200 bg-[var(--section-bg-color)] rounded-[50%]">
              <MdNotifications />
            </div>
            <div className="avatar  w-[50px] h-[50px] rounded-[50%] overflow-hidden text-[5px]">
              <img src="/Images/profile.jpg " alt="profile image" />
            </div>
          </div>
        </nav>
      </Header>
    </>
  );
};

export default HeaderComponents;
