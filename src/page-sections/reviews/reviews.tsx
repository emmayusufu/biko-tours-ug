import * as React from "react";
import "./reviews.styles.css";

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
          maxWidth: "60%",
        }}
      >
        <div className="text-4xl font-semibold mb-5">Review From Clients</div>
        <p className="text-sm">
          Irure pariatur irure esse sint sit irure commodo. Et voluptate laborum
          eu laboris qui nulla labore. Aute Lorem deserunt consequat sit laborum
          in veniam sint sint. Qui anim dolore exercitation labore sunt
          reprehenderit exercitation laboris eu nisi ad ad enim reprehenderit.
        </p>
      </div>
    </div>
  );
};

export default Reviews;
