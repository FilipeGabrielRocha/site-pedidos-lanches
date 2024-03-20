import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerItemsComponent } from './container-items.component';

describe('ContainerItemsComponent', () => {
  let component: ContainerItemsComponent;
  let fixture: ComponentFixture<ContainerItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContainerItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
