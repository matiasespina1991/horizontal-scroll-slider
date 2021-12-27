import { useState, useEffect, useRef } from 'react'

export default function HorizontalSlider({text, speed, direction}) {
    const [ sliderDirection, setSliderDirection ] = useState(direction == 'right' ? 'right' : 'left')
    const [ slideWidth, setSlideWidth ] = useState(0)
    const [ slidesContainerXPosition, setSlidesContainerXPosition ] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(direction == 'right'){
                setSlidesContainerXPosition(-window.pageYOffset * speed)
            } else{
                setSlidesContainerXPosition(window.pageYOffset * speed)
            }
            }
        );

        if(direction == 'right'){
            setSlideWidth(-slidesContainer.current.offsetWidth)
        } else{
            setSlideWidth(slidesContainer.current.offsetWidth)
        }
        
        
    }, [text, direction, speed])

    const slidesContainer = useRef()

    
    return(
        <>
                <div className="slider-wrapper">
                    <div ref={slidesContainer} className="slides-container">
                        <div className="slide">
                            {text}
                        </div>
                    </div>
                </div>

                <style jsx>
                    {`
                        .slider-wrapper {
                            width: 100%;
                            overflow: hidden;
                        }

                        .slides-container {
                            width: fit-content;
                            position: relative;
                            float: ${sliderDirection};
                            transform: translateX(calc(${slidesContainerXPosition}vw - ${slideWidth}px));
                            will-change: transform;
                        }
                        
                        .slide {
                            width: max-content;
                            font-size: 3.5rem;
                        }
                    `}
                </style>
        </>
        
    )


}
