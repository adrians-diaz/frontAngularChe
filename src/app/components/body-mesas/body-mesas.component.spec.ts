import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyMesasComponent } from './body-mesas.component';

describe('BodyMesasComponent', () => {
  let component: BodyMesasComponent;
  let fixture: ComponentFixture<BodyMesasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyMesasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyMesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
