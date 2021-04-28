import {Request, Response, text} from 'express';
import pool from '../database'


class ReporteController{

    public async verVentasMes(req:Request, res:Response){
        const anio = req.body.anio;
        const mes = req.body.mes;

        const respuesta = JSON.parse(JSON.stringify(await pool.query(`
        select  producto.id as 'Codigo producto', producto.nombre_prod as 'Nombre Producto', sum(detalle_venta.cantidad) as 'Cantidad Vendida' from ventas, detalle_venta, producto
        where producto.id = detalle_venta.id_producto
        and ventas.id = detalle_venta.id_venta
        and MONTH(ventas.Fecha_Venta) = ${mes}
        and YEAR(ventas.Fecha_Venta) = ${anio}
        group by producto.id, producto.nombre_prod
        order by sum(detalle_venta.cantidad) desc  
        limit 1;
        `)));

        if (respuesta === []){
            console.log('no se vendieron productos en ese mes y año');
            res.sendStatus(404);
        }else{
            res.status(200).json(respuesta);
        }
    }

}

export const reporteController = new ReporteController();