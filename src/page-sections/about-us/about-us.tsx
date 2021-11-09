import * as React from "react";
import WorldTour from "../../static/lottie-files/world-tour.json";
import Lottie from "lottie-web";
import "./about-us.styles.css";

const AboutUs: React.FC = () => {
  React.useEffect(() => {
    Lottie.loadAnimation({
      container: document.querySelector("#tour")!,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: WorldTour,
    });
  }, []);

  return (
    <section
      id="about-us"
      className="flex flex-col lg:flex-row justify-between self-center gap-4 lg:gap-10 lg:items-center"
    >
      <div className="flex h-full items-center column-one">
        <div
          className="h-80 w-80 tw-self-center"
          id="tour"
          data-aos="fade-right"
        />
      </div>
      <div
        className="flex flex-col h-full justify-center col-2 column-two"
        data-aos="fade-up"
      >
        <div className="text-2xl lg:text-3xl mb-1">About Us</div>
        <p className="text-sm lg:text-sm text-justify">
          With the growth of the Tourism Sector in Uganda, BIKO Tours and Travel
          aims at providing local and foreign travelers an experience of their
          life time as we tour the pearl of Africa from the impenetrable forests
          of Bwindi, to the heights of Mt Rwenzori, to the Murchison falls and
          the amazing source of the River Nile. Book with BIKO Tours and let’s
          discover the Peal of Africa at the friendliest rates on the market.
          When planning a trip, we take our clients personal style and travel
          interest to create it. However, clients can choose from trips featured
          on the website as is or we can tweak the itineraries to suite their
          travel interests. Come! Explore the possibilities with us! Set out on
          the journey you’ve always dreamed of and will always remember. We give
          you an experience you’ll treasure a lifetime. We will take you to
          “Africa…the best place to be”
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
