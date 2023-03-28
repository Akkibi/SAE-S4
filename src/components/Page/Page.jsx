import { Horaire } from "../horaire/Horaire"
import { Location } from "../Location/Location"
import { Tarif } from "../Tarif/Tarif"

export const Page = () => {
    return (
        <div className="contain-page">
            <Horaire />
            <Location />
            <Tarif />
        </div>
    )
}