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

}