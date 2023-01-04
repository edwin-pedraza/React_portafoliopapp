import React from 'react'
import './testimonials.css'
import Avt1 from '../../assets/avatar1.jpg'
import Avt2 from '../../assets/avatar2.jpg'
import Avt3 from '../../assets/avatar3.jpg'
import Avt4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Navigation, Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {

  const data = [
    {
      avatar: Avt1,
      name: 'Tina Snow',
      review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, distinctio ipsum? Alias eum sequi assumenda optio asperiores et vitae dolor accusantium autem! Incidunt debitis sint, delectus facilis consectetur amet accusantium?'
    },

    {
      avatar: Avt2,
      name: 'Edwin Pedraza',
      review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, distinctio ipsum? Alias eum sequi assumenda optio asperiores et vitae dolor accusantium autem! Incidunt debitis sint, delectus facilis consectetur amet accusantium?'
    },

    {
      avatar: Avt3,
      name: 'Orlando Gonzales',
      review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, distinctio ipsum? Alias eum sequi assumenda optio asperiores et vitae dolor accusantium autem! Incidunt debitis sint, delectus facilis consectetur amet accusantium?'
    },

    {
      avatar: Avt4,
      name: 'Tomas Parket',
      review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, distinctio ipsum? Alias eum sequi assumenda optio asperiores et vitae dolor accusantium autem! Incidunt debitis sint, delectus facilis consectetur amet accusantium?'
    }
  ]


  return (
    <section id='testimonials'>
      <h5>Reviw from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Navigation, Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
        

        {
          data.map(({avatar,name,review}, index) =>{
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar one" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials