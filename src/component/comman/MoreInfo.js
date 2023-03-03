

import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import About_ECA from '../AboutASGS/About_ECA';
import ECA_Collage from '../AboutASGS/ECA_Collage';
import ECA_Message from '../AboutASGS/ECA_Message';
import ECA_Asgs from '../AboutASGS/ECA_Asgs';
import ECA_Tab from '../AboutASGS/ECA_Tab';
import ECA_Partner from "../AboutASGS/ECA_Partner";
import ASGS_Team from "../AboutASGS/ASGS_Team";
import ECA_Leadership from "../AboutASGS/ECA_Leadership";
import ECA_Faculty from "../AboutASGS/ECA_Faculty";
import ECA_image from "../AboutASGS/ECA_image";

function MoreInfo() {

  return (
    <div className='w-100'>

    <About_ECA/>
   <ECA_Collage/>
   <ECA_Message/>
   <ECA_Asgs/>
   <ECA_Tab/>
 <ECA_Partner/>
 <ASGS_Team title={'ASGS Leadership Team'}/>
  <ECA_Leadership/>
  <ASGS_Team  title={'ASGS Faculty'}/>
<ECA_Faculty/>
<ECA_image/>
    </div>
  );
}
export default MoreInfo;
