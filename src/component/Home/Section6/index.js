import React from 'react';
import '../style.css';

function Section6() {
  return (
    <section class="mb-4 pb-4">
      <div class="container-fluid sec3-bg sec4-pd">
        <div class="container">
          <div class="text-center pb-5">
            <h1> Frequently Asked Questions </h1>
            <p class="sec4-para"> Compatible with most phones. No app required </p>
          </div>
            <div class="accordion">
              <div class="accordion-item">
                <button id="accordion-button-1" aria-expanded="false"><span class="accordion-title"><span class="faq-sequence">01</span>Alright, but what exactly do you do?</span><span class="icon" aria-hidden="true"></span></button>
                <div class="accordion-content">
                  <p>Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.</p>
                </div>
              </div>
              <div class="accordion-item">
                <button id="accordion-button-2" aria-expanded="false"><span class="accordion-title"><span class="faq-sequence">02</span>I don't need a brand strategist but I need help executing an upcoming campaign. Can we still work together?</span><span class="icon" aria-hidden="true"></span></button>
                <div class="accordion-content">
                  <p>Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.</p>
                </div>
              </div>
              <div class="accordion-item">
                <button id="accordion-button-3" aria-expanded="false"><span class="accordion-title"><span class="faq-sequence">03</span>Are your rates competitive?</span><span class="icon" aria-hidden="true"></span></button>
                <div class="accordion-content">
                  <p>Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.</p>
                </div>
              </div>
              <div class="accordion-item">
                <button id="accordion-button-4" aria-expanded="false"><span class="accordion-title"><span class="faq-sequence">04</span>Why do you have a monthly project cap?</span><span class="icon" aria-hidden="true"></span></button>
                <div class="accordion-content">
                  <p>Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Section6
