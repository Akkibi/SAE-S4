import "./calendrier.css";

export const Calendar = () => {
  return (
    <div className="calendar">
      <div className="top-calendar">
        <p className="year">2023</p>
        <div className="container-months">
          <p className="months">Janvier</p>
          <p className="month-select">Février</p>
          <p className="months">Mars</p>
          <p className="months">Avril</p>
        </div>
        <div className="container-days">
          <p className="days">Lundi</p>
          <p className="days">Mardi</p>
          <p className="days">Mercredi</p>
          <p className="days">Jeudi</p>
          <p className="days">Vendredi</p>
          <p className="days">Samedi</p>
          <p className="days">Dimanche</p>
        </div>
      </div>
      <div className="calendar-bottom">
        <div className="week">
          <p className="day">--</p>
          <hr></hr>
          <p className="day">--</p>
          <hr></hr>
          <p className="day">01</p>
          <hr></hr>
          <p className="day">02</p>
          <hr></hr>
          <p className="day">03</p>
          <hr></hr>
          <p className="day">04</p>
          <hr></hr>
          <p className="day">05</p>
        </div>
        <div className="week">
          <p className="day">06</p>
          <hr></hr>
          <p className="day">07</p>
          <hr></hr>
          <p className="day">08</p>
          <hr></hr>
          <p className="day">09</p>
          <hr></hr>
          <p className="day">10</p>
          <hr></hr>
          <p className="day">11</p>
          <hr></hr>
          <p className="day">12</p>
        </div>
        <div className="week">
          <p className="day">13</p>
          <hr></hr>
          <p className="day">14</p>
          <hr></hr>
          <p className="day">15</p>
          <hr></hr>
          <p className="day">16</p>
          <hr></hr>
          <p className="day">17</p>
          <hr></hr>
          <p className="day">18</p>
          <hr></hr>
          <p className="day">19</p>
        </div>
        <div className="week">
          <p className="day">20</p>
          <hr></hr>
          <p className="day">21</p>
          <hr></hr>
          <p className="day">22</p>
          <hr></hr>
          <p className="day">23</p>
          <hr></hr>
          <p className="day">24</p>
          <hr></hr>
          <p className="day">25</p>
          <hr></hr>
          <p className="day">26</p>
        </div>
        <div className="week">
          <p className="day">27</p>
          <hr></hr>
          <p className="day">28</p>
          <hr></hr>
          <p className="day">--</p>
          <hr></hr>
          <p className="day">--</p>
          <hr></hr>
          <p className="day">--</p>
          <hr></hr>
          <p className="day">--</p>
          <hr></hr>
          <p className="day">--</p>
        </div>
      </div>
    </div>
  );
};
