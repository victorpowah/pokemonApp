import {
  Component,
  EventEmitter,
  Input,
  Output,
  inject,
  input,
} from '@angular/core'
import { ButtonModule } from 'primeng/button'
import { DialogModule } from 'primeng/dialog'
import { Ability } from '../../models/pokeApi-pokemon-respose.model'
import { PokeApiService } from '../../services/poke-api.service'
import { PokeApiAbilityResponse } from '../../models/pokeApi-ability-response.model'
import { CommonModule } from '@angular/common'
import { TranslateModule } from '@ngx-translate/core'

@Component({
  selector: 'app-abilities-modal',
  standalone: true,
  imports: [CommonModule, DialogModule, ButtonModule, TranslateModule],
  templateUrl: './abilities-modal.component.html',
  styleUrl: './abilities-modal.component.scss',
})
export class AbilitiesModalComponent {
  @Input() visible!: boolean
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>()

  private _ability!: Ability
  @Input() set ability(ability: Ability) {
    this._ability = ability
    this.getAbility()
  }

  get ability(): Ability {
    return this._ability
  }

  @Input() color: string = ''

  private readonly pokeApiService = inject(PokeApiService)

  public shortEffectString: string = ''
  public effectString: string = ''

  public abilityResponse!: PokeApiAbilityResponse

  public changeVisibility($event: boolean): void {
    this.visibleChange.emit($event)
  }

  private getAbility(): void {
    this.pokeApiService
      .getAbility(this.ability.ability.url)
      .subscribe((abilityRespone: PokeApiAbilityResponse) => {
        const effect = abilityRespone.effect_entries.find(
          (entry) => entry.language.name === 'en'
        )
        this.abilityResponse = abilityRespone
        if (effect) {
          this.effectString = effect?.effect
          this.shortEffectString = effect?.short_effect
        }
      })
  }

  public closeModal() {
    this.visible = false
    this.changeVisibility(this.visible)
  }
}
