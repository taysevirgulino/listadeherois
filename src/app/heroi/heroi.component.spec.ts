import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroiComponent } from './heroi.component';

describe('HeroiComponent', () => {
  let component: HeroiComponent;
  let fixture: ComponentFixture<HeroiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
