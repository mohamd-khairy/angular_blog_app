import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContcatusComponent } from './contcatus.component';

describe('ContcatusComponent', () => {
  let component: ContcatusComponent;
  let fixture: ComponentFixture<ContcatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContcatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContcatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
