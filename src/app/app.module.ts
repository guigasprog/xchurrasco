import { APP_INITIALIZER, NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Imports do PrimeNG
import { ButtonModule } from 'primeng/button';
import { PrimeNGConfig } from 'primeng/api';
import { MainComponent } from './main/main.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { TaskComponent } from './tasks/tasks.component';

import { MenuItemComponent } from './menu-item/menu-item.component';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { PessoasModule } from './components/pessoas/pessoas.module';

//Factory de configs do primeng (Todas as configurações dele
//podem ser alteradas aqui!
const initializeAppFactory = (primeConfig: PrimeNGConfig) => () => {
  (primeConfig.inputStyle = 'filled'), (primeConfig.ripple = true);
};

@NgModule({
  declarations: [AppComponent, MainComponent, MenuItemComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TaskComponent,
    ButtonModule,
    RouterLinkActive,
    RouterLink,
    PessoasModule,
  ],
  providers: [
    provideClientHydration(),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      deps: [PrimeNGConfig],
      multi: true,
    },
    provideHttpClient(withFetch()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
