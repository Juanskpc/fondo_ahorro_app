import { Injectable } from "@angular/core";
import swal, { SweetAlertIcon } from 'sweetalert2'


@Injectable()
export class MensajeService {

    /**
     * Función para obtener el tipo de alerta
     * @param tipoAlerta tipo de alerta, success, error, info...
     * @returns { Objetct } Objeto con las propiedades de la alerta solicitada
     */
    darTiposMensaje(tipoAlerta: string) {

        let titulo = '';
        let tipo: SweetAlertIcon = 'error';
        let color = '#EC2327';

        if (tipoAlerta != null && tipoAlerta != '') {
            let miTipo = tipoAlerta.toLowerCase();
            if (miTipo == 's' || miTipo == 'success') {
                titulo = '';
                color = '#00923f';
                tipo = "success";
            } else if (miTipo == 'w' || miTipo == 'warning') {
                titulo = '';
                color = '#FBB03B';
                tipo = "warning";
            } else if (miTipo == 'e' || miTipo == 'error') {
                titulo = '';
                color = '#EC2327';
                tipo = "error";
            } else if (miTipo == 'i' || miTipo == 'info') {
                titulo = '';
                tipo = "info";
                color = '#25B7D3';
            } else if (miTipo == 'q' || miTipo == 'question') {
                titulo = '';
                color = '#8ac23f';
                tipo = "question";
            }
        }
        let mensaje: TipoMensaje;

        mensaje = {
            titulo: titulo,
            color: color,
            tipo: tipo
        }
        return mensaje;
    }

    /**
     * Cerrar alerta
     */
    cerrarMensaje() {
        swal.close();
    }

    /**
     * Alerta con icono, título y texto
     * @param titulo titulo de la alerta    
     * @param texto cuerpo de la alerta
     * @param tipo tipo de alerta, success, info, error...
     */
    enviarMensaje(titulo: string, texto: string, tipo: string) {
        let tipoMensaje = this.darTiposMensaje(tipo);
        swal.fire({
            title: titulo,
            text: texto,
            icon: tipoMensaje.tipo,
            confirmButtonText: 'Aceptar'
        })
    }

    /**
     * Alerta de confirmación por el usuario
     * @param texto cuerpo de la alerta
     * @param allowOutsideClick tiempo de espera
     * @returns { Boolean } respuesta del usuario ( aceptó o canceló)
     */
    mensajeConfimacion(texto: string,allowOutsideClick = false ) {
        return new Promise(function (resolve, reject) {
          swal.fire({
            html: texto,
            icon: 'question',
            allowOutsideClick: allowOutsideClick,
            showCancelButton: true,
            confirmButtonColor: '#8ac23f',
            cancelButtonColor: '#EC2327',
            cancelButtonText: '<i class="pi pi-times gap-1"></i>  Cancelar',
            confirmButtonText: '<i class="pi pi-check gap-1"></i>  Aceptar'
          }).then(result => {
            if (result.value) {
              resolve({ "mensaje": "aceptar click" });
            }
            else {
              reject({ "cancelado": "operacion cancelada" });
            }
          });
        });
      }
}

interface TipoMensaje {
    titulo: string;
    color: string;
    tipo: SweetAlertIcon
}