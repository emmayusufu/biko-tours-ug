import * as React from "react";
import AboutUs from "../../page-sections/about-us/about-us";
import ContactUs from "../../page-sections/contact-us/contact-us";
import Footer from "../../page-sections/footer/footer";
import Gallery from "../../page-sections/gallery/gallery";
import Header from "../../page-sections/header/header";
import HotTours from "../../page-sections/hot-tours/hot-tours";
// import Reviews from "../../page-sections/reviews/reviews";
import Services from "../../page-sections/services/services";
import WhyChooseUs from "../../page-sections/why-choose-us/why-choose-us";
// import { tours } from "../../data/tours";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <AboutUs />
      <Services />
      <Gallery />
      <HotTours />
      {/* <Reviews /> */}
      <WhyChooseUs />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
