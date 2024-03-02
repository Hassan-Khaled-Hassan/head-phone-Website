import React from 'react'

const OurCase = () => {
  return (
    <section class="case section grid" id="case">
      <h2
        class="section__title section__title-gradient wow bounceInRight"
        data-aos="fade-left"
        data-aos-delay="400"
        data-aos-duration="500"
      >
        Case
      </h2>

      <div class="case__container container grid">
        <div>
          <img
            src="img/case.png"
            alt=""
            class="case__img wow bounceInDown"
            data-aos="fade-down"
            data-aos-delay="400"
            data-aos-duration="500"
          />
        </div>

        <div
          class="case__data wow bounceInUp"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="500"
        >
          <p class="case__description">
            With a comfortable and adaptable case so that you can store it
            whenever you want, and keep your durability forever.
          </p>
          <a href="#" class="button button--flex">
            <i
              class="fa-solid fa-circle-info fa-beat"
              style={{ color: "#323539" }}
            ></i>{" "}
            More info
          </a>
        </div>
      </div>
    </section>
  );
}

export default OurCase