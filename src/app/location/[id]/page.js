

import { LocationContainer }from "@/components/LocationContainer";

const LocationPage = async ({params}) => {

    const {id} = await params;

  return (
    <div>
        <LocationContainer id={id} />
    </div>
  )
}

export default LocationPage