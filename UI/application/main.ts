import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './appComponent';
import { HTTP_PROVIDERS } from '@angular/http';
import { appRouterProviders } from './app.routes';

bootstrap(AppComponent, [ HTTP_PROVIDERS ,appRouterProviders]);

