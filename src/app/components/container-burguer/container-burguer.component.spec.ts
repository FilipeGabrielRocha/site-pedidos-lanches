import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerBurguerComponent } from './container-burguer.component';

describe('ContainerBurguerComponent', () => {
  let component: ContainerBurguerComponent;
  let fixture: ComponentFixture<ContainerBurguerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerBurguerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContainerBurguerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
