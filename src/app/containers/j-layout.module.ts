import { NgModule } from "@angular/core";
import { JLayoutComponent } from "./j-layout/j-layout.component";
import { JLayoutSinComponent } from "./j-layout-sin";
import { CommonModule } from "@angular/common";
import { JLayoutRoutingModule } from "./j-layout.routing";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        JLayoutComponent,
        JLayoutSinComponent
    ],
    imports: [
        CommonModule,
        JLayoutRoutingModule,
        BsDropdownModule.forRoot(),
        RouterModule
    ],
    exports:[
        JLayoutComponent
    ]
})

export class JLayoutModule { }