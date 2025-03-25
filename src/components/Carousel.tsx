"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export interface CarouselImageMetadata {
  src: string;
  alt: string;
  position: "top" | "center" | "bottom";
  title?: string;
  titleColor?: string;
}

export interface CarouselProps {
  images?: CarouselImageMetadata[];
}

export default function Carousel({ images }: CarouselProps) {
  // const settings: Settings = {
  //   autoplaySpeed: 10000,
  //   autoplay: true,
  //   speed: 1000,
  //   arrows: false,
  //   dots: true,
  // };
  // <Slider {...settings}>
  //   {images?.map((image, index) => (
  //     <div key={index} className="relative min-h-180">
  //       <Image src={image.src} alt={image.alt} className={`object-cover object-${image.position} `} fill />
  //       {image.title && (
  //         <div
  //           className="absolute top-40 left-1/2 transform -translate-x-1/2 text-cthird text-6xl font-bold text-nowrap"
  //           style={{
  //             color: image.titleColor || "white",
  //             textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
  //             background: "rgba(0,0,0,0.1)",
  //             backdropFilter: "blur(3px)",
  //             borderRadius: "10px",
  //             padding: "1.5rem",
  //           }}
  //         >
  //           {image.title}
  //         </div>
  //       )}
  //     </div>
  //   ))}
  // </Slider>

  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {images?.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full min-h-180">
              <Image src={`/raaaaaaaay86.github.io${image.src}`} alt={image.alt} fill className="object-cover" />
              {image.title && (
                <div
                  className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-xl font-bold bg-black/50 px-4 py-2 rounded"
                  style={{
                    textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
                  }}
                >
                  {image.title}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
