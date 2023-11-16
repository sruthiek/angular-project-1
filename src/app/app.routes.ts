import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ContactsComponent } from './contacts/contacts.component';

export const routes: Routes = [
{
    // http://localhost:4200/
    component:HomeComponent,path:''
},
{
     // http://localhost:4200/About
    component:AboutComponent,path:'About'
},
{
    component:ProductsComponent,path:'Products'
},
{
    component:ContactsComponent,path:'Contacts'
},



];



