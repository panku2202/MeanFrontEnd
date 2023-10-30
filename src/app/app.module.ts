import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUpdateComponent } from './component/create-update/create-update.component';
import { ListComponent } from './component/list/list.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import {CountryService} from './shared/country.service';


const appRoutes:Routes=[
  {path:'',component:ListComponent},
  {path:'createUpdate',component:CreateUpdateComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    CreateUpdateComponent,
    ListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule {}
