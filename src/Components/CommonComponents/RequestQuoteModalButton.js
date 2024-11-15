import React, { useState } from 'react';
import RequestQuoteModal from './RequestQuoteModal';
import './css/quoteModalButton.css';

function RequestQuoteButton() {
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

    const openQuoteModal = () => setIsQuoteModalOpen(true);
    const closeQuoteModal = () => setIsQuoteModalOpen(false);

    return (
        <div>
            <button onClick={openQuoteModal} className="Quote-floating-button">
                +
            </button>
            <RequestQuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />
        </div>
    );
}

export default RequestQuoteButton;
