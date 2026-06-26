import './buscadorVentas.css';

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

            <input
                type="text"
                placeholder="Buscar producto..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

        </div>
    );

}