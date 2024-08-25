import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NOtFoundComponent } from './not-found.component';

describe('NOtFoundComponent', () => {
  let component: NOtFoundComponent;
  let fixture: ComponentFixture<NOtFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NOtFoundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NOtFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
