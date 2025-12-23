import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { LangService } from '../services/lang.service';

export const langGuard: CanActivateFn = (route) => {
  const langService = inject(LangService);
  const lang = route.paramMap.get('lang');

  if (lang !== 'en' && lang !== 'ar') {
    return false;
  }

  langService.init(lang);
  return true;
};
