import './buscadorHistorial.css';

type BuscadorProps = {
    search: string;
    setSearch: (valor: string) => void;
}

export default function Buscador({
    search,
    setSearch
}: BuscadorProps) {

    return (
        <div className="buscador">
            <span>🔍</span>
            <input
                type="text"
                placeholder="Buscar venta..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

        </div>
    );

}