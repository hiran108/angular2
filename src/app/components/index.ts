import { Component , Directive, Input} from '@angular/core';
import { Http, Response ,Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';
import {Router } from '@angular/router';
import {MySharedService} from '../services/masterPage';





@Component({
  selector: 'app-index',
  templateUrl: '../views/index.html',
  styleUrls: ['../css/index.css']
   
})


export class indexComponent {
  selectedItem=0;
  isathanticated=0;
  loginText='Login';
 constructor(public http: Http,private router: Router,private service:MySharedService) {

service.dataChange.subscribe((data)=>{
  
  this.loginText=data.loginText;
  this.isathanticated=data.authanticated;
  if(this.isathanticated===1)
  {
    this.selectedItem=1;
    router.navigate(['home']);
  }
  //console.log( loginText);

});


     if(localStorage.getItem('token'))
     {
      this.service.setLoginTxt('Logout');
       this.isathanticated=1;
this.selectedItem=1;
this.loginText='Logout';
//router.navigate(['home']);

     }
     else
     {
       this.selectedItem=4;
router.navigate(['login']);
     }
  }

  
  clicked(selection)
  {
    //alert(selection);
    this.selectedItem=selection;
    if(selection===4)
    {
     // alert(this.loginText);
       this.isathanticated=0;
      localStorage.removeItem('token');
      this.loginText='Login';
      this.router.navigate(['login']);

    }
  }
  title = 'POS in CLOUD';
  
}
