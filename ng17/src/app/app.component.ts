import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ThemeService } from './services/theme-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ButtonModule, RippleModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ng17';
  themeSelection: boolean = false;
  constructor(
    private primengConfig: PrimeNGConfig,
    private translateService: TranslateService,
    private readonly themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    this.primengConfig.zIndex = {
      modal: 1100, // dialog, sidebar
      overlay: 1000, // dropdown, overlaypanel
      menu: 1000, // overlay menus
      tooltip: 1100, // tooltip
    };
    this.translateService.setDefaultLang('en');
  }

  translate(lang: string): void {
    this.translateService.use(lang);
    this.translateService
      .get('primeng')
      .subscribe((res: any) => this.primengConfig.setTranslation(res));
  }

  changeTheme(): void {
    this.themeSelection = !this.themeSelection;
    this.themeService.changeTheme(this.themeSelection ? 'dark' : 'light');
  }
}
