import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { MembershipComponent } from './components/membership/membership.component';
import { BlogComponent } from './components/blog/blog.component';
import { DownloadsComponent } from './components/downloads/downloads.component';
import { BodComponent } from './components/bod/bod.component';
import { WomenComponent } from './components/women/women.component';
import { CsrComponent } from './components/csr/csr.component';
import { RegulationsComponent } from './components/regulations/regulations.component';
import { PressComponent } from './components/press/press.component';
import { SchoolloansComponent } from './components/schoolloans/schoolloans.component';
import { Peccu30yearsComponent } from './components/peccu30years/peccu30years.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'about/bod', component:BodComponent},
  {path:'about/women', component:WomenComponent},
  {path:'about/csr', component:CsrComponent},
  {path:'about/regulations', component:RegulationsComponent},
  {path:'services', component:ServicesComponent},
  {path:'membership', component:MembershipComponent},
  {path:'blog', component:BlogComponent},
  {path:'blog/Press', component:PressComponent},
  {path:'downloads', component:DownloadsComponent},
  {path:'contact', component:ContactComponent},
  {path:'schoolloans', component:SchoolloansComponent},
  {path:'peccu30years', component:Peccu30yearsComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
