import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { FartopnavComponent } from './components/fartopnav/fartopnav.component';
import { WhoweareComponent } from './components/whoweare/whoweare.component';
import { ServicesComponent } from './components/services/services.component';
import { MembershipComponent } from './components/membership/membership.component';
import { BlogComponent } from './components/blog/blog.component';
import { DownloadsComponent } from './components/downloads/downloads.component';
import { BodComponent } from './components/bod/bod.component';
import { WomenComponent } from './components/women/women.component';
import { CsrComponent } from './components/csr/csr.component';
import { RegulationsComponent } from './components/regulations/regulations.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { PressComponent } from './components/press/press.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PagenotfoundComponent,
    FartopnavComponent,
    WhoweareComponent,
    ServicesComponent,
    MembershipComponent,
    BlogComponent,
    DownloadsComponent,
    BodComponent,
    WomenComponent,
    CsrComponent,
    RegulationsComponent,
    ProjectsComponent,
    PressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
