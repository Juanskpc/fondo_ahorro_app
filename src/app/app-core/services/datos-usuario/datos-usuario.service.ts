import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { ServiceBase } from '../service-base';
import config from '../app-admin/configuracion/config';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable()
export class DatosUsuarioService {

    private ApiUrl: string = '';

    private usuario?: Usuario;

    constructor(private http: HttpClient) {
        this.ApiUrl = [config.ApiUrl, config.segUrl].join('/');
    }

    get usuarioLogeado(): Usuario | undefined{
        if( !this.usuario ) return undefined;

        return structuredClone(this.usuario);
    }

    obtenerRutas(): Observable<any> {
        let ruta = [this.ApiUrl, 'obtenerRutas'].join('/');
        return this.http.post(ruta, {});
    }

    /**
     * Metodo que permite obtener la informacion del usuario que se encuentra autenticado
     */
    obtenerInformacionUsuario(): Observable<any> {
        let ruta = [this.ApiUrl, 'infoUsuario'].join('/');
        return this.http.post<Usuario>(ruta, {})
        .pipe(
            tap(usuario => this.usuario = usuario)
        )
    }

    /**
     * Metodo que permite cerrar la sesion del usuario y registrar esta actividad en el servidor
     */
    cerrarSesion(): Observable<any> {
        let ruta = [this.ApiUrl, 'cerrarSesion'].join('/');
        return this.http.post(ruta, {});
    }

    validarSesion(): Observable<boolean>{
        let ruta = [this.ApiUrl, 'infoUsuario'].join('/');
        return this.http.post(ruta, {})
        .pipe(
            // tap(usuario => this.usuario = usuario),
            map( usuario => !!usuario),
            catchError( error => of(false))
        )
    }
}