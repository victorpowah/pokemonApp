import { Component, Input } from '@angular/core'
import { ButtonModule } from 'primeng/button'
import { DialogModule } from 'primeng/dialog'

@Component({
  selector: 'app-abilities-modal',
  standalone: true,
  imports: [DialogModule, ButtonModule],
  templateUrl: './abilities-modal.component.html',
  styleUrl: './abilities-modal.component.scss',
})
export class AbilitiesModalComponent {
  @Input() visible: boolean = false
}
