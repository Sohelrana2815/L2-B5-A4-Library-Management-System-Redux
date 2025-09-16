import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";

const Offer = () => {
  return (
    <div className="dark:bg-[#D8E9A8] h-44 p-16 ">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-4">
          <h2 className="text-white dark:text-[#191A19] font-semibold text-4xl">
            Get-30% purchase
          </h2>
          <p className="text-black dark:text-[#4E9F3D] text-lg">
            <TypeAnimation
              sequence={["on order over $100", 1000, ""]}
              wrapper="span"
              deletionSpeed={20}
              speed={40}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </p>
        </div>

        <div>
          <Button className=" bg-black dark:bg-[#1E5128] text-white rounded-none py-6 px-10 text-center text-lg hover:bg-[#212121]">
            View more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
