import React from 'react'
import styled from 'styled-components'

const Contact = () => {
    return (
        <Wrapper>
            <h2 className='common-heading'>Feel free to Contact us</h2>

            <div className="container">
                <div className="contact-form">
                    <form action='https://formspree.io/f/xeojgplz' method='POST' className='contact-inputs'>
                        <input
                            type="text"
                            name='name'
                            placeholder='username'
                            autoComplete='off'
                            required
                        />

                        <input
                            type="email"
                            name='email'
                            placeholder='Email'
                            required
                        />

                        <textarea
                            name="message"
                            id=""
                            cols="30"
                            rows="6"
                            placeholder="Write Comments"
                        ></textarea>

                        <input type="submit" value={"Send"} />
                    </form>
                </div>
            </div>

            <div className='map'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108018.66044700124!2d87.6663024355603!3d27.115408911302964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e5e2106f7a7041%3A0x2e67b8bcdc4534cd!2sPhidim%2057400!5e1!3m2!1sen!2snp!4v1722641216373!5m2!1sen!2snp"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>

        </Wrapper >
    )
}

const Wrapper = styled.section`
padding: 9rem 0 5rem 0;

.container{
    margin: 6rem auto;
    text-align: center;
}

.contact-form{
    max-width: 50rem;
    margin: auto;
}

/* .contact-inputs{
    display: flex;
    flex-direction: column;
    gap: 2rem;
} */
`
export default Contact
