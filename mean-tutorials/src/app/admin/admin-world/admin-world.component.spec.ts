import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWorldComponent } from './admin-world.component';

describe('AdminWorldComponent', () => {
  let component: AdminWorldComponent;
  let fixture: ComponentFixture<AdminWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminWorldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
