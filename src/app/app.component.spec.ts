import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing'
import { AppComponent } from './app.component'
import { PrimeNGConfig, Translation } from 'primeng/api'
import { TranslateModule, TranslateService } from '@ngx-translate/core'
import { of } from 'rxjs'
import { NO_ERRORS_SCHEMA } from '@angular/core'
import { RouterTestingModule } from '@angular/router/testing'

describe('AppComponent', () => {
  let component: AppComponent
  let fixture: ComponentFixture<AppComponent>
  let primengConfig: PrimeNGConfig
  let translateService: TranslateService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, TranslateModule.forRoot(), AppComponent],
      providers: [PrimeNGConfig, TranslateService],
      schemas: [NO_ERRORS_SCHEMA], // To ignore unknown elements like app-toolbar and app-footer
    }).compileComponents()

    fixture = TestBed.createComponent(AppComponent)
    component = fixture.componentInstance
    primengConfig = TestBed.inject(PrimeNGConfig)
    translateService = TestBed.inject(TranslateService)
    fixture.detectChanges()
  })

  it('should create the app', () => {
    expect(component).toBeTruthy()
  })

  it(`should have as title 'ng17'`, () => {
    expect(component.title).toEqual('ng17')
  })

  it('should set ripple effect and zIndex on PrimeNG config', () => {
    expect(primengConfig.ripple).toBe(true)
    expect(primengConfig.zIndex).toEqual({
      modal: 1100,
      overlay: 1000,
      menu: 1000,
      tooltip: 1100,
    })
  })

  it('should set default language for translation service', () => {
    expect(translateService.getDefaultLang()).toBe('en')
  })

  it('should change language and set translation for PrimeNG config', fakeAsync(() => {
    spyOn(translateService, 'use').and.callThrough()
    spyOn(translateService, 'get').and.returnValue(of({ key: 'value' }))
    spyOn(primengConfig, 'setTranslation').and.callThrough()

    component.translate('es')
    tick()

    expect(translateService.use).toHaveBeenCalledWith('es')
    expect(translateService.get).toHaveBeenCalledWith('primeng')
    expect(primengConfig.setTranslation).toHaveBeenCalledWith({
      key: 'value',
    } as Translation)
  }))
})
