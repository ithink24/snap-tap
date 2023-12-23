import React from 'react';
import Scan from '../../../Images/scan image.svg';
import Tap from '../../../Images/Tap image.svg';
import Online from '../../../Images/Online-identity-image.svg';
import '../style.css';

function Section4() {
  return (
    <section>
      <div class="container-fluid sec3-bg sec4-pd">
        <div class="container">
          <div class="text-center pb-5">
            <h1 class="highlited-txt-green"> Three ways to share </h1>
            <p class="sec4-para"> Compatible with most phones. No app required </p>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="row">
                <div class="col-md-6 mob-right">
                  <img src={Scan} alt="scan" class="img-fluid"/>
                </div>
                <div class="col-md-6 card-left">
                  <div class="card mobile-side-card">
                    <div class="card-body">
                      <ul class="list-unstyled">
                        <li>
                          <p>1. Scan</p>
                        </li>
                      </ul>
                      <ul class="card-para-small">
                        <li>Open the camera</li>
                        <li>Point at QR code</li>
                        <li>Click the notification</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="row">
                <div class="col-md-6 mob-right">
                  <img src={Tap} alt="tap" class="img-fluid"/>
                </div>
                <div class="col-md-6 card-left">
                  <div class="card mobile-side-card">
                    <div class="card-body">
                      <ul class="list-unstyled">
                        <li>
                          <p>1. Scan</p>
                        </li>
                      </ul>
                      <ul class="card-para-small">
                        <li>Tap card to phone</li>
                        <li>Click the notification</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="row">
                <div class="col-md-6 mob-right">
                  <img src={Online} alt="online"/>
                </div>
                <div class="col-md-6 card-left">
                  <div class="card mobile-side-card">
                    <div class="card-body">
                      <ul class="list-unstyled">
                        <li>
                          <p>1. Scan</p>
                        </li>
                      </ul>
                      <ul class="card-para-small">
                        <li>Open in Browser with your unique link</li>
                        <li>View your profile</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section4
