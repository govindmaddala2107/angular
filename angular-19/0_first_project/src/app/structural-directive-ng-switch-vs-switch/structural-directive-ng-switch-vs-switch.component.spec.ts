import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectiveNgSwitchVsSwitchComponent } from './structural-directive-ng-switch-vs-switch.component';

describe('StructuralDirectiveNgSwitchVsSwitchComponent', () => {
  let component: StructuralDirectiveNgSwitchVsSwitchComponent;
  let fixture: ComponentFixture<StructuralDirectiveNgSwitchVsSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralDirectiveNgSwitchVsSwitchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralDirectiveNgSwitchVsSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
