
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//le digo cual es el path que quiero 
const baseUrl = 'https://rickandmortyapi.com/api/';

//uno url mas lo que quiero opedirle le doy path
const characterUrl = baseUrl + 'character';

@Injectable({
  providedIn: 'root'
})
export class requestExampleService {

  constructor(private http: HttpClient) { }

  public getCharacters() {
    return this.http.get(characterUrl);
  }
}
