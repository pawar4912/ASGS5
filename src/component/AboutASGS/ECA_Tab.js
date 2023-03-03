import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function ECA_Tab() {
    const [key, setKey] = useState('home');
  return (
    <div className="row gx-5 mt-2 knowmore">
    <Tabs
    id="controlled-tab-example"
    activeKey={key}
    onSelect={(k) => setKey(k)
    }
    className="mb-3"
    >
    <Tab eventKey="home" title="Vision" className='p-5' >
     <p>ASGS is a Global Education initiative introduced by Education Centre of Australia (ECA) to bridge the gap between students and their accessibility to world-class standards of International Education. We provide high-quality higher education and various certifications of global standards from world's leading universities to students at our International Campuses, Indian Campuses and Online.
      </p>
    </Tab>
    <Tab eventKey="profile" title="Mission" className='p-5'>
    <p>ASGS is a Global Education initiative introduced by Education Centre of Australia (ECA) to bridge the gap between students and their accessibility to world-class standards of International Education. We provide high-quality higher education and various certifications of global standards from world's leading universities to students at our International Campuses, Indian Campuses and Online.
    </p>
    </Tab>
    <Tab eventKey="contact" title="Value" className='p-5'>
    <p>ASGS is a Global Education initiative introduced by Education Centre of Australia (ECA) to bridge the gap between students and their accessibility to world-class standards of International Education. We provide high-quality higher education and various certifications of global standards from world's leading universities to students at our International Campuses, Indian Campuses and Online.
    </p>
    </Tab>
    </Tabs>
    
    
    </div>
  )
}

export default ECA_Tab
