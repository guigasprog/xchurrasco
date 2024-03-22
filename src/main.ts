import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

declare var window: any;

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
