import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

const httpOptions = { headers: new HttpHeaders() };

httpOptions.headers
  = httpOptions.headers
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json; text/plain');

const Config = {
  api: environment.api.host,
  translatePath: './assets/i18n/',
  /*sessionDuration: {
    timeoutLogoutMinutes: 5,
    timeoutWarningMinutes: 4
  }*/
};

export { Config };
