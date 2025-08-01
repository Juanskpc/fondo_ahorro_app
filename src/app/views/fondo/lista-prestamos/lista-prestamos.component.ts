import { Component, OnInit } from '@angular/core';
import config from '../../../app-core/services/app-admin/configuracion/config';
import { ListadoPrestamosService } from '../../../app-core/services/lista-prestamos/listado-prestamos.service';
import { firstValueFrom } from 'rxjs';
import { MensajeService } from '../../../app-core/services/mensajes/mensaje.service';

@Component({
    selector: 'app-lista-prestamos',
    templateUrl: './lista-prestamos.component.html',
    styleUrl: './lista-prestamos.component.css'
})
export class ListaPrestamosComponent implements OnInit {

    /**
     * Ruta para obtener las imagenes
     */
    cdn: string = config.cdn

    /**
     * Listado de prestamos
     */
    lstPrestamos: any = [];
    // lstPrestamos: any = [
    //     { id_prestamo: 1, nombre_asociado: 'IMELDA NARVAEZ', id_asociado: 1,    valor_prestamo: 2000000, fecha_inicio: '2025-05-01T08:00', estado: 'A' },
    //     { id_prestamo: 2, nombre_asociado: 'MARCELA DIAZ', id_asociado: 1,      valor_prestamo: 5000000, fecha_inicio: '2025-07-01T15:00', estado: 'A' },
    //     { id_prestamo: 3, nombre_asociado: 'LUZ MARIA JIMENEZ', id_asociado: 1, valor_prestamo: 800000,  fecha_inicio: '2025-02-01T20:00', estado: 'P' },
    //     { id_prestamo: 4, nombre_asociado: 'IRMA DOLORES', id_asociado: 1,      valor_prestamo: 9000000, fecha_inicio: '2025-01-01T11:00', estado: 'P' }
    // ];

    constructor(
        private serviceListaPrestamo: ListadoPrestamosService,
        private serviceMensaje: MensajeService
    ){

    }

    async ngOnInit() {
        try {
            this.lstPrestamos = await firstValueFrom(this.serviceListaPrestamo.getListadoPrestamos());
            console.log('this.lstPrestamos', this.lstPrestamos)
        } catch (error) {
            console.log(error)
            this.serviceMensaje.enviarMensaje('Error','Ha ocurrido un error al obtener los datos', 'e');
        }
    }
}
