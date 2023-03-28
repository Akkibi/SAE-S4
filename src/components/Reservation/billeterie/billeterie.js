import "./billeterie.css";

export const Billeterie = () => {
  return (
    <div>
      <h1>Billeterie</h1>
      <fieldset>
        <div className="billeterie-flex">
          <div>
            <p>Billet plein tarif</p>
            <p>10.00 €</p>
          </div>
          <label class="dropdown">
            <div class="dd-button">Choix du billet</div>
            <input type="checkbox" class="dd-input" id="test"></input>
            <ul class="dd-menu">
              <li>1 Billet</li>
              <li>2 Billets</li>
              <li>3 Billets</li>
            </ul>
          </label>
        </div>
      </fieldset>
    </div>
  );
};
