import { HttpInterceptorFn } from '@angular/common/http';
import { DatosSessionService } from '../datos-session/datos-sesion.service';
import config from '../../configuracion/config';
import { inject } from '@angular/core';

// export class InterceptorAuth {
//   constructor(
//     public datosSessionService: DatosSessionService
//   ) {}
// }

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

  const serviceDatosUsuario = inject(DatosSessionService)

  let token: string = '';
  const modulo_id = config.modulo_id.toString();

  const tokenSession = serviceDatosUsuario.verificarToken();
  if (tokenSession != null) {
    token = tokenSession;
  }

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${tokenSession}`,
      modulo_id: modulo_id
    }
  });

  return next(authReq);
};