import type { ItemCarrito } from "./ItemCarrito";

export type Venta = {
    id: number;
    fecha: string;
    productos: ItemCarrito[];
    total: number;
};