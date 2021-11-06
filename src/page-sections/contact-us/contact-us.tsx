import * as React from "react";
import "./contact-us.styles.css";
import TextInput from "../../components/text-input";
import { SiMinutemailer } from "react-icons/si";
import { PulseLoader } from "react-spinners";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../../utils/firebase_config";

type StateProps = {
  fullName: string;
  email: string;
  phoneNumber: string;
  location: string;
  message: string;
};

const ContactUs: React.FC = () => {
  const [state, setState] = React.useState<StateProps>({
    fullName: "",
    email: "",
    phoneNumber: "",
    location: "",
    message: "",
  });

  const [sending, setSending] = React.useState(false);

  const handleChange =
    (key: keyof StateProps) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setState({ ...state, [key]: e.target.value });
    };

  const handleTextAreaChange =
    (key: keyof StateProps) => (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setState({ ...state, [key]: e.target.value });
    };

  const handleSubmit = async () => {
    setSending(true);
    try {
      const docRef = await addDoc(collection(firestore, "subscribers"), {
        ...state,
      });
      setSending(false);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      setSending(false);
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div
    // style={{
    //   backgroundColor: "#f8fcff",
    // }}
    >
      <section id="contact-us" className="py-20">
        <div className="grid md:grid-cols-2 gap-10 mb-10">
          <div>
            <div className="lg:text-base text-base font-semibold text-center mb-4 lg:mb-3">
              Get in Touch
            </div>
            <div className="text-justify text-sm lg:text-sm mb-4">
              Need help from a technical person, send us a message via the form
              , we’ll get back to you with 30 minutes. Give as much detail as
              possible to get immediate attention.
            </div>
            <div
              className="mb-2 flex flex-col text-sm space-y-1"
              data-aos="fade-right"
            >
              <div className="font-bold">Contacts</div>
              <span>+256 777 720 650</span>
              <span>+256 701 783 600</span>
              <span>+265 701 897 287</span>
              <span>+256 777 783 600</span>
            </div>
            <div
              className="mb-2 flex flex-col text-sm space-y-1"
              data-aos="fade-right"
            >
              <div className="font-bold">Email</div>
              <span>bikotours@yahoo.com</span>
            </div>
            <div
              className="mb-2 flex flex-col text-sm space-y-1"
              data-aos="fade-right"
            >
              <div className="font-bold">Address</div>
              <span>Mirage Plaza Kitintale, ML-211</span>
              <span>P.O Box 8856, Kampala, Uganda</span>
            </div>
            <div
              className="mb-2 flex flex-col text-sm space-y-1"
              data-aos="fade-right"
            >
              <div className="font-bold">Working hours</div>
              <span>
                Monday to Friday 8 to 5pm, Saturday 9 to 2pm, Sunday closed
              </span>
            </div>
          </div>
          <div>
            <div className="lg:text-base text-sm font-semibold text-center mb-4 lg:mb-3">
              Send us a Message
            </div>
            <TextInput
              placeholder="Full name"
              value={state.fullName}
              onChange={handleChange("fullName")}
            />
            <div className="grid md:grid-cols-2 gap-4">
              <TextInput
                placeholder="Email"
                value={state.email}
                onChange={handleChange("email")}
              />
              <TextInput
                placeholder="Phone number"
                value={state.phoneNumber}
                onChange={handleChange("phoneNumber")}
              />
            </div>
            {/* ================================================================================================ */}
            <TextInput
              placeholder="Location"
              value={state.location}
              onChange={handleChange("location")}
            />
            {/* ================================================================================================ */}
            <textarea
              name="message"
              value={state.message}
              onChange={handleTextAreaChange("message")}
              rows={4}
              placeholder="Leave us a message"
              className="outline-none border w-full mb-4 border-gray-200 shadow-sm rounded flex text-xs lg:text-sm p-2 resize-none bg-transparent placeholder-gray-400"
            />
            {/* ================================================================================================ */}
            <div className="w-full flex justify-center items-center">
              <button
                disabled={sending}
                onSubmit={handleSubmit}
                className="w-full lg:w-2/4 px-2 justify-center border lg:h-12 h-10 items-center flex border-transparent shadow text-sm rounded text-white bg-yellow-500 hover:bg-yellow-600"
              >
                {sending ? (
                  <PulseLoader color="white" size={5} />
                ) : (
                  <div className="w-full h-full justify-center items-center flex">
                    Send
                    <SiMinutemailer className="text-2xl ml-4 text-white" />
                  </div>
                )}
              </button>
            </div>
            {/* ================================================================================================ */}
          </div>
        </div>

        <div className="text-center mb-4 lg:mb-8 font-semibold text-base lg:text-base">
          How To Find Us
        </div>

        <iframe
          data-aos="fade-up"
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
    </div>
  );
};

export default ContactUs;
