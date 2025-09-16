import React from "react";

interface SectionTitleProps {
  title: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="text-center">
      <h2 className="font-serif text-3xl md:text-5xl text-white tracking-wide">
        {title}
      </h2>
      <div className="mt-4 w-16 h-0.5 bg-white/60 mx-auto rounded"></div>
    </div>
  );
};

const EmailForm: React.FC = () => {
  return (
    <section className="bg-[#1E5128] py-20">
      <div className="max-w-4xl mx-auto px-6">
        <SectionTitle title={"Stay in Touch with Our Updates"} />

        <div className="mt-10 flex flex-col items-center">
          {/* input + button */}
          <div className="w-full md:w-2/3 lg:w-1/2 flex items-center">
            <input
              aria-label="Email address"
              placeholder="Enter Your Email Address"
              className="flex-1 bg-white px-4 py-3 placeholder-gray-400 text-gray-800 rounded-l shadow-sm border border-white/30 focus:outline-none"
            />

            <button
              type="button"
              className="ml-4 bg-black text-white px-6 py-3 rounded shadow-lg flex items-center gap-3 select-none"
            >
              {/* simple paper-plane icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 19l9-7-9-7-9 7 9 7z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 19V5"
                />
              </svg>

              <span className="font-semibold text-sm">GET IN TOUCH</span>
            </button>
          </div>

          {/* checkbox line */}
          <label className="mt-6 text-white text-sm flex items-center gap-3">
            <input type="checkbox" className="w-4 h-4" />
            <span>
              I agree to the <span className="underline">Privacy Policy</span>.
            </span>
          </label>
        </div>
      </div>
    </section>
  );
};

export default EmailForm;
