import './Catalog.css';
import { useEffect, useState } from 'react';
import { Card } from '../partials/Item/Card';

export const Catalog = () => {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const changeNavAppearance = () => {
      window.scrollY >= 800 ? setNavbar(true) : setNavbar(false);
    };

    window.addEventListener('scroll', changeNavAppearance);

    return () => {
      window.removeEventListener('scroll', changeNavAppearance);
    };
  }, [navbar]);

  return (
    <section className="catalog">
      <nav className={navbar ? 'catalog-nav active' : 'catalog-nav'}>
        <h1 className="title">Catalog</h1>
        <section className="wrapper-category">
          <article className="categories">
            <button className="category-btn men">men</button>
            <button className="category-btn women">women</button>
            <button className="category-btn boys">boys</button>
            <button className="category-btn girls">girls</button>
          </article>
        </section>
      </nav>
      {navbar ? (
        <aside className="sub-nav">
          <select name="size" id="size">
            <option value="size">size S - 36-41</option>
            <option value="size">size M - 38-43</option>
            <option value="size">size L - 40-45</option>
            <option value="size">size XL 42-47</option>
          </select>
          <select name="color" id="color">
            <option value="color">white</option>
            <option value="color">black</option>
            <option value="color">blue</option>
            <option value="color">green</option>
            <option value="color">yellow</option>
            <option value="color">pink</option>
            <option value="color">golden</option>
          </select>
          <select name="promo" id="promo">
            <option value="promo">without discount</option>
            <option value="promo">with discount</option>
          </select>
          <select name="type" id="type">
            <option value="type">invinsible</option>
            <option value="type">short</option>
            <option value="type">long</option>
          </select>
          <select name="season" id="season">
            <option value="season">spring</option>
            <option value="season">summper</option>
            <option value="season">autumn</option>
            <option value="season">winter</option>
          </select>
        </aside>
      ) : (
        ''
      )}

      <section className="grid-items">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </section>
  );
};
