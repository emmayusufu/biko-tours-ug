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
          className="flex flex-col h-full justify-center items-center"
          style={{ width: "60%" }}
        >
          <div className="text-4xl font-semibold mb-2">About Us</div>
          <p className="text-base text-justify">
            Incididunt nulla voluptate elit cillum cupidatat aliquip officia
            amet exercitation do tempor. Enim culpa laborum do magna. Labore
            ullamco Lorem amet irure labore amet labore. Elit aliqua ad nostrud
            qui esse labore nisi consectetur sint consectetur commodo. Est minim
            commodo tempor ex qui sint eu sit non nulla. Irure labore amet
            veniam sint irure occaecat duis id deserunt. Culpa officia eu aliqua
            exercitation esse Lorem ullamco ad excepteur adipisicing eu.
            Proident duis dolor deserunt sunt reprehenderit dolor. Occaecat
            ipsum pariatur consequat consectetur dolore quis deserunt ullamco
            Lorem. Laborum reprehenderit mollit non duis enim culpa laborum sint
            sit ad in. Laborum aute amet aliqua est quis sunt in ullamco quis
            mollit commodo. Ipsum sint veniam irure incididunt in mollit id.
            Labore Lorem minim quis cupidatat ipsum officia officia cupidatat
            duis tempor. Irure consequat minim deserunt non anim enim
            exercitation ullamco. Dolor commodo sunt culpa qui veniam nulla
            voluptate nostrud laborum reprehenderit amet irure incididunt.
            Voluptate est qui nostrud consequat. Excepteur exercitation sint
            esse aute. Et ullamco ipsum commodo ut do. Laboris cillum ea cillum
            laboris deserunt irure proident magna. Excepteur anim in laboris
            commodo elit ipsum excepteur tempor anim duis aute deserunt qui.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
