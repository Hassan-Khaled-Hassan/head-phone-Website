import React, { useEffect, useState } from 'react'
import UseFuncHooks from './UseFuncHooks';

const Headrs = () => {  
const [isScrolledHeader, isScrolled, BackToTop] = UseFuncHooks();
  return (
    <header
      class={`header ${isScrolledHeader ? "scroll-header" : ""}`}
      id="header"
    >
      <nav class="nav container">
        <a href="#" class="nav__logo">
          <img src="/img/logo.png" alt="" />
        </a>
        <div class="nav__toggle" id="nav-toggle">
          <span></span>
          <span></span>
        </div>
        <div class="nav__menu" id="nav-menu">
          <ul class="nav__list">
            <li class="nav__item">
              <a href="#home" class="nav__link active-link">
                Home
              </a>
            </li>
            <li class="nav__item">
              <a href="#specs" class="nav__link">
                Specs
              </a>
            </li>
            <li class="nav__item">
              <a href="#case" class="nav__link">
                Case
              </a>
            </li>
            <li class="nav__item">
              <a href="#products" class="nav__link">
                Products
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Headrs