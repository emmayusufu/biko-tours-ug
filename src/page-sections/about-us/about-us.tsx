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
      className="flex flex-col lg:flex-row justify-between self-center  gap-4 lg:gap-10"
    >
      <div className="flex h-full items-center column-one">
        <div className="h-96 w-96 tw-self-center" id="tour" />
      </div>
      <div className="flex flex-col h-full justify-center col-2 column-two">
        <div className="text-2xl lg:text-4xl mb-1 lg:mb-2">About Us</div>
        <p className="text-sm lg:text-base text-justify">
          With the growth of the Tourism Sector in Uganda, BIKO Tours and Travel
          aims at providing local and foreign travelers an experience of their
          life time as we tour the pearl of Africa from the impenetrable forests
          of Bwindi, to the heights of Mt Rwenzori, to the Murchison falls and
          the amazing source of the River Nile. Book with BIKO Tours and let’s
          discover the Peal of Africa at the friendliest rates on the market.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
