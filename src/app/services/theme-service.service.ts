import { DOCUMENT } from '@angular/common'
import { Injectable, Inject } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(@Inject(DOCUMENT) private document: Document) {
    const themeLink = this.document.getElementById(
      'app-theme'
    ) as HTMLLinkElement

    if (themeLink) {
      themeLink.href = `bootstrap4-light-purple.css`
    }
  }

  changeTheme(theme: string): void {
    const themeLink = this.document.getElementById(
      'app-theme'
    ) as HTMLLinkElement

    if (themeLink) {
      themeLink.href = `bootstrap4-${theme}-purple.css`
    }
  }
}
