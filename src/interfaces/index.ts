interface LocationInterface {
    map_url: string;
    //   country: string;
    //   district: string;
    region: string;
    //   city: string;
    //   destination: string;
  }
  
  interface Image {
    url: string;
    destination: string;
  }
  
  interface Itinerary {
    title: string;
    description: string;
  }
  
  interface AcccomodationOption {
    luxury: string;
    budget: string;
  }
  
  export interface Tour {
    id: number;
    name: string;
    description: string;
    itinerary: Itinerary[];
    // gallery: ImageInterface[];
    // coverPhoto: string;
    includedInPrice: string[];
    notIncludedInPrice: string[];
    activities: string[];
    // depatureDateAndTime: string;
    duration: String;
    location: LocationInterface;
    //   acccomodationOptions:AcccomodationOption
  }
  