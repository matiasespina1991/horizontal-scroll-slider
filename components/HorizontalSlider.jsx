import styled from "styled-components"

export default function HorizontalSlider() {
    const Wrapper = styled.div`
        border: 5px solid black;
        width: 100%;
        overflow: hidden;
    `

    const SlideContainer = styled.div`
        border: 5px solid green;
    `

    const Div = styled.div`
        border: 5px solid orange;
    `

    return(
        <>
            <Wrapper>
                <SlideContainer>
                    <Div>
                        Capo
                    </Div>
                </SlideContainer>
            </Wrapper>
        </>
    )


}