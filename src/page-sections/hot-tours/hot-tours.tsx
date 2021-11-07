import * as React from "react";
import { BsArrowRight } from "react-icons/bs";
import { TiLocation } from "react-icons/ti";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { Tour } from "../../interfaces";
import "./our-tours.css";

const tours: Tour[] = [
  {
    id: 1,
    name: "Bwindi Gorilla Trekking and Lake Mburo Safari",
    coverPhoto:
      "https://images.unsplash.com/photo-1614528767034-70de9fe166e0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    description: `This four day tour takes you to visit the Mountain Gorillas in Bwindi National Park as well as a safari and birding expedition in the Lake Mburo National Park.`,
    location: {
      map_url:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15956.582596531842!2d29.611345827974148!3d-1.0521280335633387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19de9d58dac3d859%3A0x972f044d905ac1fa!2sBwindi%20Impenetrable%20Forest!5e0!3m2!1sen!2sug!4v1635966925053!5m2!1sen!2sug",
      region: "Western Uganda",
    },
    includedInPrice: [
      "Tour Guide",
      "Full Board Accommodation with meals",
      " Airport / Hotel Transfer",
      "Transportation in 4 * 4 Vehicle",
    ],
    notIncludedInPrice: ["Personal gratuity"],
    activities: ["Bird seeing", "Hiking", "Wild life"],
    itinerary: [
      {
        title: "Day 1: Kampala – Bwindi Impenetrable National Park",
        description: `Drive from Kampala and head southwest to Bwindi Impenetrable National Park. You’ll briefly stop at the Equator to take photos and have an educative talk, later have lunch in Mbarara.  You will drive through the verdant rolling hills of Uganda, and through the highlands of Kigezi, enjoy the breathtaking views as you drive through this into the Impenetrable Forest of Bwindi.`,
      },
      {
        title: "Day 2: Mountain gorilla trekking in Bwindi",
        description: `Following an early breakfast, proceed to the headquarters of the Park where you will be briefed by your guide before venturing into the dense forest to track the impressive mountain gorillas. Keep alert as you may here the young ones making noises as they swing from one tree to another, and when you finally come face to face with them, you will be fascinated by the sheer size of the silverback (the dominant male). It is an unusual feeling sitting there within this thick rainforest aware that you are with a couple of the very few surviving mountain gorillas.  in case you have some extra energy you will have a guided walk in the afternoon along the Munyaga River trail where you will see the beautiful waterfalls, a diversity of vegetation covers several birds plus an array of colorful butterflies. The Bwindi forest is a sanctuary for primatologists as well as ornithologists. Another option is having a guided community walk with the Batwa inhabitants living close to this forest.`,
      },
      {
        title: "Day 3: Lake Mburo National Park",
        description: `Following breakfast proceed to Lake Mburo national Park, home to the impalas which are small antelopes mainly concentrated around Lake Mburo of all the national Parks in Uganda. Actually the capital city of Uganda – Kampala was named after this stunning small animal. Along the way you will be able to see the spectacular Kigezi highlands plus some other uncultivated scenery. On arrival in the park, you will have a game drive to see some other wildlife in Uganda besides the gorillas you saw in Bwindi and among these will be: zebras, warthogs, buffaloes, klipspringers, elands, oribi as well as waterbucks.`,
      },
      {
        title: "Day 4: Boat launch on Lake Mburo & Return Trip to Kampala",
        description: `After breakfast have a boat trip in the morning on Lake Mburo, and there you will have an opportunity to even see some smaller lakes such as lake Kazuma and Lake Bwa. Marvel at the giant hippos, buffaloes plus crocodiles just in the shallows of the water. There are several stunning birds to see such as the Abyssinian ground hornbill, saddle bill storks and the beautiful crested crane (which is on the national emblem of Uganda), among others. In the afternoon you will return to the capital stopping over for lunch in Mbarara and lastly stopping in Masaka at the equator to take your last picture here in the Pearl of Africa.`,
      },
    ],
    duration: "4 days",
  },
  // ========================================================= tour-2
  {
    id: 2,
    name: "Kibale, Queen Elizabeth & Bwindi National Park Safari",
    coverPhoto:
      "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    description: `Fun packed five day primate adventure visiting the three famous Ugandan  National Parks; Kibale National Park, Bwindi Impenetrable NP and Queen Elizabeth National Park and get a chance to see a combination of Gorilla, Chimpanzee and at the same time a Wildlife safari`,
    location: {
      map_url:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.674681509813!2d30.387476914826983!3d0.48618136387661703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1762315eb5fec84b%3A0xe86bf6d0457d4177!2sKibale%20National%20Park!5e0!3m2!1sen!2sug!4v1635968681890!5m2!1sen!2sug",
      region: "Western Uganda",
    },
    includedInPrice: [
      "Tour Guide",
      "Full Board Accommodation with meals",
      " Airport / Hotel Transfer",
      "Transportation in 4 * 4 Vehicle",
    ],
    notIncludedInPrice: ["Personal gratuity"],
    activities: ["Hiking", "Wild life"],
    itinerary: [
      {
        title: "Day 1: : Kampala-Kibale National Park",
        description: `Leave Kampala after breakfast for the fascinating drive through papyrus swamps and thick jungle of the Nile Delta to Kibale National Park just under the Ruwenzori Mountains. Afternoon guided walk in the crater lakes area of the park for outstanding cultural visit. A stunning location overlooking a dramatic Crater Lake and the fabled Mountains of the Moon. Evening cultural visit around the crates is amazing.`,
      },
      {
        title: "Day 2: Chimpanzee Trekking, Kibale-Queen Elizabeth",
        description: `In the morning you will have breakfast to transfer to Kibale Headquarters for briefing before setting off for a forest walk in search for chimpanzees. The forest walk will be guided to provide information not only on chimpanzees and primates but also on small organisms making it interesting. The walk will reward you with other primates like Grey cheeked Mangabey, Colobus monkeys, Red-tailed. After chimp trekking drive to Queen Elizabeth ready for an evening two-hour Boat cruise along the famous Kazinga channel is worthwhile an opportunity to see Hippo, Buffalos, Kobs, Elephants, warthogs etc. This trip also enables visitor chance to see spectacular birds.`,
      },
      {
        title: "Day 3: Queen Elizabeth-Bwindi National Parks",
        description: `Begin your day with a cup of coffee. Early morning game drive along Kasenyi and Queens Mile to  encounter elephants, buffalo, water bucks, warthogs, lions, Uganda Kobs lakes and a variety of birds. Thereafter drive through the Ishasha Sector; this takes you through the unique western rift valley escarpment. If time allows take on a mini game drive in Ishasha sector in search of tree climbing lions before proceeding to Bwindi forest National Park. Â Dinner and overnight stay at Buhoma Lodge, Mahogany Springs Lodge (Lodge facility) or Buhoma community Bandas (Budget facility)`,
      },
      {
        title: "Day 4: Bwindi National Park Gorilla Trekking",
        description: `Begin the day with breakfast ready for trekking, which begins at 8:00 am with a briefing from the UWA staff. Ensure to carry along with you rain jacket, drinking water, snacks, jungle boots etc. The guides will lead you inside the jungle to see the shy Primates for a group you have been booked for. Do not forget to take your lunch boxes and all the necessary gear to track the rare Mountain Gorilla, perhaps one of the most exciting wildlife experiences on earth. The tracking may take between 2 and 6 hours but it’s well worth the effort. The afternoon is spent on a village walk. The Buhoma Village Walk gives you a great opportunity to see how the people surrounding Bwindi Impenetrable Forest. It also is a great way to support the local community in a direct way. The Walk begins with your guide at Buhoma Community Rest Camp and is most informative, rewarding to the average visitor. It will amaze you how resourceful the local people are as you see and learn their ways.`,
      },
      {
        title: "Day 5: Leave Bwindi National Park for Kampala/Entebbe",
        description: `Return to Kampala, then Entebbe, with lunch enrooted with a stopover at Igongo cultural Centre to explore the life style of the Ankole and Bahima, thereafter proceed at the Equator Uganda before your evening departures home.`,
      },
    ],
    duration: "5 days",
  },
  // ========================================================= tour-3
  {
    id: 3,
    name: "Mgahinga Gorilla Trekking and Lake Bunyonyi Birding",
    coverPhoto:
      "https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    description: `Spend four days in Southwestern Uganda, visit the world reowned gorilla park; Mgahinga National Park, birding destinations like Ruvuma swamp  and Lake Bunyonyi. This tour is mainly tailored for birding and primate enthusiasts.`,
    location: {
      map_url:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63819.012460134305!2d29.613303458992064!3d-1.3636990373435836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dc46578b037acf%3A0x11de13f80905680f!2sMgahinga%20National%20Park!5e0!3m2!1sen!2sug!4v1635969899550!5m2!1sen!2sug",
      region: "South Western Uganda",
    },
    includedInPrice: [
      "Tour Guide",
      "Full Board Accommodation with meals",
      " Airport / Hotel Transfer",
      "Transportation in 4 * 4 Vehicle",
    ],
    notIncludedInPrice: ["Personal gratuity"],
    activities: ["Bird seeing", "Hiking", "Wild life"],
    itinerary: [
      {
        title: "Day 1: Kampala – Mgahinga National Park",
        description: `Your guide will be pick you up from your accommodation and drive from Kampala heading southwest via the Kampala Masaka Mbarara highroad.  Have a stop at Nabusanke to take some photos at the equator crossing and later have lunch for in Mbarara you will drive on to Mgahinga National park.  This park is home to the internationally renowned endangered mountain gorillas a unique feature for the tourism industry of Uganda. Bwindi national park, plus Mgahinga National Park together with the Volcanoes Park in Rwanda and the Virunga Volcanoes of Congo home to the world’s surviving endangered mountain gorillas. Dine and slumber at Bird’s Nest or Lake Mutanda Eco Lodge or Tourist Hotel.`,
      },
      {
        title: "Day 2: Mountain gorilla trekking",
        description: `After an early breakfast, go to the headquarters of the park with a packed where you will be briefed about the gorilla trekking in the impenetrable forests. You will be allowed to spend an hour in the presence of the gorillas after trekking for about 3 to 5 hours. In case you still have some energy you will have a cultural experience with the Batwa community. You will see several souvenir shops, schools, churches and drinking joints. You will see the stunning waterfalls plus the great profusion of birdlife or take the Muzabajiro or Ruhija trails to see the forest plus the grassland adopted bird species in addition to various primates.`,
      },
      {
        title: "Day 3: Lake Bunyonyi",
        description: `In the morning after a hefty breakfast you will depart from this mountain gorillas’ sanctuary and drive to Lake Bunyonyi which is another primary tourist stopover which is outstandingly very marvelous. Bunyonyi is a local word for “small birds” in reference to the several birds that live around here making it a favorite destination for birders. You will be able to see several small islands among other highlights here. On arrival you will have a canoe ride you will see the various small islands such as Bwama Island also a wonderful destination for birders. Alternatively, you could take a nature walk which will help you to appreciate a great diversity of small birds here. Dine and overnight at the Bunyonyi Overland Camp or Arcadia Cottages.`,
      },
      {
        title: "Day 4: Return Trip to Kampala",
        description: `After breakfast walk towards the northern end of Lake Bunyonyi to the stunning Ruvuma swamp, one of the finest destinations to appreciate birds like the papyrus yellow warbler.  In the afternoon head back to Kampala where this trip will end.`,
      },
    ],
    duration: "4 days",
  },
  // ========================================================= tour-4
  {
    id: 4,
    coverPhoto:
      "https://images.unsplash.com/photo-1515205244153-fce4e5d8bc49?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1252&q=80",
    name: "Mount Elgon & Kidepo Valley National Game Parks",
    description: `Visit Kidepo Valley National Park; one of the world renowned must visit places in the world. Set inbetween a valley bordered on both sides by Mountains, Kidepo Valley National Park offers an abundance of wildlife especially the Big Cats of the Savannah, Buffalo herds, Ostriches, Zebras, and a variety of bird species. If however you are short on time or you would not like long travels by road we can organise a fly-in to Kidepo from Entebbe.`,
    location: {
      map_url:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63819.012460134305!2d29.613303458992064!3d-1.3636990373435836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dc46578b037acf%3A0x11de13f80905680f!2sMgahinga%20National%20Park!5e0!3m2!1sen!2sug!4v1635969899550!5m2!1sen!2sug",
      region: "Eastern Uganda",
    },
    includedInPrice: [
      "Tour Guide",
      "Full Board Accommodation with meals",
      " Airport / Hotel Transfer",
      "Transportation in 4 * 4 Vehicle",
    ],
    notIncludedInPrice: ["Personal gratuity"],
    activities: ["Bird seeing", "Hiking", "Wild life"],
    itinerary: [
      {
        title: "Day 1: Kampala – Jinja",
        description: `Jinja is the second biggest town in Uganda after Kampala. It is here that you will find the source of River Nile, Bujagali falls plus a couple of industries. Jinja is situated on the Northern shore of the large Lake Victoria just above the impressive Ripon falls. Make a stopover at Ssezibwa falls a scenic and cultural site for the Baganda people. You will also stop by the Mabira forest; see the various primates including the grey checked mangabey plus the red tailed monkeys. In addition, there are butterflies and a great profusion of birds like the Nahan’s francolin, endemic forest wood-hoopoe plus the African pitta. You will get a chance to go zip-lining in the forest as well as a short nature walk before  proceeding to Jinja. Visit the source of the River Nile. The place where Speke saw the Ripon falls back in 1862. Dinner and overnight at the luxurious Jinja Nile Resort, Samuka Island Resort or at the budget 2 Friends guesthouse FB`,
      },
      {
        title: "Day 2: Jinja - Mbale",
        description: `Following breakfast, go for water rafting on the most well liked falls in the whole of Uganda – the Bujagali falls. The rapids extend over 10 kilometers down the river to the source of the Nile and this has made it one of the finest places for water rafting as well as kayaking. You can go bungee jumping or horse riding or even quad biking. Jinja is filled with so much adventure that you can’t be bored at all. Enjoy your adventure! After lunch, you will go then set off to Mbale and check in at Casa Del Turista (Budget) or Mbale Resort (Luxury).`,
      },
      {
        title: "Day 3: Mountain Elgon National Park",
        description: `Enjoy an early morning hike on the slopes of Mountain Elgon where you will find beautiful landscape. You will visit the coffee farming households around the national park. You will be trained on the entire process of how coffee moves from the farm up to the cup. While among the communities we shall carry out some charity activities which shall be pre-planned and of your choosing. You will continue the hike in search of waterfalls and caves before returning to your hotel for late lunch and rest.`,
      },
      {
        title: "Day 4: Transfer to Kidepo Valley National Park",
        description: `Set off very early in the morning and head north to the world renowned must visit place in Uganda. Set inbetween a valley bordered on both sides by Mountains, Kidepo Valley National Park offers an abundance of wildlife especially the Big Cats of the Savannah, Buffalo herds, Ostriches, Zebras, and a variety of bird species. There will be brief Stopovers at Kapchorwa’s beautiful Sipi falls, Moroto town to view Mt. Moroto and Kaabong before finally arriving. Check-in at the Apoka Lodge.`,
      },
      {
        title: "Day 5: Kidepo Valley National Park Tour",
        description: `Wakeup very early for a game drive to catch the wildlife while they are active. Enjoy a long game drive where you will spot tree climbing lions, cheetaahs, ostriches, zebras, giraffes, elephants, buffaloes, as well as a short hikes to climb rocks that give a magnificent view of the landscape. Birding is also another activity you will do while here since the park has hundreds of bird species. Visit the local tribes of the Dodoth and Karamojong who are normadic pastoralists who are almost unaffected by civilization and continue to live in their traditional lifestyle which you will experience firsthand.`,
      },
      {
        title: "Day 6: Departure back to Kampala",
        description: `Have breakfast, and after enjoy another morning forest drive as you prepare to depart back to Kampala. You will enjoy many primate and bird species, have a stopover  for your lunch and after proceed to Kampala arriving in the evening.`,
      },
    ],
    duration: "6 days",
  },
];

