import * as React from "react";
import { GrShareOption } from "react-icons/gr";
import { BiHotel } from "react-icons/bi";
import { GiHummingbird, GiMountainRoad } from "react-icons/gi";
import { RiRestaurantFill } from "react-icons/ri";
import { useRouteMatch } from "react-router-dom";
import NavBar from "../../components/nav-bar";
import { tours } from "../../data/tours";
import { Tour } from "../../interfaces";
import Layout from "../../components/layout";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

const TourDetails = () => {
  const match = useRouteMatch();
  const params = match.params as { name: string };

  const [tour, setTour] = React.useState<Tour | null>();

  const [selectedItemIndex, setSelectedItemIndex] = React.useState<number>(0);

  React.useEffect(() => {
    let item = tours.find((item) => {
      return item.name === params.name;
    });

    setTour(item);
  }, [params.name]);

  const Summary = () => (
    <div className="rounded border p-4 flex flex-col w-full bg-opacity-90 shadow-sm text-gray-700 border-gray-200 backdrop-filter backdrop-blur-lg">
      <div>
        <span className="text-xs block font-semibold tracking-wider text-green-800">
          Price for one person:
        </span>
        <span className="text-xs font-medium tracking-wider">Shs:500,000</span>
      </div>
      <div
        className="w-full bg-gray-900 opacity-20 my-3"
        style={{ height: 1 }}
      />
      {/* ===================================== included in price ===================================== */}
      <div>
        <span
          className="font-semibold mb-2 block tracking-wider text-green-800"
          style={{ fontSize: 12.3 }}
        >
          Included in price
        </span>
        <div className="flex flex-col space-y-2">
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
      <div
        className="w-full bg-gray-900 opacity-20 my-3"
        style={{ height: 1 }}
      />
      {/* ===================================== not included in price ===================================== */}
      <div>
        <span
          className="font-semibold mb-2 block tracking-wider text-green-800"
          style={{ fontSize: 12.3 }}
        >
          Not included in price
        </span>
        <div className="flex flex-col space-y-2">
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
  );

  return (
    <React.Fragment>
      {tour && (
        <React.Fragment>
          <div className="bg-cover bg-no-repeat bg-center w-full min-h-screen bg-fixed">
            <Layout title={tour.name} content={`${tour.description}`}>
              <NavBar />
              <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-10 gap-4 lg:w-9/12 w-full lg:mx-auto py-5 p-2">
                <div className="lg:col-span-2">
                  <div className="flex flex-row flex-nowrap gap-16 mb-3 h-12 items-center">
                    <div
                      className="flex-auto flex-wrap lg:text-base tracking-wide text-green-800 font-semibold text-sm"
                      style={{ fontSize: 15 }}
                    >
                      {tour.name}
                    </div>
                    <div>
                      <div className="border lg:h-10 hover:shadow-sm h-9 w-9 lg:w-10 hover:bg-gray-100 flex lg:text-sm text-sm items-center justify-center lg:cursor-pointer rounded-full shadow bg-opacity-30 backdrop-filter backdrop-blur-xl">
                        <GrShareOption />
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      className="rounded-md w-full shadow-sm border"
                      src={
                        tour.coverPhoto ??
                        "https://drinkteatravel.com/wp-content/uploads/Africa-Uganda-Murchison-Falls-0287.jpg"
                      }
                      alt=""
                    />
                  </div>
                  <div className="lg:hidden mt-4 block">
                    <Summary />
                  </div>
                  {/* ======================================================== */}
                  <div className="lg:mt-10 mt-4">
                    <div
                      id={"header"}
                      className={
                        "flex text-sm flex-row rounded-full backdrop-filter backdrop-blur-xl mb-4 bg-gray-50 bg-opacity-10 border border-green-700 border-opacity-10 lg:h-10 h-9 gap-1 justify-between"
                      }
                      style={{ padding: 2 }}
                    >
                      {["Tour details", "Itinerary", "Inquiry"].map(
                        (item, index) => {
                          return (
                            <div
                              style={{ fontSize: 12.5 }}
                              key={index}
                              onClick={() => setSelectedItemIndex(index)}
                              className={`tracking-wide bg-gray-50 ${
                                index === selectedItemIndex
                                  ? "shadow-lg font-medium bg-green-700 text-white tracking-wider"
                                  : "hover:text-green-700 lg:cursor-pointer hover:border-green-800 hover:border-opacity-10 border"
                              } w-full items-center justify-center flex h-full rounded-full`}
                            >
                              {item}
                            </div>
                          );
                        }
                      )}
                    </div>
                    <div id={"content"}>
                      {selectedItemIndex === 0 && (
                        <div className="flex flex-col space-y-1">
                          <span className="font-semibold text-sm tracking-wide text-green-800">
                            Description
                          </span>
                          <p
                            style={{ fontSize: 13.6 }}
                            className="text-justify"
                          >
                            {tour.description}
                          </p>
                        </div>
                      )}
                      {selectedItemIndex === 1 && (
                        <div className="">
                          <Timeline
                            position="alternate"
                            style={{ width: "100%" }}
                          >
                            {tour.itinerary.map((item, index) => {
                              return (
                                <TimelineItem key={index}>
                                  <TimelineOppositeContent
                                    color="text.secondary"
                                    style={{ width: "50%" }}
                                  >
                                    <div
                                      style={{ fontSize: 12.7 }}
                                      className="font-semibold text-green-700"
                                    >
                                      {item.title}
                                    </div>
                                  </TimelineOppositeContent>
                                  <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                  </TimelineSeparator>
                                  <TimelineContent>
                                    <p className="text-justify text-sm">
                                      {item.description}
                                    </p>
                                  </TimelineContent>
                                </TimelineItem>
                              );
                            })}
                          </Timeline>
                          {/* {tour.itinerary.map((item, index) => {
                            return (
                              <div key={index} className="flex flex-col mb-4">
                                <span
                                  className="font-semibold tracking-wide text-green-800"
                                  style={{ fontSize: 12.7 }}
                                >
                                  {item.title}
                                </span>
                                <p className="text-justify text-sm">
                                  {item.description}
                                </p>
                              </div>
                            );
                          })} */}
                        </div>
                      )}

                      {selectedItemIndex === 2 && (
                        <form className="flex flex-col lg:gap-4 gap-2 w-full">
                          <input
                            placeholder="Full name"
                            type="text"
                            className="border-b focus:border-green-700 px-2 h-10 lg:h-10 shadow-sm border-gray-200 rounded-sm tracking-wide w-full text-xs lg:text-sm outline-none bg-transparent placeholder-gray-400"
                          />
                          <div className="flex flex-col lg:flex-row lg:gap-4 gap-2">
                            <input
                              placeholder="Email"
                              type="email"
                              className="border-b focus:border-green-700 px-2 h-10 lg:h-10 shadow-sm border-gray-200 rounded-sm tracking-wide w-full text-xs lg:text-sm outline-none bg-transparent placeholder-gray-400"
                            />
                            <input
                              placeholder="Phone number"
                              type="tel"
                              className="border-b focus:border-green-700 px-2 h-10 lg:h-10 shadow-sm border-gray-200 rounded-sm tracking-wide w-full text-xs lg:text-sm outline-none bg-transparent placeholder-gray-400"
                            />
                          </div>
                          <input
                            placeholder="Your location"
                            type="text"
                            className="border-b focus:border-green-700 px-2 h-10 lg:h-10 border-gray-200 shadow-sm rounded-sm tracking-widr w-full text-xs lg:text-sm outline-none bg-transparent placeholder-gray-400"
                          />
                          <input
                            placeholder="Tour group number"
                            type="text"
                            className="border-b focus:border-green-700 px-2 h-10 lg:h-10 border-gray-200 shadow-sm rounded-sm tracking-widr w-full text-xs lg:text-sm outline-none bg-transparent placeholder-gray-400"
                          />
                          <input
                            placeholder="Travel date"
                            type="text"
                            className="border-b focus:border-green-700 px-2 h-10 lg:h-10 border-gray-200 shadow-sm rounded-sm tracking-widr w-full text-xs lg:text-sm outline-none bg-transparent placeholder-gray-400"
                          />
                          <textarea
                            name="message"
                            rows={4}
                            placeholder="Leave us a message"
                            className="outline-none border-b focus:border-green-700 w-full border-gray-200 tracking-wide shadow-sm rounded-sm flex text-xs lg:text-sm p-2 resize-none bg-transparent placeholder-gray-400"
                          />
                          <button className="h-10 bg-green-700 text-white tracking-wide text-sm shadow-sm hover:bg-green-800 rounded  ">
                            Inquire
                          </button>
                        </form>
                      )}
                    </div>
                  </div>
                </div>
                {/* =================================================================================================================== */}
                <div className="hidden lg:block">
                  <Summary />
                </div>
              </div>
            </Layout>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default TourDetails;
