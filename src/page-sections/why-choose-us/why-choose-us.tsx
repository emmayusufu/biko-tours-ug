import * as React from "react";
import "./why-choose-us.styles.css";
import {
  BsFillClockFill,
  BsFillPeopleFill,
  BsBriefcaseFill,
} from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";

type Props = {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
};

const data: Props[] = [
  {
    title: "Customer satisfaction",
    description: `We always go an extra mile to make sure the customer is satisfied for example our Vans 
    are fitted with screens whereby clients can enjoy their favorite movies as they travel.
    Extra charging ports are provided so that your phone never sleeps during the journey to enable you capture the moments.
    Cooling boxes are also fitted in most of the cars to ensure there is steady supply of cold drinks as one travels`,
    icon: <BsFillPeopleFill />,
    color: "bg-green-600",
  },
  {
    title: "Professionalism",
    description: `Our drivers and tour guides have continuously time and time again demonstrated the highest level of competence and have also proven capable to take you on
    your various adventures as they are taken through series training to handle clients
     professionally and we also receive reviews from clients on our various platforms 
     and these enable us to improve the quality of services we provide to you.`,
    icon: <BsBriefcaseFill />,
    color: "bg-blue-600",
  },
  {
    title: "Timely service",
    description: `Punctuality is top on our values as we want our clients to enjoy their journeys on time and always ensuring to provide support to customers 
    in an opportune manner. Most of our previous clients have all given testimony of this. 
    We Respond to all of our customer requests on time as well as resolve any customer issues in a timely fashion as an extreme part of customer service.
    `,
    icon: <BsFillClockFill />,
    color: "bg-red-600",
  },
  {
    title: "Experience",
    description: `We take pride in the experience we have learnt of and harnessed over the years as we tour the Pearl of 
    Africa and this places us in a best suited position to serve our clients better.
    We have traversed the Pearl of Africa several times and had a feel of all the best Tourist sites
     across the country and we would like to share this with our clients as many times as possible.`,
    icon: <FaUserTie />,
    color: "bg-yellow-500",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us">
      <div className="lg:text-4xl text-2xl text-center">Why Choose Us ?</div>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full py-4 lg:py-8 gap-5 lg:gap-10">
        {data.map((item, index) => {
          return (
            <div className="w-full flex-col space-y-2 lg:p-2 flex" key={index}>
              <span
                className={`lg:text-4xl text-2xl ${item.color} text-white border shadow-sm lg:shadow-md rounded-full lg:h-24 h-20 w-20 lg:w-24 items-center justify-center flex`}
              >
                {item.icon}
              </span>
              <span className="font-semibold tracking-wide text-sm lg:text-base">
                {item.title}
              </span>
              <p className="text-justify text-sm lg:text-base">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChooseUs;
