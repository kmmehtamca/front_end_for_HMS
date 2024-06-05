import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAppointementComponent } from './create-appointement.component';

describe('CreateAppointementComponent', () => {
  let component: CreateAppointementComponent;
  let fixture: ComponentFixture<CreateAppointementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateAppointementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateAppointementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
