import LocationCard from "@/components/LocationCard";
import Link from "next/link";
import PagesHeroSection from "@/components/PagesHeroSection";

const LocationGrid = ({ locations }) => {
  return (
   <div
          className="min-h-screen text-white relative overflow-hidden py-8"
          style={{
            background: `
      radial-gradient(circle at 20% 30%, rgba(255, 0, 255, 0.2) 0%, transparent 30%),
      radial-gradient(circle at 80% 20%, rgba(0, 255, 255, 0.2) 0%, transparent 40%),
      radial-gradient(circle at 50% 80%, rgba(173, 216, 230, 0.15) 0%, transparent 50%),
      linear-gradient(135deg, #1a0023 0%, #10002b 50%, #000014 100%)
    `,
            backdropFilter: "blur(8px)",
          }}
        >
    <PagesHeroSection title="Locations" /> 
    <div className="grid grid-cols-3 gap-7 max-w-[1300px] mx-auto ">
      {locations.map((location) => (
        <Link
          key={location.id}
          className="rounded-3xl p-2"
          href={`location/${location.id}`}
        >
          <LocationCard location={location} />
        </Link>
      ))}
    </div>
    </div> 
  );
};

export default LocationGrid;
