import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ToolbarComponent } from './toolbar.component'
import { ThemeService } from '../../services/theme-service.service'
import { DestroyService } from '../../services/destroy.service'
import { of } from 'rxjs'
import { TranslateModule } from '@ngx-translate/core'
import { RouterModule } from '@angular/router'

describe('ToolbarComponent', () => {
  let component: ToolbarComponent
  let fixture: ComponentFixture<ToolbarComponent>
  let themeServiceSpy: jasmine.SpyObj<ThemeService>

  beforeEach(async () => {
    themeServiceSpy = jasmine.createSpyObj('ThemeService', [
      'getColorClass',
      'changeTheme',
    ])
    await TestBed.configureTestingModule({
      imports: [
        ToolbarComponent,
        TranslateModule.forRoot(),
        RouterModule.forRoot([]),
      ],
      providers: [
        { provide: ThemeService, useValue: themeServiceSpy },
        DestroyService,
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(ToolbarComponent)
    component = fixture.componentInstance
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should toggle themeSelection and call changeTheme on themeService when changeTheme method is called', () => {
    const initialThemeSelection = component.themeSelection
    const expectedTheme = initialThemeSelection ? 'light' : 'dark'
    component.changeTheme()
    expect(component.themeSelection).toBe(!initialThemeSelection)
    expect(themeServiceSpy.changeTheme).toHaveBeenCalledWith(expectedTheme)
  })

  it('should update colorClass when themeService emits new colorClass value', () => {
    const colorClass = 'dark-mode'
    themeServiceSpy.getColorClass.and.returnValue(of(colorClass))
    component.ngOnInit()

    expect(component.colorClass).toBe(colorClass)
  })

  describe('onScroll', () => {
    it('should set navbarFixed to true when window scrollY is equal to or more than 1', () => {
      spyOnProperty(window, 'scrollY').and.returnValue(1)
      component.onScroll()
      expect(component.navbarFixed).toBeTrue()
    })

    it('should set navbarFixed to false when window scrollY is less than 1', () => {
      spyOnProperty(window, 'scrollY').and.returnValue(0)
      component.onScroll()
      expect(component.navbarFixed).toBeFalse()
    })
  })
})
