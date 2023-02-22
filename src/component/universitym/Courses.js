import Info from "../about/Info";
import Letsmeet from "./letsmeet";
import Testimonials from "../comman/Testimonials";
import EcaEmployee from "./EcaEmployee";

function Courses() {
  return (
    <div>
      {/* <Carousels1/> */}
      <Info/>
      <Letsmeet/>
      <Testimonials/>
      {/* <Placed/> */}
      <EcaEmployee/>


    </div>
  );
}

export default Courses;
