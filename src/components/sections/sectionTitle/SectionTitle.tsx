import React from "react";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="text-center my-6">
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      <div className="w-24 h-1 bg-blue-500 mx-auto rounded"></div>
    </div>
  );
};

export default SectionTitle;
