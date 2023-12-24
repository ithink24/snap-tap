import React from 'react';
import '../style.css';

const ImageCarousel = ({ id, images, activeIndex, handleIndicatorClick }) => {
    console.log('aaaa');
    return (
        <div className="col-md-8">
            <div id={id} className="carousel slide card-slider" data-ride="carousel">
                <ol className="carousel-indicators">
                    {images.map((_, index) => (
                        <li
                            key={index}
                            data-target={`#${id}`}
                            data-slide-to={index}
                            className={index === activeIndex ? 'active' : ''}
                            onClick={() => handleIndicatorClick(index)}
                    ></li>
                    ))}
                </ol>

                <div className="carousel-inner">
                    <img className="d-block w-100" src={images[activeIndex]} alt="slide images"/>
                </div>
            </div>
        </div>
    )
};

export default React.memo(ImageCarousel);
