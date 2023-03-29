import './Slider.css'
import { Link } from 'react-router-dom'

export const Slider = () => {
  return (
    <div className='slider'>
      <h1>LES FEMMES PEINTRES</h1>
      <p>Voyage à travers les époques et les courants</p>
      <p>
        <Link to={'/expositions'} className="reeservation__link">Réserver</Link>
      </p>
    </div>
  )
}
/* import Slide1 from '../../../assets/images/Ferenczy_The_Woman_Painter.png'
import Slider from "react-slick";
import { Component } from "react";
import "../../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";

export default class LazyLoad extends Component  {
    render() {
        const settings = {
          dots: true,
          lazyLoad: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: false
        };
        return (
          <div>
            <Slider {...settings}>
              <div>
                <img src={Slide1} />
                <h1>Les femmes peintres</h1>
              </div>
              <div>
                <img src={Slide1} />
              </div>
              <div>
                <img src={Slide1} />
              </div>
              <div>
                <img src={Slide1} />
              </div>
            </Slider>
          </div>
        );
    }
} */
