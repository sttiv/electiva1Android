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
  readyForNewInput = true;

  numberGroups = [
    [7,8,9, 'x'],
    [4,5,6, '-'],
    [1,2,3, '+'],
    [0,'.','%','=']
  ];

  onButtonPress(num){
    console.log(num);

    if (isNumber(num))
      console.log('Es un numero');
      if (this.readyForNewInput)
        this.value =  '' + num;
      else
      this.value +=  '' + num;
  }

}
