import { ListRenderComponent } from './components/list-render/list-render.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//array de objetos onde coloco o path de cada rota
const routes: Routes = [
  { path: "", component: FirstComponentComponent},
  {path: 'list', component: ListRenderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //as rotas começam do root/raiz
  exports: [RouterModule]
})
export class AppRoutingModule { }
