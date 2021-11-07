import * as React from "react";
import { BsList } from "react-icons/bs";
import { Link } from "react-router-dom";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";

interface Navigation {
  label: string;
  path: string;
}

const navigation: Navigation[] = [
  // {
  //   label: "Back To Home",
  //   path: "/",
  // },
];

const NavBar: React.FC = () => {
  let [visible, setVisible] = React.useState<boolean>(false);

  const toggle = () => {
    setVisible((visible = !visible));
  };

  return (
    //  border-gray-200 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b
    <div
      className={`sticky top-0 z-10 border-gray-50 bg-white backdrop-filter backdrop-blur-lg shadow-sm bg-opacity-40 borderb`}
    >
      {/* mobile nav bar */}
      <div className="flex flex-col md:hidden">
        <div className="flex flex-row justify-between p-4 h-14 items-center sticky top-0">
          <span className="text-sm block">Biko Tours</span>
          <BsList className="text-3xl" onClick={toggle} />
        </div>
        <ul
          className={`flex-col flex list-none duration-200 space-y-5 p-4 ${
            visible ? "" : "hidden"
          }`}
        >
          {navigation.map((item, index) => {
            return (
              <li
                key={index}
                style={{ fontSize: 14 }}
                className={`font-medium text-sm hover:text-yellow-500 tracking-wider`}
              >
                <Link to={item.path}>{item.label}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      {/* desktop nav bar */}
      <div className="hidden md:block h-20 w-full">
        <div className="w-5/6 mx-auto flex flex-row justify-between items-center h-full">
          <Link to="/" className="text-base">
            Biko Tours
          </Link>
          <div>
            <ul className="flex-row flex list-none space-x-10">
              {[
                <GrFacebookOption />,
                <RiInstagramFill />,
                <AiOutlineTwitter />,
              ].map((item, index) => {
                return (
                  <div
                    key={index}
                    className="border z-50 text-green-700 hover:bg-green-700 hover:text-white bg-opacity-30 bg-transparent border-green-700 lg:cursor-pointer rounded-full h-8 text-base w-8 items-center justify-center flex"
                  >
                    {item}
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
