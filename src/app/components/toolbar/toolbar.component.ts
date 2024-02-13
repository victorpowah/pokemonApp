import { Component, OnDestroy, OnInit, inject } from '@angular/core'
import { ToolbarModule } from 'primeng/toolbar'
import { ButtonModule } from 'primeng/button'
import { ThemeService } from '../../services/theme-service.service'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { Subject } from 'rxjs'

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [ToolbarModule, ButtonModule, RouterLink, RouterLinkActive],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent implements OnInit, OnDestroy {
  public themeSelection: boolean = false
  public colorClass: string = ''
  private readonly themeService = inject(ThemeService)
  private destroy$ = new Subject<void>()

  ngOnInit(): void {
    this.themeService.getColorClass().subscribe((colorClass: string) => {
      this.colorClass = colorClass
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }

  public changeTheme(): void {
    this.themeSelection = !this.themeSelection
    this.themeService.changeTheme(this.themeSelection ? 'dark' : 'light')
  }
}
