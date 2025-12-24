import { Component, Input } from '@angular/core';
import { LangService } from '../../../../core/services/lang.service';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  constructor(public lang: LangService) {}
  
@Input() title: any ={
  en: 'Welcome to Our Service',
  ar: 'مرحبًا بكم في خدمتنا'
};
@Input() subtitle: any ={
  en: 'We provide the best solutions for your needs.',
  ar: 'نحن نقدم أفضل الحلول لاحتياجاتك.'
};
@Input() btnText: any ={
  en: 'Get Started',
  ar: 'ابدأ الآن'
};
@Input() btnText2: any ={
  en: 'Explore Our Services',
  ar: 'استكشف خدماتنا'
};
}
