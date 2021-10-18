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
          maxWidth: "70%",
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
          {[
            "https://img2.nickiswift.com/img/gallery/hollywoods-most-arrogant-celebrities/intro-1536858323.jpg",
            "https://th.bing.com/th/id/OIP.MzQ4FPm3o8BLVdvYHpmtQwHaJ4?pid=ImgDet&rs=1",
            "https://th.bing.com/th/id/R.e5329e95dbeff3cb7e6ef31c8e216a31?rik=x6LDh6WGF9%2bbuQ&pid=ImgRaw&r=0",
            "https://th.bing.com/th/id/R.536d834de6c902e78513685fb7d4fcdc?rik=SPgkGGLm9eOf4g&pid=ImgRaw&r=0",
            "https://th.bing.com/th/id/R.8601a1066dc5ae8726c917c70eefdb57?rik=OG5wK5kGotMWyg&pid=ImgRaw&r=0",
            "https://th.bing.com/th/id/R.43384c81e56863cf388cbce1fee742f2?rik=8Ruczkq%2bzTSJtw&pid=ImgRaw&r=0",
            "https://th.bing.com/th/id/R.51e0eabcf15c29ebd5f243e697bc0c15?rik=fy2NGhP%2fvVQECQ&pid=ImgRaw&r=0",
          ].map((item, index) => {
            return (
              <div
                style={{ backgroundImage: `url(${item})` }}
                key={index}
                className={`border-2 border-gray-300 bg-cover bg-no-repeat bg-center rounded-full ${
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
