import { Component, HostListener, OnInit, inject } from '@angular/core'
import { ToolbarModule } from 'primeng/toolbar'
import { ButtonModule } from 'primeng/button'
import { ThemeService } from '../../services/theme-service.service'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { DestroyService } from '../../services/destroy.service'
import { takeUntil } from 'rxjs'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    ToolbarModule,
    ButtonModule,
    RouterLink,
    RouterLinkActive,
    CommonModule,
  ],
  providers: [DestroyService],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent implements OnInit {
  public themeSelection: boolean = false
  public colorClass: string = ''
  public navbarFixed: boolean = false
  private readonly themeService = inject(ThemeService)
  private destroy$ = inject(DestroyService)

  ngOnInit(): void {
    this.themeService
      .getColorClass()
      .pipe(takeUntil(this.destroy$))
      .subscribe((colorClass: string) => {
        this.colorClass = colorClass
      })
  }

  public changeTheme(): void {
    this.themeSelection = !this.themeSelection
    this.themeService.changeTheme(this.themeSelection ? 'dark' : 'light')
  }

  @HostListener('window:scroll', ['$event']) onScroll() {
    this.navbarFixed = window.scrollY >= 1
  }
}
