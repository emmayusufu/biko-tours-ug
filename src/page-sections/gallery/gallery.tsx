import * as React from "react";
import { TiLocation } from "react-icons/ti";
import "./gallery.styles.css";
// import { BsImages } from "react-icons/bs";

const Gallery: React.FC = () => {
  return (
    <div className="mx-auto my-10 text-center" style={{ width: "90%" }}>
      {/* <BsImages className="text-blue-500 text-4xl" /> */}
      <div className="text-4xl font-semibold">Our Gallery</div>
      <div className="flex flex-row w-full justify-center gap-6 my-5">
        {[
          "All",
          "Mbale",
          "Kigali",
          "Juba",
          "Cairo",
          "Kisoro",
          "Fort Portal",
          "Nairobi",
          "Dar es salaam",
          "Mombasa",
        ].map((item, index) => {
          return (
            <div
              className={`text-sm cursor-pointer tracking-wider font-semibold rounded-full py-1 px-2 ${
                index === 1 && "text-green-600"
              }`}
            >
              {item}
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-4 gap-1">
        {[
          "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          "https://images.unsplash.com/photo-1590668468552-d87c3a011afb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1172&q=80",
          "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
          "https://images.unsplash.com/photo-1527644702050-c947a80cdf38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
          " https://images.unsplash.com/photo-1506354259095-f4e94f2716b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
          " https://images.unsplash.com/photo-1557218825-334e575bcc38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
          " https://images.unsplash.com/photo-1551357141-1800c80f8997?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          "https://images.unsplash.com/photo-1614528767034-70de9fe166e0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
        ].map((item, index) => {
          return (
            <div key={index} className="relative image-card">
              <img className="cursor-pointer rounded" src={item} alt="" />
              <div className="flex flex-row gap-2 h-16 justify-center w-full items-center backdrop-filter backdrop-blur-sm border-t bottom-bar bg-white absolute bottom-0 left-0 bg-opacity-50 rounded-b">
                <TiLocation className="text-2xl text-red-600" />
                <span className="text-base text-black font-semibold tracking-wider">
                  Mbale, Uganda
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
