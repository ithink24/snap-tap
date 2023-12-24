import React from 'react';
import { Tab, Nav } from 'react-bootstrap';
import TabContent from './TabContent';
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
                        <Tab.Container defaultActiveKey="home">
                        <div class="main-tab">
                            <Nav variant="tabs" className="nav nav-tabs justify-content-center">
                            <Nav.Item>
                                <Nav.Link eventKey="home">PVC</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="profile">Seed</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="messages">Metal</Nav.Link>
                            </Nav.Item>
                            </Nav>
                        </div>

                        <div class="tab-content text-center">
                            <Tab.Content>
                                <Tab.Pane eventKey="home">
                                    <TabContent
                                        title="PVC"
                                        originalPrice="RS 2000"
                                        discountedPrice="RS 1500"
                                        features={['Long life', 'Strong PVC Material', 'Lightweight', 'Durable', 'Easy to carry and stack']}
                                    />
                                </Tab.Pane>

                                <Tab.Pane eventKey="profile">
                                    <TabContent
                                        title="Seed"
                                        originalPrice="RS 1800"
                                        discountedPrice="RS 1000"
                                        features={['Special Card for Environmentalists', 'Make an Eco-friendly impression', 'Grow a Plant for the seed Card', 'Durable', 'Eco-friendly way to remember you']}
                                    />
                                </Tab.Pane>

                                <Tab.Pane eventKey="messages">
                                    <TabContent
                                        title="Metal"
                                        originalPrice="RS 4200"
                                        discountedPrice="RS 3000"
                                        features={['Highly Durable', 'Resistant to wear and tear', 'Make a unique and solid impression', 'Durable', 'Recyclable Materials']}
                                    />
                                </Tab.Pane>
                            </Tab.Content>
                        </div>
                        </Tab.Container>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section3
