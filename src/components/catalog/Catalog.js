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
      <aside className="sub-nav">
        <p>size</p>
        <p>color</p>
        <p>promo</p>
        <p>type</p>
        <p>season</p>
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
