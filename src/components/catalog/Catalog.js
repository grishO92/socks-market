import './Catalog.css';

export const Catalog = () => {
  return (
    <section className="catalog">
      <h1 className="title">Catalog</h1>
      <article className="wrapper-category">
        <section className="categories">
          <button className="category-btn men">men</button>
          <button className="category-btn women">women</button>
          <button className="category-btn boys">boys</button>
          <button className="category-btn girls">girls</button>
        </section>
      </article>
    </section>
  );
};
