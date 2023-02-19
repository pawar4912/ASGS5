import About from "./About";
import Carousels from "./comman/Carousels";
import ImageASGS from "./comman/ImageASGS";
import KnowMore from "./comman/KnowMore";
import Recruiters from "./comman/Recruiters";
import Team from "./comman/Team";
import Testimonials from "./comman/Testimonials";

import Video from "./comman/Video";
import Whyus from "./comman/Whyus";

function Home() {
  return (
    <div>
      <Carousels></Carousels>
      <About></About>
      <ImageASGS></ImageASGS>
      <Video></Video>
      <KnowMore></KnowMore>
      <Team></Team>
      <Whyus></Whyus>
      <Testimonials></Testimonials>
      <Recruiters></Recruiters>
    </div>
  );
}

export default Home;
