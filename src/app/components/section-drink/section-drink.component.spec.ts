import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDrinkComponent } from './section-drink.component';

describe('SectionDrinkComponent', () => {
  let component: SectionDrinkComponent;
  let fixture: ComponentFixture<SectionDrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionDrinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
