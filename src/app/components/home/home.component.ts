import { Component } from '@angular/core'
import { ButtonModule } from 'primeng/button'
import { TranslateModule } from '@ngx-translate/core'
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
