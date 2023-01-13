import { FaBusinessTime, FaCaretDown, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { ImUsers } from "react-icons/im";
import { AiOutlineShop } from "react-icons/ai";
import ShortCuts from "../Contacts/ShortCuts";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export interface toggleProps {
  toggle: boolean;
}
const Aside = styled.div`
  @media (max-width: 768px) {
    position: fixed;
    right: 0;
    top: 56px;
    translate: ${(props: toggleProps) => (!props.toggle ? "100%" : "0")};
    transition: all 450ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    width: 100%;
    padding-top: 20px;
    background-color: #fff;
    z-index: 250;
    padding: 20px 15px;
  }
`;
const LeftAside: React.FC = () => {
  const statusMenu = useSelector((state: any) => state.MenuToggleReducer.leftToggle);

  return (
    <>
      <Aside
        toggle={statusMenu}
        className="left__top leftaside relative z-30  py-[30px] w-[250px] lg:block "
      >
        <div className="profile">
          <div className="profile__image flex hover:bg-gray-200 p-2 rounded-lg items-center font-bold text-[20px] text-[var(--heading-font-color)]">
            <div className="rounded-[50%] overflow-hidden h-[50px] cursor-pointer w-[50px]">
              <img src="/Images/profile.jpg" alt="profile image" />
            </div>
            <div className="name ml-2">Ishwor Khadka</div>
          </div>
          {/*  Menu List */}
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
        {/*  Shortcuts */}
        <ShortCuts />
      </Aside>
    </>
  );
};

export default LeftAside;
