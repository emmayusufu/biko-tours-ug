import {Tour} from "../interfaces/index"

export const tours: Tour[] = [
  // ========================================================= tour-1
  {
    id: 1,
    name: "Bwindi Gorilla Trekking and Lake Mburo Safari",
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
  // ========================================================= tour-5
  {
    id: 5,
    name: "Mount Elgon Tour",
    description: `Mount Elgon has the world’s largest caldera atop a magnificent extent volcano. There is alot to see but it will take all your effort as the trails are not for the faint hearted or those who gave up easily. You will see beautiful rivers, waterfalls, caves, escarpments and valleys. At the end you will visit a coffee farm and enjoy a hot fresh brew and some good memories.`,
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
        title: "Day 1: Kampala – Mount Elgon National Park",
        description: `Leave for Mount Elgon located in Eastern Uganda. This Mountain covers the biggest surface areas of all extinct volcanoes in the whole world. Mt Elgon is gifted with the most stunning caves, waterfalls, cliffs plus gorges in the entire country. Stopover for lunch in Mbale. Afternoon drive to Kapchrowa.`,
      },
      {
        title: "Day 2: Kapkwai Trail",
        description: `Following breakfast, leave with a packed lunch food to the exploration center found at Kapkwai within the Chebonet valley and enjoy the Mountain Bamboo trail that covers a 7-kilometer loop across the gentle River and then the Southern edge of the gorge.`,
      },
      {
        title: "Day 3: Sasa Trail",
        description: `Following breakfast, set out for an entire day of hiking along the Sasa Trail to observe the fascinating landscapes from the towering altitude as well as the moorland.`,
      },
      {
        title: "Day 4: Nature Walk – Return Trip – Kampala",
        description: `Following breakfast, have a brief forest walk and then return to Kampala and this will be the end of this tour.`,
      },
    ],
    duration: "4 days",
  },
  // ========================================================= tour-6
  {
    id: 6,
    name: "Murchison Falls & Kidepo Valley National Park Safari",
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
        title: "Day 1: Transfer to Murchison Falls National Park",
        description: `Enjoy breakfast at your hotel in the morning and after proceed to Murchison falls National Park, you will drive through Luwero triangle and have a stopover at Zziwa Rhino sanctuary. This Rhino sanctuary was started to protect the Rhino populations of both the breed black and White Rhinos found in Uganda. Another stop will be in Masindi in order to enjoy your lunch and later continue to the park and proceed to the top of the falls which will give you fantastic views of the park.
        You will view the Nile as it passes through a narrow gap before pounding high in the air, alter on, and continue to the park to check in to your accommodation to relax for the Evening. Murchison falls has variety of wildlife species including; the lions, leopards, civet, hyenas, elephants, buffalos, crocodiles, hippos and many bird species.`,
      },
      {
        title: "Day 2: Morning game drive, white water rafting and a boat cruise along the Nile",
        description: `Have breakfast early enough and after proceed to the park to engage in a morning game drive where you will be able to view many animals including the giraffes, lions, elephants, buffalos, birds etc. after the game drive, after which you shall go tame the white waters of the falls on your rafts, proceed to the lodge and enjoy your lunch as you prepare to have a boat cruise on the Nile River. This boat safari is said to be the highlight of the safari in Murchison falls since it allows you to get up close to the animal species with in the water. This river is said to harbor over 4000 hippos with many Nile crocodiles as well as birds including; the colored kingfishers, bee eaters, shoe billed stork etc. later return to the lodge for a relaxation in the evening.`,
      },
      {
        title: "Day 3: Transfer to Kidepo Valley National Park",
        description: `Have breakfast, and after enjoy another morning game drive as you prepare to travel North to the famous Kidepo Valley National Park. You will head north to Gulu where you will have a brief stopover before proceeding. Set inbetween a valley bordered on both sides by Mountains, Kidepo Valley National Park offers an abundance of wildlife especially the Big Cats of the Savannah, Buffalo herds, Ostriches, Zebras, and a variety of bird species.`,
      },
      {
        title: "Day 4: Kidepo Valley National Park Tour",
        description: `Wakeup very early for a game drive to catch the wildlife while they are active. Enjoy a long game drive where you will spot tree climbing lions, cheetaahs, ostriches, zebras, giraffes, elephants, buffaloes, as well as a short hikes to climb rocks that give a magnificent view of the landscape. Birding is also another activity you will do while here since the park has hundreds of bird species. Visit the local tribes of the Dodoth and Karamojong who are normadic pastoralists who are almost unaffected by civilization and continue to live in their traditional lifestyle which you will experience firsthand.`,
      },
      {
        title: "Day 5: Departure back to Kampala",
        description: `Have breakfast, and after enjoy another morning forest drive as you prepare to depart back to Kampala. You will enjoy many primate and bird species, have a stopover  for your lunch and after proceed to Kampala arriving in the evening.`,
      },
    ],
    duration: "5 days",
  },
  // ========================================================= tour-7
  {
    id: 7,
    name: "Murchison Falls Safari",
    description: `Murchison Falls National Park allows you to experience the River Nile like never before offering over 700 bird, primate, reptile and mammal species.
    The safari starts and ends in Kampala Uganda. Murchison falls national park is one of the largest national parks in Uganda and is located in north western Uganda covering a surface area of  3893 square kilometers. This park owns the biggest population of Nile crocodiles and many other animal species including; 76 species of mammals, 450 bird species including the shoebill stork, dwarf king fisher, great blue turaco the white thighed hornbill, and the Goliath heron. You will get to enjoy both game drives and the boat cruises along the Nile River.`,
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
        title: "Day 1: Transfer to Murchison Falls National Park",
        description: `Enjoy breakfast at your hotel in the morning and after proceed to Murchison falls National Park, you will drive through Luwero triangle and have a stopover at Zziwa Rhino sanctuary where the endangered rhinoceros are bred. This Rhino sanctuary was started to protect the White Rhino populations found in Uganda. Another stop will be in Masindi in order to enjoy your lunch and later continue to the park and proceed to the top of the falls which will give you fantastic views of the park.
        You will see some wildlife by the roadside. Continue to the park to check in to your accommodation to relax for the Evening. Murchison falls has variety of wildlife species including; the lions, giraffes, leopards, civet, hyenas, elephants, buffalos, crocodiles, hippos and many bird species.`,
      },
      {
        title: "Day 2: Morning game drive, and an afternoon boat cruise along the Nile",
        description: `Have breakfast early enough and after proceed to the park to engage in a morning game drive where you will be able to view many animals including the giraffes, lions, elephants, buffalos, birds etc. after the game drive, proceed to the lodge and enjoy your lunch as you prepare to have an afternoon boat cruise on the Nile River. This boat safari is said to be the highlight of the safari in Murchison falls since it allows you to get up close to the animal species with in the water. This river is said to harbor over 4000 hippos with many Nile crocodiles as well as birds including; the colored kingfishers, bee eaters, shoe billed stork etc. later return to the lodge for a relaxation in the evening.`,
      },
      {
        title: "Day 3: Optional Activities & Departure back to Kampala",
        description: `Have early breakfast, and after enjoy another morning game drive.  As you prepare to depart back to Kampala, visit  the top of the Falls. You will enjoy the powerful Nile as it squeezes through the narrow gorge producing beautiful rainbows. Along the way back, have a stopover at Masindi for your lunch and after proceed to Kampala arriving in the evening.
        If you are not in the moods to go back to reality you can enjoy other activities like Air Ballon rides and bird watching at an additional fee. You will enjoy an aerial view of many animal species including; the lions, giraffes, buffalos, birds etc. Depart in the afternoon and have a stopover at Masindi for your lunch and after proceed to Kampala arriving in the evening.`,
      },
    ],
    duration: "3 days",
  },
  // ========================================================= tour-8
  {
    id: 8,
    name: "Queen Elizabeth National Park Safari",
    description: `This safari takes you to Queen Elizabeth National Park for 2 nights and 3 days. This national park is located in the western part of the country and is the most beautiful national park which was named at the Queen of England; Elizabeth the third. It covers an area of 1,978 sq. meters and is just 376 kilometers away from Kampala. The park was also founded in 1952 and was named Kazinga National park before it was formalized as Queen Elizabeth National Park. More so, this national park has variety of wildlife species including; 500 bird species, 95 mammal species, 10 primate species, and many more.`,
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
        title: "Day 1: Transfer to Queen Elizabeth National Park",
        description: `Your guide will meet you and you will straight away start your journey to Queen Elizabeth National park. The park is located in south western Uganda a place commonly known for the long horned ankole cattle. You will have a stopover at the equator for some photos and after proceed to the park and check in at your lodge. Enjoy lunch at the lodge as you prepare for an evening game drive within the park, get chance to view many animal species including the warthogs, bush buck, waterbuck, elephants, lions, birds and many more. Have a chance to enjoy the great views of the savannah park with green grasslands. After, to the park for dinner and an overnight.`,
      },
      {
        title: "Day 2: Morning game drive, and an afternoon boat cruise along the Nile",
        description: `We shall wake so early in the morning, proceed to the park to engage in an early morning game drive to view the early morning risers in kasenyi track, get chance to view many animal including; lions, elephants, solitary buffalos, kobs, antelopes, etc. these animals can be view at a closer range. Return to the lodge for breakfast and lunch as you prepare to enjoy a boat cruise along the Kazinga channel, were your eyes will be fed with variety of water animals and birds. The wildlife species include; the crocodiles, hippos, buffalos, pink backed pelicans, saddle billed stork, the malachite kingfishers. After, return to the lodge for your dinner and overnight.`,
      },
      {
        title: "Day 3: Departure back to Kampala",
        description: `Have breakfast early enough and after start your journey back to Kampala, have a stopover at Mpambire drum makers point and buy some souvenirs there, after proceed to Kampala arriving in the afternoon or evening.`,
      },
    ],
    duration: "3 days",
  },
  // ========================================================= tour-9
  {
    id: 9,
    name: "Semliki National Game Park",
    description: `Visit the beautiful hills of Bundibuyo at the foot of the imposing Mt. Rwenzori to the hidden paradise of Semliki National Park home to a wide variety of fauna and flora as well as the Sempaya Hotsprings.`,
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
        title: "Day 1: Transfer to Semliki National Park",
        description: `From Kampala Drive to Semliki and head to Bundibugyo, have lunch in the beautiful Fort Portal town. Enjoy this spectacular drive with views of Lake Albert and the legendary Mountain Rwenzori ranges on your way to Bundibugyo town.  This park is situated in Bundibugyo district along the western border of Uganda with the Democratic Republic of Congo near Lake Albert. The park has a great location within western Albertine Rift valley region and occupies the eastern section of Ituri forest connecting Uganda with Congo River separated by river Semliki. Semliki is a site for ornithologists with approximately 400 species of bird mainly forest birds. Approximately 300 species of trees have been recorded here and more than 52 mammal species including 11 diurnal species. In the night you will have a spot-lit game drive. the night, only one of this nature in the whole of Uganda and see the thin white tailed mongoose, very small nightjars plus serval cats.`,
      },
      {
        title: "Day 2: Sempaya Hot Springs",
        description: `Visit the highlight in Semliki, referred to as the Sempaya hot springs. These natural springs have a geyser shooting high from an 8-meter-wide hole at a very high temperature. Of its kind, this is the largest in the whole of Uganda. On this very trail, you may identify a couple of bird types such as the blue breasted kingfisher plus Frasier’s ant-thrush in addition to primates such as the grey checked mangabey plus the red-tailed monkey. Proceed to Mungilo waterfall to see some other fascinating birds; particularly ideal for birders. In the Late afternoon, take a boat ride on Lake Albert to see the various water animals.`,
      },
      {
        title: "Day 3: Departure back to Kampala",
        description: `ave breakfast, and after enjoy another morning forest drive as you prepare to depart back to Kampala. You will enjoy many primate and bird species, have a stopover  for your lunch and after proceed to Kampala arriving in the evening`,
      },
    ],
    duration: "3 days",
  },
];
