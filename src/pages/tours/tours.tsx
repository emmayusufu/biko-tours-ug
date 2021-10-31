import { BiHotel } from "react-icons/bi";
import { GiHummingbird, GiMountainRoad } from "react-icons/gi";
import { RiRestaurantFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { useHistory } from "react-router-dom";

let tours: any[] = [
  "Akagera Wildlife Safari (2 Days)",
  "Gorilla and Golden Monkey Safari Volcanoes National Parks  Safari (6 Days)",
  "Nyungwe Chimpanzee Safari (3 Days)",
  "Gorillas, Golden Monkeys and Dian Fossey Trail (5 Days)",
];

export default function Tours() {
  const history = useHistory();
  return (
    <div
      className="bg-cover bg-no-repeat bg-center w-full min-h-screen bg-fixed"
      style={{
        backgroundImage:
          "url('https://images.wallpaperscraft.com/image/single/compass_travel_world_map_187703_1280x720.jpg')",
      }}
    >
      <div
        className="flex flex-row w-full py-10 gap-4 mx-auto text-gray-900"
        style={{ fontSize: 12, maxWidth: "85%" }}
      >
        <div
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
                  <input
                    type="checkbox"
                    className="h-4 w-4 cursor-pointer border rounded-full"
                  />
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
        </div>

        <div className="grid grid-cols-1 gap-4" style={{ width: "80%" }}>
          {tours.map((item, index) => {
            return (
              <div
                style={{ padding: 1 }}
                key={index}
                className="bg-white bg-opacity-40 border border-gray-200 backdrop-filter shadow-sm backdrop-blur-lg rounded overflow-hidden grid md:grid-cols-3"
              >
                <img
                  className="rounded flex overflow-hidden h-full"
                  src="https://drinkteatravel.com/wp-content/uploads/Africa-Uganda-Murchison-Falls-0287.jpg"
                  alt=""
                />
                <div className="flex flex-col my-2 px-5 justify-between w-full md:col-span-2">
                  <div className="flex flex-col h-full justify-center">
                    <span className="text-sm mb-1 font-semibold tracking-wide text-green-700">
                      {item}
                    </span>
                    <span className="tracking-wide" style={{ fontSize: 12.5 }}>
                      Super cheap trip to Egypt! stay in a hotel included with
                      breakfast and flights from vinius
                    </span>
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
                        7 nights, Depature on 2021 Janruary 9th
                      </span>
                      <span
                        className="tracking-wide"
                        style={{ fontSize: 12.5 }}
                      >
                        Shs:200,000
                      </span>
                    </div>
                    <div>
                      <button
                        onClick={() => history.push(`/tours/kilimanjaro-tz`)}
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
  );
}
