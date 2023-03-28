import "./selection.css";

export const Selection = () => {
  return (
    <div className="container-selection-2">
      <p className="titre-selection">VOTRE SELECTION</p>
      <div className="flex">
        <p>Billet</p>
        <div className="flex-categories">
          <p>Prix Unitaire</p>
          <p>Quantité</p>
          <p>Prix</p>
        </div>
      </div>
      <div className="flex">
        <p>Billet plein tarif</p>
        <div className="flex-categories">
          <p className="price">10.00€</p>
          <p className="price">2</p>
          <p className="price">20.00€</p>
        </div>
      </div>
      <div className="flex">
        <p>Billet -10 ans</p>
        <div className="flex-categories">
          <p className="price">0.00€</p>
          <p className="price">1</p>
          <p className="price">0.00€</p>
        </div>
      </div>
    </div>
  );
};
