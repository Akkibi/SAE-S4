import {Slider} from "./Slider/Slider";
import './Accueil.css'
import { RollDownMenu } from "../rollDownMenu/RollDownMenu";
import Voyageuse from '../../assets/images/miniatures/longueVueGirl.png'
import Extra from '../../assets/images/miniatures/DameExtravagante.png'
import Random from '../../assets/images/miniatures/GirlRandom.png'

export const Accueil = () => {
	return (
		<>
		<Slider></Slider>
		<div className="miniature__container"><img src={Voyageuse} alt="" className="miniature__voyageuse"/></div>
		<section>
			<h2>En ce moment</h2>
			<p>Du mardi 04 avril au dimanche 25 juin</p>
			<p>Les femmes peintres</p>
			<p>Venez découvrir à travers les courants artistiques les œuvres de femmes artistes célèbres comme Artemisia Gentileschi, Berthe Morisot, Georgia O’Keeffe et plein d’autres encore…
			Cette exposition sur les femmes peintres est l’occasion de célébrer les réalisations des femmes artistes passées et présentes. Parce que les femmes ne sont pas moins, donnons leur le soutien et la reconnaissance qu’elles méritent.
			</p>
		</section>
		<div className="miniature__container">
			<img src={Extra} alt="" className="miniature__extravagante"/>
		</div>
		<section>
			<RollDownMenu></RollDownMenu>
		</section>
		<div className="miniature__container">
			<img src={Random} alt="" className="miniature__random"/>
		</div>
		</>
	);
};
