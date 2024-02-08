"use client"
import React, { useEffect } from 'react';
import { images } from "../../lib/images";
import Image from 'next/legacy/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import { Pagination, Autoplay, Mousewheel } from 'swiper/modules';
import SwiperCore from 'swiper';

// Install Swiper modules
SwiperCore.use([Pagination, Autoplay, Mousewheel]);

const Carosel = () => {
  return (
    <div className="w-full max-w-5xl mx-auto overflow-hidden">
      <div className="relative w-full overflow-hidden">
        <Swiper
          // pagination={{ dynamicBullets: true }}
          className="mySwiper"
          spaceBetween={14} // Adjust the gap between images as needed
          loop={true} // Enable looping
          autoplay={{ delay: 2000 }} // Autoplay with 2-second delay
          mousewheel={true} // Enable mousewheel scrolling
          grabCursor={true} // Show grab cursor on mouse hover
          centeredSlides={true}
          breakpoints={{
            // Responsive breakpoints
            640: { // 640px and above
              width: 640,
              slidesPerView: 2,
            },
            651: { // 640px and above
              width: 651,
              slidesPerView: 3,
            },
            768: { // 768px and above
              width: 768,
              slidesPerView: 3,
            },
            1024: { // 1024px and above
              width: 1024,
              slidesPerView: 4,
            },
            1280: { // 1280px and above
              width: 1280,
              slidesPerView: 5,
            },
            320: { // Below 320px
              width: 320,
              slidesPerView: 2, // Set to 1 for mobile devices
            },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="max-w-[300px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-[300px] xl:max-w-[350px] mx-auto rounded-xl shadow-md hover:shadow-lg"> {/* Added hover shadow */}
                <div style={{ position: 'relative', width: '100%', height: '300px' }}>
                  <Image src={image.src} layout="fill" objectFit="cover" alt={image.title} className="rounded-xl" sizes="(max-width: 320px) 100vw, (max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" preload="true" /> {/* Added preload attribute */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Carosel;