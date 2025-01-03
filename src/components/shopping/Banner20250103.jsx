import React, {useRef, useEffect, useState  } from 'react'
import '../../assets/css/SlideBanner.css';

import banner1 from '../../assets/images/banner1.jpg'
import banner2 from '../../assets/images/banner2.jpg'
import banner3 from '../../assets/images/banner3.jpg'
import background from '../../assets/images/background1.webp'

function Banner() {
    const sliderRef                       = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalDurationMs              = 10000;

    useEffect(() => {
      const slider = sliderRef.current;
      if (!slider) return;
    
      const slides                = slider.querySelectorAll('.slider__slide');
      const paginationContainer   = slider.querySelector('.slider__pagination');
      const sliderWrapper         = slider.querySelector('.slider__wrapper');
      const totalSlides           = slides.length;
      const sliderContainer       = slider.querySelector('.slider__container');
      sliderContainer.style.width = `${totalSlides * 100}%`;
    
      let autoScrollInterval;
    
      // ลบปุ่ม pagination ที่มีอยู่ก่อนหน้า
      while (paginationContainer.firstChild) {
        paginationContainer.removeChild(paginationContainer.firstChild);
      }
    
      // Create pagination buttons dynamically
      slides.forEach((_, index) => {
        const button = document.createElement('button');
        button.classList.add('slider__pagination__point');
        button.setAttribute('id', `slide${index}__button`);
        if (index === 0) {
          button.classList.add('active', 'timer');
        }
        button.addEventListener('click', () => {
          clearInterval(autoScrollInterval);
          goToSlide(index, false);
        });
        paginationContainer.appendChild(button);
      });
    
      const paginationButtons = paginationContainer.querySelectorAll('.slider__pagination__point');
    
      const goToSlide = (index, fromAutoScroll) => {
        paginationButtons.forEach(btn => btn.classList.remove('active', 'timer'));
        slides.forEach(slide => slide.classList.remove('active', 'timer'));
    
        paginationButtons[index].classList.add('active');
        slides[index].classList.add('active');
    
        const offsetLeft = slides[index].offsetLeft;
        sliderWrapper.scrollTo({ left: offsetLeft, behavior: 'smooth' });
    
        setCurrentIndex(index);
    
        if (fromAutoScroll) {
          paginationButtons[index].classList.add('timer');
        }
      };
    
      const startAutoScroll = () => {
        autoScrollInterval = setInterval(() => {
          let nextIndex = currentIndex + 1;
          if (nextIndex >= slides.length) nextIndex = 0;
          goToSlide(nextIndex, true);
        }, intervalDurationMs);
      };
    
      const stopAutoScroll = () => {
        clearInterval(autoScrollInterval);
        paginationButtons[currentIndex].classList.remove('timer');
      };
    
      sliderWrapper.addEventListener('wheel', stopAutoScroll);
      startAutoScroll();
    
      return () => {
        clearInterval(autoScrollInterval);
        sliderWrapper.removeEventListener('wheel', stopAutoScroll);
      };
    }, [currentIndex]);

  return (
    // <div className="h-screen bg-fixed bg-cover bg-center relative" style={{ backgroundImage: `url(${background})` }}>
    <>
    {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-white z-10"></div> */}
      <div className="wrapper relative ">
        <section className="slider mt-10" ref={sliderRef}>
          <div className="slider__wrapper">
            <div className="slider__container">
              {/* Add slides dynamically */}
              {[banner1, banner2, banner3].map((image, index) => (
                <div key={index} className="slider__slide">
                  <a className="slider__slide__link" href={`#${index + 1}`} draggable="false">
                    <div className="slider__slide__image__container">
                      <img className="slider__slide__image" src={image} alt={`Slide ${index + 1}`} />
                    </div>
                    <div className="slider__slide__caption">
                      <h1 className="slider__slide__title">Slide {index + 1}</h1>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="slider__pagination"></div>
        </section>
        <div className="flex items-center justify-center h-full text-white relative z-20 mt-20">
          <h1 className="text-4xl font-bold animate-bounce">Welcome to Our Shop</h1>
          <p className="text-lg mt-2 animate-pulse-slow">Discover the best technology products</p>
        </div>
      </div>
    </>
      
    // </div>
  )
}
export default Banner
