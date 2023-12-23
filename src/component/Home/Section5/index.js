import React from 'react';
import Pack from '../../../Images/Icon pack.svg';
import Avatar1 from '../../../Images/Avatar1.svg';
import Avatar2 from '../../../Images/Avatar 2.svg';
import Avatar3 from '../../../Images/Avatar 3.svg';
import '../style.css';

function Section5() {
  return (
    <section>
    <div class="container">
      <div class="text-center">
        <h1> What Our Customer Say </h1>
        <p class="sec4-para"> We're always happy to showcase what our customers have to say about us. <br></br> Here are only a few testimonials and opinions we've gathered. </p>
      </div>
      <div class="row pt-5 review">
        <div class="col-md-4 center-card">
          <div class="card">
            <div class="card-body">
              <ul class="list-inline review-card">
                <li class="list-inline-item">
                  <img src={Pack} alt="pack"/>
                </li>
                <li class="list-inline-item">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</li>
              </ul>
            </div>
          </div>
          <div>
            <ul class="list-inline review-card1">
              <li class="list-inline-item">
                <img src={Avatar1} alt="avatar1"/>
              </li>
              <li class="list-inline-item">Lora Smith</li>
            </ul>
          </div>
        </div>
        <div class="col-md-4 center-card">
          <div class="card">
            <div class="card-body">
              <ul class="list-inline review-card">
                <li class="list-inline-item">
                <img src={Pack} alt="pack"/>
                </li>
                <li class="list-inline-item">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</li>
              </ul>
            </div>
          </div>
          <div>
            <ul class="list-inline review-card1">
              <li class="list-inline-item">
              <img src={Avatar2} alt="avatar2"/>
              </li>
              <li class="list-inline-item">Olivia Twel</li>
            </ul>
          </div>
        </div>
        <div class="col-md-4 center-card">
          <div class="card">
            <div class="card-body">
              <ul class="list-inline review-card">
                <li class="list-inline-item">
                <img src={Pack} alt="pack"/>
                </li>
                <li class="list-inline-item">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</li>
              </ul>
            </div>
          </div>
          <div>
            <ul class="list-inline review-card1">
              <li class="list-inline-item">
              <img src={Avatar3} alt="avatar3"/>
              </li>
              <li class="list-inline-item">Ann Twin</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Section5
