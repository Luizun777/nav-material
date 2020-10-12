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
    localStorage.getItem('language') ? language = localStorage.getItem('language') : localStorage.setItem('language', 'es');
    this.translate.setDefaultLang(language);
    this.translate.use(language);
  }
}
