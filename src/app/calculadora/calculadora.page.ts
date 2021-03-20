import { Component, OnInit } from '@angular/core';
import { isNumber } from 'util';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})
export class CalculadoraPage implements OnInit {
  

  constructor() { }

  ngOnInit() {
  }
  value = '0';
  oldValue = '0';

  lastOperator = '*';
  readyForNewInput = true;
 

  numberGroups = [
    [7,8,9, 'x'],
    [4,5,6, '-'],
    [1,2,3, '+'],
    [0,'c','%','=']
  ];

  onButtonPress(symbol){
    console.log(symbol);

    if (isNumber(symbol)){
      console.log('Es un numero');
      if (this.readyForNewInput)
        this.value =  '' + symbol;
      else
        this.value +=  '' + symbol;
      this.readyForNewInput = false;
    }
     else if (symbol === 'c'){
       this.value = '0';
       this.readyForNewInput = true;
    }
    else if (symbol === '='){
      if (this.lastOperator === 'x')
        this.value = '' + (parseInt (this.oldValue) * parseInt (this.value));
      else if (this.lastOperator === '-')
        this.value = '' + (parseInt (this.oldValue) - parseInt (this.value));
      else if (this.lastOperator === '+')
        this.value = '' + (parseInt (this.oldValue) + parseInt (this.value));
      else if (this.lastOperator === '/')
        this.value = '' + (parseInt (this.oldValue) / parseInt (this.value));
    }
    else{//operador
      this.readyForNewInput = true;
      this.oldValue = this.value;
      this.lastOperator = symbol;
    }
  }

}
