import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Testi } from "../data/data";
// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const TestiComponent = () => {
  return (
    <div className="w-100 testi mt-4" id="testi">
      <div className="d-flex gap-2 align-items-center mb-4">
        <div className="list"></div>
        <h1 className="fw-bold">Apa kata mereka</h1>
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {Testi.map((data) => {
          return (
            <SwiperSlide key={data.id}>
              <div className="testi-kategori testi-container w-100 text-center">
                <div className="testi-kategori d-flex flex-column align-items-center justify-content-between">
                  <div style={{ height: "fit-content" }} className="d-flex flex-column align-items-center">
                    <div className="testi-kategori-img">
                      {data.kategori === "percetakan" && (
                        <img
                          src="https://images.unsplash.com/photo-1605978542268-b49288706bfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt={data.kategori}
                          className="img-fluid"
                        />
                      )}
                      {data.kategori === "web" && <img src="" alt="" />}
                      {data.kategori === "uiux" && <img src="" alt="" />}
                      {data.kategori === "desain" && <img src="" alt="" />}
                    </div>
                    <h1>{data.kategori}</h1>
                  </div>
                  <p>{'"'+data.pesan+'"'}</p>
                  <h1 style={{ color: "var(--secondary-color)" }}>
                    {data.pengirim}
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TestiComponent;
