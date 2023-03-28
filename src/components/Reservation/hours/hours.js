import "./hours.css";

export const Hours = () => {
  return (
    <div className="hours">
      <div className="hours-top">
        <p className="titre-hours">Entrées disponibles</p>
        <p className="date-hours">28/02/2023</p>
      </div>
      <div className="flex-hours">
        <div className="container-hours">
          <p className="hour">9h00</p>
          <p className="hour">10h00</p>
          <p className="hour">10h30</p>
          <p className="hour">11h00</p>
          <p className="hour">11h30</p>
        </div>
        <hr></hr>
        <div className="container-hours">
          <p className="hour">14h00</p>
          <p className="hour">15h00</p>
          <p className="hour">16h30</p>
          <p className="hour">18h30</p>
        </div>
      </div>
    </div>
  );
};
