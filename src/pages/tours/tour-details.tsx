import * as React from "react";
import { GrShareOption } from "react-icons/gr";
import { BiHotel } from "react-icons/bi";
import { GiHummingbird, GiMountainRoad } from "react-icons/gi";
import { RiRestaurantFill } from "react-icons/ri";

const TourDetails = () => {
  return (
    <div
    // className="bg-cover bg-no-repeat bg-center w-full min-h-screen bg-fixed"
    // style={{
    //   backgroundImage:
    //     "url('https://images.wallpaperscraft.com/image/single/compass_travel_world_map_187703_1280x720.jpg')",
    // }}
    >
      <div className="grid grid-cols-3 gap-10 w-9/12 mx-auto py-10">
        <div className="col-span-2">
          <div className="flex flex-row flex-nowrap gap-16 mb-6">
            <div className="flex-auto flex-wrap font-medium text-base">
              Tour and experience the hills and valleys of mountain elgon where
              you will experience atmost adventure
            </div>
            <div className="border p-4 flex items-center justify-center cursor-pointer rounded-full shadow hover:bg-gray-50">
              <GrShareOption />
            </div>
          </div>
          <div className="relative">
            <img
              className="rounded-md"
              src="https://drinkteatravel.com/wp-content/uploads/Africa-Uganda-Murchison-Falls-0287.jpg"
              alt=""
            />
            {/* <span className="absolute bottom-4 left-4 bg-white text-sm tracking-wide p-3 rounded font-semibold cursor-pointer hover:bg-opacity-70">
              See Gallery
            </span> */}
          </div>
          {/* ======================================================== */}
          <div className="mt-10">
            <div
              id={"header"}
              className={
                "flex text-sm flex-row rounded-lg mb-4 bg-gray-50 p-1 h-10 gap-1 justify-between"
              }
            >
              {["Summary", "Events", "Gallery", "Location"].map(
                (item, index) => {
                  return (
                    <div
                      key={index}
                      className={`${
                        index === 0 &&
                        "shadow-md font-medium bg-white tracking-wider"
                      } cursor-pointer hover:bg-white hover:shadow-md w-full items-center justify-center flex h-full rounded-lg`}
                    >
                      {item}
                    </div>
                  );
                }
              )}
            </div>
            <div
              id={"content"}
              className={"border rounded-lg border-gray-200 p-5 shadow-sm"}
            >
              <p className="text-sm text-justify">
                In incididunt ipsum laborum proident ex nostrud pariatur et.
                Enim aliquip et laboris commodo ex deserunt cillum. Est id velit
                amet aliqua ad. Dolore tempor incididunt eu adipisicing
                reprehenderit ut aliqua labore aute. Nostrud pariatur ex fugiat
                voluptate cupidatat pariatur mollit sit dolor est nisi. Proident
                ullamco anim sunt sit dolore dolore excepteur laborum incididunt
                veniam non. Sint reprehenderit irure aliqua elit nisi mollit
                aute et laborum anim aliqua labore aute. Nostrud pariatur ex
                fugiat voluptate cupidatat pariatur mollit sit dolor est nisi.
                Proident ullamco anim sunt sit dolore dolore excepteur laborum
                incididunt veniam non. Sint reprehenderit irure aliqua elit nisi
                mollit aute et laborum anim pariatur mollit sit dolor est nisi.
                Proident ullamco anim sunt sit dolore dolore excepteur laborum
                incididunt veniam non. Sint reprehenderit irure aliqua elit nisi
                mollit aute et laborum anim
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="rounded border shadow-sm p-4 flex flex-col bg-white bg-opacity-30 border-gray-200 backdrop-filter backdrop-blur-lg">
            <div>
              <span className="text-xs block font-semibold">
                Price for one person:
              </span>
              <span className="text-xs font-medium">Shs:500,000</span>
            </div>
            <div
              className="w-full bg-gray-900 opacity-10 my-4"
              style={{ height: 1 }}
            />
            <div>
              <span className="font-semibold text-xs mb-2 block">
                Tour includes
              </span>
              <div className="flex flex-col space-y-3">
                <div className="flex flex-row space-x-4 items-center">
                  <BiHotel style={{ fontSize: 15 }} />
                  <span className="text-sm">Accomodation</span>
                </div>
                <div className="flex flex-row space-x-4 items-center">
                  <GiHummingbird style={{ fontSize: 20 }} />
                  <span className="text-sm">Bird watching</span>
                </div>
                <div className="flex flex-row space-x-4 items-center">
                  <RiRestaurantFill style={{ fontSize: 18 }} />
                  <span className="text-sm">Food</span>
                </div>
                <div className="flex flex-row space-x-4 items-center">
                  <GiMountainRoad style={{ fontSize: 17 }} />
                  <span className="text-sm">Hiking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
