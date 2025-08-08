import { Component, OnInit } from '@angular/core';
import config from '../../../app-core/services/app-admin/configuracion/config';
import { ListadoPrestamosService } from '../../../app-core/services/lista-prestamos/listado-prestamos.service';
import { firstValueFrom } from 'rxjs';
import { MensajeService } from '../../../app-core/services/mensajes/mensaje.service';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    
    /**
     * Mostrar/ocultar modal para nuevo prestamo
     */
    mostrarNuevoPrestamo: boolean = false;

    /**
     * Asociado seleccionado para crear un prestamo
     */
    asociadoSelect!: string;


    lstAsociados: any = [];


    frmPrestamo!: FormGroup;

    constructor(
        private serviceListaPrestamo: ListadoPrestamosService,
        private serviceMensaje: MensajeService,
        private fb: FormBuilder
    ){
        this.frmPrestamo = this.fb.group({
            asociado: ['', [Validators.required]],
            valorPrestamo: ['', [Validators.required, Validators.min(1)]],
            interes: ['', [Validators.required]],
            fecInicio: ['', [Validators.required]],
            fecFin: ['', [Validators.required]],
            descripcion: ['']
        })
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

    agregarPrestamo(){
        try {
            this.mostrarNuevoPrestamo = true;
        } catch (error) {
            
        }
    }

    buscarAsociadoByNombre(event: AutoCompleteCompleteEvent){
        try {
            
        } catch (error) {
            
        }
    }
}
