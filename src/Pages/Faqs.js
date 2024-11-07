import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/faqs.css';

const faqsData = [
    {
        question: "What services do you offer?",
        answer: "We offer a variety of services, including oil changes, tire services, car detailing, engine diagnostics, and more. Our goal is to ensure your car is running smoothly and looking great.",
    },
    {
        question: "How do I book an appointment?",
        answer: "You can easily book an appointment by visiting our website or contacting us directly via phone or email. We recommend scheduling in advance for convenience.",
    },
    {
        question: "What is the cost of services?",
        answer: "Our prices vary depending on the service. However, we strive to offer competitive pricing with no hidden fees. Contact us for a customized quote based on your car's needs.",
    },
    {
        question: "Do you offer warranties on your services?",
        answer: "Yes, all of our services come with a warranty. Please refer to our warranty policy for more details on the duration and coverage.",
    },
    {
        question: "Can I bring my own parts?",
        answer: "Yes, you are welcome to bring your own parts for installation. However, we recommend using high-quality parts for the best results. Our team can help you source parts if needed.",
    },
];

const FAQs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <div className="faqs-section container py-5">
            <h2 className="text-center mb-5">Frequently Asked Questions</h2>
            <div className="accordion">
                {faqsData.map((faq, index) => (
                    <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
                        <div className="faq-question" onClick={() => toggleFAQ(index)}>
                            <h4>{faq.question}</h4>
                            <span className={`faq-icon ${activeIndex === index ? 'rotate' : ''}`}>&#9660;</span>
                        </div>
                        {activeIndex === index && (
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQs;
