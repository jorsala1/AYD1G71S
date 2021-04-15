export interface Producto {
    id: number;
    nombre_prod: string;
    descripcion: string;
    cantidad: number;
    precio_compra: number;
    precio_venta: number;
    categoria: number;
}
export interface Categoria {
    id: number;
    categoria: string;
}
export interface Estado {
    id: number;
    estado: string;
}
export interface UltimaV {
    id: number;
}
