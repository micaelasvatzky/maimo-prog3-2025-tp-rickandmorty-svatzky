import LocationCard from "@/components/LocationCard";
import Link from "next/link";
import PagesHeroSection from "@/components/PagesHeroSection";

const LocationGrid = ({ locations }) => {
  return (
    <div className="grid grid-cols-3 gap-7 max-w-[1300px] mx-auto py-8">
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
  );
};

export default LocationGrid;
