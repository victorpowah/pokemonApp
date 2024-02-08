import { Component } from '@angular/core'
import { ToolbarModule } from 'primeng/toolbar'
import { AvatarModule } from 'primeng/avatar'
import { ButtonModule } from 'primeng/button'
import { ThemeService } from '../../services/theme-service.service'

@Component({
  selector: 'toolbar',
  standalone: true,
  imports: [ToolbarModule, AvatarModule, ButtonModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {
  themeSelection: boolean = false

  constructor(private readonly themeService: ThemeService) {}

  changeTheme(): void {
    this.themeSelection = !this.themeSelection
    this.themeService.changeTheme(this.themeSelection ? 'dark' : 'light')
  }
}
