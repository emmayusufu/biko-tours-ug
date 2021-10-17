import * as React from "react";
import ContactUs from "../page-sections/contact-us/contact-us";
import Footer from "../page-sections/footer/footer";
import Gallery from "../page-sections/gallery/gallery";
import Header from "../page-sections/header/header";
import Reviews from "../page-sections/reviews/reviews";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Gallery />
      <Reviews />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
