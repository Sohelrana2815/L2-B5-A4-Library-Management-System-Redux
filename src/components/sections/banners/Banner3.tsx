const Banner3 = () => {
  return (
    <>
      <section
        className="relative bg-cover bg-center min-h-[500px] md:min-h-[60vh] flex items-center justify-center my-16 rounded-3xl"
        style={{
          backgroundImage: `url('/reading-book-banner/reading-book.jpg')`,
        }}
        role="region"
        aria-label="Simple reading banner"
      >
        {/* Overlay to improve text readability */}
        <div className="absolute inset-0 bg-black/50 rounded-3xl"></div>

        {/* Content wrapper */}
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="font-serif text-3xl sm:text-4xl leading-tight dark:text-[#D8E9A8]">
            Inspire Daily Reading
          </h1>

          <p className="mt-6 text-white/95 text-sm sm:text-base md:text-lg leading-relaxed max-w-[46ch] mx-auto dark:text-[#D8E9A8] ">
            Visit our blog and find daily inspiration quotes from the best
            authors.
          </p>

          <button className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white dark:bg-[#191A19] dark:text-[#4E9F3D] font-semibold px-5 py-3 rounded-full shadow-lg transform transition-transform duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50 ">
            View our blog
          </button>
        </div>
      </section>
    </>
  );
};

export default Banner3;
