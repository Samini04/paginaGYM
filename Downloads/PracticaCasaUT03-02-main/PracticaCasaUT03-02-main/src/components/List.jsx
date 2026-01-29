import "../assets/styles/index.css";
export default function List({ items = [] }) {
  return (
    <ul className="product-list" role="list">
      {items.map((item) => (
        <li key={item.id}>
          <article className="product-card">
            <figure>
              <img src={item.imagen} alt={item.nombre} />
            </figure>
            <h3 className="product-name">{item.nombre}</h3>
            <p className="product-price">{item.precio}€</p>
            <div className="product-actions">
              <a href={`/producto/${item.id}`}>Ver detalle</a>
              <button>Añadir +</button>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}
