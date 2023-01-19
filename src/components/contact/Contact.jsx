import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
// import {SiWhatsapp} from 'react-icons/si'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">


            <article className='contact__option'>
              <MdEmail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>Edwin@gmail.com</h5>
              <a href="mailto:edw.pedraza@gmail.com" target= '_blank' rel='noreferrer'> Send a message</a>
            </article>

            <article className='contact__option'>
              <RiMessengerLine className='contact__option-icon'/>
              <h4>Messenger</h4>
              <h5>Edwin@gmail.com</h5>
              <a href="https://m.me/edwin.pedraza" target= '_blank' rel='noreferrer'> Send a message</a>
            </article>

            {/* <article className='contact__option'>
              <SiWhatsapp className='contact__option-icon'/>
              <h4>WhatsApp</h4>
              <h5>Edwin@gmail.com</h5>
              <a href="https://wa.me/15551234567" target= '_blank' rel='noreferrer'> Send a message</a>
            </article> */}
          </div>

          {/* <form action="">
            <input type="text" name="name" placeholder='Your Full Name' required/>
            <input type="email" name="email" placeholder='Your Email' required/>
            <textarea name="messege" rows="7" placeholder='Message' required></textarea>
            <button type='submit'className='btn btn-primary'>Send Message</button>
          </form> */}
        </div>

    </section>
  )
}

export default Contact