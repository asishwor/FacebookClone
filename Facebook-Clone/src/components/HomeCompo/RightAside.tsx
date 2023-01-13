import { AiOutlineNotification } from "react-icons/ai";
import { BiNotification, BiUserX } from "react-icons/bi";
import { MdNotifications } from "react-icons/md";
import { useSelector } from "react-redux";
import Contact from "../Contacts/Contact";
import Event from "../event/Event";
import Conversation from "../rightSideCompo/Conversation";
import { MenuToggleReducer } from "../../statemanagement/Redcer";
import styled from "styled-components";
import { toggleProps } from "./LeftAside";
const Aside = styled.aside`
  @media (max-width: 1024px) {
    position: fixed;
    width: min(350px, 100%);
    top: 58px;
    background-color: #fff;
    left: 0;
    z-index: 250;
    padding: 20px;
    translate: ${(props: toggleProps) => (!props.toggle ? "-100%" : "0")};
    transition: all 450ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
`;
const RightAside = () => {
  const rightToggled = useSelector((state: any) => state.MenuToggleReducer);
  return (
    <>
      <Aside
        toggle={rightToggled.rightToggle}
        className="sm:w-[280px] relative z-40 px-3 rightAside border-gray-300 pt-[30px] text-[var(--body-font-color)] sm:block sm:max-w-[250px] lg:max-w-[340px] "
      >
        {/* pages and notification part  */}
        <div className="pages border-b-2 pb-2 mb-2 border-gray-300">
          <div className="grid">
            <h3 className="font-bold mb-2">Your Pages and Profiles</h3>
            <span className="flex items-center gap-3  text-gray-500 cursor-pointer px-2 py-1 hover:bg-gray-200 rounded-lg transition-all hover:transition-all text-[16px]">
              <span>
                <AiOutlineNotification />
              </span>
              <span>2 Notifications</span>
            </span>
            <span className="flex items-center text-gray-500 cursor-pointer px-2 py-1 hover:bg-gray-200 rounded-lg transition-all hover:transition-all gap-3 text-[16px]">
              <span>
                <BiUserX />
              </span>
              <span>Switch into Pages</span>
            </span>
            <span className="flex items-center gap-3  text-gray-500 cursor-pointer px-2 py-1 hover:bg-gray-200 rounded-lg transition-all hover:transition-all text-[16px]">
              <span>
                <AiOutlineNotification />
              </span>
              <span>2 notifications</span>
            </span>
          </div>
        </div>
        {/* Event part */}
        <Event />
        <Contact />
        <Conversation />
      </Aside>
    </>
  );
};

export default RightAside;
