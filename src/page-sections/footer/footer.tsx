import * as React from "react";
import Wave from "react-wavify";
import { GrFacebook, GrTwitter, GrInstagram } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { TiLocationOutline } from "react-icons/ti";
import { SiMinutemailer } from "react-icons/si";
import "./footer.styles.css";
import { PulseLoader } from "react-spinners";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../../utils/firebase_config";

const Footer: React.FC = () => {
  const [sending, setSending] = React.useState(false);
  const [email, setEmail] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async () => {
    setSending(true);
    try {
      const docRef = await addDoc(collection(firestore, "subscribers"), {
        email: email,
      });
      setSending(false);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      setSending(false);
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div>
      <Wave
        fill="#00000"
        paused={true}
        options={{
          height: 60,
          amplitude: 40,
          speed: 0.25,
          points: 3,
        }}
      />
      <div className="bg-black">
        <section id="footer" className="text-gray-300 pb-8">
          <div className="flex flex-col md:flex-row items-center justify-between rounded">
            <div className="flex flex-row">
              <SiMinutemailer className="mr-4 self-center h-10 w-10" />
              <div className="text-lg flex flex-col">
                <span className="font-semibold mb-1">
                  Do not wanna miss out on the next big thing ?
                </span>
                <span className="text-sm">Subscribe to our news letter</span>
              </div>
            </div>
            <form className="border mt-4 rounded-3xl flex h-10 md:h-12 flex-row flex-nowrap bg-white w-full md:w-6/12">
              <input
                type="email"
                required
                value={email}
                onChange={handleChange}
                className="border-none h-full rounded-3xl text-sm px-4 text-gray-900 placeholder-gray-500 flex-1 w-full outline-none bg-white"
                placeholder="Enter Your Email address"
              />
              <div
                onClick={handleSubmit}
                className="w-20 md:w-40 h-full lg:cursor-pointer rounded-3xl justify-center flex items-center border-none text-xs md:text-sm text-white bg-yellow-500 lg:hover:bg-yellow-600"
              >
                {sending ? <PulseLoader color="white" size={5} /> : "Subscribe"}
              </div>
            </form>
          </div>
          <div className="w-full bg-gray-900 my-4" style={{ height: 1 }} />
          <div className="mb-4 w-full h-1" />
          <div className="w-full justify-between flex flex-col md:flex-row text-center space-y-6 md:-space-y-0">
            <div className="flex flex-col space-y-1 md:items-start">
              <span className="text-xl">Biko Tours</span>
              <span style={{ fontSize: 10 }}>Lets discover</span>
            </div>
            <div className="flex flex-col md:flex-row md:w-6/12 md:justify-between space-y-6 md:space-y-0 mx-auto md:mx-0">
              <div className="flex flex-row h-full items-center">
                <FaPhoneAlt style={{ fontSize: 20 }} className="mr-4" />
                <span>+256 777 720 650</span>
              </div>
              <div className="flex flex-row h-full items-center">
                <HiOutlineMail style={{ fontSize: 25 }} className="mr-4" />
                <span>bikotours@yahoo.com</span>
              </div>
              <div className="flex flex-row h-full items-center">
                <TiLocationOutline style={{ fontSize: 25 }} className="mr-4" />
                <span>Mirage Plaza Kitintale, ML-211</span>
              </div>
            </div>
          </div>
          {/* ===================================== */}
          <div className="w-full bg-gray-900 my-4" style={{ height: 1 }} />
          <div className="grid md:grid-cols-4">
            <div className="flex flex-co flex-wrap mb-8">
              <ul>
                <li className="font-semibold leading-8 text-center">
                  Our mission
                </li>
                <li>
                  <p className="text-justify">
                    We believe that Touring refreshes the mind of a traveler so
                    we provide the best customized group tours with professional
                    service ensuring customer satisfaction at all times.
                  </p>
                </li>
                <li className="font-semibold leading-8 text-center">
                  Our vision
                </li>
                <li>
                  <p className="text-justify">
                    To be the leading provider of Customized group tours and
                    professional Car rental services in Africa.
                  </p>
                </li>
              </ul>
            </div>
            <div className="md:justify-self-end justify-self-center mb-8">
              <ul className="leading-8">
                <li className="font-semibold">Services</li>
                <li className="hover:text-yellow-500 lg:cursor-pointer">
                  <span>Tours</span>
                </li>
                <li className="hover:text-yellow-500 lg:cursor-pointer">
                  <span>Car rental</span>
                </li>
                <li className="hover:text-yellow-500 lg:cursor-pointer">
                  <span>Camping</span>
                </li>
              </ul>
            </div>
            <div className="md:justify-self-end justify-self-center mb-8">
              <ul className="leading-8">
                <li className="font-semibold tracking-wide">Company</li>
                <li className="hover:text-yellow-500 lg:cursor-pointer">
                  <span>Privacy Policy</span>
                </li>
                <li className="hover:text-yellow-500 lg:cursor-pointer">
                  <span>FAQs</span>
                </li>
                <li className="hover:text-yellow-500 lg:cursor-pointer">
                  <span>Contact us</span>
                </li>
              </ul>
            </div>
            <div className="md:justify-self-end justify-self-center">
              <ul className="leading-8">
                <li className="font-semibold tracking-wide">Social media</li>
                <li className="flex flex-row hover:text-yellow-500 lg:cursor-pointer">
                  <span className="self-center">
                    <GrFacebook
                      style={{ marginRight: 5, alignSelf: "center" }}
                    />
                  </span>
                  <span>Facebook</span>
                </li>
                <li className="flex flex-row hover:text-yellow-500 lg:cursor-pointer">
                  <span className="self-center">
                    <GrTwitter
                      style={{ marginRight: 5, alignSelf: "center" }}
                    />
                  </span>
                  <span>Twitter</span>
                </li>
                <li className="flex flex-row hover:text-yellow-500 lg:cursor-pointer">
                  <span className="self-center">
                    <GrInstagram
                      style={{ marginRight: 5, alignSelf: "center" }}
                    />
                  </span>
                  <span>Instagram</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full bg-gray-900 my-4" style={{ height: 1 }} />
          <div className="text-center">
            Copyright &copy; {new Date().getFullYear()} BikoTours. All rights
            reserved
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
