import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailInfoComponent } from './pokemon-detail-info.component';

describe('PokemonDetailInfoComponent', () => {
  let component: PokemonDetailInfoComponent;
  let fixture: ComponentFixture<PokemonDetailInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonDetailInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokemonDetailInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
