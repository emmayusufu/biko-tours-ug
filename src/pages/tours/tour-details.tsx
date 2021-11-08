import * as React from "react";
import { GrShareOption } from "react-icons/gr";
import { BiHotel } from "react-icons/bi";
import { GiHummingbird, GiMountainRoad } from "react-icons/gi";
import { RiRestaurantFill } from "react-icons/ri";
import { useRouteMatch } from "react-router-dom";
import NavBar from "../../components/nav-bar";
import { tours } from "../../data/tours";
import { Tour } from "../../interfaces";
import { Helmet } from "react-helmet";
import Layout from "../../components/layout";
import TextInput from "../../components/text-input";

const TourDetails = () => {
  const match = useRouteMatch();
  const params = match.params as { name: string };

  const [tour, setTour] = React.useState<Tour | null>();

  const [selectedItemIndex, setSelectedItemIndex] = React.useState<number>(0);

  React.useEffect(() => {
    const item = tours.find((item) => {
      return item.name === params.name;
    });
    setTour(item);
  }, [params.name]);

  const Summary = () => (
    <div className="rounded border shadow-sm p-4 flex flex-col w-full bg-opacity-30 border-gray-200 backdrop-filter backdrop-blur-lg">
      {/* <div>
        <span className="text-xs block font-semibold">
          Price for one person:
        </span>
        <span className="text-xs font-medium">Shs:500,000</span>
      </div>
      <div
        className="w-full bg-gray-900 opacity-10 my-4"
        style={{ height: 1 }}
      /> */}
      <div>
        <span
          className="font-semibold mb-2 block tracking-wide"
          style={{ fontSize: 12.3 }}
        >
          Included in price
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
  );

  return (
    <React.Fragment>
      {tour && (
        <Layout>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{tour.name} | Biko Tours Ug</title>
            <meta name="description" content={`${tour.description}`} />
          </Helmet>
          <div
            className="bg-cover bg-no-repeat bg-center w-full min-h-screen bg-fixed"
            // style={{
            //   backgroundImage:
            //     "url('https://images.wallpaperscraft.com/image/single/compass_travel_world_map_187703_1280x720.jpg')",
            // }}
          >
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
                    <div className="border lg:h-10 hover:shadow-sm h-9 w-9 lg:w-10 hover:bg-opacity-20 flex lg:text-sm text-sm items-center justify-center lg:cursor-pointer rounded-full shadow bg-white bg-opacity-30 backdrop-filter backdrop-blur-xl">
                      <GrShareOption />
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img
                    className="rounded-md w-full"
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
                      "flex text-sm flex-row rounded-full backdrop-filter backdrop-blur-xl mb-4 bg-gray-50 bg-opacity-10 border lg:h-10 h-9 gap-1 justify-between"
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
                            className={`tracking-wide ${
                              index === selectedItemIndex
                                ? "shadow-lg font-medium bg-green-700 text-white tracking-wider"
                                : "hover:text-green-700 lg:cursor-pointer"
                            } w-full items-center justify-center flex h-full rounded-full`}
                          >
                            {item}
                          </div>
                        );
                      }
                    )}
                  </div>
                  <div
                    id={"content"}
                    className={
                      "border rounded-lg border-gray-200 lg:p-3 p-2 shadow bg-white bg-opacity-30 backdrop-filter backdrop-blur-xl"
                    }
                  >
                    {selectedItemIndex === 0 && (
                      <div className="flex flex-col space-y-1">
                        <span className="font-semibold text-sm tracking-wide">
                          Description
                        </span>
                        <p style={{ fontSize: 13.6 }} className="text-justify">
                          {tour.description}
                        </p>
                      </div>
                    )}
                    {selectedItemIndex === 1 && (
                      <div>
                        {tour.itinerary.map((item, index) => {
                          return (
                            <div key={index} className="flex flex-col mb-4">
                              <span
                                className="font-semibold tracking-wide"
                                style={{ fontSize: 12.5 }}
                              >
                                {item.title}
                              </span>
                              <p className="text-justify text-sm">
                                {item.description}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {selectedItemIndex === 2 && (
                      <div className="flex flex-col gap-2"></div>
                    )}
                  </div>
                </div>
              </div>
              {/* =================================================================================================================== */}
              <div className="hidden lg:block">
                <Summary />
              </div>
            </div>
          </div>
        </Layout>
      )}
    </React.Fragment>
  );
};

export default TourDetails;
