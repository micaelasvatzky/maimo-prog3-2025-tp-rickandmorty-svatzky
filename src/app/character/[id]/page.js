import { CharacterContainer } from "@/components/CharacterContainer"

const page = async ({params}) => {

    const {id} = await params;

  return (
    <div>
        <CharacterContainer id={id} />
    </div>
  )
}

export default page