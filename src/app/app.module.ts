import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Directive,Input,ElementRef,Renderer } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { indexComponent } from './components/index';
import { loginComponent } from './components/login';
import { homeComponent } from './components/home';
import { RouterModule, Routes } from '@angular/router';
import {MyInhertLink,HighlightDirective} from './directives/sample';
import {MySharedService} from './services/masterPage';
const appRoutes: Routes = [
  { path: 'index', component: indexComponent },
  {path:'login',component:loginComponent},
  {path:'home',component:homeComponent}
];


@NgModule({
  declarations: [
    indexComponent,loginComponent,homeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
   
  ],
  providers: [MySharedService],
  bootstrap: [indexComponent]
})
export class AppModule { }
