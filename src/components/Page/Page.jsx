import { Horaire } from "../Horaire/Horaire"
import { Location } from "../Location/Location"
import { Tarif } from "../Tarif/Tarif"

export const Page = () => {
    return (
        <div>
            <Horaire />
            <Location />
            <Tarif />
        </div>
    )
}