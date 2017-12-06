import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { AppComponent } from "./app.component";
//import { ItemDetailComponent } from "./item/item-detail.component";
//import {InformationComponent} from "./components/information/information.component";
//import {CreateProductComponent} from "./components/create-product/create-product.component";

const routes: Routes = [
     //{ path: "", component: AppComponent },
    // { path: "create-product", component: CreateProductComponent }

    //{ path: "", redirectTo: "/items", pathMatch: "full" },
   // { path: "items", component: ItemsComponent },
   // { path: "item/:id", component: ItemDetailComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }