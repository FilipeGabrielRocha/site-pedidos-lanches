import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBurgerComponent } from './section-burger.component';

describe('SectionBurgerComponent', () => {
  let component: SectionBurgerComponent;
  let fixture: ComponentFixture<SectionBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionBurgerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
