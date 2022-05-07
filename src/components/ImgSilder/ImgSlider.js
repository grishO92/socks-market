import './ImgSlider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { images } from '../../images.js';

export const ImgSlider = () => {
  const settings = {
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 2,
    slidesToScroll: 3,
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
                <div className="btns">
                  <Link className="info-btn" to="/">
                    Add to Cart
                  </Link>
                  <Link className="info-btn" to="/">
                    Details
                  </Link>
                  <Link className="info-btn" to="/">
                    Favorites
                  </Link>
                </div>
              </div>
            </article>
          </article>
        );
      })}
    </Slider>
  );
};
