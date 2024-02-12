import { DOCUMENT } from '@angular/common'
import { Injectable, Inject } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'

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

  private colorClass$: BehaviorSubject<string> = new BehaviorSubject(
    'bg-gray-900'
  )

  getColorClass(): Observable<string> {
    return this.colorClass$.asObservable()
  }

  setColorClass(stat: string) {
    this.colorClass$.next(stat)
  }
}
