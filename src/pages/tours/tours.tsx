import * as React from "react";
import { BiHotel } from "react-icons/bi";
import { GiHummingbird, GiMountainRoad } from "react-icons/gi";
import { RiRestaurantFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
// import { GiCheckMark } from "react-icons/gi";

import { tours } from "../../data/tours";
import NavBar from "../../components/nav-bar";

// let tours: any[] = [
//   "Akagera Wildlife Safari (2 Days)",
//   "Gorilla and Golden Monkey Safari Volcanoes National Parks  Safari (6 Days)",
//   "Nyungwe Chimpanzee Safari (3 Days)",
//   "Gorillas, Golden Monkeys and Dian Fossey Trail (5 Days)",
// ];

export default function Tours() {
  // const [checkedItem, setCheckItem] = React.useState("");
  const history = useHistory();
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tours | Biko Tours UG</title>
        <meta name="description" content="Biko Tour Uganda, Queen Elizabeth" />
      </Helmet>
      <div
        className="bg-cover bg-no-repeat bg-center w-full min-h-screen bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.wallpaperscraft.com/image/single/compass_travel_world_map_187703_1280x720.jpg')",
        }}
      >
        <NavBar />
        <div
          className="flex flex-row py-3 gap-4 lg:mx-auto text-gray-900 lg:w-5/6 w-full justify-center text-xs"
          // style={{ fontSize: 12, maxWidth: "85%" }}
        >
          {/* <div
          className="p-1 h-full bg-white bg-opacity-40 border border-gray-200 backdrop-filter backdrop-blur-lg rounded"
          style={{ width: "20%" }}
        >
          <span className="font-medium tracking-wide text-sm mb-3 block text-center">
            Filters
          </span>
          <span className="font-medium tracking-wide text-sm mb-2 block">
            Tour deals
          </span>
          <div className="text-sm flex flex-col space-y-2">
            {["Accomodation", "Meals", "Hiking"].map((item, index) => {
              return (
                <label
                  key={index}
                  className="flex w-full gap-2 h-full items-center"
                  htmlFor=""
                >
                  <div
                    className={`border border-black border-opacity-25 rounded flex items-center justify-center text-sm ${
                      index === 0 && "text-white bg-green-700"
                    }`}
                    style={{ width: "16px", height: "16px", padding: "1px" }}
                  >
                    {index === 0 && <GiCheckMark />}
                  </div>
                  <input type="hidden" />
                  {item}
                </label>
              );
            })}
          </div>
          <button
            style={{ fontSize: 12.3 }}
            className="bg-green-700 tracking-wider shadow rounded h-10 flex items-center justify-center text-white px-2 mb-0"
          >
            Filter Tours
          </button>
        </div> */}

          <div
            className="grid grid-cols-1 gap-4 w-full lg:w-5/6 p-2 lg:px-10"
            // style={{ width: "80%" }}
          >
            {tours.map((item, index) => {
              return (
                <div
                  style={{ padding: 1 }}
                  key={index}
                  className="bg-white bg-opacity-40 border border-gray-200 backdrop-filter shadow backdrop-blur-lg rounded overflow-hidden grid md:grid-cols-3"
                >
                  <img
                    className="rounded flex overflow-hidden h-full w-full"
                    src={
                      item.coverPhoto ??
                      "https://drinkteatravel.com/wp-content/uploads/Africa-Uganda-Murchison-Falls-0287.jpg"
                    }
                    alt=""
                  />
                  <div className="flex flex-col lg:my-2 mt-2 lg:mt-0 lg:px-5 px-2 justify-between w-full md:col-span-2">
                    <div className="flex flex-col h-full justify-center">
                      <span className="text-sm mb-1 font-semibold tracking-wide text-green-700">
                        {item.name}
                      </span>
                      <p
                        className="tracking-wide block lg:w-full w-72 truncate"
                        style={{ fontSize: 12.5 }}
                      >
                        {item.description}
                      </p>
                    </div>
                    <div
                      className="w-full bg-gray-900 opacity-10 my-4"
                      style={{ height: 1 }}
                    />
                    <div className="flex flex-row justify-between h-full items-center">
                      <span className="text-sm">Tour includes</span>
                      <div
                        className="flex flex-row space-x-4"
                        style={{ fontSize: 18 }}
                      >
                        <BiHotel />
                        <GiHummingbird />
                        <RiRestaurantFill />
                        <GiMountainRoad />
                      </div>
                    </div>
                    <div
                      className="w-full bg-gray-900 opacity-10 my-4"
                      style={{ height: 1 }}
                    />
                    <div className="flex flex-col md:flex-row justify-between h-full">
                      <div className="flex flex-col">
                        <span
                          className="mb-1 tracking-wide"
                          style={{ fontSize: 12.5 }}
                        >
                          {item.duration}, Depature on 2021 Janruary 9th
                        </span>
                        {/* <span
                        className="tracking-wide"
                        style={{ fontSize: 12.5 }}
                      >
                        Shs:200,000
                      </span> */}
                      </div>
                      <div>
                        <button
                          onClick={() => history.push(`/tours/${item.name}`)}
                          style={{ fontSize: 12.3 }}
                          className="bg-green-700 shadow rounded h-10 flex items-center justify-center text-white px-2 gap-2"
                        >
                          View Tour Details
                          <BsArrowRight className="text-lg" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
