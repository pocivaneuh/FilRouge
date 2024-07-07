import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavcarouselComponent } from './navcarousel.component';

describe('NavcarouselComponent', () => {
  let component: NavcarouselComponent;
  let fixture: ComponentFixture<NavcarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavcarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
