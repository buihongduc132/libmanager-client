import { bootstrap }    from '@angular/platform-browser-dynamic';
// import { HTTP_PROVIDERS } from '@angular/http';
// import { appRouterProviders } from './routes';
import { platformBrowserDynamic } 
from '@angular/platform-browser-dynamic';

import { AppModule }
from './modules/app.module';


platformBrowserDynamic()
.bootstrapModule(AppModule);