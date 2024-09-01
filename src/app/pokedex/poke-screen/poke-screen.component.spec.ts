import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeScreenComponent } from './poke-screen.component';

describe('PokeScreenComponent', () => {
  let component: PokeScreenComponent;
  let fixture: ComponentFixture<PokeScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokeScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
