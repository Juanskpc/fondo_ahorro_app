import { Component } from '@angular/core';
import config from '../../../app-core/services/app-admin/configuracion/config';

@Component({
    selector: 'app-lista-prestamos',
    templateUrl: './lista-prestamos.component.html',
    styleUrl: './lista-prestamos.component.css'
})
export class ListaPrestamosComponent {

    /**
     * Ruta para obtener las imagenes
     */
    cdn: string = config.cdn

    /**
     * Listado de prestamos
     */
    lstPrestamos: any = [
        { id_prestamo: 1, nombre_asociado: 'IMELDA NARVAEZ', id_asociado: 1,    valor_prestamo: 2000000, fecha_inicio: '2025-05-01T08:00', estado: 'A' },
        { id_prestamo: 2, nombre_asociado: 'MARCELA DIAZ', id_asociado: 1,      valor_prestamo: 5000000, fecha_inicio: '2025-07-01T15:00', estado: 'A' },
        { id_prestamo: 3, nombre_asociado: 'LUZ MARIA JIMENEZ', id_asociado: 1, valor_prestamo: 800000,  fecha_inicio: '2025-02-01T20:00', estado: 'P' },
        { id_prestamo: 4, nombre_asociado: 'IRMA DOLORES', id_asociado: 1,      valor_prestamo: 9000000, fecha_inicio: '2025-01-01T11:00', estado: 'P' }
    ];

}
