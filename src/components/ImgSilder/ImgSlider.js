import './ImgSlider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { images } from '../../images.js';

export const ImgSlider = () => {
  const settings = {
    centerMode: true,
    // className: 'center',
    centerPadding: '60px',
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
  };

  return (
    <Slider className="slider" {...settings}>
      {images.map((image, index) => {
        return (
          <article key={index} className="img-wrapper">
            <article className="item">
              <img className="img" src={image} alt="" />
              <div className="info">
                <h2 className="title">Socks</h2>
                <p className="sub-title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  dolorem ullam distinctio animi officiis magni adipisci nemo
                  explicabo dolore blanditiis. Enim sapiente sed perspiciatis
                  repudiandae ad accusantium ipsa eaque reiciendis.
                </p>
                <Link className="info-btn" to="/">
                  info
                </Link>
              </div>
            </article>
          </article>
        );
      })}
    </Slider>
  );
};
