import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryPerosonComponent } from './delivery-peroson.component';

describe('DeliveryPerosonComponent', () => {
  let component: DeliveryPerosonComponent;
  let fixture: ComponentFixture<DeliveryPerosonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryPerosonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryPerosonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
