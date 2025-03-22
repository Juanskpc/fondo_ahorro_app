import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import config from '../app-admin/configuracion/config';
import { DatosSessionService } from '../app-admin/seguridad/datos-session/datos-sesion.service';

export const authGuard: CanActivateFn = (route, state) => {

  const serviceDatosUsuario = inject(DatosSessionService)

  const tokenSession = serviceDatosUsuario.verificarToken();

  if(tokenSession != null){
    return true;
  }

  window.location.href=config.Login;
  return false;
};
