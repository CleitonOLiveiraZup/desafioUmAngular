import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSerieComponent } from './menu-serie.component';

describe('MenuSerieComponent', () => {
  let component: MenuSerieComponent;
  let fixture: ComponentFixture<MenuSerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuSerieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
