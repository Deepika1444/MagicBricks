import Navigation from "../components/navbar";
import Navigation2 from "../components/navbar2";
import Header from "../components/header";
import MediaCard from "../components/card1";
import MultiActionAreaCard from "../components/PplrOwnerPeoperties";
// import MultiActionAreaCard from "../components/preferedagents";
// import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <div className="container-fluid bg-white">
        <Navigation />
        <Navigation2 />
        <hr className="horizontal" />
      </div>
      <Header />
      <MediaCard/>
      <MultiActionAreaCard/>
 
    </>
  );
};

export default Home;
