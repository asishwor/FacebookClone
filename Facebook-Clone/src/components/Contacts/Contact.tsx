import { BiSearch, BiVideoPlus } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import ContactProfile from "./Contact.profile";

const Contact = () => {
  return (
    <div>
      <div>
        <div className="flex  items-center ">
          <h3>Contacts</h3>
          <span className="ml-auto">
            <span className="flex items-center  ">
              <span className="cursor-pointer p-2 rounded-[50%] hover:bg-gray-200">
                <BiVideoPlus />
              </span>
              <span className=" cursor-pointer p-2 rounded-[50%] hover:bg-gray-200">
                <BiSearch />
              </span>
              <span className=" cursor-pointer p-2 rounded-[50%] hover:bg-gray-200">
                <BsThreeDots />
              </span>
            </span>
          </span>
        </div>
        <ContactProfile image="Images/profile.jpg" name="Steve Smith" />
        <ContactProfile image="Images/story1.jpg" name="Bidur Kumar" />
        <ContactProfile image="Images/story.jpg" name="Bikram shah" />
        <ContactProfile image="Images/profil2.jpg" name="Pravin shrestha" />
        <ContactProfile image="Images/profile3.jpg" name="Pabindra Khadka" />
        <ContactProfile image="Images/profile.jpg" name="Ramesh k.c" />

      </div>
    </div>
  );
};

export default Contact;
