import Home from './component/Home';
import AcademicPartner from './component/AcademicPartner/AcademicPartner';
import Apply from './component/admission/Apply';
import AssuredUni from './component/AcademicPartner/AssuredUni';
import Progression from './component/AcademicPartner/Progression';
import Itprograms from './component/Programs/Itprograms';
import Bussiness from './component/Programs/Bussiness';
import Video from './component/comman/Video';
import Campus from './component/comman/Campus';
import News from './component/comman/News';
import Sucess from './component/comman/Sucess';
import Scholarships from './component/comman/Scholarships';
import Study from './component/comman/Study';
import Partner from './component/comman/Partner';
import Courses from './component/universitym/Courses';
import Placement from './component/comman/Placement';
import MoreInfo from './component/comman/MoreInfo';
import Policy from './component/comman/Policy';
import Terms from './component/comman/Terms';
import Contact from './component/comman/Contact';
import InternationalBachelors from './component/InternationalBachelors';
import InternationalMasters from './component/InternationalMasters';
import LMU from './component/LMU/LMU';
import InternationalShortCourses from './component/InternationalShortCourses';

const routes = [
    {
        path: '/',
        component: <Home/>,
    },
    {
        path: '/academic-partner',
        component: <AcademicPartner/>,
    },
    {
        path: '/apply',
        component: <Apply/>,
    },
    {
        path: '/assured',
        component: <AssuredUni/>,
    },
    {
        path: '/progression',
        component: <Progression/>,
    },
    {
        path: '/itprograms',
        component: <Itprograms/>,
    },
    {
        path: '/bussiness',
        component: <Bussiness/>,
    },
    {
        path: '/video',
        component: <Video/>,
    },
    {
        path: '/campus',
        component: <Campus/>,
    },
    {
        path: '/news',
        component: <News/>,
    },
    {
        path: '/Sucess',
        component: <Sucess/>,
    },
    {
        path: '/Schol',
        component: <Scholarships/>,
    },
    {
        path: '/Study',
        component: <Study/>,
    },
    {
        path: '/Partner',
        component: <Partner/>,
    },
    {
        path: '/courses',
        component: <Courses/>,
    },
    {
        path: '/Placement',
        component: <Placement/>,
    },
    {
        path: '/KnowMore',
        component: <MoreInfo/>,
    },
    {
        path: '/Policy',
        component: <Policy/>,
    },
    {
        path: '/Terms',
        component: <Terms/>,
    },
    {
        path: '/Contact',
        component: <Contact/>,
    },
    {
        path: '/international-bachelors',
        component: <InternationalBachelors/>,
    },
    {
        path: '/international-masters',
        component: <InternationalMasters/>,
    },
    {
        path: '/international-short-courses',
        component: <InternationalShortCourses/>,
    },
    {
        path: '/lmu',
        component: <LMU/>,
    },
]

export default routes;