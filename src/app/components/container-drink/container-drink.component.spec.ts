import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerDrinkComponent } from './container-drink.component';

describe('ContainerDrinkComponent', () => {
  let component: ContainerDrinkComponent;
  let fixture: ComponentFixture<ContainerDrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerDrinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContainerDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
