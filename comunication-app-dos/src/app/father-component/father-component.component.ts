import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father-component',
  templateUrl: './father-component.component.html',
  styleUrls: ['./father-component.component.scss']
})
export class FatherComponentComponent implements OnInit {

  inputText: string= ''; 
  sonMessage: string = ''; 

  keyUp(letra: string) {
    this.inputText = letra; 
  }

  setMessage(message: string): void {
    this.sonMessage = message; 
  }
  constructor() { }

  ngOnInit(): void {
  }

}
