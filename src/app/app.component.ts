import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LangService } from './core/services/lang.service';
import { HeaderComponent } from "./layouts/header/header.component";
import { FooterComponent } from "./layouts/footer/footer.component";
import { RouterOutlet } from "@angular/router";
import { NgIf } from '@angular/common';
import { SplashComponent } from "./layouts/shared/components/splash/splash.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TranslateModule, HeaderComponent, FooterComponent, RouterOutlet, NgIf, SplashComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
constructor(public lang: LangService) {}
  title = 'abu_assi';
   showContent = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.showContent = true;
    }, 3000);
  }
}
