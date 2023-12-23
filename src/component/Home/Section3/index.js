import React from 'react';
import '../style.css';

function Section3() {
  return (
    <section>
      <div class="container">
        <div class="text-center">
          <h1> Pricing that Adapts to You </h1>
          <p class="sec4-para"> Every card has access to our SnapTap function, which allows you to customize your profile <br></br> and modify the digital card's background. </p>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="container mt-5">
              <div class="main-tab">
                <ul class="nav nav-tabs justify-content-center" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#home" role="tab"> PVC </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#profile" role="tab"> Seed </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#messages" role="tab"> Metal </a>
                  </li>
                </ul>
              </div>
              <div class="tab-content text-center">
                <div class="tab-pane active" id="home" role="tabpanel">
                  <div class="row pt-5">
                    <div class="col-md-4">
                      <div>
                        <div class="card">
                          <div class="card-body">
                            <div class="card-p">
                              <p class="pvc">PVC</p>
                              <br></br>
                              <p class="pvc">
                                <span class="dash-rate">
                                  <del>RS 2000</del>
                                </span>&nbsp;&nbsp;RS 1500
                              </p>
                            </div>
                            <div>
                              <ul class="list-unstyled card-list">
                                <li>
                                  <img src={require('../../../Images/check.svg')}/> &nbsp; <span>Long life</span>
                                </li>
                                <li>
                                  <img src={require('../../../Images/check.svg')}/> &nbsp; <span>Strong PVC Material</span>
                                </li>
                                <li>
                                  <img src={require('../../../Images/check.svg')}/> &nbsp; <span>Lightweight</span>
                                </li>
                                <li>
                                  <img src={require('../../../Images/check.svg')}/> &nbsp; <span>Durable</span>
                                </li>
                                <li>
                                  <img src={require('../../../Images/check.svg')}/> &nbsp; <span>Easy to carry and stack</span>
                                </li>
                              </ul>
                            </div>
                            <div class="row">
                              <div class="col-md-12">
                                {/* <a href="#" class="btn-mr">
                                  <button type="button" class="btn form-control theme-btn">Try Now <img src="assets/images/right.png">
                                  </button>
                                </a> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div class="col-md-8">
                      <div id="carouselExampleIndicators" class="carousel slide card-slider" data-ride="carousel">
                        <ol class="carousel-indicators">
                          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        </ol>
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img class="d-block w-100" src="assets/images/section 4 white card.svg" alt="First slide">
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="assets/images/section 4 black card.svg" alt="Second slide">
                          </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                          <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                          <span class="sr-only">Next</span>
                        </a>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div class="tab-pane" id="profile" role="tabpanel">
                  <div class="row pt-5">
                    <div class="col-md-4">
                      <div>
                        <div class="card">
                          <div class="card-body">
                            <div class="card-p">
                              <p class="pvc">Seed</p>
                              <br></br>
                              <p class="pvc">
                                <span class="dash-rate">
                                  <del>RS 1800</del>
                                </span>&nbsp;&nbsp;RS 1000
                              </p>
                            </div>
                            <div>
                              <ul class="list-unstyled card-list">
                                <li>
                                  <img src={require('../../../Images/check.svg')}/> &nbsp; <span>Special Card for Environmentalists</span>
                                </li>
                                <li>
                                  <img src={require('../../../Images/check.svg')}/> &nbsp; <span>make an Eco-friendly impression</span>
                                </li>
                                <li>
                                  <img src={require('../../../Images/check.svg')}/> &nbsp; <span>Grow a Plant for the seed Card</span>
                                </li>
                                <li>
                                  <img src={require('../../../Images/check.svg')}/> &nbsp; <span>Durable</span>
                                </li>
                                <li>
                                  <img src={require('../../../Images/check.svg')}/> &nbsp; <span>Eco-friendly way to remember you</span>
                                </li>
                              </ul>
                            </div>
                            <div class="row">
                              <div class="col-md-12">
                                {/* <a href="#" class="btn-mr">
                                  <button type="button" class="btn form-control theme-btn">Try Now <img src="assets/images/right.png">
                                  </button>
                                </a> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div id="c2" class="carousel slide card-slider" data-ride="carousel">
                        <ol class="carousel-indicators">
                          <li data-target="#c2" data-slide-to="0" class="active"></li>
                          <li data-target="#c2" data-slide-to="1"></li>
                        </ol>
                        <div class="carousel-inner">
                          {/* <div class="carousel-item active">
                            <img class="d-block w-100" src="assets/images/section 4 white card.svg" alt="First slide">
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="assets/images/section 4 black card.svg" alt="Second slide">
                          </div> */}
                        </div>
                        <a class="carousel-control-prev" href="#c2" role="button" data-slide="prev">
                          <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#c2" role="button" data-slide="next">
                          <span class="sr-only">Next</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane" id="messages" role="tabpanel">
                  <div class="row pt-5">
                    <div class="col-md-4">
                      <div>
                        <div class="card">
                          <div class="card-body">
                            <div class="card-p">
                              <p class="pvc">Metal</p>
                              <br></br>
                              <p class="pvc">
                                <span class="dash-rate">
                                  <del>RS 4200</del>
                                </span>&nbsp;&nbsp;RS 3000
                              </p>
                            </div>
                            <div>
                              <ul class="list-unstyled card-list">
                                <li>
                                  <img src={require('../../../Images/check.svg')}/> &nbsp; <span>Highly Durable</span>
                                </li>
                                <li>
                                  <img src={require('../../../Images/check.svg')}/> &nbsp; <span>Resistant to wear and tear</span>
                                </li>
                                <li>
                                  <img src={require('../../../Images/check.svg')}/> &nbsp; <span>Make unique and solid impression</span>
                                </li>
                                <li>
                                  <img src={require('../../../Images/check.svg')}/> &nbsp; <span>Durable</span>
                                </li>
                                <li>
                                  <img src={require('../../../Images/check.svg')}/> &nbsp; <span>Recyclable Materials</span>
                                </li>
                              </ul>
                            </div>
                            <div class="row">
                              <div class="col-md-12">
                                {/* <a href="#" class="btn-mr">
                                  <button type="button" class="btn form-control theme-btn">Try Now <img src="assets/images/right.png">
                                  </button>
                                </a> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div id="c3" class="carousel slide card-slider" data-ride="carousel">
                        <ol class="carousel-indicators">
                          <li data-target="#c3" data-slide-to="0" class="active"></li>
                          <li data-target="#c3" data-slide-to="1"></li>
                        </ol>
                        <div class="carousel-inner">
                          {/* <div class="carousel-item active">
                            <img class="d-block w-100" src="assets/images/section 4 white card.svg" alt="First slide">
                          </div>
                          <div class="carousel-item">
                            <img class="d-block w-100" src="assets/images/section 4 black card.svg" alt="Second slide">
                          </div> */}
                        </div>
                        <a class="carousel-control-prev" href="#c3" role="button" data-slide="prev">
                          <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#c3" role="button" data-slide="next">
                          <span class="sr-only">Next</span>
                        </a>
                      </div>
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

export default Section3
