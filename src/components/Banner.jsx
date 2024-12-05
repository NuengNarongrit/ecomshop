import React, { useEffect } from 'react'

function Banner() {
  useEffect(() => {
    const items       = document.querySelectorAll('[data-carousel-item]');
    const totalItems  = items.length;
    let currentIndex  = 0;
    const goToSlide   = (index) => {
      items.forEach((item, i) => {
        item.classList.add('hidden');
        if (i === index) {
          item.classList.remove('hidden');
        }
      });
    };

    const nextSlide = () => {
      currentIndex = (currentIndex + 1) % totalItems;
      goToSlide(currentIndex);
    };

    const prevSlide = () => {
      currentIndex = (currentIndex - 1 + totalItems) % totalItems;
      goToSlide(currentIndex);
    };

    const nextButton = document.querySelector('[data-carousel-next]');
    const prevButton = document.querySelector('[data-carousel-prev]');
    
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
    goToSlide(currentIndex);

    // slide auto
    const interval = setInterval(() => {
      if(nextButton) {
        nextButton.click(); 
      }
    }, 3000); // ทุกๆ 3 วินาที

    return () => clearInterval(interval); 
  }, []);
  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div className="duration-700 ease-in-out" data-carousel-item>
          <img src="https://images.unsplash.com/photo-1531256379416-9f000e90aacc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img src="https://images.unsplash.com/photo-1524126674340-63807415b0f7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img src="https://images.unsplash.com/photo-1524126674340-63807415b0f7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img src="https://images.unsplash.com/photo-1541140767615-9a178a08a5a7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to Ecommerce!</h2>
        <p className="text-lg">Discover amazing products and deals</p>
        <a href="#" className='bg-blue-500 text-white px-6 py-2 rounded-full mt-8 inline-block hover:bg-blue-600'>Get Started</a>
      </div>

      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
      </div>

      <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
   
  )
}
export default Banner
