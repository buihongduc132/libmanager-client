import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './components/app';
import { HTTP_PROVIDERS } from '@angular/http';
import { appRouterProviders } from './routes';


bootstrap(AppComponent, [HTTP_PROVIDERS,appRouterProviders
  ]);