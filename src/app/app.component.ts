import { Component } from '@angular/core';
import { Http, Response ,Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx'
@Component({
  selector: 'app-login',
  templateUrl: './views/login.html',
  styleUrls: ['css/login.css']
})


export class AppComponent {
 constructor(public http: Http) { }
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
