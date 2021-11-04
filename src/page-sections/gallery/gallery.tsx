import * as React from "react";
import { TiLocation } from "react-icons/ti";
import "./gallery.styles.css";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const Gallery: React.FC = () => {
  const [hoveredItem, setHoveredItem] = React.useState<number | null>(null);
  const [galleryViewOpen, setGalleryViewOpen] = React.useState(false);
  const images: string[] = [
    "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1590668468552-d87c3a011afb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1172&q=80",
    "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1527644702050-c947a80cdf38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
    " https://images.unsplash.com/photo-1506354259095-f4e94f2716b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
    " https://images.unsplash.com/photo-1557218825-334e575bcc38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    " https://images.unsplash.com/photo-1551357141-1800c80f8997?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1614528767034-70de9fe166e0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
  ];

  const [selectedImageIndex, setSelectedImageIndex] = React.useState<
    number | null
  >(null);

  React.useEffect(() => {
    if (galleryViewOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [galleryViewOpen]);

  const toggleGalleryView = (index?: number) => {
    setGalleryViewOpen(!galleryViewOpen);
    if (!index) {
      setSelectedImageIndex(null);
    } else {
      setSelectedImageIndex(index);
    }
  };

  const previousItem = () => {
    let index = selectedImageIndex;
    if (index) {
      --index;
      setSelectedImageIndex(index);
    }
  };

  const nextItem = () => {
    let index = selectedImageIndex;
    if (index && index < images.length) {
      ++index;
      setSelectedImageIndex(index);
    }
  };

  return (
    <React.Fragment>
      <div className="mx-auto my-10 text-center" style={{ width: "90%" }}>
        <div className="text-3xl">Our Gallery</div>
        <div className="flex flex-row w-full justify-center lg:gap-6 gap-1 my-5 flex-wrap">
          {[
            "All",
            "Mbale",
            // "Kigali",
            // "Juba",
            // "Cairo",
            // "Kisoro",
            "Fort Portal",
            // "Nairobi",
            // "Dar es salaam",
            // "Mombasa",
          ].map((item, index) => {
            return (
              <div
                className={`text-sm lg:cursor-pointer tracking-wider rounded-full py-1 px-2 ${
                  index === 1 && "text-green-600"
                }`}
              >
                {item}
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
          {images.map((item, index) => {
            return (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <img className="rounded" src={item} alt="" />
                <div
                  onClick={() => toggleGalleryView(index)}
                  className={`flex flex-row gap-2 h-full justify-center delay-200 ease-in w-full items-center backdrop-filter backdrop-blur-sm bg-black absolute bottom-0 left-0 bg-opacity-10 lg:cursor-pointer rounded-b transition-opacity ${
                    hoveredItem === index
                      ? "opacity-100"
                      : "opacity-0 pointer-events-auto"
                  }`}
                >
                  <TiLocation className="text-2xl text-red-600" />
                  <span className="text-sm text-white font- tracking-wide">
                    Kidepo Valley National Park
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* ====================================== gallery view ====================================== */}
      <div
        onClick={() => setGalleryViewOpen(!galleryViewOpen)}
        className={`fixed top-0 left-0 h-full w-full z-10 ${
          galleryViewOpen ? "bg-opacity-70 bg-black" : "hidden"
        }`}
      >
        <div className="h-full mx-auto w-7/12 flex items-center justify-center z-30">
          <img
            src={images[selectedImageIndex!]}
            className="w-full rounded"
            alt=""
          />
        </div>
        <div
          className="absolute text-white text-6xl left-32 lg:cursor-pointer z-30 hover:bg-red-50"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          onClick={previousItem}
        >
          <BsChevronLeft />
        </div>
        <div
          className="absolute text-white text-6xl right-32 lg:cursor-pointer z-30"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          onClick={nextItem}
        >
          <BsChevronRight />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Gallery;
