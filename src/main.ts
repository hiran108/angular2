import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';


if (environment.production) {

  enableProdMode();
}
localStorage.setItem('serviceBase','http://localhost:3000');
platformBrowserDynamic().bootstrapModule(AppModule);
//LocalStorageSubscriber(appPromise);
