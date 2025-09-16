import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "/banner1.webp";
import banner2 from "/banner2.webp";

const Banner1 = () => {
  return (
    <Carousel
      width="100%"
      showArrows={true}
      showStatus={false}
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      className={"w-full"}
    >
      <div>
        <img
          src={banner1}
          className="h-40 sm:h-60 md:h-[600px] lg:h-[700px] xl:h-[800px] w-full object-cover"
        />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img
          src={banner2}
          className="h-40 sm:h-60 md:h-[600px] lg:h-[700px]   xl:h-[800px] w-full object-cover"
        />
        <p className="legend">Legend 2</p>
      </div>
    </Carousel>
  );
};

export default Banner1;
