import "./etape.css";

export const Etape = (step) => {
  return (
    <div>
      <fieldset className="fieldset">
        <div className="flex-numbers">
          <div className="container-numbers">
            <p className="numbers numbers-1">1</p>
            <p>Vos informations</p>
          </div>
          <hr className="hr"></hr>
          <div className="container-numbers">
            <p className="numbers">2</p>
            <p>Choix de la date</p>
          </div>
          <hr className="hr"></hr>
          <div className="container-numbers">
            <p className="numbers">3</p>
            <p>Choix des billets</p>
          </div>
          <hr className="hr hr3"></hr>
          <div className="container-numbers">
            <p className="numbers">4</p>
            <p>Paiement</p>
          </div>
        </div>
      </fieldset>
    </div>
  );
};
