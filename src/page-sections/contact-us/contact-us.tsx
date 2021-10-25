import * as React from "react";
import "./contact-us.styles.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const ContactUs: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch("", {})
      .then((response: Response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error: Error) => {
        console.log(error);
      });
  };

  return (
    <section id="contact-us">
      <div className="grid md:grid-cols-2 gap-10 mb-10">
        <div>
          <div className="text-lg font-semibold text-center mb-8">
            Get in Touch
          </div>
          <div className="flex flex-col mb-4">
            <div className="text-justify text-sm lg:text-base">
              Need help from a technical person, send us a message via the form
              , we’ll get back to you with 30 minutes. Give as much detail as
              possible to get immediate attention.
            </div>
          </div>
          <div className="mb-2 flex flex-col text-sm space-y-1">
            <div className="font-bold">Contact</div>
            <span>+256 777 720 650</span>
            <span>+256 701 783 600</span>
            <span>+265 701 897 287</span>
            <span>+256 777 783 600</span>
          </div>
          <div className="mb-2 flex flex-col text-sm space-y-1">
            <div className="font-bold">Email</div>
            <span>bikotours@yahoo.com</span>
          </div>
          <div className="mb-2 flex flex-col text-sm space-y-1">
            <div className="font-bold">Address</div>
            <span>Mirage Plaza Kitintale, ML-211</span>
            <span>P.O Box 8856, Kampala, Uganda</span>
          </div>
          <div className="mb-2 flex flex-col text-sm space-y-1">
            <div className="font-bold">Working hours</div>
            <span>
              Monday to Friday 8 to 5pm Saturday 9 to 2pm Sunday closed
            </span>
          </div>
        </div>
        <div>
          <div className="text-lg font-semibold text-center mb-8">
            Send us a Message
          </div>
          <div className="flex flex-row items-center border h-12 w-full mb-4 border-gray-100 rounded-sm bg-gray-100">
            <input
              type="text"
              className="border-none w-full text-sm outline-none bg-transparent placeholder-gray-400"
              placeholder="Full name"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="flex flex-row items-center border h-12 w-full border-gray-100 rounded-sm bg-gray-100">
              <input
                type="text"
                className="border-none w-full text-sm outline-none bg-transparent placeholder-gray-400"
                placeholder="Email"
              />
            </div>
            <div className="flex flex-row items-center border h-12 w-full border-gray-100 rounded-sm bg-gray-100">
              <input
                type="text"
                className="border-none w-full text-sm outline-none bg-transparent placeholder-gray-400"
                placeholder="Phone number"
              />
            </div>
          </div>
          {/* ================================================================================================ */}
          <div className="flex flex-row items-center border h-12 w-full mb-4 border-gray-100 rounded-sm bg-gray-100">
            <input
              type="text"
              className="border-none w-full text-sm outline-none bg-transparent placeholder-gray-400"
              placeholder="Location"
            />
          </div>
          {/* ================================================================================================ */}
          <div className="flex flex-row items-center border w-full mb-4 border-gray-100 rounded-sm bg-gray-100">
            <textarea
              name="message"
              rows={4}
              placeholder="Leave us a message"
              className="outline-none flex w-full sm:text-sm p-4 rounded-md resize-none bg-transparent placeholder-gray-400"
            />
          </div>
          {/* ================================================================================================ */}
          <div className="w-full flex justify-center items-center">
            <button
              onSubmit={handleSubmit}
              className="w-full lg:w-2/4 px-2 justify-center border h-12 items-center flex border-transparent shadow text-sm rounded text-white bg-yellow-500 hover:bg-yellow-600"
            >
              Send
              <HiOutlineArrowNarrowRight className="text-2xl ml-4 text-white" />
            </button>
          </div>
          {/* ================================================================================================ */}
        </div>
      </div>

      <div className="text-center mb-8 font-semibold text-lg">
        How To Find Us
      </div>

      <iframe
        className="my-2 rounded mt-0 shadow"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7574161530147!2d32.62980661471099!3d0.3165812641118718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbff3bf7c4199%3A0x83c598a4072f296!2sMirage%20Plaza!5e0!3m2!1sen!2sug!4v1629528871995!5m2!1sen!2sug"
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        title="location"
      ></iframe>
    </section>
  );
};

export default ContactUs;
