import { SimpleCard } from "../SimpleCard/SimpleCard";

export const Horaire = () => {  
    let texte = "Dimanche;9h30 - 18h00,Lundi;Fermé,Mardi;9h30 - 18h00,Mercredi;9h30 - 18h00,Jeudi;9h30 - 21h45,Vendredi;9h30 - 18h00,Samedi;9h30 - 18h00";
    return (
    <div>
        <SimpleCard symbol="⌚"/>
        {texte.split(",").map((i) => {
            let horaire = i.split(";");
            return (
            <div key={`${horaire[0]}-${horaire[1]}`}>
                <SimpleCard text={horaire[0]} text2={horaire[1]} />
            </div>
            );
        })}
    </div>
    );
};
