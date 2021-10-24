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
          BIKO Tours offers a wide range of services including but not limited
          to Custom Group Tours, Car Rental services, Tour guiding, Camping and
          Camping tents hiring.
        </div>
        <div className="mb-10 flex flex-row justify-between">
          {/* ==================== */}
          <div className="flex flex-col space-y-1 items-center justify-center w-3/12">
            <GiCampingTent className="text-8xl text-green-700" />
            <span className="font-semibold text-base tracking-wide">
              Camping
            </span>
            <p className="text-gray-400">
              We have a wide range of camping tents for hire to our clients.
              These include tents for 2 people and groups of five. These come
              with beddings for the travelers at subsidized prices and are
              comfortable for the amazing camping experiences.
            </p>
          </div>
          {/* ==================== */}
          <div className="flex flex-col space-y-1 items-center justify-center w-3/12">
            <GiCityCar className="text-8xl text-green-700" />
            <span className="font-semibold text-base tracking-wide">
              Car rental
            </span>
            <p className="text-gray-400">
              Luxury and comfort while travelling is key for one to enjoy their
              trip so BIKO provides amazing ranges of vehicles available for
              Hire. These come with professional chauffeurs that have harnessed
              lots of experience while exploring the Uganda.
            </p>
          </div>
          {/* ==================== */}
          <div className="flex flex-col space-y-1 items-center justify-center w-3/12">
            <GiMountainRoad className="text-7xl text-green-700" />
            <span className="font-semibold text-base tracking-wide">Tours</span>
            <p className="text-gray-400">
              We delight in providing the best customized group tours for
              travelers at the best prices on the market. Given the astonishing
              beauty of the Uganda there is a wide range of tourist sites that
              you can choose from to have everlasting memories of Uganda
              {/* Given the astonishing
              beauty of the Pearl of Africa there is a wide range of tourist
              sites that our travelers could choose from to have everlasting
              memories of Uganda These trips are to various parts of the country
              including Western, Eastern, Central and Southern Uganda Best
              Tourist sites include; Murchison falls, Murchison National Park,
              Queen Elizabeth National Park, Fort portal and Rubirizi Crater
              lakes, Source of the Nile Ug, Sipi Falls, Kidepo Valley National
              Park, Bwindi Impenetrable Park, Bunyonyi, Rwenzori Mountain. */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
