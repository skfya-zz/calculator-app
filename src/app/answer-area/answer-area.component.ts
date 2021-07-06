import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-answer-area',
  templateUrl: './answer-area.component.html',
  styleUrls: ['./answer-area.component.scss']
})
export class AnswerAreaComponent implements OnInit {
  @Input()
  result!: string;
  constructor() { }

  ngOnInit(): void {
  }
}
