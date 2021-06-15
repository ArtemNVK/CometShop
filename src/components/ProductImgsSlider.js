import React, { useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

export default function ProductImgsSlider({product}) {

    let thumbnails = document.getElementsByClassName('thumbnail')

    let activeImages = document.getElementsByClassName('active')

    for (var i=0; i < thumbnails.length; i++){

        thumbnails[i].addEventListener('click', function(){
            
            if (activeImages.length > 0){
                activeImages[0].classList.remove('active')
            }
            

            this.classList.add('active')
            document.getElementById('featured').src = this.src
        })
        thumbnails[i].addEventListener('mouseover', function(){
            console.log(activeImages)
            
            if (activeImages.length > 0){
                activeImages[0].classList.remove('active')
            }
            

            this.classList.add('active')
            document.getElementById('featured').src = this.src
        })
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
                                <img className="thumbnail active" src={image} />
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
		// </div>

    )
}
