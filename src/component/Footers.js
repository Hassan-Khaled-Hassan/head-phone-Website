import React from 'react'

const Footers = () => {
  return (
    <footer class="footer section">
      <div class="footer__container container grid">
        <a
          href="#"
          class="footer__logo wow slideInDown"
          data-wow-delay="0s"
          data-aos="fade-down"
          data-aos-delay="400"
          data-aos-duration="800"
        >
          <img src="img/logo.png" alt="" />
        </a>

        <div
          class="footer__content wow bounceInUp"
          data-wow-delay="0.2s"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="800"
        >
          <h3 class="footer__title">Products</h3>

          <ul class="footer__links">
            <li>
              <a href="#" class="footer__link">
                Headphones
              </a>
            </li>
            <li>
              <a href="#" class="footer__link">
                Earphones
              </a>
            </li>
            <li>
              <a href="#" class="footer__link">
                Earbuds
              </a>
            </li>
            <li>
              <a href="#" class="footer__link">
                Accesories
              </a>
            </li>
          </ul>
        </div>

        <div
          class="footer__content wow slideInDown"
          data-wow-delay="0.4s"
          data-aos="fade-down"
          data-aos-delay="400"
          data-aos-duration="800"
        >
          <h3 class="footer__title">Support</h3>

          <ul class="footer__links">
            <li>
              <a href="#" class="footer__link">
                Product help
              </a>
            </li>
            <li>
              <a href="#" class="footer__link">
                Register
              </a>
            </li>
            <li>
              <a href="#" class="footer__link">
                Updates
              </a>
            </li>
            <li>
              <a href="#" class="footer__link">
                Provides
              </a>
            </li>
          </ul>
        </div>

        <div
          class="footer__content wow bounceInUp"
          data-wow-delay="0.6s"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="800"
        >
          <form
            action=""
            class="footer__form wow slideInLeft"
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-duration="1400"
            data-wow-delay="1s"
          >
            <input type="email" placeholder="Email" class="footer__input" />
            <button class="button button--flex">
              <i
                class="fa-solid fa-paper-plane fa-beat-fade"
                style={{ color: "#3a3c41" }}
              ></i>{" "}
              Subscribe
            </button>
          </form>

          <div
            class="footer__social wow slideInRight"
            data-wow-delay="1s"
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="1400"
          >
            <a
              href="https://www.facebook.com/"
              target="_blank"
              class="footer__social-link"
            >
              <i class="fa-brands fa-facebook fa-beat-fade"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              class="footer__social-link"
            >
              <i class="fa-brands fa-instagram fa-beat-fade"></i>
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              class="footer__social-link"
            >
              <i class="fa-brands fa-twitter fa-beat-fade"></i>
            </a>
          </div>
        </div>
      </div>

      <p class="footer__copy">
        <a href="#" target="_blank" class="footer__copy-link">
          All right reserved . Powered by &#169;{" "}
          <span class="wow flash">HASSAN(ELAomery)</span>{" "}
        </a>
      </p>
    </footer>
  );
}

export default Footers