import { NgModule } from "@angular/core";
import { ContadorComponent } from "./contador/contador.component";
import { Component } from "@angular/core";



@NgModule ({
    declarations: [
        ContadorComponent,
    ],

    exports: [
        ContadorComponent,
    ],

    imports: [
        Component
    ]
})


export  class ContadorModule {}