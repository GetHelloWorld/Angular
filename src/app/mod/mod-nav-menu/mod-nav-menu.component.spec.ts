import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModNavMenuComponent } from './mod-nav-menu.component';

describe('ModNavMenuComponent', () => {
  let component: ModNavMenuComponent;
  let fixture: ComponentFixture<ModNavMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModNavMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModNavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
