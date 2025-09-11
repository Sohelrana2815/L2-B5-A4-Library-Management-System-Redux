import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import banner1 from "/assets/banner1.jpg";
import banner2 from "/assets/banner2.jpg";
const BannerCarousel = () => {
  return (
    <Carousel>
      <div>
        <img src={banner1} />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src={banner2} />
        <p className="legend">Legend 2</p>
      </div>
    </Carousel>
  );
};

export default BannerCarousel;
