import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../Contex'
import styled from 'styled-components'
import { Button } from '../styles/Button'
import Spinner from '../components/Spinner'



const Service = () => {
    const [content, setContent] = useState([])
    const { services } = useGlobalContext()

    useEffect(() => {
        setContent(services)
    }, [services])

    return (
        <>
            {content.length !== 0 ? (
                <Wrapper className='section'>
                    <h2 className='common-heading'>Our Services</h2>
                    <div className='container grid grid-three-col'>
                        {content.map((curElem) => {
                            const { id, title, image, description } = curElem;
                            return (
                                <div className='card' key={id}>
                                    <figure>
                                        <img src={image} alt={title} />
                                    </figure>
                                    <div className='card-data'>
                                        <h3 className='topic'>{title}</h3>
                                        <p >{description}</p>
                                        <Button className='btn'>Read More</Button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </Wrapper>
            ) :
                (
                    <Spinner />
                )
            }
        </>
    )
}

const Wrapper = styled.section`
    padding: 9rem 0;
    background: ${({ theme }) => theme.colors.bg};

    .container{
        max-width: 120rem;
        margin: 1rem auto;
    }

    .card{
        border: 0.1rem solid rgb(170 170 170/40%);


        figure{
          width: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          overflow: hidden;
          transition: all 0.5s linear;
          &::after{
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 0%;
            height: 100%;
            background-color: rgba(0,0,0,0.5);
            transition: all 0.2s linear;
            cursor: pointer;
          }
          &:hover::after{
            width: 100%;
          }
             &:hover img{
            transform: scale(1.2);
             }
         img{
            max-width: 90%;
            margin-top: 1.5rem;
            height: 20rem;
            transition: all 0.2s linear;
            }
        }
        .card-data{
            padding: 1rem 2rem;

                .topic{
                margin-top: 1rem;
            }
        }
           
        .btn{
            display: block;
            margin:2rem auto 1rem;
            background-color: transparent;
            border: 0.1rem solid rgb(98 84 243);
            color: rgb(98 84 243);
            font-size: 1.4rem;

            &:hover{
                background-color: rgb(98 84 243);
                color: #fff;
            }
        }
    }

`


export default Service
