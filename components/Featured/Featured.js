import styles from './featured.module.css'
import utilStyles from '../../styles/utils.module.css'
import Image from 'next/legacy/image'
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel } from 'swiper';


const Featured = () => {

      const [sliderOptions, setSliderOptions] = useState(null);

      useEffect(() => {
        const deviceBreakpoints = {
          480: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          }}

        setSliderOptions(deviceBreakpoints);
        console.log({sliderOptions}, 'from use effect')
      },[])

      const projectSlider = {
        className:"slider",
        modules:[Navigation, Pagination, Mousewheel],
        spaceBetween:10,
        slidesPerView:1,
        loop:true,
        centeredSlides:true,
        direction:"horizontal",
        mousewheel:true,  
        pagination:{ 
          clickable: true,
          dynamicBullets: true 
        },
        breakpoints:sliderOptions,
        scrollbar:{draggable: true }
      } 
  return (
    <>
    {sliderOptions && <Swiper {...projectSlider}
      
      >
      
        <SwiperSlide>
          <div className={styles.projectContainer}>
            <div className={styles.imageWrapper}>
              <Image 
              src='/fresh_kind.png' 
              height={430} 
              width={270} 
              />
            </div>  
            <span className={styles.projectName}>silk & sense</span>
            <span className={styles.projectType}>logo</span>

          </div>  
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.projectContainer}>
            <div className={styles.imageWrapper}>
              <Image 
              src='/silk_28.png' 
              height={430} 
              width={270} 
              />
            </div>  
            <span className={styles.projectName}>silk & sense</span>
            <span className={styles.projectType}>logo</span>

          </div>  
        </SwiperSlide>
  

        <SwiperSlide>
          <div className={styles.projectContainer}>
            <div className={styles.imageWrapper}>
              <Image 
              src='/silk_28.png' 
              height={430} 
              width={270} 
              />
            </div>  
            <span className={styles.projectName}>silk & sense</span>
            <span className={styles.projectType}>logo</span>

          </div>  
        </SwiperSlide>
  

        <SwiperSlide>
          <div className={styles.projectContainer}>
            <div className={styles.imageWrapper}>
              <Image 
              src='/silk_28.png' 
              height={430} 
              width={270} 
              />
            </div>  
            <span className={styles.projectName}>silk & sense</span>
            <span className={styles.projectType}>logo</span>

          </div>  
        </SwiperSlide>
  
        
      
      </Swiper>}
  
  
    </>
   

  )
}

export default Featured;