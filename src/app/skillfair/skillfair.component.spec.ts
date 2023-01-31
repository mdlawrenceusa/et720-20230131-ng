import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillfairComponent } from './skillfair.component';

describe('SkillfairComponent', () => {
  let component: SkillfairComponent;
  let fixture: ComponentFixture<SkillfairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillfairComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillfairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
