import * as React from "react";
import { BsArrowRight } from "react-icons/bs";
import { TiLocation } from "react-icons/ti";
import { AiOutlineClockCircle } from "react-icons/ai";

const HotTours: React.FC = () => {
  return (
    <div className="mx-auto my-16 text-center" style={{ width: "90%" }}>
      <div className="text-3xl mb-3">Hot Tours</div>
      <div className="text-sm mx-auto tracking-wide" style={{ width: "70%" }}>
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
              <div className="relative" style={{ margin: "1px" }}>
                <img className="rounded-t" src={item} alt="" />
                <div
                  className="absolute bottom-0 left-0 text-white tracking-wide text-left h-12 bg-gradient-to-t from-black flex items-center text-sm p-2 w-full"
                  style={{
                    background: "linear-gradient(transparent, #252525)",
                  }}
                >
                  <p
                    className="truncate tracking-wide"
                    style={{ fontSize: "14.3px" }}
                  >
                    3 Day Masai Mara Safari
                  </p>
                </div>
              </div>
              <div style={{ margin: "1.5px" }}>
                <div className="flex flex-col pt-2">
                  <span className="font-semibold tracking-wider text-sm text-green-600 mb-3">
                    Shs: 200,000
                  </span>
                  <div className="flex flex-row gap-2 items-center mx-auto mb-3">
                    <TiLocation />
                    <span className="text-black text-sm">Mbale, Uganda</span>
                  </div>
                  <div className="flex flex-row gap-2 items-center mx-auto">
                    <AiOutlineClockCircle />
                    <span className="text-sm text-black">3 days - 1 night</span>
                  </div>
                </div>
                <div className="bg-green-900 hover:bg-green-800 rounded-b h-14 mt-4 flex items-center justify-center text-white gap-3 cursor-pointer">
                  <span className="text-sm tracking-wide">Read More</span>
                  <BsArrowRight className="text-xl" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-row transform hover:scale-105 transition-transform delay-75 font-semibold cursor-pointer text-green-700 w-full justify-center items-center gap-5 text-sm">
        {" "}
        View more Tours <BsArrowRight />
      </div>
      {/* <div className="flex flex-row w-full justify-center gap-36 text-2xl">
        <div className="border rounded-full h-12 w-12 text-lg items-center justify-center flex cursor-pointer hover:text-white hover:bg-green-900 border-green-900 text-green-900">
          <BsArrowLeft />
        </div>
        <div className="border rounded-full h-12 w-12 text-lg items-center justify-center flex cursor-pointer hover:text-white hover:bg-green-900 border-green-900 text-green-900">
          <BsArrowRight />
        </div>
      </div> */}
    </div>
  );
};

export default HotTours;
