import React from 'react';
import Button from 'react-bootstrap/Button';
import Logo from '../../Images/Logo.svg';
import Banner from '../../Images/Banner.svg';
import Right from '../../Images/right.png';
import Mobile from '../../Images/section2-mobile.svg';
import ColorFulBtn from '../../Images/colorful-btn.svg';
import Section3Image1 from '../../Images/section 3 image1.svg';
import Section3Image2 from '../../Images/section 3 image2.svg';
import Section3Image3 from '../../Images/section 3 image3.svg';
import './style.css';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Footer from './Footer';
import Section6 from './Section6';

function Home() {
    return (
        <div>
            <div class='header' style={{ backgroundImage: `url(${Banner})` }}>
                <div class="banner-img">
                    <div class="top-assets">
                        <div class="list-inline header-assets">
                            <img src={Logo} alt="logo"/>
                                <div class="user-in-btn">
                                    <Button variant="link">Sign Up</Button>
                                    <Button size="lg" class="btn form-control theme-btn">Log In</Button>
                                </div>
                        </div>
                    </div>
                    <div class="container banner-container">
                        <h1 class="banner-heading">Share Your <span class="highlited-txt">Profile Details</span> With Just A Tap </h1>
                        <div class="d-flex banner-btn">
                            <Button size="lg" class="btn form-control theme-btn">Get Started</Button>
                            <Button variant="dark" size="lg" class="black-btn">
                                Contact Us <img src={Right} alt="right"/>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-md-7">
                            <img src={Mobile} alt="mobile" class="img-fluid" />
                        </div>
                        <div class="col-md-5">
                            <div class="sec2-margin">
                            <h4>How it works</h4>
                            <h2 class="font40 lineheight70 pt-5"> Customize Your Card <br></br>
                                <span class="highlited-txt">Create Your Profile</span>
                                <br></br> Share by Tapping
                            </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div class="container-fluid sec3-bg">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-7">
                                <div class="sec3-head">
                                    <h1> One Card <span class="highlited-txt-green">Unlimited Possibilities</span>
                                    </h1>
                                    <p class="unlimited-txt pt-2"> Add unlimited profiles. Tap your card unlimited times. </p>
                                    <img src={ColorFulBtn} alt="button" class="img-fluid"/>
                                </div>
                            </div>
                            <div class="col-md-5">
                                <div class="text-center">
                                    <img src={Section3Image1} alt="image1" class="img-fluid"/>
                                </div>
                                <div class="user-bx">
                                    <img src={Section3Image2} alt="image2" class="img-fluid"/>
                                    <img src={Section3Image3} alt="image3" class="img-fluid"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Section3/>
            <Section4/>
            <Section5/>
            <Section6/>
            <Footer/>
        </div>
    )
}

export default Home;
