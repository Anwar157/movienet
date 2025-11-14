import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Carousel = () => {
  const slides = [
    "https://i.postimg.cc/bwzJ9QpK/vy-FSYQn-IQihx-WZth-Kus-Lc3AP2nh.webp",
    "https://i.postimg.cc/tgxL1M8P/o6L6YTta3MTECzj-A4KJVN7E3tup.webp",
    "https://i.postimg.cc/d32s80Xm/1Jl5Wb-AEd7ja-Bf-Qklsb-Twb-Gqkc3.webp",
  ];

  return (
    <div className="w-full max-w-5xl mx-auto my-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        spaceBetween={20}
        slidesPerView={1}>
        {slides.map((url, i) => (
          <SwiperSlide key={i}>
            <img
              src={url}
              alt="Banner"
              className="w-full h-[180px] md:h-[380px] object-cover rounded-xl shadow-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
