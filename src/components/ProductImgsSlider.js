import React, { useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

export default function ProductImgsSlider({product}) {

    let thumbnails = document.getElementsByClassName('product-images-thumbnail')
    let activeImages = document.getElementsByClassName('images-slide-active')
    const handleThumbnail = e => {
        if (activeImages.length > 0){
            activeImages[0].classList.remove('images-slide-active')
        }
        e.target.classList.add('images-slide-active')
        document.getElementById('featured').src = e.target.src
    }

    const handleClickLeft = () => {
        document.getElementById('product-images-slider').scrollLeft -= 180
    }
    const handleClickRight = () => {
        document.getElementById('product-images-slider').scrollLeft += 180
    }


    return (

		<div className="column">
			<div id="images-slide-wrapper" >
                <AiOutlineLeft 
                    id="slideLeft" 
                    className="images-slide-arrow" 
                    onClick={() => handleClickLeft()}
                />
				<div id="product-images-slider">
                    {product &&
                        product.previewImgs.map(image => {
                            return (
                                <img 
                                    className="product-images-thumbnail images-slide-active" 
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
                    className="images-slide-arrow" 
                    onClick={() => handleClickRight()}
                />
			</div>
		</div>
    )
}
