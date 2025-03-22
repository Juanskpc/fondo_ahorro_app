import { catchError, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import config from '../../app-core/services/app-admin/configuracion/config';
import { DatosUsuarioService } from '../../app-core/services/datos-usuario/datos-usuario.service';
import { MensajeService } from '../../app-core/services/mensajes/mensaje.service';
import { Usuario } from '../../app-core/services/interfaces/usuario.interface';
import { Rutas } from '../../app-core/services/interfaces/rutas.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  /**
   * ruta del cdn
   */
  cdn: string = config.cdn;

  /**
   * ruta para los botones del dashboard
   */
  rutasDashboard!: Rutas[];

  constructor(
    private serviceUsuario: DatosUsuarioService,
    private serviceMensaje: MensajeService,
    private router: Router
  ) { }

  ngOnInit(): void {

    // this.serviceUsuario.obtenerRutas()
    //   .pipe(
    //     catchError(({ error }) => {
    //       this.serviceMensaje.enviarMensaje('Error', error.error, 'e')
    //       console.error('msg error', error);
    //       return of([])
    //     })
    //   )
    //   .subscribe((res) => {
    //     this.rutasDashboard = res
    //     console.log('rutas dash -> ', this.rutasDashboard);
    //   })
  }

  navegarDashboard(ruta: Rutas){
    console.log({ruta});
    this.router.navigate([ruta.direccion_ruta])
  }
}
