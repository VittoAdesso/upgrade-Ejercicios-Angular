import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-son-component',
  templateUrl: './son-component.component.html',
  styleUrls: ['./son-component.component.scss']
})
export class SonComponentComponent implements OnInit {
  
  // exportado el inputtext del padre, para que reciba información 
@Input() inputText: string=''; 
  constructor() { }

  ngOnInit(): void {
  }

}
