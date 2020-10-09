import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';

// Dependencies
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ReactiveFormsModule } from '@angular/forms';

// Materials
import { MaterialsModule } from './materials/materials.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { NavComponent } from './shared/header/nav/nav.component';
import { ContenedorFechaComponent } from './shared/header/contenedor-fecha/contenedor-fecha.component';

// Components
import { ComponentModule } from './component/component.module';

// File Configuration
import {Config} from './config';
import {MainHttpInterceptor} from './interceptor/main-http-interceptor';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    ContenedorFechaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialsModule,
    TranslateModule.forRoot({
      loader: {
        deps: [HttpClient],
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory
      }
    }),
    ReactiveFormsModule,
    ComponentModule
  ],
  providers: [
    {
    multi: true,
    provide: HTTP_INTERCEPTORS,
    useClass: MainHttpInterceptor
    }
  ],
})
export class AppModule { }

// tslint:disable-next-line:typedef
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
