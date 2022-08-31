import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupPortalComponent } from './startup-portal.component';

describe('StartupPortalComponent', () => {
  let component: StartupPortalComponent;
  let fixture: ComponentFixture<StartupPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartupPortalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartupPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
