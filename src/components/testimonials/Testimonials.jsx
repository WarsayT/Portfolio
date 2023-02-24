/* eslint-disable no-unused-vars */
import React from 'react'
import "./testimonials.css"
import AVTR1 from "../../assets/avatar1.jpg"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"

// import required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "John Snow",
    review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," 
  },
  {
    avatar: AVTR2,
    name: "Alexander Andom",
    review: "I have had the pleasure of working alongside Warsay on various web development projects and I can confidently say that their attention to detail and expertise in coding is unmatched. They consistently deliver high-quality results and are a valuable asset to any team." 
  },
  {
    avatar: AVTR3,
    name: "Haben Gaim",
    review: "I had the pleasure of working with Warsay on a web development project and was blown away by their technical skills and attention to detail. They exceeded my expectations and delivered an exceptional website. Highly recommend!" 
  },
  {
    avatar: AVTR4,
    name: "John Snow",
    review: "As a web development teacher, I have seen students come and go. But, I must say that working with Warsay has been a pleasure. [Your name] has shown great dedication, hard work, and an eagerness to learn that is truly impressive. I am confident that Warsay  has a bright future in web development."
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      pagination={{clickable: true}} 
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="avatar img" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials