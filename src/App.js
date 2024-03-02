
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Headrs from './component/Headrs';
import MyHome from './component/MyHome';
import OurSponsers from './component/OurSponsers';
import OurSpecs from './component/OurSpecs';
import OurCase from './component/OurCase';
import Discounts from './component/Discounts';
import Footers from './component/Footers';
import { useEffect } from "react";
import BackTop from './component/BackTop';
import OurProducts from './component/OurProducts';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="App">
      <Headrs />
      <main class="main">
        <MyHome />
        <OurSponsers />
        <OurSpecs />
        <OurCase />
        <Discounts />
        <OurProducts />
      </main>{" "}
      <Footers />
      <BackTop />;
    </div>
  );
}

export default App;
