import React, { useState } from 'react';
import '../style.css';

const faqs = [
    {
        question: "Alright, but what exactly do you do?",
        answer: "Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna."
    },
    {
        question: "I don't need a brand strategist but I need help executing an upcoming campaign. Can we still work together?",
        answer: "Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna."
    },
    {
        question: "Are your rates competitive?",
        answer: "Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna."
    },
    {
        question: "Why do you have a monthly project cap?",
        answer: "Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna."
    }
];

function Section6() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleAccordion = (index) => {
      setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    };

  return (
    <section class="mb-4 pb-4">
        <div class="container-fluid sec3-bg sec4-pd">
            <div class="container">
                <div class="text-center pb-5">
                    <h1> Frequently Asked Questions </h1>
                    <p class="sec4-para"> Compatible with most phones. No app required </p>
                </div>

                <div className="accordion" id="faqAccordion">
                    {faqs.map((faq, index) => (
                        <div key={index} className="accordion-item">
                            <button
                                id={`accordion-button-${index}`}
                                aria-expanded={expandedIndex === index}
                                onClick={() => toggleAccordion(index)}
                            >
                                <span className="accordion-title">
                                    <span className="faq-sequence">{index + 1 < 10 ? '0' : ''}{index + 1}</span>{faq.question}
                                </span>
                                <span className="icon" aria-hidden="true"></span>
                            </button>
                            
                            <div className="accordion-content">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section6
