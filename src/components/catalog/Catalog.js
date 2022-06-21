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
          <article className="sub-nav-article">
            <label htmlFor="size">size</label>
            <select name="size" id="size">
              <option value="size">all</option>
              <option value="size">S - 36-41</option>
              <option value="size">M - 38-43</option>
              <option value="size">L - 40-45</option>
              <option value="size">XL 42-47</option>
            </select>
          </article>
          <article className="sub-nav-article">
            <label htmlFor="size">color</label>
            <select name="color" id="color">
              <option value="color">all</option>
              <option value="color">⬜white</option>
              <option value="color">⬛black</option>
              <option value="color">🟦blue</option>
              <option value="color">🟩green</option>
              <option value="color">🟨yellow</option>
              <option value="color">🟫brown</option>
              <option value="color">🟧orange</option>
            </select>
          </article>
          <article className="sub-nav-article">
            <label htmlFor="size">discount</label>
            <select name="promo" id="promo">
              <option value="promo">yes</option>
              <option value="promo">no</option>
            </select>
          </article>
          <article className="sub-nav-article">
            <label htmlFor="size">type</label>
            <select name="type" id="type">
              <option value="type">all</option>
              <option value="type">invinsible</option>
              <option value="type">short</option>
              <option value="type">long</option>
            </select>
          </article>
          <article className="sub-nav-article">
            <label htmlFor="size">season</label>
            <select name="season" id="season">
              <option value="season">all</option>
              <option value="season">spring</option>
              <option value="season">summer</option>
              <option value="season">autumn</option>
              <option value="season">winter</option>
            </select>
          </article>
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
