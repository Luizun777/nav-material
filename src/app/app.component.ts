import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.setLanguage();
  }

  setLanguage() {
    let language = 'es';
    if ( localStorage.getItem('language') ) {
      language = localStorage.getItem('language');
    } else {
      localStorage.setItem('language', 'es');
    }
    this.translate.setDefaultLang(language);
    this.translate.use(language);
  }
}
