import { Component, OnInit, inject } from '@angular/core'
import { ToolbarModule } from 'primeng/toolbar'
import { ButtonModule } from 'primeng/button'
import { ThemeService } from '../../services/theme-service.service'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { DestroyService } from '../../services/destroy.service'

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [ToolbarModule, ButtonModule, RouterLink, RouterLinkActive],
  providers: [DestroyService],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent implements OnInit {
  public themeSelection: boolean = false
  public colorClass: string = ''
  private readonly themeService = inject(ThemeService)
  private destroy$ = inject(DestroyService)

  ngOnInit(): void {
    this.themeService.getColorClass().subscribe((colorClass: string) => {
      this.colorClass = colorClass
    })
  }

  public changeTheme(): void {
    this.themeSelection = !this.themeSelection
    this.themeService.changeTheme(this.themeSelection ? 'dark' : 'light')
  }
}
