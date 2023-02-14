import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route } from "react-router-dom";

import Home from './component/Home';
import University from './component/university/University';
import Apply from './component/admission/Apply';
import AssuredUni from './component/university/AssuredUni';
import Progression from './component/university/Progression';
import Itprograms from './component/Programs/Itprograms';
import Bussiness from './component/Programs/Bussiness';
import Video from './component/comman/Video';
import Campus from './component/comman/Campus';
import News from './component/comman/News';
import Sucess from './component/comman/Sucess';
import Scholarships from './component/comman/Scholarships';
import Study from './component/comman/Study';
import Partner from './component/comman/Partner';
import OurPrograms from './component/universitym/OurPrograms';
import Placement from './component/comman/Placement';
import MoreInfo from './component/comman/MoreInfo';
import Policy from './component/comman/Policy';
import Terms from './component/comman/Terms';
import Contact from './component/comman/Contact';
import InternationalBachelors from './component/InternationalBachelors';
import InternationalMasters from './component/InternationalMasters';
import InternationalShortCourses from './component/InternationalShortCourses';

function App() {
  return (
    
   <HashRouter>
      <Routes>
    
        <Route exact path="/"  element={<Home/>}/>
        <Route path="/prog" element={<OurPrograms/>}/>
        <Route path="/uni" element={<University/>}/>
        <Route path="/apply" element={<Apply/>}/>
        <Route path="/assured" element={<AssuredUni/>}/>
        <Route path="/progression" element={<Progression/>}/>
        <Route path="/itprograms" element={<Itprograms/>}/>
        <Route path="/bussiness" element={<Bussiness/>}/>
        <Route path="/video" element={<Video/>}/>
        <Route path="/Campus" element={<Campus/>}/>
        <Route path="/News" element={<News/>}/>
        <Route path="/Sucess" element={<Sucess/>}/>
        <Route path="/Schol" element={<Scholarships/>}/>
       
        <Route path="/Study" element={<Study/>}/>
        <Route path="/Partner" element={<Partner/>}/>
        <Route path="/Placement" element={<Placement/>}/>
        <Route path="/about" element={<OurPrograms/>}/>
        <Route path="/KnowMore" element={<MoreInfo/>}/>
        <Route path="/Policy" element={<Policy/>}/>
        <Route path="/Terms" element={<Terms/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/international-bachelors" element={<InternationalBachelors/>}/>
        <Route path="/international-masters" element={<InternationalMasters/>}/>
        <Route path="/international-short-courses" element={<InternationalShortCourses/>}/>
      </Routes>
    </HashRouter>

    
  );
}

export default App;
