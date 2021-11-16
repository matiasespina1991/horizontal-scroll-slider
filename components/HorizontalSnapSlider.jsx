import { useRef, useEffect, useState } from "react"

export default function HorizontalSnapSlider({text}) {

    const [ distanceFromSliderToTopOfTheDocument, setDistanceFromSliderToTopOfTheDocument ] = useState(0)

    const sliderWrapper = useRef();
    

    useEffect(() => { 
        const sliderTopToDocument = sliderWrapper.current.offsetTop
        setDistanceFromSliderToTopOfTheDocument(sliderTopToDocument)
    }, [text])

    useEffect(() => { 
        window.addEventListener('scroll', () => {
                const sliderTopToViewport = sliderWrapper.current.getBoundingClientRect().top
                const viewportTopToDocument = window.pageYOffset
            
                console.log("The distance from the top of the slider to the top of the document is: ",distanceFromSliderToTopOfTheDocument)
                console.log("The distance from the top of the slider to the top of the viewport is: ", sliderTopToViewport)
                console.log("The distance from the top of the viewport to the top of the document is: ", viewportTopToDocument)

            }
        );
    })

    

    return (
        <>
            <div ref={sliderWrapper} className="slider-wrapper">
                <div className="slides-container">
                    <div className="slide">
                        {text}
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    .slider-wrapper {
                        background: gray;
                        min-height: 100vh;
                        border: 2px solid black;
                        width: 100%;
                        overflow: hidden;
                    }

                    .slides-container {
                        border: 2px solid gray;
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