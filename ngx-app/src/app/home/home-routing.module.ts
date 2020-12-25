import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { HomeComponent } from './home.component';
import { Shell } from '@app/shell/shell.service';
import { ContactosComponent } from '@app/contactos/contactos.component';
import { FormComponent } from '@app/contactos/form.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, data: { title: marker('Home') } },
    { path: 'home/contactos', component: ContactosComponent },
    { path: 'home/form', component: FormComponent}

  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class HomeRoutingModule {}
