import { useRef, useEffect, useState } from "react"

export default function HorizontalSnapSlider({text, direction}) {
    const [distanceFromTopOfWrapperToTopOfViewport, setDistanceFromTopOfWrapperToTopOfViewport] = useState(0)
    const [ sliderScroll, setSliderScroll ] = useState(0)
    const [ sliderContainerWidth, setSliderContainerWidth ] = useState(null)
    const [ sliderReachedViewport, setSliderReachedViewport ] = useState(false)
    const [ sliderReachedBottom, setSliderReachedBottom ] = useState(false)
    const [ isNegative, setIsNegative ] = useState('')
    const [ windowHeight, setWindowHeight ] = useState(0)

    const sliderWrapper = useRef();
    const sliderContainer = useRef();

    useEffect(() => {
        setWindowHeight(window.innerHeight)
    }, [])
    
    useEffect(() => { 
        if(direction == "right"){
            setIsNegative('')
        } else {
            setIsNegative('-')
        }
    }, [direction])

    useEffect(() => { 
        setSliderContainerWidth(sliderContainer.current.getBoundingClientRect().width)
    }, [text])

    useEffect(() => { 
        window.addEventListener('scroll', () => {

            setDistanceFromTopOfWrapperToTopOfViewport(Math.abs(sliderWrapper.current.getBoundingClientRect().top))
            const wrapperReachedViewport = sliderWrapper.current.getBoundingClientRect().top < 0;
            const sliderReachedBottom = (sliderWrapper.current.getBoundingClientRect().bottom - window.innerHeight) < 0;

            if(wrapperReachedViewport) {
                    setSliderReachedViewport(true)
                } else {
                    setSliderReachedViewport(false)
            }

            if(sliderReachedBottom) {
                    setSliderReachedBottom(true)
                } else {
                    setSliderReachedBottom(false)
            }
        })
    }, []);

    useEffect(() => { 
        if(sliderReachedViewport && distanceFromTopOfWrapperToTopOfViewport < (sliderContainerWidth - window.innerWidth)){
            setSliderScroll(distanceFromTopOfWrapperToTopOfViewport)
        }
    }, [sliderReachedViewport, distanceFromTopOfWrapperToTopOfViewport, sliderContainerWidth])


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
                        height: ${sliderContainerWidth - windowHeight}px;
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
                        width: max-content;
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