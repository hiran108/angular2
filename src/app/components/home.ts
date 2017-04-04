import { Component , Directive, Input} from '@angular/core';
import { Http, Response ,Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';
import {Router } from '@angular/router';






@Component({
  selector: 'app-home',
  templateUrl: '../views/home.html',
  styleUrls: ['../css/home.css']
   
})


export class homeComponent {
  selectedItem=0;
  isathanticated=0;
  tokenText='test';
 constructor(public http: Http,private router: Router) {

     if(localStorage.getItem('token'))
     {
this.selectedItem=1;
this.tokenText=localStorage.getItem('token');

//alert(this.tokenText);
     }
     else
     {
       this.selectedItem=4;
router.navigate(['login']);
     }
  }

  ngOnInit()
  {
    this.tokenText=localStorage.getItem('token');
  }
  
}
