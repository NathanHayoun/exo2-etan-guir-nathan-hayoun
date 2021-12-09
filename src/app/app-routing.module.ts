import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccueilComponent} from "./accueil/accueil.component";
import {ListeComponent} from "./liste/liste.component";

const routes: Routes = [
  {path: "liste", component: ListeComponent},
  {path: "", component: AccueilComponent, pathMatch: "full"},
  {path: "**", component: AccueilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
