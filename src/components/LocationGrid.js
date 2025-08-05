import LocationCard from "@/components/LocationCard";
import Link from "next/link";
import PagesHeroSection from "@/components/PagesHeroSection";

const LocationGrid = ({ locations }) => {
  return (
    <div className="max-w-[1300px] mx-auto px-6 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
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
