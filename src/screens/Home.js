import CombinedNavigation from "../components/navbar";
import Header from "../components/header";
import MediaCard from "../components/card1";
import MultiActionAreaCard from "../components/PplrOwnerPeoperties";
import OutlinedCard from "../components/prfragnt";
import SimpleContainer from "../components/center";
import PropertyServices from "../components/prpertyServices";
import AdviceTools from "../components/Advice&tools";
import Estateguide from "../components/estateGuide";
import FreshProperty from "../components/freshProperties";
// import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <>
      {/* <div className="container-fluid bg-white">
        <Navigation />
        <Navigation2 />
        <hr className="horizontal" />
      </div> */}
      <CombinedNavigation/>
      <Header />
      <MediaCard/>
      <MultiActionAreaCard/>
      <OutlinedCard/>
      <SimpleContainer/>
      <PropertyServices/>
      <AdviceTools/>
      {/* <MultiActionAreaCard/>
       */}
       <FreshProperty/>

      <Estateguide/>
 
    </>
  );
};

export default Home;
