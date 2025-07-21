
const LocationCardSingle = ({location}) => {
  {/*hacer map a los residentes y que se les pueda hacer click para mandarlos al link del personaje*/}
  
  return (
    <div>
      <h3>{location.name}</h3>
      <p>{location.type}</p>
       <p>{location.dimension}</p>

    </div>
  )
}

export default LocationCardSingle