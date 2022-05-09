import './Catalog.css';

export const Catalog = () => {
  return (
    <section className="catalog">
      <h1 className="title">Catalog</h1>
      <section className="categories">
        <article className="men">men</article>
        <article className="women">women</article>
        <article className="boys">boys</article>
        <article className="girls">girls</article>
      </section>
    </section>
  );
};
