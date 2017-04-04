import { Component } from '@angular/core';
import { Http, Response ,Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';
import {Router } from '@angular/router';
import { Location } from '@angular/common';
import {MySharedService} from '../services/masterPage';

@Component({
  selector: 'app-login',
  templateUrl: '../views/login.html',
  styleUrls: ['../css/login.css']
})


export class loginComponent {
 constructor(public http: Http,private router: Router,private location:Location,private masterService:MySharedService) { }
  title = 'POS in CLOUD';
  username='';
  password='';
  errorText='';

loginComplete(res,iserror)
{
  let msg=res.json();

  if(iserror)
  {
    this.errorText=msg.message;
  }
  else
  {
    this.errorText="";
    localStorage.setItem('token',msg.token);
    //location.reload();
    this.masterService.setLoginTxt({loginText:'Logout',authanticated:1});
    // this.masterService.setauthanticated('1');
  //this.location.subscribe()
//this.router.navigate(['home']);
  }
//console.log(msg.message);
}
  Login(event)
  {
    //console.log('testttt');
    //event.
    localStorage.setItem('username',this.username);
//let headers = new Headers({ 'Content-Type': 'application/json' });
    //let options = new RequestOptions({ headers: headers, method: 'get' });
    let serviceBase=localStorage.getItem('serviceBase');
    let url=serviceBase+'/login?name='+this.username+'&password='+this.password;
    console.log(url);
        this.http.get(url).subscribe((data:Response)=>this.loginComplete(data,0),
        err=>this.loginComplete(err,1)
        
        )
    //alert(localStorage.getItem('username'));
  }
}
