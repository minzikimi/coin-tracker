import React, { useState } from 'react';
import "./FAQ.css"

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="faq-item">
            <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
                <h3>{question}</h3>
                <span>{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && (
                <div className="faq-answer">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
}

const FAQ = () => {
    const faqItems = [
        { 
            question: "What is Cryptocurrency?", 
            answer: "Cryptocurrency is a digital or virtual currency that uses blockchain technology for secure financial transactions." 
        },
        { 
            question: "How does Bitcoin work?", 
            answer: "Bitcoin operates on a decentralized network using blockchain technology to record and verify transactions." 
        },
        { 
            question: "Is Cryptocurrency safe to invest?", 
            answer: "No! Cryptocurrency investments carry high volatility and risk. Always do thorough research and invest responsibly." 
        }
    ];

    return (
        <div className="faq-wrapper">
            <div className='faq-container'>
                <div className='faq-title'>
                    <h2>Frequently Asked Questions</h2>
                </div>
               
                <div className='faq-list'>
                    {faqItems.map((item, index) => (
                        <FAQItem 
                            key={index} 
                            question={item.question} 
                            answer={item.answer} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FAQ;