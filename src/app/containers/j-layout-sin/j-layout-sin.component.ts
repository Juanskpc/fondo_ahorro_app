import { Component, OnInit } from '@angular/core';
import config from '../../app-core/services/app-admin/configuracion/config'
import { Configuracion } from '../../app-core/services/interfaces/config.interface';
import { DatosUsuarioService } from '../../app-core/services/datos-usuario/datos-usuario.service';
import { catchError, of } from 'rxjs';
import { MensajeService } from '../../app-core/services/mensajes/mensaje.service';
import { Rutas } from '../../app-core/services/interfaces/rutas.interface';
import { Usuario } from '../../app-core/services/interfaces/usuario.interface';
import { CookieService } from 'ngx-cookie-service';

@Component({
    selector: 'app-jdashboard',
    templateUrl: './j-layout-sin.component.html'
})
export class JLayoutSinComponent implements OnInit {

    /**
     * ruta del cdn
     */
    cdn: string = config.cdn;

    /**
     * ruta del cdn
     */
    config: Configuracion = config;

    /**
     * año actual
     */
    year?: number;

    /**
   * ruta para los botones del dashboard
   */
    rutasDashboard!: Rutas[];

    /**
     * datos del usuario logeado
     */
    usuario!: Usuario | undefined;
    constructor(
        private serviceUsuario: DatosUsuarioService,
        private serviceMensaje: MensajeService,
        private serviceCookie: CookieService
    ) {

    }

    ngOnInit() {
        this.year = new Date(Date.now()).getFullYear();

        console.log('usuario ->', this.usuario);

        // this.serviceUsuario.obtenerInformacionUsuario()
        //     .pipe(
        //         catchError(({ error }) => {
        //             this.serviceMensaje.enviarMensaje('Error', error.error, 'e')
        //             console.error('msg error', error);
        //             window.location.href = config.Login;
        //             return of([])
        //         })
        //     )
        //     .subscribe((usuario) => {
        //         this.usuario = usuario;
        //         console.log('usuario ->', this.usuario);
        //     })
    }


    cambiarContra() {
        window.location.href = config.Login + '/cambiar_contra';
    }

    cerrarSesion() {

        this.serviceUsuario.cerrarSesion()
            .pipe(
                catchError((error) => {
                    console.error(error);
                    this.serviceCookie.deleteAll();
                    window.location.href = config.Login;
                    return of([])
                })
            )
            .subscribe((res) => {
                this.serviceCookie.deleteAll();
                localStorage.clear();
                window.location.href = config.Login;
            });
    }


}
