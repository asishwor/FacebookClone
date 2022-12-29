import LeftAside from "../../components/HomeCompo/LeftAside";
import MainContent from "../../components/HomeCompo/MainContent";
import RightAside from "../../components/HomeCompo/RightAside";

const Home = () => {
  return (
    <div className="container ">
      <div className="flex  w-[100%]">
        <LeftAside />
        <MainContent />
        <RightAside/>
      </div>
    </div>
  );
};

export default Home;
