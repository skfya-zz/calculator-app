import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-area',
  templateUrl: './button-area.component.html',
  styleUrls: ['./button-area.component.scss']
})
export class ButtonAreaComponent implements OnInit {
  @Output() changeText = new EventEmitter<string>();
  @Output() evaluate = new EventEmitter<string>();
  result: string = '';
  equals: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  operation(expression: string){
    if (expression == ''){
      this.result = '';
      this.changeText.emit(this.result);
    } else if (expression === '='){
      this.equals = true;
      this.evaluate.emit(this.result);
      try {
        let num = new Function("return " + this.result)();
        this.result = num.toString();
      } catch {
        this.result = '';
      }
    } else {
      if (this.equals){
        if (!isNaN(+(expression.charAt(expression.length-1)))){
          this.result = '';
        }
        this.equals = false;
      }
      this.result = this.result.concat(expression);
      this.changeText.emit(this.result);
    }
  }
}
