import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input()
  symbol!: string;
  @Output() result = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    if (this.symbol == 'AC'){
      this.result.emit('');
    } else if (this.symbol == '+/-'){
      this.result.emit('-');
    } else if (this.symbol == '='){
      this.result.emit('=');
    } else {
      this.result.emit(this.symbol);
    }
  }
}
