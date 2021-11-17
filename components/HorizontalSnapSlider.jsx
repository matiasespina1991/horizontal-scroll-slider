import { useRef, useEffect, useState } from "react"

export default function HorizontalSnapSlider({text}) {

    const [ distanceFromSliderToTopOfTheDocument, setDistanceFromSliderToTopOfTheDocument ] = useState(null)
    const [ distanceFromSliderToBottomOfTheViewport, setDistanceFromSliderToBottomOfTheViewport ] = useState(null)
    const [ distanceFromViewportToTopOfTheDocument, setDistanceFromViewportToTopOfTheDocument ] = useState(null)
    const [ distanceFromSliderToTopOfTheViewport, setDistanceFromSliderToTopOfTheViewport ] = useState(null)
    const [ sliderScroll, setSliderScroll ] = useState(0)
    const [ sliderContainerWidth, setSliderContainerWidth ] = useState(null)

    const sliderWrapper = useRef();
    const sliderContainer = useRef();
    

    useEffect(() => { 
        setDistanceFromSliderToTopOfTheDocument(sliderWrapper.current.offsetTop)
        setSliderContainerWidth(sliderContainer.current.getBoundingClientRect().width)
    }, [text])

    useEffect(() => { 
        window.addEventListener('scroll', () => {
                setDistanceFromSliderToTopOfTheViewport(sliderWrapper.current.getBoundingClientRect().top)
                setDistanceFromViewportToTopOfTheDocument(window.pageYOffset)
                setDistanceFromSliderToBottomOfTheViewport(sliderWrapper.current.getBoundingClientRect().bottom - window.innerHeight)

                if(distanceFromSliderToTopOfTheViewport<0 && distanceFromSliderToTopOfTheViewport>-2000){
                    setSliderScroll(Math.abs(distanceFromSliderToTopOfTheViewport))
                }
                

                // console.log("The width of the slider container is: ",sliderContainerWidth)
                // console.log("The distance from the top of the slider to the top of the document is: ",distanceFromSliderToTopOfTheDocument)
                // console.log("The distance from the top of the slider to the top of the viewport is: ", distanceFromSliderToTopOfTheViewport)
                // console.log("The distance from the top of the slider to the bottom of the viewport is: ", distanceFromSliderToBottomOfTheViewport)
                // console.log("The distance from the top of the viewport to the top of the document is: ", distanceFromViewportToTopOfTheDocument)

            }
        );
    })

    

    return (
        <>
            <div ref={sliderWrapper} className="slider-wrapper">
                <div ref={sliderContainer} className="slides-container">
                    <div className="slide">
                        {/* {text}  */}
                        DEMO TEXT
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    .slider-wrapper {
                        background: gray;
                        min-height: 100vh;
                        height: ${sliderContainerWidth}px;
                        border: 2px solid black;
                        width: 100%;
                        overflow: hidden;
                    }

                    .slides-container {
                        border: 2px solid gray;
                        transform: translateX(-${sliderScroll}px);
                        height: fit-content;
                        width: fit-content;
                        position: relative;
                    }
                    
                    .slide {
                        border: 2px solid yellow;
                        min-width: max-content;
                        width: fit-content;
                        font-size: 30rem;
                    }
                `}
            </style>
        </>
    )
}