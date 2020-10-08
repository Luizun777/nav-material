import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {
  HTTP_INTERCEPTORS, HttpClient, HttpClientModule
} from '@angular/common/http';
import es from '@angular/common/locales/es';
import {registerLocaleData} from '@angular/common';

// Dependencies
import {
  TranslateLoader, TranslateModule
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ReactiveFormsModule } from '@angular/forms';

// Materials
import { MaterialsModule } from './materials/materials.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { NavComponent } from './shared/header/nav/nav.component';
import { TableComponent } from './component/table/table.component';
import { CalendarioComponent } from './component/calendario/calendario.component';
import { ContenedorFechaComponent } from './shared/header/contenedor-fecha/contenedor-fecha.component';

// File Configuration
import {Config} from './config';
import {MainHttpInterceptor} from './interceptor/main-http-interceptor';

export const HttpLoaderFactory = (http: HttpClient) => new TranslateHttpLoader(http, Config.translatePath);

const declarations = [
    AppComponent,
    HeaderComponent,
    NavComponent,
    TableComponent,
    CalendarioComponent,
    ContenedorFechaComponent
  ];

const imports = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  MaterialsModule,
  TranslateModule.forRoot({loader: {
    deps: [HttpClient],
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory
  }}),
  BrowserAnimationsModule,
  MaterialsModule,
  ReactiveFormsModule
];

const providers = [{
  multi: true,
  provide: HTTP_INTERCEPTORS,
  useClass: MainHttpInterceptor
}, {
  provide: LOCALE_ID,
  useValue: 'es'
}];

registerLocaleData(es);

@NgModule({
  bootstrap: [AppComponent],
  declarations,
  imports,
  providers
})
export class AppModule { }
