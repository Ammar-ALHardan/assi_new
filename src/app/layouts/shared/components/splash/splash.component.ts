import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-splash',
  imports: [NgClass],
  templateUrl: './splash.component.html',
  styleUrl: './splash.component.scss'
})
export class SplashComponent {
  hideSplash = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.hideSplash = true;
    }, 3000); 
  }
}
