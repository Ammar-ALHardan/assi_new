import { Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LangService {
  lang = signal<'en' | 'ar'>('en');

  constructor(private translate: TranslateService) {}

  init(lang: string) {
    const validLang = lang === 'ar' ? 'ar' : 'en';
    this.lang.set(validLang);
    this.translate.use(validLang);
    document.documentElement.dir = validLang === 'ar' ? 'rtl' : 'ltr';
  }

  toggle() {
    this.init(this.lang() === 'en' ? 'ar' : 'en');
  }
}
