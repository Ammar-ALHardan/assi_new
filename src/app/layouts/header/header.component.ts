import { Component, HostListener } from '@angular/core';
import { LangService } from '../../core/services/lang.service';
import { TranslateModule } from '@ngx-translate/core';
import { LucideAngularModule, Globe, User, MessageCircle } from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [TranslateModule, LucideAngularModule, RouterLink, NgClass, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  icons = {
    globe: Globe,
    user: User,
    messageCircle: MessageCircle
  };
constructor(public lang: LangService) {}
switchLang() {
  const next = this.lang.lang() === 'en' ? 'ar' : 'en';
  const rest = location.pathname.split('/').slice(2).join('/');
  window.location.href = `/${next}/${rest}`;
}

 scrolled = false;
  mobileMenuOpen = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 10;
  }
}
