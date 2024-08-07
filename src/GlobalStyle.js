import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }
    html{
        font-size: 62.5%; 
        overflow-x: hidden;
    }
    body{
    overflow-x:hidden;
    }
    h1{
        color:${({ theme }) => theme.colors.header};
        font-size: 6rem;
    }

    h2{
        color:${({ theme }) => theme.colors.header};
        font-size: 4.4rem;
        font-weight: 300;
        white-space: normal;
        text-align: center;
    }
    h3{
        font-size: 1.8rem;
        font-weight: 400;
    }
    p{
        color:${({ theme }) => theme.colors.text};
        opacity: .7;
        font-size: 1.65rem;
        line-height: 1.5;
        margin-top: 1rem;
        font-weight: 400;
    }
    a{
        text-decoration: none;
    }
    li{
        list-style: none;
    }
    ::-webkit-scrollbar{
        width: .9rem;
    }
    
    ::-webkit-scrollbar-track{
        background-color: ${({ theme }) => theme.colors.bg};
    }

    ::-webkit-scrollbar-thumb{
        background-color: ${({ theme }) => theme.colors.helper};
        border-radius: 1rem;
    }
    

// Note: container class provide actual width and margin of the component or page
    .container{
        max-width: 120rem;
        margin: 0 auto;
        padding: 0 3.2rem;
    } 
    .grid{
        display: grid;
        gap: 9rem;
    } 
    .grid-two-col{
        grid-template-columns: repeat(2,1fr);
    }

    .grid-three-col{
    grid-template-columns: repeat(3,1fr);
    }
    .grid-four-col{
        grid-template-columns: 1fr 1.2fr .5fr .5fr;
    }

    .common-heading{
        font-size: 3.8rem;
        font-weight: 600;
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 6rem;
    }

    input,textarea{
        max-width: 50rem;
        color: ${({ theme }) => theme.colors.black};
        padding: 1.6rem 2.4rem;
        border: 1px solid ${({ theme }) => theme.colors.border};
        box-shadow:${({ theme }) => theme.colors.shadowSupport};
    }

    input[type="submit"]{
        max-width: 16rem;
        margin-top: 2rem 0;
        background-color: ${({ theme }) => theme.colors.btn};
        color: ${({ theme }) => theme.colors.white};
        padding: 1.4rem 2.2rem;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        transition: all .5s ease;
        &:hover{
            border-top-left-radius: 5px;
            border-bottom-right-radius: 5px;
        }
    }

    form{
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }


    footer{
        padding: 14rem 0 9rem 0;
        background: ${({ theme }) => theme.colors.footer_bg};

        h3{
            color:${({ theme }) => theme.colors.hr};
            margin-bottom: 2.4rem;
        }
        p{
            color: ${({ theme }) => theme.colors.white};
        }
    }

    //Responsive styles
  @media ( max-width: ${({ theme }) => theme.media.tab}) {
    .container{
        padding: 0 3.2rem;
    }
    .grid-three-col{
        grid-template-columns: 1fr 1fr;
    }
    .grid{
        gap: 3.2rem;
    }
  }
      
 @media ( max-width: ${({ theme }) => theme.media.mobile}) {
    html{
        font-size: 30%;
    }
   .grid-two-col, .grid-three-col,.grid-four-col{
    grid-template-columns: 1fr;
  }
  h2{
        font-size: 1.4rem;
    }
  }
`