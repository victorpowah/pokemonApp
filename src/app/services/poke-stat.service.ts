import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class PokeStatService {
  private stats$: BehaviorSubject<number> = new BehaviorSubject(0)

  getStats(): Observable<number> {
    return this.stats$.asObservable()
  }

  setStats(stat: number) {
    this.stats$.next(stat)
  }
}
