import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  result: string = '0';
  title = 'Calculator App';
  num!: number;
  equals: boolean = false;

  replaceOp(answer: string){
    if (answer == ''){
      this.result = '0';
    } else {
      this.result = answer;
    }
  }
  evaluateExpression(expression: string){
    try {
      this.num = new Function("return " + expression)();
      this.result = this.num.toString();
    } catch {
      this.result = 'Syntax error';
    }
  }
}
