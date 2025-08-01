import { NgModule } from "@angular/core";
import { DatosUsuarioService } from "./datos-usuario/datos-usuario.service";
import { MensajeService } from "./mensajes/mensaje.service";
import { LoginGuardService } from "./app-admin/seguridad/login-guard/login.guard.service";
import { CookieService } from "ngx-cookie-service";
import { DatosSessionService } from "./app-admin/seguridad/datos-session/datos-sesion.service";
import { ListadoPrestamosService } from "./lista-prestamos/listado-prestamos.service";

@NgModule({
    providers: [
        DatosUsuarioService,
        MensajeService,
        // LoginGuardService,
        CookieService,
        DatosSessionService,
        ListadoPrestamosService
    ]
})

export class ServiceModule {}