import * as React from "react";
import WorldTour from "../../static/lottie-files/world-tour.json";
import Lottie from "lottie-web";

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
    <div
      className="w-full mx-auto"
      style={{
        maxWidth: "80%",
      }}
    >
      <div
        className="flex flex-row justify-between self-center gap-10"
        style={{ height: "30rem" }}
      >
        <div className="flex h-full items-center" style={{ width: "40%" }}>
          <div
            className="h-96 w-96 tw-self-center"
            id="tour"
            style={{
              height: "30rem",
              width: "30rem",
            }}
          />
        </div>
        <div
          className="flex flex-col h-full justify-center"
          style={{ width: "60%" }}
        >
          <div className="text-5xl fnt-semibold mb-2">About Us</div>
          <p className="text-base text-justify">
            With the growth of the Tourism Sector in Uganda, BIKO Tours and
            Travel aims at providing local and foreign travelers an experience
            of their life time as we tour the pearl of Africa from the
            impenetrable forests of Bwindi, to the heights of Mt Rwenzori, to
            the Murchison falls and the amazing source of the River Nile. Book
            with BIKO Tours and let’s discover the Peal of Africa at the
            friendliest rates on the market.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
