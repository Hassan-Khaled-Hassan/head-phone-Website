import React from 'react'

const OurSponsers = () => {
  return (
    <section class="sponsor section">
      <div class="sponsor__container container grid">
        <img
          src="img/sponsor1.png"
          alt=""
          class="sponsor__img wow bounceInUp"
          data-wow-delay="0s"
          data-aos="fade-up"
          data-aos-duration="500"
        />
        <img
          src="img/sponsor2.png"
          alt=""
          class="sponsor__img wow bounceInUp"
          data-wow-delay="0.2s"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="300"
        />
        <img
          src="img/sponsor3.png"
          alt=""
          class="sponsor__img wow bounceInUp"
          data-wow-delay="0.4s"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="700"
        />
        <img
          src="img/sponsor4.png"
          alt=""
          class="sponsor__img wow bounceInUp"
          data-wow-delay="0.6s"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="1100"
        />
      </div>
    </section>
  );
}

export default OurSponsers