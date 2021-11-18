import { useRef, useEffect, useState } from "react"

export default function HorizontalSnapSlider({text, direction}) {
    const [ sliderScroll, setSliderScroll ] = useState(0)
    const [ sliderContainerWidth, setSliderContainerWidth ] = useState(null)
    const [ sliderReachedViewport, setSliderReachedViewport ] = useState(false)
    const [ sliderReachedBottom, setSliderReachedBottom ] = useState(false)
    const [ isNegative, setIsNegative ] = useState('')

    const sliderWrapper = useRef();
    const sliderContainer = useRef();
    

    useEffect(() => { 
        setSliderContainerWidth(sliderContainer.current.getBoundingClientRect().width)
    }, [text])

    useEffect(() => { 

        window.addEventListener('scroll', () => {
            if(sliderWrapper.current.getBoundingClientRect().top < 0) {
                setSliderScroll(Math.abs(sliderWrapper.current.getBoundingClientRect().top))
                setSliderReachedViewport(true)
            } else {
                setSliderReachedViewport(false)
            }
            if((sliderWrapper.current.getBoundingClientRect().bottom - window.innerHeight) < 0) {
                setSliderReachedBottom(true)
            } else {
                setSliderReachedBottom(false)
            }
        })

        if(direction == "right"){
            setIsNegative('')
        } else {
            setIsNegative('-')
        }
    }, []);

    return (
        <>
            <div ref={sliderWrapper} className="slider-wrapper">
                <div ref={sliderContainer} className={`slides-container ${sliderReachedViewport ? "fixed" : ""} ${sliderReachedBottom ? "stickToBottom" : ""}`}>
                    <div className="slide">
                        {text} 
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    .slider-wrapper {
                        background: gray;
                        position: relative;
                        min-height: 100vh;
                        height: ${sliderContainerWidth}px;
                        width: 100%;
                        overflow: hidden;
                    }

                    .slides-container {
                        transform: translateX(${isNegative}${sliderScroll}px);
                        height: 100vh;
                        width: fit-content;
                        position: relative;
                        display: flex;
                        align-items: center;
                        ${direction == "right" ? "float:right;" : ""}
                    }
                    
                    .slide {
                        min-width: max-content;
                        width: fit-content;
                        font-size: 30rem;
                    }

                    .fixed {
                        position: fixed;
                        top:0;
                        bottom: unset;
                        ${direction == "right" ? "right:0;" : ""}
                    }

                    .stickToBottom {
                        position: absolute;
                        bottom: 0;
                        top: unset;
                    }
                `}
            </style>
        </>
    )
}