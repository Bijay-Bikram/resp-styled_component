import React from 'react'
import styled from 'styled-components'

const Error = () => {
    return (
        <Wrapper>
            <img src="./error.svg" alt="Some thing went wrong" />
            <h3>Page not found ! <a href="/">back to home page</a></h3>

        </Wrapper>
    )
}

const Wrapper = styled.section`
width: 100%;
height:calc(100vh - 20rem);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 4rem;
`

export default Error
