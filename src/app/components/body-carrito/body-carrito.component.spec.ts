import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCarritoComponent } from './body-carrito.component';

describe('BodyCarritoComponent', () => {
  let component: BodyCarritoComponent;
  let fixture: ComponentFixture<BodyCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyCarritoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
