import React from 'react'

const Discounts = () => {
  return (
    <section class="discount section wow swing">
      <div class="discount__container container grid">
        <div
          class="discount__animate wow slideInRight"
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-duration="700"
        >
          <h2 class="discount__title">
            Immerse yourself in <br /> your music
          </h2>
          <p class="discount__description">Get it now, up to 50% off.</p>
          <a href="#" class="button button--flex">
            <i
              class="fa-solid fa-cart-shopping fa-fade"
              style={{ color: "#56585d" }}
            ></i>{" "}
            Shop Now
          </a>
        </div>

        <img
          src="img/discount.png"
          alt=""
          class="discount__img wow slideInLeft"
          data-aos="fade-left"
          data-aos-delay="400"
          data-aos-duration="700"
        />
      </div>
    </section>
  );
}

export default Discounts