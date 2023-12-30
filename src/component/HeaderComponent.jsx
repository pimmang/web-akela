import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

// import required modules
import { EffectCoverflow, Autoplay } from "swiper/modules";

const HeaderComponent = () => {
  return (
    <div className="header w-100 mt-4">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="diskon d-flex align-items-center">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              style={{ position: "absolute", opacity: "0.8" }}
              className="img-fluid"
            />
            <div
              className="d-flex align-items-center "
              style={{
                width: "40%",
                height: "100%",
                content: "",
                backgroundColor: "rgba(102, 11, 149, 0.6)",
                zIndex: "100",
              }}
            >
              <div
                style={{
                  transform: "translate(15%,10%)",
                }}
              >
                <p>Up to</p>
                <h1 className="fw-bold">50%</h1>
                <p style={{ textAlign: "end" }}>Discount</p>
              </div>
            </div>
            <div
              style={{ width: "70%", height: "100%", zIndex: "999" }}
              className="p-2 d-flex flex-column align-items-end justify-content-evenly"
            >
              <div>
                <h5 style={{ color: "white" }}>Diskon Everyday</h5>
                <p style={{ textAlign: "right" }}>
                  Dapatkan potongan harga untuk setiap transaksi Anda
                </p>
              </div>
              <a href="https://wa.me/+6285342677431">
                <button className="cta"><p>Order Now</p></button>
              </a>
              <p>Syarat dan Ketentuan Berlaku</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="diskon d-flex">
            <img
              src="https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              style={{
                position: "absolute",
                opacity: "0.8",
              }}
              className="img-fluid"
            />
            <div
              style={{ width: "100%", height: "100%", zIndex: "999" }}
              className="p-2 d-flex flex-column align-items-center justify-content-evenly"
            >
              <div className="text-center">
                <h2
                  style={{ color: "white", margin: "0" }}
                  className="fs-1 fw-bold"
                >
                  Gratis Ongkir
                </h2>
                <p style={{ textAlign: "center" }}>
                  Pesanan hemat dengan gratis ongkir
                </p>
              </div>
              <a href="https://wa.me/+6285342677431">
              <button className="cta"><p>Order Now</p></button>
              </a>
              <p className="syarat">Syarat dan Ketentuan Berlaku</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="diskon d-flex align-items-center">
            <img
              src="https://images.unsplash.com/photo-1603202662747-00e33e7d1468?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              style={{ position: "absolute", opacity: "0.9" }}
              className="img-fluid"
            />
            <div
              style={{ width: "100%", height: "80%", zIndex: "999" }}
              className="p-2 d-flex flex-column align-items-start justify-content-evenly"
            >
              <div>
                <h2 style={{ color: "white" }} className="fw-bold">
                  Hasil Berkualitas
                </h2>
                <p style={{ textAlign: "start" }} className="deskripsi">
                  pengerjaan cepat dan hasil berkualitas <br />
                  Revisi gratis jika tidak sesuai pesanan
                </p>
              </div>
              <a href="https://wa.me/+6285342677431">
              <button className="cta"><p>Order Now</p></button>
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeaderComponent;
