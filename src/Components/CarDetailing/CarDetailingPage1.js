import React, {useState} from 'react';
import RequestQuoteModal from "../CommonComponents/RequestQuoteModal";

export default function CarDetailingPage1(){
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
    const openQuoteModal = () => setIsQuoteModalOpen(true);
    const closeQuoteModal = () => setIsQuoteModalOpen(false);
    return(
        <>
          <RequestQuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />
          <main className='detailing-main'>
                <div className='section-1'>
                     <h1>Car Detailing Dubai</h1>
                </div>
                <div className='section-2'>
                    <div className='detailing-card'>
                          <div className='card-section-1'>
                              <li>Save up to 80% on agency prices</li>
                              <li>Get quotes in under 24 hours</li>
                              <li>Best price guaranteed on all repairs</li>
                          </div>
                          <div className='divider'></div>
                          <div className='card-section-2'>
                              <button className='btn btn1'>Call Now</button>
                              <button className='btn btn2' onClick={openQuoteModal}>Get Quote</button>
                          </div>
                    </div>
                </div>
          </main>
        </>
    );
}