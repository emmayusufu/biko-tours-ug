import * as React from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const HotTours: React.FC = () => {
  return (
    <div className="mx-auto my-20 text-center" style={{ width: "90%" }}>
      <div className="text-4xl font-semibold mb-5">Hot Tours</div>
      <div className="text-sm mx-auto tracking-wide" style={{ width: "60%" }}>
        Irure pariatur irure esse sint sit irure commodo. Et voluptate laborum
        eu laboris qui nulla labore. Aute Lorem deserunt consequat sit laborum
        in veniam sint sint. Qui anim dolore exercitation labore sunt
        reprehenderit exercitation laboris eu nisi ad ad enim reprehenderit.
      </div>
      <div className="grid grid-cols-4 my-8 gap-14">
        {[
          "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXRoZW5zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          "https://media.istockphoto.com/photos/eiffel-tower-in-paris-skyline-at-dawn-picture-id1280246120?b=1&k=20&m=1280246120&s=170667a&w=0&h=9g8hb-FTp7TfrN6gItpxDFKG0wPjwvnZQlNHZaxyeeI=",
          "https://images.unsplash.com/photo-1598605272254-16f0c0ecdfa5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8a2lnYWxpfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          "https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNvdXRoJTIwYWZyaWNhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        ].map((item, index) => {
          return (
            <div className="rounded shadow border" key={index}>
              <img className="rounded-t" src={item} alt="" />
              <div className="p-1">
                <div className="flex flex-col pt-10">
                  <span className="font-semibold tracking-wider text-sm text-green-600 mb-3">
                    Shs: 200,000
                  </span>
                  <span className="font-medium tracking-wider text-black">
                    Mbale, Uganda
                  </span>
                </div>
                <div className="bg-green-900 rounded h-16 mt-4 flex items-center justify-center text-white gap-4">
                  <span className="">Read More</span>
                  <BsArrowRight className="text-xl font-semibold" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-row w-full justify-center gap-44 text-2xl">
        <BsArrowLeft className="cursor-pointer" />
        <BsArrowRight className="cursor-pointer" />
      </div>
    </div>
  );
};

export default HotTours;
