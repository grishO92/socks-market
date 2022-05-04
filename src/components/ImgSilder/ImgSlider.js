import './ImgSlider.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { images } from '../../images.js';

import { Link } from 'react-router-dom';

export const ImgSlider = () => {
  const [position, setPosition] = useState(0);

  const onRight = () => {
    if (position < images.length - 1) {
      setPosition(position + 1);
    }
  };
  const onLeft = () => {
    if (position > 0) {
      setPosition(position - 1);
    }
  };

  return (
    <section className="carousel">
      <div className="btns">
        <button onClick={onLeft}>&lt;&lt;</button>
        <button onClick={onRight}>&gt;&gt;</button>
      </div>
      <motion.article className="inner-carousel">
        {images.map((image, index) => {
          return (
            <motion.article
              className="item"
              key={index}
              initial={{ scale: 0, rotation: -180 }}
              animate={{
                rotate: 0,
                left: `${(index - position) * 60 - 30}vw`,
                scale: index === position ? 1 : 0.8,
              }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }}
            >
              <img src={image} alt="" />
            </motion.article>
          );
        })}
      </motion.article>
    </section>
  );
};
