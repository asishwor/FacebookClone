import { AiOutlineNotification } from "react-icons/ai";
import { BiNotification, BiUserX } from "react-icons/bi";
import { MdNotifications } from "react-icons/md";
import Contact from "../Contacts/Contact";
import Event from "../event/Event";
import Conversation from "../rightSideCompo/Conversation";

const RightAside = () => {
  return (
    <div className="sm:w-[280px] relative z-40 rightAside border-gray-300 pt-[30px] text-[var(--body-font-color)] sm:block hidden max-w-[360px] ">
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
      <Conversation/>
    </div>
  );
};

export default RightAside;
