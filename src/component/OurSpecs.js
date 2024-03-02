import React from "react";

const OurSpecs = () => {
  return (
    <section class="specs section grid" id="specs">
      <h2
        class="section__title section__title-gradient wow bounceOut"
        data-aos="zoom-out"
        data-aos-duration="500"
        data-aos-delay="300"
      >
        Specs
      </h2>

      <div class="specs__container container grid">
        <div
          class="specs__content grid wow slideInLeft "
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="600"
        >
          <div class="specs__data">
            <i
              class="fa-brands fa-bluetooth fa-beat-fade"
              style={{
                color: "#3b3d3f",
                marginLeft: "34px",
                fontSize: "1.8rem",
                marginBottom: "14px",
              }}
            ></i>
            <h3 class="specs__title">Connection</h3>
            <span class="specs__subtitle">Bluetooth v5.2</span>
          </div>

          <div class="specs__data">
            <i
              class="fa-solid fa-battery-full fa-bounce"
              style={{
                color: "#575c66",
                marginLeft: "34px",
                fontSize: "1.8rem",
                marginBottom: "14px",
              }}
            ></i>
            <h3 class="specs__title">Battery</h3>
            <span class="specs__subtitle">Duration 40h</span>
          </div>

          <div class="specs__data">
            <i
              class="fa-solid fa-bolt fa-fade"
              style={{
                color: "#303236",
                marginLeft: "34px",
                fontSize: "1.8rem",
                marginBottom: "14px",
              }}
            ></i>
            <h3 class="specs__title">Load</h3>
            <span class="specs__subtitle">Fast charge 4.2-AAC</span>
          </div>

          <div class="specs__data">
            <i
              class="fa-solid fa-microphone fa-shake"
              style={{
                color: "#42464d",
                marginLeft: "34px",
                fontSize: "1.8rem",
                marginBottom: "14px",
              }}
            ></i>
            <h3 class="specs__title">Microphone</h3>
            <span class="specs__subtitle">
              Supports Apple Siri <br /> and Google
            </span>
          </div>
        </div>

        <div>
          <img
            src="img/specs.png"
            alt=""
            class="specs__img wow slideInRight"
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="600"
          />
        </div>
      </div>
    </section>
  );
};

export default OurSpecs;
