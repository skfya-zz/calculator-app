import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerAreaComponent } from './answer-area.component';

describe('AnswerAreaComponent', () => {
  let component: AnswerAreaComponent;
  let fixture: ComponentFixture<AnswerAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
