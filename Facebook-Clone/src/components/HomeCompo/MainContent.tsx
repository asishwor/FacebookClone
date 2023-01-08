import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaBookOpen } from "react-icons/fa";
import { MdVideoCall } from "react-icons/md";
import { BsCameraReels, BsPlus } from "react-icons/bs";
import PostStatus from "../postcontent/Status";
import Post from "../postcontent/Post";

const MainContent = () => {
  return (
    <>
      <div className="fixed w-[100%] py-[30px] mb-[30px] mainContent  flex  max-h-[100vh] pb-[50px] lg:left-0 right-0 lg:right-0 ">
        <div className=" flex-1   sm:max-w-[500px] max-w-[100%] lg:mx-auto  ml-auto flex align-bottom flex-col gap-2 justify-top  sm:px-[20px]">
          <div className="storySlider bg-[var(--white-color)] rounded-2xl w-[100%]  px-0 py-[30px] ">
            <div className="catagory flex justify-between  px-4 items-center border-b pb-1 border-[var(--body-font-color)]">
              <div className="stories font-bold flex-grow-[1] cursor-pointer py-4 hover:bg-[var(--section-bg-color)] rounded-2xl  justify-center text-lg pb-3 text-[var(--body-font-color)] flex items-center gap-[10px]">
                <FaBookOpen />
                <span>Stories</span>
              </div>
              <div className="stories font-bold flex-grow-[1] cursor-pointer justify-center py-4 hover:bg-[var(--section-bg-color)] rounded-2xl text-lg pb-3 text-[var(--body-font-color)] flex items-center gap-[10px]">
                <MdVideoCall className="text-3xl " />
                <span>Reels </span>
              </div>
              <div className="stories font-bold  flex-grow-[1] cursor-pointer py-4 justify-center hover:bg-[var(--section-bg-color)] rounded-2xl text-lg pb-3 text-[var(--body-font-color)] flex items-center gap-[10px]">
                <BsCameraReels />
                <span>Rooms</span>
              </div>
            </div>

            <Swiper
              className="mySwiper mt-5 "
              spaceBetween={10}
              slidesPerView={4}
              autoplay={true}
              navigation
              modules={[Navigation]}
            >
              <SwiperSlide className="">
                <div className="flex flex-col h-[100%]">
                  <div className="bg-blend-overlay h-[240px]">
                    <img
                      className="object-cover  w-[100%] rounded-xl"
                      src="Images/profile.jpg"
                      alt=""
                    />
                  </div>
                  <div className="z-20 bottom-[39px] left-0 bg-[var(--white-color)] w-[100%] absolute text-[var(--heading-font-color)] pt-[20px] text-center grid place-items-center">
                    <span className="font-bold">Create Story</span>
                    <span className="absolute grid place-items-center text-3xl p-1 bg-[var(--primary-color)] text-[var(--white-color)] rounded-[50%] top-[-24px] border- border-[3px] b-3 border-[var(--white-color)]">
                      <BsPlus />
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              {/* slide 1 */}
              <SwiperSlide className="h-[100%]">
                <img
                  className="object-cover rounded-xl h-[100%]"
                  src="Images/story.jpg"
                  alt=""
                />
              </SwiperSlide>
              {/* slide 1 */}
              <SwiperSlide>
                <img
                  src="Images/story1.jpg"
                  alt=""
                  className="object-cover rounded-xl"
                />
              </SwiperSlide>
              {/* slide 1 */}
              <SwiperSlide>
                <img
                  src="Images/profil2.jpg"
                  alt=""
                  className="object-cover rounded-xl"
                />
              </SwiperSlide>
              {/* slide 1 */}
              <SwiperSlide>
                <img
                  src="Images/profile.jpg"
                  alt=""
                  className="object-cover rounded-xl"
                />
              </SwiperSlide>
              {/* slide 1 */}
              <SwiperSlide>
                <img
                  src="Images/profil3.jpg"
                  alt=""
                  className="object-cover rounded-xl"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <PostStatus />

          <Post
            name={"Mamata Dhakal "}
            postImage={"/Images/post1.jpg"}
            post={"When Life Gets Blurry, Adjust Your FOCUS❣️"}
            image={"/Images/profile3.jpg"}
          />

          <Post
            name={"Sangam Khadka"}
            postImage={"/Images/profile3.jpg"}
            post={
              " “Nothing else so destroys the power to stand alone as the habit of leaning upon others. If you lean, you will never be strong or original. Stand alone or bury your ambition to be somebody in the world.” – Orison Swett Marden"
            }
            image={"/Images/story1.jpg"}
          />
          <Post
            name={"Rabin Khadka"}
            postImage={"/Images/profil2.jpg"}
            post={
              "“Sometimes you just need a break. In a beautiful place. Alone. To figure everything out.” – Anonymous❣️"
            }
            image={"/Images/story1.jpg"}
          />
          <Post
            name={"Sujan Thapa"}
            postImage={"/Images/story.jpg"}
            post={
              "“Don’t feel alone, because there is always someone out there who loves you more than you can imagine.” – Anurag Prakash Ray ❣️"
            }
            image={"/Images/story1.jpg"}
          />
          <Post
            name={"Aadesh karki"}
            postImage={"/Images/profile3.jpg"}
            post={"When Life Gets Blurry, Adjust Your FOCUS❣️"}
            image={"/Images/story1.jpg"}
          />
          <Post
            name={"Shiv kumar paudel"}
            postImage={"/Images/profile3.jpg"}
            post={"When Life Gets Blurry, Adjust Your FOCUS❣️"}
            image={"/Images/post.jpg"}
          />
          <Post
            name={"Aadarsh Mishra"}
            postImage={"/Images/post2.jpg"}
            post={
              " “Standing alone doesn’t mean I am alone. It means I’m strong enough to handle things all by myself.” – Anonymous"
            }
            image={"/Images/story1.jpg"}
          />
          <Post
            name={"Sabin Pokharel"}
            postImage={"/Images/post1.jpg"}
            post={"When Life Gets Blurry, Adjust Your FOCUS❣️"}
            image={"/Images/story1.jpg"}
          />
        </div>
      </div>
    </>
  );
};

export default MainContent;
