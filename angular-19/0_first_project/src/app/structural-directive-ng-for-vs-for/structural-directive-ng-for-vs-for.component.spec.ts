import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectiveNgForVsForComponent } from './structural-directive-ng-for-vs-for.component';

describe('StructuralDirectiveNgForVsForComponent', () => {
  let component: StructuralDirectiveNgForVsForComponent;
  let fixture: ComponentFixture<StructuralDirectiveNgForVsForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralDirectiveNgForVsForComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralDirectiveNgForVsForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
