import * as React from "react";
import "./header.styles.css";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

import img1 from "../../images/header-images/img_1.jpg";

const Header: React.FC = () => {
  type NavProps = {
    name: string;
    path: string;
  };
  const navs: NavProps[] = [
    { name: "Services", path: "services" },
    { name: "Tours", path: "tours" },
    { name: "Gallery", path: "gallery" },
    { name: "Contact us", path: "contact-us" },
  ];

  const bgImages: string[] = [
    img1,
    "https://images.unsplash.com/photo-1527644702050-c947a80cdf38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
    "https://images.unsplash.com/photo-1551357141-1800c80f8997?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1614528767034-70de9fe166e0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
  ];

  // const [bgImageIndex, _setBgImageIndex] = React.useState<number>(0);

  const [imgArray, setImgArray] = React.useState(bgImages);

  const nextImage = () => {
    // const lastImageIndex = bgImages.length - 1;

    // if (bgImageIndex === lastImageIndex) {
    //   setBgImageIndex(0);
    // } else {
    //   setBgImageIndex((bgImage) => bgImage + 1);
    // }

    const updatedArray = [...imgArray];
    const firstItem = updatedArray.shift();
    updatedArray.push(firstItem!);
    setImgArray(updatedArray);
  };

  const previousImage = () => {
    // if (bgImageIndex === 0) {
    //   setBgImageIndex(bgImages.length - 1);
    // } else {
    //   setBgImageIndex((bgImage) => bgImage - 1);
    // }

    const updatedArray = [...imgArray];
    const lastItem = updatedArray.pop();
    updatedArray.unshift(lastItem!);
    setImgArray(updatedArray);
  };
  return (
    <div
      className="min-h-screen bg-no-repeat bg-center bg-cover transition-all ease-in delay-200"
      style={{
        backgroundImage: `url(${imgArray[0]})`,
      }}
    >
      <div className="bg-black bg-opacity-20">
        <nav className="nav-bar">
          <div
            className="mx-auto flex justify-between items-center text-gray-50"
            style={{ height: "5rem", width: "90%" }}
          >
            <div className="text-xl">Biko Tours</div>
            <ul className="flex flex-row gap-10 h-full items-center">
              {navs.map((item, index) => {
                return (
                  <li
                    className="lg:cursor-pointer"
                    style={{ fontSize: "14.3px" }}
                    key={index}
                  >
                    <a href={`#${item.path}`}>{item.name}</a>
                  </li>
                );
              })}
              {[
                <GrFacebookOption />,
                <RiInstagramFill />,
                <AiOutlineTwitter />,
              ].map((item, index) => {
                return (
                  <div
                    key={index}
                    className="border text-white bg-green-800 bg-opacity-60 border-green-700 lg:cursor-pointer rounded-full h-8 text-base w-8 items-center justify-center flex"
                  >
                    {item}
                  </div>
                );
              })}
            </ul>
          </div>
        </nav>
        <section
          className="mx-auto flex items-center gap-10"
          style={{ width: "90%", height: "90vh" }}
        >
          <div className="flex flex-col" style={{ width: "40%" }}>
            <p
              className="text-gray-100 font-semibold text-6xl"
              style={{ lineHeight: "6rem" }}
            >
              LET'S DISCOVER WITH BIKO TOURS
            </p>
            <p className="text-gray-200 tracking-wide leading-8 text-sm">
              To share our passion, in-depth knowledge, travel experience in
              Africa and to help fulfill travelers’ lifelong dream of journeying
              to the continent that we call home. We strive to give our clients
              authentic enriching experience based on our first-hand knowledge
              of the safari destinations.
            </p>
            <a
              href="#about-us"
              className="w-4/12 bg-green-800 flex bg-opacity-75 items-center justify-center oultine-none text-white ml-0 rounded-full"
              style={{ height: "52px" }}
            >
              Learn more
            </a>
          </div>
          <div
            className="flex flex-col mb-16 gap-5 h-full justify-end"
            style={{ width: "60%" }}
          >
            <div className="flex flex-row gap-5">
              {imgArray.map((item, index) => {
                console.log(item, index);
                return (
                  <div
                    key={index}
                    className={`shadow-xl relative w-4/12 ${
                      index > 2 && "hidden"
                    }`}
                  >
                    <img
                      src={item}
                      className={`rounded-lg h-full transition-transform delay-200 transform border-green-800 border border-opacity-20 shadow-lg ${
                        index === 0 && "scale-110"
                      }`}
                      alt=""
                    />
                    {/* <div className="absolute bottom-3 tracking-wide left-3 text-green-800 text-sm">
                    Mombasa
                  </div> */}
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center gap-20">
              <div
                onClick={previousImage}
                className="border bg-green-800 text-white bg-opacity-60 border-green-700 h-10 w-10 flex items-center justify-center rounded-full text-xl lg:cursor-pointer transform hover:scale-110 transition-transform delay-75 ease-out"
              >
                <BsArrowLeft />
              </div>
              <div
                onClick={nextImage}
                className="border bg-green-800 text-white bg-opacity-60 border-green-700 h-10 w-10 flex items-center justify-center rounded-full text-xl lg:cursor-pointer transform hover:scale-110 transition-transform delay-75 ease-out"
              >
                <BsArrowRight />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Header;
