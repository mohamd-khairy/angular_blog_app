import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagginationComponent } from './paggination.component';

describe('PagginationComponent', () => {
  let component: PagginationComponent;
  let fixture: ComponentFixture<PagginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
