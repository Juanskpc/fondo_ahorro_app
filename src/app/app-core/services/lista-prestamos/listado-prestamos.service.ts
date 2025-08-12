import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { ServiceBase } from '../service-base';
import config from '../app-admin/configuracion/config';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable()
export class ListadoPrestamosService {

    private ApiUrl: string = '';

    constructor(private http: HttpClient) {
        this.ApiUrl = [config.ApiUrl, config.ahorroUrl].join('/');
    }

    getListadoPrestamos(): Observable<any> {
        let ruta = [this.ApiUrl, 'getListadoPrestamos'].join('/');
        return this.http.get(ruta);
    }

    getAsociadosByName(cadena: string): Observable<any> {
        let ruta = [this.ApiUrl, 'getAsociadosByName', cadena].join('/');
        return this.http.get(ruta);
    }

    createNuevoPrestamo(prestamo: any): Observable<any> {
        let ruta = [this.ApiUrl, 'createNuevoPrestamo'].join('/');
        return this.http.post(ruta, {"prestamo": prestamo});
    }
    
    inactivarPrestamo(prestamo: any): Observable<any> {
        let ruta = [this.ApiUrl, 'inactivarPrestamo'].join('/');
        return this.http.put(ruta, {"prestamo": prestamo});
    }
    
    createAbonoPrestamo(abono: any): Observable<any> {
        let ruta = [this.ApiUrl, 'createAbonoPrestamo'].join('/');
        return this.http.post(ruta, {"abono": abono});
    }
    
    inactivarAbono(idAbono: number): Observable<any> {
        let ruta = [this.ApiUrl, 'inactivarAbono'].join('/');
        return this.http.put(ruta, {"idAbono": idAbono});
    }
    
    
    
}