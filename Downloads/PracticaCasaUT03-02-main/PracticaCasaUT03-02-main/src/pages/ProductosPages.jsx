import { useState, useMemo } from "react";
import productos from "../data/productos";
import List from "../components/List";
import SearchBar from "../components/SearchBar";
import "../assets/styles/index.css";

export default function ProductosPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProductos = useMemo(() => {
    if (!searchTerm) return productos;
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return productos.filter((p) => p.nombre.toLowerCase().includes(lowerCaseSearchTerm));
  }, [searchTerm]);

  return (
    <section>
      <h1 className="layout-titulo">Lista de productos:</h1>

      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        placeholder="Buscar productos por nombre..."
        className="search-bar"
      />

      {filteredProductos.length > 0 ? (
        <List items={filteredProductos} />
      ) : (
        <p className="body-text text-center p-4">
          No se encontraron productos con el término "{searchTerm}".
        </p>
      )}
    </section>
  );
}
