import { Horaire } from "../horaire/Horaire"
import { Location } from "../Location/Location"
import { Tarif } from "../Tarif/Tarif"
import './Page.css'

export const Page = () => {
    return (
        <div>
            <div className="vidéo">
                <p>TEASER DE L'EXPOSITION</p>
            </div>
            <section className="lfp">
                <div className="gauche">
                    <div className="lfp__content-text">
                        <h2>Les Femmes Peintres</h2>
                        <p>Une exposition qui a pour intention de mettre les artistes femmes à l’honneur en venant célébrer le travail fait par ces dernières dans l’Histoire de l’Art.
                        Alors qu’elles étaient pourtant bien présentes dans la production artistique dès le XVIIIe siècle, l’Histoire de l’Art les a bien trop souvent invisibilisées.
                        C’est à travers un parcours pédagogique que nous vous proposons d’en apprendre davantage sur ces artistes qui ont contribué à l’émergence de l’Art.
                        Voyage à travers le temps, réflexion et innovation sont nos promesses pour cette exposition.</p>
                    </div>
                    <div className="lfp__content-img"></div>
                </div>
                <div className="droite">
                    <Horaire />
                    <Location />
                    <Tarif />
                </div>
            </section>
        </div>
    )
}