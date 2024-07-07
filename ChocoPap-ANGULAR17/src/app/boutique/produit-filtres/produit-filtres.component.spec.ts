import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitFiltresComponent } from './produit-filtres.component';

describe('ProduitFiltresComponent', () => {
  let component: ProduitFiltresComponent;
  let fixture: ComponentFixture<ProduitFiltresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduitFiltresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProduitFiltresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
