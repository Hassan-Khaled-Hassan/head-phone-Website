import React, { useEffect, useState } from 'react'
import axios from "axios";
const OurProducts = () => {  
  const [slides, setSlides] = useState([]);
  const [headings, setHeadings] = useState([]);
  const [Load, setLoad] = useState(true);
  const [activeButton, setActiveButton] = useState("all");

  useEffect(() => {
    setLoad(true);
    axios
      .get("js/data.json")
      .then((res) => {
        setSlides(res.data.Products || []);
        setHeadings(res.data.Headings || []);
      })
      .finally(() => setLoad(false));
  }, []);

  if (Load) return null;  
  const handleClick = (filter) => {
    setActiveButton(filter);
  };
  var filteredSlides=[];
  if(slides.length > 0){ filteredSlides =
    activeButton === "all"
      ? slides
      : slides.filter((slide) => slide.type === activeButton);}
  return (
    <section class="products section" id="products">
      <h2
        class="section__title section__title-gradient products__line wow bounceInRight"
        data-aos="fade-left"
        data-aos-duration="800"
      >
        Choose <br /> Your Style
      </h2>
      <div class="nav__menu" id="nav-menuu">
        <ul
          class="nav__list list wow bounceInLeft"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          {headings.map((item, index) => {
            return (
              <li class="nav__item">
                <button
                  class={`nav__linkk ${
                    item.active === true && activeButton === item.dataGoal
                      ? "active-link"
                      : ""
                  }  ${item.dataGoal}`}
                  data-goal={item.dataGoal}
                  onClick={() => handleClick(item.dataGoal)}
                >
                  {item.title}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div class="products__container container grid">
        {filteredSlides.map((item, index) => {
          return (
            <article
              class={`products__card all ${item.type} wow bounceInUp`}
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <div class="products__content">
                <img src={item.image} alt="" class="products__img" />

                <h3 class="products__title">{item.name}</h3>
                <span class="products__price">{item.price}</span>

                <button class="button button--flex products__button">
                  <i
                    class="fa-solid fa-cart-shopping fa-fade"
                    style={{ color: "#56585d" }}
                  ></i>
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default OurProducts