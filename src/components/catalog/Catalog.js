import './Catalog.css';
import { useEffect, useState } from 'react';
import { Card } from '../partials/Item/Card';

export const Catalog = () => {
  const [navbar, setNavbar] = useState(false);

  const filterByType = () => {
    // TODO way to filter catalog by type
  };

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
          <article onClick={filterByType} className="categories">
            <button className="category-btn men">men</button>
            <button className="category-btn women">women</button>
            <button className="category-btn boys">boys</button>
            <button className="category-btn girls">girls</button>
          </article>
        </section>
      </nav>
      <section className="catalog-grid-wrapper">
        <aside className="filter-panel">
          <article className="filter-panel-article">
            <label htmlFor="size">size</label>
            <select name="size" id="size">
              <option value="size">all</option>
              <option value="size">S (36-41)</option>
              <option value="size">M (38-43)</option>
              <option value="size">L (40-45)</option>
              <option value="size">XL (42-47)</option>
            </select>
          </article>
          <article className="filter-panel-article colors">
            <h4 className="colors-title">color</h4>
            <p className="colors-type">
              <input
                type="checkbox"
                name="white-color"
                id="white-color"
                value="white-color"
              />
              <label htmlFor="white-color">⬜white</label>
            </p>
            <p className="colors-type">
              <input
                type="checkbox"
                name="black-color"
                id="black-color"
                value="black-color"
              />
              <label htmlFor="black-color">⬛black</label>
            </p>
            <p className="colors-type">
              <input
                type="checkbox"
                name="blue-color"
                id="blue-color"
                value="blue-color"
              />
              <label htmlFor="blue-color">🟦blue</label>
            </p>
            <p className="colors-type">
              <input
                type="checkbox"
                name="green-color"
                id="green-color"
                value="green-color"
              />
              <label htmlFor="green-color">🟩green</label>
            </p>
            <p className="colors-type">
              <input
                type="checkbox"
                name="yellow-color"
                id="yellow-color"
                value="yellow-color"
              />
              <label htmlFor="yellow-color">🟨yellow</label>
            </p>
            <p className="colors-type">
              <input
                type="checkbox"
                name="orange-color"
                id="orange-color"
                value="orange-color"
              />
              <label htmlFor="orange-color">🟧orange</label>
            </p>
          </article>
          <article className="filter-panel-article">
            <label htmlFor="promo">discount</label>
            <select name="promo" id="promo">
              <option value="promo">yes</option>
              <option value="promo">no</option>
            </select>
          </article>
          <article className="filter-panel-article">
            <label htmlFor="type">type</label>
            <select name="type" id="type">
              <option value="type">all</option>
              <option value="type">invinsible</option>
              <option value="type">short</option>
              <option value="type">long</option>
            </select>
          </article>
          <article className="filter-panel-article">
            <label htmlFor="season">season</label>
            <select name="season" id="season">
              <option value="season">all</option>
              <option value="season">spring</option>
              <option value="season">summer</option>
              <option value="season">autumn</option>
              <option value="season">winter</option>
            </select>
          </article>
          <button className="apply-filters">apply</button>
        </aside>
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
    </section>
  );
};
