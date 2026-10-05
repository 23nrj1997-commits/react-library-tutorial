import react from "react";
import Landing from "../components/Landing";
import Highlight from "../components/Highlights";
import Featured from "../components/Featured";
import Discounted from "../components/Discounted";
import Explore from "../components/Explore";

const Home = () => {
  return (
    <>
      <Landing />
      <Highlight />
      <Featured />
      <Discounted />
      <Explore />
    </>
  );
};

export default Home;
