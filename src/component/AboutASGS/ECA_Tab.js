import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function ECA_Tab() {
  const [key, setKey] = useState("Vision");
  return (
    <div className="row gx-5 mt-2 knowmore">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="Vision" title="Vision" className="p-5">
          <p>
            The articulated vision of the ASGS is to be a globally commended
            school of business offering World Class Education at an affordable
            cost to the masses through transformative and responsible management
            education with the means of impactful internationally acclaimed
            curriculum, training and research.
          </p>
        </Tab>
        <Tab eventKey="Mission" title="Mission" className="p-5">
          <p>
            To provide individuals with the enabling and engaging environment
            that offers them: Latest and In-Demand courses by the industry
            astounding professional career through rigorous training and
            research through innovative pedagogy, exposure to cutting-edge
            global management and business practices with personalized support
            and mentorship that is developed in collaboration with the world
            class faculty and industry pioneers. A single platform for Industry
            and Future Work Force to collaborate for mutual benefits knowledge
            and capacity that is a combination of business, finance, technology
            and leadership to benefit the society & industry simultaneously
            barrier breaking opportunities that introduces global culture to
            Indian industry opportunity to develop leadership skills and
            qualities International immersion with top-ranked universities for
            the much-required Global Exposure.
          </p>
        </Tab>
        <Tab eventKey="Values" title="Values" className="p-5">
          <p>
            Our core values of ASGS aligns with those of ECA and are as follows:
            <ul>
              <li>
                Focus on teaching process, learning outcome and its impact
              </li>
              <li>
                Flexibility and Freedom in academics that match the
                international standards of ECA
              </li>
              <li>
                Unparalleled standards of ethics in professional and personal
                behavior of each candidate
              </li>
              <li>Collegiality & teamwork</li>
              <li>A welcoming and accepting environment for everyone</li>
            </ul>
          </p>
        </Tab>
        <Tab eventKey="Benefits" title="Benefits" className="p-5">
          <p>
            Australian School of Global Studies is an initiative of ECA for
            India, which provides various stepping stones for Indian students to
            pursue their goals. International degree, faculty and curriculum all
            would be in grasp of the Indian students. They would also be given
            job like experience through international internship programs.
            Making them more than ready to face the world.
          </p>
        </Tab>
      </Tabs>
    </div>
  );
}

export default ECA_Tab;
