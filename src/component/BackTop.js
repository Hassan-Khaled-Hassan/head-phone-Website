import React, { useEffect, useState } from "react";
import UseFuncHooks from './UseFuncHooks';

const BackTop = () => {
  const [isScrolledHeader, isScrolled, BackToTop] = UseFuncHooks()
  
  return (
    <a href="#" class={`scrollup ${isScrolled ? "show-scroll" : ""}`} id="scroll-up" onClick={BackToTop}>
      <i class="fa-solid fa-arrow-up fa-beat" style={{ color: "#585d65" }}></i>
    </a>
  );
};

export default BackTop;
