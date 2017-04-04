import {Observable,Observer} from 'rxjs';


export class MySharedService {
  loginTxt: any;
 // authanticated:any;
  dataChange: Observable<any>;
dataChangeObserver;
  constructor() {
    this.dataChange = new Observable((observer:Observer<any>)=> {
      this.dataChangeObserver = observer;
    });
  }

  setLoginTxt(data:any) {
    this.loginTxt = data;
    this.dataChangeObserver.next(this.loginTxt);
  }
 
}

