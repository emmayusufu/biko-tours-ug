import * as React from "react";
import { GiCampingTent, GiCityCar, GiMountainRoad } from "react-icons/gi";

const Services: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "#f8fcff",
      }}
    >
      <div
        className="w-full flex flex-col text-center py-28 mx-auto"
        style={{
          maxWidth: "80%",
        }}
      >
        <div className="text-4xl font-semibold mb-5">Our Services</div>
        <div style={{ width: "60%" }} className="text-base mx-auto">
          Irure pariatur irure esse sint sit irure commodo. Et voluptate laborum
          eu laboris qui nulla labore. Aute Lorem deserunt consequat sit laborum
          in veniam sint sint. Qui anim dolore exercitation labore sunt
          reprehenderit exercitation laboris eu nisi ad ad enim reprehenderit.
        </div>
        <div className="mb-10 flex flex-row justify-between">
          {/* ==================== */}
          <div className="flex flex-col space-y-1 items-center justify-center w-3/12">
            <GiCampingTent className="text-8xl text-green-700" />
            <span className="font-semibold text-base tracking-wide">
              Camping
            </span>
            <p className="text-gray-400">
              Irure pariatur irure esse sint sit irure commodo. Et voluptate
              laborum eu laboris qui nulla labore. Aute Lorem deserunt consequat
              sit labo
            </p>
          </div>
          {/* ==================== */}
          <div className="flex flex-col space-y-1 items-center justify-center w-3/12">
            <GiCityCar className="text-8xl text-green-700" />
            <span className="font-semibold text-base tracking-wide">
              Car rental
            </span>
            <p className="text-gray-400">
              Irure pariatur irure esse sint sit irure commodo. Et voluptate
              laborum eu laboris qui nulla labore. Aute Lorem deserunt consequat
              sit labo
            </p>
          </div>
          {/* ==================== */}
          <div className="flex flex-col space-y-1 items-center justify-center w-3/12">
            <GiMountainRoad className="text-7xl text-green-700" />
            <span className="font-semibold text-base tracking-wide">Tours</span>
            <p className="text-gray-400">
              Irure pariatur irure esse sint sit irure commodo. Et voluptate
              laborum eu laboris qui nulla labore. Aute Lorem deserunt consequat
              sit labo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
