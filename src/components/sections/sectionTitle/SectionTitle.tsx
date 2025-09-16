import React from "react";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="text-center my-6">
      <h1 className="text-4xl font-bold mb-2 text-[#191A19] dark:text-[#D8E9A8]">
        {title}
      </h1>
      <div className="w-24 h-[2px] bg-[#4E9F3D] dark:bg-[#1E5128] mx-auto rounded-none"></div>
    </div>
  );
};

export default SectionTitle;
