 import CombinedNavigation from "../components/navbar";
 import MoreDetails from "../components/moredetails";
 import MoreDetails2 from "../components/moredetails2";
 import FreshProperty from "../components/freshProperties";
 import MoreDetails3 from "../components/moredetails3";
import Footer from "../components/foot";
const Details=()=>{
    console.log("navigation  is reder")

    return(
        <>
       <CombinedNavigation />
       <MoreDetails/>
       <MoreDetails2/>
       <MoreDetails3/>
       <Footer/>
        </>
    )
}
export default  Details