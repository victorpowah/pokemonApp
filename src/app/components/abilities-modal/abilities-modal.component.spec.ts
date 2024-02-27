import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilitiesModalComponent } from './abilities-modal.component';

describe('AbilitiesModalComponent', () => {
  let component: AbilitiesModalComponent;
  let fixture: ComponentFixture<AbilitiesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbilitiesModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbilitiesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
