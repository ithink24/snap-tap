import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import WhiteCard from '../../../Images/section 4 white card.svg';
import BlackCard from '../../../Images/section 4 black card.svg';
import Check from '../../../Images/check.svg';
import ImageCarousel from './ImageCarousel';
import '../style.css';

function TabContent({ title, originalPrice, discountedPrice, features }) {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
          setActiveIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
        }, 5000);
    
        return () => {
          clearInterval(intervalId);
        };
    }, []);

    const handleIndicatorClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="row pt-5">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                    <div className="card-p">
                        <p className="pvc">{title}</p>
                        <br />
                        <p className="pvc">
                        <span className="dash-rate">
                            <del>{originalPrice}</del>
                        </span>
                        &nbsp;&nbsp;{discountedPrice}
                        </p>
                    </div>
                    <div>
                        <ul className="list-unstyled card-list">
                        {features.map((feature, index) => (
                            <li key={index}>
                                <img src={Check} alt="check" /> &nbsp; <span>{feature}</span>
                            </li>
                        ))}
                        </ul>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Button size="lg" variant="primary" className="btn form-control theme-btn">
                                Try Now <img src={require('../../../Images/right.png')} alt="right" />
                            </Button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <ImageCarousel
                id="c1"
                images={[WhiteCard, BlackCard]}
                handleIndicatorClick={handleIndicatorClick}
                activeIndex={activeIndex}
            />
        </div>
    )
}

export default TabContent
