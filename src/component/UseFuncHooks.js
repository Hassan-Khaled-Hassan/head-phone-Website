import React, { useEffect, useState } from 'react'

const UseFuncHooks = () => {
     const [isScrolledHeader, isScrolledheader] = useState(false);
     const [isScrolled, setIsScrolled] = useState(false);
     useEffect(() => {
       const handleScroll = () => {
         if (window.scrollY > 150) {
           isScrolledheader(true);
         } else {
           isScrolledheader(false);
         }
       };    
       const handleScrollTop = () => {
         if (window.scrollY > 250) {
           setIsScrolled(true);
         } else {
           setIsScrolled(false);
         }
       };
       window.addEventListener("scroll", handleScroll);   
        window.addEventListener("scroll", handleScrollTop);
       // Remove event listener on component unmount
       return () => {
         window.removeEventListener("scroll", handleScroll);
         window.removeEventListener("scroll", handleScrollTop);
       };
     }, []);
     const BackToTop = () => {
       document.documentElement.scrollTop = 0;
       document.body.scrollTop = 0;
     };
     return [isScrolledHeader, isScrolled,BackToTop];
}

export default UseFuncHooks