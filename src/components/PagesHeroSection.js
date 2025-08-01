import Image from "next/image";

const PagesHeroSection = ({ title }) => {
  return (
    <div className="relative w-full h-[300px] overflow-hidden mb-7 flex items-center justify-center">
      <Image
        src="/assets/cabezas.jpg"
        alt="Rick y Morty"
        fill
        className="object-cover z-0"
      />
      <div className="absolute inset-0 bg-black opacity-70 z-10" />

      <h2
        className="z-20 text-white text-6xl font-bold text-center px-4"
        style={{
          textShadow: "0 0 10px rgba(255,255,255,0.6), 0 0 20px rgba(255,255,255,0.3)"
        }}
      >
        {title}
      </h2>
    </div>
  );
};

export default PagesHeroSection;
