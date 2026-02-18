"use client";

import { useState } from 'react';
import { Container, Tab, Tabs, Col } from 'react-bootstrap';
import Casestudies from './Casestudies/page';
import Whitepaper from './Whitepaper/page';
import Highlightblog from './highlitedblog/page';
import Capture1 from "../../assets/images/capture1.webp";
import Capture2 from "../../assets/images/capture2.webp";
import Image from "next/image";


export default function InsightsView() {
    const [key, setKey] = useState('casestudies');
    const [activeTab, setActiveTab] = useState("casestudies");
   
    return (
        <>
            <div className='inner-head grey pad80'>
                <Container className='text-center'>
                    <h1 className='h4'>Insi<span>ghts</span></h1>
                    <p>Expert insights that decode industry shifts and guide smarter,<br className='d-none d-md-block'/> more resilient decision-making.</p>
                </Container>
                 <Container>
          
          <div className="row mt-5">
          
            <Col md={12}>
              <Image src={Capture2} alt="capture" className="w-100 h-auto" />
</Col>
          </div>
        </Container>
            </div>

            {/* Component names should usually be Capitalized (HighlightBlog) */}
            {/* <Highlightblog /> */}

           

            <div className="pad80 insights-wrapper">
                
                 <Container>
          
          <div className="row">
          
            <Col md={12}>
              <Image src={Capture1} alt="capture" className="w-100 h-auto" />
</Col>
          </div>
        </Container>
                {/* <Container>
                    <Tabs
                        id="insights-tabs"                        
                        activeKey={activeTab}
                        onSelect={(k) => setActiveTab(k)}
                        className="justify-content-center mb-5 border-0"
                    >
                        <Tab eventKey="casestudies" title="Case Studies">
                           <Casestudies activeTab={activeTab}  />
                        </Tab>
                        <Tab eventKey="whitepaper" title="White Paper">
                           <Whitepaper activeTab={activeTab} />
                        </Tab>
                    </Tabs>
                </Container> */}
            </div>
        </>
    );
}