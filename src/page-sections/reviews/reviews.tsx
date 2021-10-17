import * as React from "react";
import "./reviews.styles.css";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const Reviews: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "#f8fcff",
      }}
    >
      <div
        className="w-full flex flex-col text-center py-28 mx-auto"
        style={{
          maxWidth: "65%",
        }}
      >
        <div className="text-4xl font-semibold mb-5">Review From Clients</div>
        <p className="text-sm">
          Irure pariatur irure esse sint sit irure commodo. Et voluptate laborum
          eu laboris qui nulla labore. Aute Lorem deserunt consequat sit laborum
          in veniam sint sint. Qui anim dolore exercitation labore sunt
          reprehenderit exercitation laboris eu nisi ad ad enim reprehenderit.
        </p>
        <div className="flex flex-row gap-6 items-center h-full pt-10 pb-5">
          <BsArrowLeft className="text-2xl cursor-pointer" />
          {[...new Array(7)].map((item, index) => {
            return (
              <div
                key={index}
                className={`border-2 border-gray-300 rounded-full ${
                  index === 3 ? "h-48 w-48" : "w-28 h-28"
                }`}
              />
            );
          })}
          <BsArrowRight className="text-2xl cursor-pointer" />
        </div>
        <div>
          <div className="text-lg font-semibold mb-2">
            Kimaswa Emmanuel Yusufu
          </div>
          <p className="text-sm">
            Irure pariatur irure esse sint sit irure commodo. Et voluptate
            laborum eu laboris qui nulla labore. Aute Lorem deserunt consequat
            sit laborum in veniam sint sint. Qui anim dolore exercitation labore
            sunt reprehenderit exercitation laboris eu nisi ad ad enim
            reprehenderit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
