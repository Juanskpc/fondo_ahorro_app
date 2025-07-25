import { Component, OnInit } from '@angular/core';
import config from '../../app-core/services/app-admin/configuracion/config';
import { Configuracion } from '../../app-core/services/interfaces/config.interface';
import { Usuario } from '../../app-core/services/interfaces/usuario.interface';
import { DatosUsuarioService } from '../../app-core/services/datos-usuario/datos-usuario.service';
import { catchError, of } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { MensajeService } from '../../app-core/services/mensajes/mensaje.service';
import { Rutas } from '../../app-core/services/interfaces/rutas.interface';


@Component({
    selector: 'app-j-layout',
    templateUrl: './j-layout.component.html'
})
export class JLayoutComponent implements OnInit {
    date: any;
    /**
   * ruta del cdn
   */
    cdn: string = config.cdn;

    /**
   * ruta del cdn
   */
    config: Configuracion = config;

    /**
     * ruta para los botones del dashboard
     */
    usuario!: Usuario | undefined;

    /**
   * año actual
   */
    year?: number;

    contraer: boolean = false;

    verSidebar: boolean = false;

    pantalla: number = 0;

    rutasSidebar!: Rutas[];

    constructor(
        private serviceInfoUsuario: DatosUsuarioService,
        private serviceCookie: CookieService,
        private serviceUsuario: DatosUsuarioService,
        private serviceMensaje: MensajeService
    ) { }

    ngOnInit(): void {

        this.pantalla = window.screen.width;

        if (this.pantalla >= 500) {
            const sidebar: any = document.querySelector("#sidebar");
            sidebar.classList.toggle("expand");

            this.contraer = true;
            this.verSidebar = true;
        }
        if (this.pantalla < 500) {

            this.contraer = false;
            this.verSidebar = false;
        }

        this.year = new Date(Date.now()).getFullYear();

        // this.serviceUsuario.obtenerInformacionUsuario()
        //     .pipe(
        //         catchError(({ error }) => {
        //             this.serviceMensaje.enviarMensaje('Error', error.error, 'e')
        //             console.error('msg error', error);
        //             // window.location.href = config.Login;
        //             return of([])
        //         })
        //     )
        //     .subscribe((usuario) => {
        //         this.usuario = usuario;
        //         console.log('usuario ->', this.usuario);
        //     })

        // this.serviceUsuario.obtenerRutas()
        //     .pipe(
        //         catchError(({ error }) => {
        //             this.serviceMensaje.enviarMensaje('Error', error.error, 'e')
        //             console.error('msg error', error);
        //             return of([])
        //         })
        //     )
        //     .subscribe((res) => {
        //         this.rutasSidebar = res
        //         console.log('rutas dash -> ', this.rutasSidebar);
        //     })
    }

    cambiarContra() {
        window.location.href = config.Login + '/cambiar_contra';
    }

    cerrarSesion() {

        this.serviceInfoUsuario.cerrarSesion()
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

    alternarSideBar(event: Event) {
        event.preventDefault();
        const sidebar: any = document.querySelector("#sidebar");
        sidebar.classList.toggle("expand");

        this.contraer = !this.contraer;

        if (this.pantalla < 500 && !this.contraer) {
            this.verSidebar = false;
            return;
        }

        this.verSidebar = true;
    }

}
