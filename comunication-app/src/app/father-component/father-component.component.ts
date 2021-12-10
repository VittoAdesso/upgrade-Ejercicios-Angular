import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father-component',
  templateUrl: './father-component.component.html',
  styleUrls: ['./father-component.component.scss']
})
export class FatherComponentComponent implements OnInit {

  //variable, que luego llamaré en html hijo para que me imprima lo que escribo , le digo q será string (puede ser # o letras)
inputText: string = ''; 

// función , la cual lleva parámetro y un escuhador
keyUp(letra: string) {
  this.inputText = letra; 
}
  constructor() { }

  ngOnInit(): void {
  }

}
