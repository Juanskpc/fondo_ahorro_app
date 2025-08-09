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
     * Mostrar/ocultar modal para nuevo prestamo
     */
    mostrarDatosPrestamo: boolean = false;

    /**
     * Asociado seleccionado para crear un prestamo
     */
    asociadoSelect!: string;


    lstAsociados: any = [];


    frmPrestamo!: FormGroup;

    /**
     * Bandera para saber si se procesó el formulario
     */
    submitted: boolean = false;

    prestamoSelect: any;

    objPrePrestamo: any;

    constructor(
        private serviceListaPrestamo: ListadoPrestamosService,
        private serviceMensaje: MensajeService,
        private fb: FormBuilder
    ){
        this.objPrePrestamo = {
            interes: 0,
            valorCapital: 0,
            totalPagar: 0
        }
    }

    // Getter para obtener los controles del formulario frmPrestamo
    get prestamo () { return this.frmPrestamo.controls }

    async ngOnInit() {
        try {
            
        this.frmPrestamo = this.fb.group({
            id_asociado: ['', [Validators.required]],
            valor_prestamo: ['', [Validators.required, Validators.min(1)]],
            interes: ['', [Validators.required]],
            fecha_inicio: ['', [Validators.required]],
            cuotas: ['', [Validators.required]],
            descripcion: ['']
        })
            await this.consultarListadoPrestamos();
            console.log('this.lstPrestamos', this.lstPrestamos)
        } catch (error) {
            console.log(error)
            this.serviceMensaje.enviarMensaje('Error','Ha ocurrido un error al obtener los datos', 'e');
        }
    }

    agregarPrestamo(){
        try {
            this.mostrarNuevoPrestamo = true;
            this.objPrePrestamo = {
                interes: 0,
                valorCapital: 0,
                totalPagar: 0
            }
            this.frmPrestamo.reset();
            this.submitted = false;
        } catch (error) {
            
        }
    }

    async buscarAsociadoByNombre(event: AutoCompleteCompleteEvent){
        try {
            let cadena = event.query.toString().toUpperCase();
            this.lstAsociados = await firstValueFrom(this.serviceListaPrestamo.getAsociadosByName(cadena));
            console.log('busqueda por termino ->', this.lstAsociados)
        } catch (error) {
            
        }
    }
    
    async guardarPrestamo(){
        try {
            console.log(this.frmPrestamo.value)
            this.submitted = true;
            
            if(!this.frmPrestamo.valid) return;
            
            this.frmPrestamo.value.id_asociado = this.frmPrestamo.value.id_asociado.AsociPersonas[0].id_asociado;
            await firstValueFrom(this.serviceListaPrestamo.createNuevoPrestamo(this.frmPrestamo.value));

            await this.consultarListadoPrestamos();
            this.mostrarNuevoPrestamo = false;
            this.serviceMensaje.enviarMensaje('¡Bien!', 'Los datos se han guardado correctamente', 's');
        } catch (error) {
            console.log(error);
            this.serviceMensaje.enviarMensaje('Ups', 'Ha ocurrido un error al guardar los datos', 'e');
        }
    }

    async consultarListadoPrestamos(){
        try {
            this.lstPrestamos = await firstValueFrom(this.serviceListaPrestamo.getListadoPrestamos());
        } catch (error) {
            console.log(error)
            this.serviceMensaje.enviarMensaje('Ups', 'Ha ocurrido un error al obtener los datos', 'e');
        }
    }

    async eliminarPrestamo(prestamo: any){
        try {
            let mensaje = await this.serviceMensaje.mensajeConfimacion('¿Esta seguro que desea eliminar el préstamo de ' + prestamo.AsociPersona.GenerPersona.primer_nombre + ' ' + prestamo.AsociPersona.GenerPersona.primer_apellido);

            await firstValueFrom(this.serviceListaPrestamo.inactivarPrestamo(prestamo));
            await this.consultarListadoPrestamos();
        } catch (error: any) {
            if(error.cancelado) return;
            this.serviceMensaje.enviarMensaje('Ups', 'Ha ocurrido un error al eliminar los datos', 'e');
            console.log(error);            
        }
    }

    verDatosPrestamo(prestamo: any){
        this.mostrarDatosPrestamo = true;

        this.prestamoSelect = prestamo;

        this.frmPrestamo.get('valor_prestamo')?.setValue(prestamo.valor_prestamo);
        this.frmPrestamo.get('interes')?.setValue(prestamo.interes);
        this.frmPrestamo.get('fecha_inicio')?.setValue(prestamo.fecha_inicio.substring(0, 10));
        this.frmPrestamo.get('cuotas')?.setValue(prestamo.cuotas.substring(0, 10));
        this.frmPrestamo.get('descripcion')?.setValue(prestamo.descripcion);

        
    }

    previsualizarPrestamo(){
        let valorPrestamo = this.frmPrestamo.value.valor_prestamo;
        let interes = this.frmPrestamo.value.interes;
        let cuotas = this.frmPrestamo.value.cuotas;

        console.log(valorPrestamo, interes, cuotas)
        if(valorPrestamo && cuotas && interes){
            this.objPrePrestamo.interes = Math.floor((valorPrestamo) * ( (interes) / 100));
            this.objPrePrestamo.cuotaMes = Math.floor((valorPrestamo) / (cuotas) + this.objPrePrestamo.interes);
            this.objPrePrestamo.totalPagar = Math.floor((valorPrestamo) + (cuotas * this.objPrePrestamo.interes));

            console.log('this.objPrePrestamo --> ', this.objPrePrestamo)
        }
    }
}
