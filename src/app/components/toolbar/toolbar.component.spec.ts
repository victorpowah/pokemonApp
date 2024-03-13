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

  it('should create the component', () => {
    expect(component).toBeTruthy()
  })

  it('should change theme and color class when toggle theme', () => {
    component.themeSelection = false

    // Simulate getColorClass returning 'light'
    themeServiceSpy.getColorClass.and.returnValue(of('light'))

    component.changeTheme()

    expect(component.themeSelection).toBe(true)
    expect(themeServiceSpy.changeTheme).toHaveBeenCalledWith('dark')
    expect(themeServiceSpy.getColorClass).toHaveBeenCalled() // Verify that getColorClass was called
  })

  it('should set navbarFixed to false on init', () => {
    expect(component.navbarFixed).toBe(false)
  })

  it('should update navbarFixed on scroll', () => {
    // Simulate a scroll event
    window.scrollY = 10
    window.dispatchEvent(new Event('scroll'))

    expect(component.navbarFixed).toBe(true)
  })

  // Add more tests as needed
})
