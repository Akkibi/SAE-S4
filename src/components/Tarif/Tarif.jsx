import { SimpleCard } from "../SimpleCard/SimpleCard";

export const Tarif = () => {  
    let texte="Plein tarif horodaté;16 €,Enfant & Cie;13 €,Nocturne;12 €,- de 18 ans - de 26 ans résidents EEU;Gratuit"
  return (
    <div>
        <SimpleCard symbol="📄"/>
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
