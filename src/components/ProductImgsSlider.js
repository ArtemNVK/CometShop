import React, { useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

export default function ProductImgsSlider({product}) {

    let thumbnails = document.getElementsByClassName('thumbnail')
    let activeImages = document.getElementsByClassName('active')
    const handleThumbnail = e => {
        if (activeImages.length > 0){
            activeImages[0].classList.remove('active')
        }
        e.target.classList.add('active')
        document.getElementById('featured').src = e.target.src
    }

    const handleClickLeft = () => {
        document.getElementById('slider').scrollLeft -= 180
    }
    const handleClickRight = () => {
        document.getElementById('slider').scrollLeft += 180
    }


    return (

		<div className="column">
			<div id="slide-wrapper" >
                <AiOutlineLeft 
                    id="slideLeft" 
                    className="arrow" 
                    onClick={() => handleClickLeft()}
                />
				<div id="slider">
                    {product &&
                        product.previewImgs.map(image => {
                            return (
                                <img 
                                    className="thumbnail active" 
                                    src={image} 
                                    onClick={e => handleThumbnail(e)}
                                    onMouseOver={e => handleThumbnail(e)}
                                />
                            )
                        })
                    }
				</div>
                <AiOutlineRight 
                    id="slideRight" 
                    className="arrow" 
                    onClick={() => handleClickRight()}
                />
			</div>
		</div>
    )
}
