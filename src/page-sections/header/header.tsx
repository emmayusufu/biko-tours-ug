import * as React from "react";
import "./header.styles.css";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const Header: React.FC = () => {
  // const [bgImage, setBgImage] = React.useState("");
  return (
    <div
      className="header"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1577353716826-9151912dcdd1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=80')",
      }}
    >
      <nav className="nav-bar">
        <div className="nav-container">
          <div className="logo">Biko Tours</div>
          <ul>
            {[
              "Services",
              "Tours",
              "Car rental",
              "Gallery",
              "Reviews",
              "Contact us",
            ].map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
            <div className="icon">
              <GrFacebookOption />
            </div>
            <div className="icon">
              <RiInstagramFill />
            </div>
            <div className="icon">
              <AiOutlineTwitter />
            </div>
          </ul>
        </div>
      </nav>
      <section className="container">
        <div className="column-one">
          <span className="text-white font-semibold tracking-wider">
            LET'S DISCOVER
          </span>
          <p
            className="text-white font-semibold text-6xl"
            style={{ lineHeight: "6rem" }}
          >
            NEVER STOP EXPLORING THE WORLD
          </p>
          <p className="desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            iure recusandae possimus consectetur vero, labore debitis vel
            incidunt aliquid pariatur accusamus reiciendis tenetur? Quasi,
            consequuntur aliquid velit expedita tempora repellendus? Lorem ipsum
          </p>
          <button>Learn more</button>
        </div>
        <div className="column-two">
          <div className="carousel">
            {[
              "https://images.unsplash.com/photo-1577353716826-9151912dcdd1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=80",
              // "https://images.unsplash.com/photo-1593993553178-34999e930fbf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=80",
              "https://images.unsplash.com/photo-1570537364481-d697c0cc4ae0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
            ].map((item, index) => {
              return (
                <div key={index} className="shadow-xl relative">
                  <img src={item} className="rounded-lg h-full" alt="" />
                  <div className="absolute bottom-10 left-10 text-white text-2xl">
                    Mombasa
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center my-10 gap-20">
            <div className="border text-white border-white h-10 w-10 flex items-center justify-center rounded-full text-xl cursor-pointer">
              <BsArrowLeft />
            </div>
            <div className="border text-white border-white h-10 w-10 flex items-center justify-center rounded-full text-xl cursor-pointer">
              <BsArrowRight />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
// "url('https://images.unsplash.com/photo-1593993553178-34999e930fbf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=80')",
// "url('https://images.unsplash.com/photo-1517154868524-c6b5fbd62a1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
// "url('https://i.pinimg.com/originals/04/6a/c5/046ac5bc0f6a62e03f1c4d781153f516.jpg')",
// "url('https://www.tripsavvy.com/thmb/FwmQ-JvBEBDDlVb-j_zdEo0iVsA=/2048x1152/smart/fi/lters:no_upscale()/beach-5b59c9b7c9e77c004b3e0ff0.jpg')",
// "url('https://images.unsplash.com/photo-1474433188271-d3f339f41911?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
// https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80
// src="https://images.unsplash.com/photo-1590668468552-d87c3a011afb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1172&q=80"
// https://images.unsplash.com/photo-1575550959106-5a7defe28b56?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80
// https://images.unsplash.com/photo-1527644702050-c947a80cdf38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80
// https://images.unsplash.com/photo-1506354259095-f4e94f2716b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80
// https://images.unsplash.com/photo-1557218825-334e575bcc38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80
// https://images.unsplash.com/photo-1551357141-1800c80f8997?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80
// src="https://images.unsplash.com/photo-1614528767034-70de9fe166e0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
// src="https://pbs.twimg.com/media/De6c2qgWsAAVkij.jpg"
// src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1172&q=80"
// src="https://images.unsplash.com/photo-1489493887464-892be6d1daae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1167&q=80"
// src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80"
// src="https://images.unsplash.com/photo-1633363593895-9249c144db6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80"
//==== src="https://images.unsplash.com/photo-1625420545668-05f1ec8ee537?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
// src="https://images.unsplash.com/photo-1484318571209-661cf29a69c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
// src="https://images.unsplash.com/photo-1570537364481-d697c0cc4ae0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
// src="https://images.unsplash.com/photo-1573401545579-498aa95975bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
