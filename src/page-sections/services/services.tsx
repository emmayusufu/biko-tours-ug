import * as React from "react";
import { GiCampingTent, GiCityCar, GiMountainRoad } from "react-icons/gi";
import "./services.styles.css";

const Services: React.FC = () => {
  return (
    <section
      id="services"
      style={{
        backgroundColor: "#f8fcff",
      }}
    >
      <div
        id="services"
        className="w-full flex flex-col text-center py-14 lg:mx-auto"
      >
        <div
          className="lg:text-3xl text-2xl font-sebold mb-2"
          // data-aos="zoom-in"
        >
          Our Services
        </div>
        <div
          className="lg:text-sm text-sm mx-auto lg:w-7/12 w-full"
          // data-aos="zoom-in"
        >
          BIKO Tours offers a wide range of services including but not limited
          to Custom Group Tours, Car Rental services, Tour guiding, Camping and
          Camping tents hiring.
        </div>
        <div className="lg:mb-10 mb-5 flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-0">
          {/* ==================== */}
          <div
            className="flex flex-col space-y-1 items-center justify-center lg:w-3/12 w-full"
            // data-aos="zoom-in"
          >
            <GiCampingTent className="text-8xl text-green-700" />
            <span className="font-semibold text-sm tracking-wide">Camping</span>
            <p className="text-gray-400 text-sm lg:text-sm">
              We have a wide range of camping tents for hire to our clients.
              These include tents for 2 people and groups of five. These come
              with beddings for the travelers at subsidized prices and are
              comfortable for the amazing camping experiences.
            </p>
          </div>
          {/* ==================== */}
          <div
            // data-aos="zoom-in"
            className="flex flex-col space-y-1 items-center justify-center lg:w-3/12 w-full"
          >
            <GiCityCar className="text-8xl text-green-700" />
            <span className="font-semibold text-sm tracking-wide">
              Car rental
            </span>
            <p className="text-gray-400 text-sm lg:text-sm">
              Luxury and comfort while travelling is key for one to enjoy their
              trip so BIKO provides amazing ranges of vehicles available for
              Hire. These come with professional chauffeurs that have harnessed
              lots of experience while exploring the Uganda.
            </p>
          </div>
          {/* ==================== */}
          <div
            // data-aos="zoom-in"
            className="flex flex-col space-y-1 items-center justify-center lg:w-3/12 w-full"
          >
            <GiMountainRoad className="text-7xl text-green-700" />
            <span className="font-semibold text-sm tracking-wide">Tours</span>
            <p className="text-gray-400 text-sm lg:text-sm">
              We delight in providing the best customized group tours for
              travelers at the best prices on the market. Given the astonishing
              beauty of the Uganda there is a wide range of tourist sites that
              you can choose from to have everlasting memories of Uganda
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
