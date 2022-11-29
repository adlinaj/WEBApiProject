import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubregisterComponent } from './clubregister.component';

describe('ClubregisterComponent', () => {
  let component: ClubregisterComponent;
  let fixture: ComponentFixture<ClubregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubregisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
