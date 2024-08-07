import React from 'react'
import styled from 'styled-components'

const Spinner = () => {
    return (
        <Wrapper>
            <Spin className='spinner'>
            </Spin>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Spin = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 5px solid #ccc;
    border-top-color: #333;
    animation: spin 1s linear infinite;
    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
`

export default Spinner
