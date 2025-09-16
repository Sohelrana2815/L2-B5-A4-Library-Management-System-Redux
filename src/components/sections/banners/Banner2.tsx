import bannerImg from "/banner2.webp";

const Banner2 = () => {
  return (
    <section
      className="relative bg-cover bg-center min-h-[500px] md:min-h-[60vh] flex items-center my-56"
      style={{ backgroundImage: `url(${bannerImg})` }}
      role="region"
      aria-label="Hero banner: Inspire Daily Reading"
    >
      {/* Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/80 via-black/50 to-black/10"></div>
      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 md:px-12 lg:px-20 py-12 text-left">
        <h1 className="font-serif text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
          Inspire Daily Reading
        </h1>

        <div className="mt-4 w-12 h-[2px] bg-white/50"></div>

        <p className="mt-6 text-white/95 text-sm sm:text-base md:text-lg leading-relaxed max-w-[46ch]">
          Visit our blog and find daily inspiration quotes from the best
          authors.
        </p>

        <button className="inline-block mt-8 bg-[#0d0d0d] text-white font-semibold px-5 py-3 rounded shadow-lg transform transition-transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-white/20">
          View our blog
        </button>
      </div>
    </section>
  );
};

export default Banner2;
