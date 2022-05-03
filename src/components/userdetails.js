import { useParams } from "react-router-dom"

export const Userd = () =>
{
    const {id} = useParams()

    return (
        <div>
            User id : {id }
        </div>
    )
}