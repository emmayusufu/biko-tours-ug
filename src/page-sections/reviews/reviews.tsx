import * as React from "react";
import "./reviews.styles.css";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const Reviews: React.FC = () => {
  const reviews: string[] = [
    "https://img2.nickiswift.com/img/gallery/hollywoods-most-arrogant-celebrities/intro-1536858323.jpg",
    "https://th.bing.com/th/id/OIP.MzQ4FPm3o8BLVdvYHpmtQwHaJ4?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/R.e5329e95dbeff3cb7e6ef31c8e216a31?rik=x6LDh6WGF9%2bbuQ&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.536d834de6c902e78513685fb7d4fcdc?rik=SPgkGGLm9eOf4g&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.8601a1066dc5ae8726c917c70eefdb57?rik=OG5wK5kGotMWyg&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.43384c81e56863cf388cbce1fee742f2?rik=8Ruczkq%2bzTSJtw&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.51e0eabcf15c29ebd5f243e697bc0c15?rik=fy2NGhP%2fvVQECQ&pid=ImgRaw&r=0",
    "https://www.biography.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgwNTA3MzM1ODM4NDEwMDg4/will-smith-attends-varietys-creative-impact-awards-and-10-directors-to-watch-brunch-at-the-parker-palm-springs-on-january-3-2016-in-palm-springs-california-photo-by-jerod-harrisgetty-images.jpg",
  ];

  const [arrayOne, setArrayOne] = React.useState(reviews);

  const previousItem = () => {
    const updatedArray = [...arrayOne];
    const lastItem = updatedArray.pop();
    updatedArray.unshift(lastItem!);
    setArrayOne(updatedArray);
  };

  const nextItem = () => {
    const updatedArray = [...arrayOne];
    const firstItem = updatedArray.shift();
    updatedArray.push(firstItem!);
    setArrayOne(updatedArray);
  };

  return (
    <div
      style={{
        backgroundColor: "#f8fcff",
      }}
    >
      <div
        className="w-full flex flex-col text-center py-16 mx-auto text-gray-600"
        style={{
          maxWidth: "70%",
        }}
      >
        <div className="text-3xl mb-3">Reviews From Clients</div>
        <p className="text-sm">
          Irure pariatur irure esse sint sit irure commodo. Et voluptate laborum
          eu laboris qui nulla labore. Aute Lorem deserunt consequat sit laborum
          in veniam sint sint. Qui anim dolore exercitation labore sunt
          reprehenderit exercitation laboris eu nisi ad ad enim reprehenderit.
        </p>
        <div className="flex flex-row gap-6 items-center h-full pt-10 pb-5">
          <BsArrowLeft
            className="text-2xl cursor-pointer"
            onClick={previousItem}
          />
          {arrayOne.map((item, index) => {
            return (
              <div
                style={{ backgroundImage: `url(${item})` }}
                key={index}
                className={`border-2 border-gray-300 bg-cover bg-no-repeat transition-opacity ease-out delay-150 bg-center rounded-full shadow-md ${
                  index === 3 ? "h-48 w-48 opacity-100" : "w-28 h-28 opacity-70"
                } ${index > 6 ? "hidden" : "block"}`}
              />
            );
          })}
          <BsArrowRight
            className="text-2xl cursor-pointer "
            onClick={nextItem}
          />
        </div>
        <div>
          <div className="text-sm font-semibold mb-2">
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
