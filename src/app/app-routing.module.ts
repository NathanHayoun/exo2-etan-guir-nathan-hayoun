import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccueilComponent} from "./accueil/accueil.component";
import {ContactComponent} from "./contact/contact.component";
import {ListeComponent} from "./liste/liste.component";
import {GestionComponent} from "./gestion/gestion.component";

const routes: Routes = [
  {path: "liste", component: ListeComponent},
  {path: "contact", component: ContactComponent},
  {path: "gestion", component: GestionComponent},
  {path: "", component: AccueilComponent, pathMatch: "full"},
  {path: "**", component: AccueilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
