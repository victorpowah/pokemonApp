import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { PokeApiResponse } from '../models/pokeApi-response.model'

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  constructor(private http: HttpClient) {}

  getTypes(): Observable<PokeApiResponse> {
    return this.http.get<PokeApiResponse>('https://pokeapi.co/api/v2/type')
  }
}