const HotTours: React.FC = () => {
  const history = useHistory();
  return (
    <section
      id="tours"
      className="mx-auto my-16 text-center lg:w-10/12 w-full px-1"
    >
      <div className="text-3xl mb-3" data-aos="zoom-out">
        Our Tours
      </div>
      <div
        className="text-sm mx-auto tracking-wide lg:w-9/12 w-full"
        data-aos="zoom-out"
      >
        We specialize in providing individual and small group custom designed
        trips as well as pre-packaged trips. We create itineraries of every
        possible interest …from family travel, honeymoons, golfing and spa
        trips, wine, culinary tours and cultural excursions.All of our
        exceptional tours reflect the breadth of knowledge you’d expect from
        seasoned travel experts
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 my-8 gap-4">
        {tours.map((tour, index) => {
          return (
            <div
              className="rounded shadow-sm border"
              key={index}
              data-aos="zoom-out"
            >
              <div className="relative" style={{ margin: "1px" }}>
                <img
                  className="rounded-t h-52 w-full"
                  src={
                    tour.coverPhoto ??
                    "https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNvdXRoJTIwYWZyaWNhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  }
                  alt=""
                />
                <div
                  className="absolute bottom-0 left-0 text-white tracking-wide text-left h-12 bg-gradient-to-t from-black flex items-center text-sm p-2 w-full"
                  style={{
                    background: "linear-gradient(transparent, #252525)",
                  }}
                >
                  <p
                    className="truncate tracking-wide"
                    style={{ fontSize: "14.3px" }}
                  >
                    {tour.name}
                  </p>
                </div>
              </div>
              <div style={{ margin: "1.5px" }}>
                <div className="flex flex-col pt-2">
                  {/* <span className="font-semibold tracking-wider text-sm text-green-600 mb-3">
                    Shs: 200,000
                  </span> */}
                  <div className="flex flex-row gap-2 items-center mx-auto mb-3">
                    <TiLocation />
                    <span className="text-black text-sm">
                      {tour.location.region}
                    </span>
                  </div>
                  <div className="flex flex-row gap-2 items-center mx-auto">
                    <AiOutlineClockCircle />
                    <span className="text-sm text-black">{tour.duration}</span>
                  </div>
                </div>
                <div
                  onClick={() => history.push(`tours/${tour.name}`)}
                  className="bg-green-900 lg:hover:bg-green-800 rounded-b h-10 lg:h-14 mt-4 flex items-center justify-center text-white gap-3 lg:cursor-pointer"
                >
                  <span className="lg:text-sm text-xs lg:tracking-wide tracking-wider">
                    Read More
                  </span>
                  <BsArrowRight className=" lg::text-xl text-base" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className="flex flex-row transform hover:scale-105 transition-transform delay-75 font-semibold lg:cursor-pointer text-green-700 w-full justify-center items-center gap-5 text-sm"
        onClick={() => history.push("/tours")}
      >
        View more Tours <BsArrowRight />
      </div>
    </section>
  );
};

export default HotTours;
