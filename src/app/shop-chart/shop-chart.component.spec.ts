import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopChartComponent } from './shop-chart.component';

describe('ShopChartComponent', () => {
  let component: ShopChartComponent;
  let fixture: ComponentFixture<ShopChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
