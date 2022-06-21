import './Card.css';

import { Link } from 'react-router-dom';

export const Card = () => {
  return (
    <article className="card">
      <Link to="/">
        <img
          className="card-img"
          src="http://localhost:3000/static/media/6.8e248b49b2d32f2ed929.jpg"
          alt=""
        />
      </Link>
      <div className="card-info">
        <h2 className="card-title">Socks</h2>
        <div className="card-btns">
          <button className="card-info-btn" to="/">
            ➕
          </button>
          <button className="card-info-btn">🤍</button>
        </div>
      </div>
    </article>
  );
};
