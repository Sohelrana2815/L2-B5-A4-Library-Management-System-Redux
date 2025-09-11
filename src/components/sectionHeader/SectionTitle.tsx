
const SectionTitle = () => {
  return (
    <div className="p-8 space-y-8">
      {/* Default usage */}
      <SectionTitle 
        title="Featured Books" 
        subtitle="Discover our most popular titles"
      />

      {/* Centered variant */}
      <SectionTitle 
        title="About Our Library" 
        subtitle="Learn more about our services and mission"
        variant="center"
        size="lg"
      />

      {/* Large size without subtitle */}
      <SectionTitle 
        title="New Arrivals" 
        size="xl"
      />

      {/* Custom styling */}
      <SectionTitle 
        title="Special Collections" 
        subtitle="Rare books and manuscripts"
        titleClassName="text-blue-600"
        lineClassName="bg-gradient-to-r from-blue-500 to-purple-500 w-24"
      />

      {/* Small size */}
      <SectionTitle 
        title="Quick Links" 
        size="sm"
        variant="left"
      />
    </div>
  );
};

export default SectionTitle;
