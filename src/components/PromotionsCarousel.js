import React, { useState } from 'react'
import { sliderData } from '../utils'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom';

export default function PromotionsCarousel({slides}) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    return (
        <section className="slider">
            <i class="fa fa-arrow-left arrow left" onClick={prevSlide}></i>
            <i class="fa fa-arrow-right arrow right" onClick={nextSlide}></i>
            {/* <FaArrowAltCircleLeft 
                className="arrow left" 
                onClick={prevSlide}/>
            <FaArrowAltCircleRight
                className="arrow right" 
                onClick={nextSlide}/> */}
            {sliderData.map((slide, index) => {
                return (
                    
                    <div 
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && (
                        <Link to={slide.category !== null ? `/search/category/${slide.category}` : "#"}>
                            <img 
                            src={slide.image} 
                            alt="promo" 
                            className="promo-carousel-img"
                            />
                        </Link>
                        )
                        } 
                    </div>
                    
                )
            })}
            <div className="promo-carousel-dots-container">
                {sliderData.map((item, index) => {
                  return  (
                        <div 
                            className={index === current ? "promo-carousel-dots active" : "promo-carousel-dots"} 
                            onClick={() => setCurrent(index)}></div>
                    )
                })
                }
                
            </div>
        </section>
    )
}
