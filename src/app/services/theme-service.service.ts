import { DOCUMENT } from '@angular/common'
import { Injectable, Inject } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private theme: string = 'light'

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
      this.theme = theme
      themeLink.href = `bootstrap4-${theme}-purple.css`
    }
  }

  private colorClass$: BehaviorSubject<string> = new BehaviorSubject(
    'bg-gray-900'
  )

  public getColorClass(): Observable<string> {
    return this.colorClass$.asObservable()
  }

  public setColorClass(stat: string) {
    this.colorClass$.next(stat)
  }

  public isDarkMode(): boolean {
    return this.theme === 'dark'
  }
}
