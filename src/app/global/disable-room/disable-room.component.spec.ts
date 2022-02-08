import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisableRoomComponent } from './disable-room.component';

describe('DisableRoomComponent', () => {
  let component: DisableRoomComponent;
  let fixture: ComponentFixture<DisableRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisableRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisableRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
