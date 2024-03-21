import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDrinksComponent } from './section-drinks.component';

describe('SectionDrinksComponent', () => {
  let component: SectionDrinksComponent;
  let fixture: ComponentFixture<SectionDrinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionDrinksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
