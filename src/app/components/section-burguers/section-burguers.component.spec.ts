import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBurguersComponent } from './section-burguers.component';

describe('SectionBurguersComponent', () => {
  let component: SectionBurguersComponent;
  let fixture: ComponentFixture<SectionBurguersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionBurguersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionBurguersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
