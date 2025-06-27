import { CharacterContainer } from "@/components/CharacterContainer"

const page = ({params}) => {

    const {id} = params;

  return (
    <div>
        <CharacterContainer id={id} />
    </div>
  )
}

export default page