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


const routes: Routes = [
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'home', component:HomeComponent},
  {path:'services', component:ServicesComponent},
  {path:'membership', component:MembershipComponent},
  {path:'downloads', component:DownloadsComponent},
  {path:'blog', component:BlogComponent},
  {path:'bod', component:BodComponent},
  {path:'women', component:WomenComponent},
  {path:'csr', component:CsrComponent},
  {path:'press', component:PressComponent},
  {path:'regulations', component:RegulationsComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
