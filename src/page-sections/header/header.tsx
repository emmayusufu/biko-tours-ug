import * as React from "react";
import "./header.styles.css";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { BsArrowRight, BsArrowLeft, BsList } from "react-icons/bs";
import logo from "../../logo.png";

import img1 from "../../images/header-images/img_1.jpg";
import img2 from "../../images/header-images/img_2.jpg";
import img3 from "../../images/header-images/img_3.jpg";
import img4 from "../../images/header-images/img_4.jpg";
import img5 from "../../images/header-images/img_5.jpg";
import img6 from "../../images/header-images/img_6.jpg";

const Header: React.FC = () => {
  type NavProps = {
    name: string;
    path: string;
  };
  const navs: NavProps[] = [
    { name: "Services", path: "services" },
    { name: "Tours", path: "tours" },
    // { name: "Gallery", path: "gallery" },
    { name: "Contact us", path: "contact-us" },
  ];

  const bgImages: string[] = [
    img3,
    img1,
    img2,
    img4,
    img5,
    img6,
    // "https://images.unsplash.com/photo-1527644702050-c947a80cdf38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
    // "https://images.unsplash.com/photo-1551357141-1800c80f8997?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    // "https://images.unsplash.com/photo-1614528767034-70de9fe166e0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
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
      <div className="bg-black bg-opacity-30">
        <nav>
          <div className="mx-auto flex justify-between items-center text-gray-50">
            <img src={logo} alt="" className="h-20 w-24" />
            <BsList className="text-white text-3xl lg:hidden" />
            <ul className="lg:flex flex-row gap-10 h-full items-center hidden">
              {navs.map((item, index) => {
                return (
                  <li
                    className="lg:cursor-pointer z-50"
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
                    className="border z-50 text-white bg-green-800 bg-opacity-60 border-green-700 lg:cursor-pointer rounded-full h-8 text-base w-8 items-center justify-center flex"
                  >
                    {item}
                  </div>
                );
              })}
            </ul>
          </div>
        </nav>
        <section className="container">
          <div className="column-one">
            <p className="title tracking-wider lg:tracking-normal text-left">
              LET'S DISCOVER WITH BIKO TOURS
            </p>
            <p className="text-gray-200 tracking-wide lg:leading-8 leading-6 text-sm text-justify">
              To share our passion, in-depth knowledge, travel experience in
              Africa and to help fulfill travelers’ lifelong dream of journeying
              to the continent that we call home. We strive to give our clients
              authentic enriching experience based on our first-hand knowledge
              of the safari destinations.
            </p>
            <a
              href="#about-us"
              className="w-4/12 bg-green-800 hidden lg:flex bg-opacity-75 items-center justify-center oultine-none text-white ml-0 rounded-full"
              style={{ height: "52px" }}
            >
              Learn more
            </a>
          </div>
          <div className="column-two">
            <div className="lg:flex flex-row gap-5 hidden">
              {imgArray.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`shadow-xl relative w-full lg:w-4/12 ${
                      index > 2 && "hidden"
                    }`}
                  >
                    <img
                      src={item}
                      className={`rounded-lg h-full w-full transition-transform delay-200 transform border-green-800 border border-opacity-20 shadow-lg`}
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex lg:justify-center justify-end lg:gap-20 gap-10">
              <div
                onClick={previousImage}
                className="border bg-green-800 text-white bg-opacity-60 border-green-700 lg:h-10 h-9 w-9 lg:w-10 flex items-center justify-center rounded-full lg:text-xl text-base lg:cursor-pointer transform hover:scale-110 transition-transform delay-75 ease-out"
              >
                <BsArrowLeft />
              </div>
              <div
                onClick={nextImage}
                className="border bg-green-800 text-white bg-opacity-60 border-green-700 lg:h-10 h-9 w-9 lg:w-10 flex items-center justify-center rounded-full lg:text-xl text-base lg:cursor-pointer transform hover:scale-110 transition-transform delay-75 ease-out"
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
