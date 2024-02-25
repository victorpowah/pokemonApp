import { Component } from '@angular/core'
import { ButtonModule } from 'primeng/button'
import { TranslateModule } from '@ngx-translate/core'
import { RouterLink } from '@angular/router'
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, TranslateModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
